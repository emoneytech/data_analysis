# == Schema Information
#
# Table name: table_risk_movements
#
#  beneficiary         :string(191)
#  movement_amount     :decimal(10, 2)   default(0.0)
#  movement_created_at :datetime
#  product_base_risk   :decimal(10, 2)   default(1.01)
#  product_name        :string(250)
#  service_status      :integer          default(0)
#  service_updated_at  :datetime
#  table_code          :integer          default(0)
#  table_name          :string(45)
#  movement_id         :bigint           default(0), primary key
#  product_id          :integer          not null
#  product_net_id      :integer          not null
#  service_id          :bigint
#  user_id             :integer
#
# Indexes
#
#  full_index                                   (user_id,beneficiary,product_net_id,movement_created_at)
#  movement_created_index                       (movement_created_at)
#  movement_id_and_mov_created_and_beneficiary  (movement_id,movement_created_at,beneficiary)
#  movement_id_index                            (movement_id)
#  product_name_index                           (product_name)
#  product_net_and_beneficiary                  (product_net_id,beneficiary)
#  product_net_and_user_index                   (product_net_id,user_id)
#  user_and_movement_created                    (user_id,movement_created_at)
#  user_index                                   (user_id)
#

class RiskMovement < ApplicationCoreRecord

  self.table_name = "table_risk_movements"
  self.primary_key = 'movement_id'

  scope :for_month, ->(tuple) {where('EXTRACT(YEAR FROM movement_created_at) = ? AND EXTRACT(MONTH FROM movement_created_at) = ? ', tuple[0], tuple[1])}
  scope :for_day, ->(day) {where('EXTRACT(YEAR FROM movement_created_at) = ? AND EXTRACT(MONTH FROM movement_created_at) = ? AND EXTRACT(DAY FROM movement_created_at) = ?', day.year, day.month, day.day)}
  # scope :by_year, ->(year=Date.today.year) {where("movement_created_at >= ? and movement_created_at <= ?", (DateTime.new(year) - 11.months).beginning_of_month, DateTime.new(year).end_of_month)}
  scope :by_year, ->(year=Date.today.year) {where("movement_created_at >= ? and movement_created_at <= ?", DateTime.new(year).beginning_of_month, (DateTime.new(year) + 12.months).end_of_month)}
  scope :last_year, -> {where("movement_created_at >= ? and movement_created_at <= ?", Time.now - 12.months, Time.now)}

end

=begin

CREATE OR REPLACE VIEW `risk_movements` AS
SELECT
  `movimenticonti`.`idMovimentiConti` AS movement_id,
  `movimenticonti`.`idtransazione` AS service_id,
  `movimenticonti`.`Point` AS user_id,
  `movimenticonti`.`dataMovimento` AS movement_created_at,
  `servizi`.`status` AS service_status,
  `servizi`.`lastupdate` AS service_updated_at,
  `movimenticonti`.`Importo` AS movement_amount,
  `prodotti`.`idprodotto` AS product_net_id,
  `prodotti`.`prodottolistino` AS product_id,
  `prodotti`.`nome` AS product_name,
  `prodotti`.`codtabella` AS table_code,
  `prodotti`.`base_risk` AS product_base_risk,
  Case
    When (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0) Then `codicitabelle`.`nometabella`
    When (`prodotti`.`codtabella` IS NULL OR `prodotti`.`codtabella` = 0) Then "No table"
  End
  AS table_name,
  Case
    When (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0) Then (
      Case
        When `codicitabelle`.`nometabella` =  "ricarichecarta" Then `ricarichecarta`.`destinatario`
        When `codicitabelle`.`nometabella` =  "Ricariche" Then `ricariche`.`numerotelefono`
        When `codicitabelle`.`nometabella` =  "Utenze" Then `utenze`.`intestato`
        When `codicitabelle`.`nometabella` =  "utenzeaflusso" Then `utenzeaflusso`.`eseguito`
        When `codicitabelle`.`nometabella` =  "prelievo" Then `prelievo`.`destinatario`
        When `codicitabelle`.`nometabella` =  "bonifici" Then `bonifici`.`destinatario`
        When `codicitabelle`.`nometabella` =  "assegnovirtuale" Then CONCAT(`assegnovirtuale`.`NomeDest`, ' ', `assegnovirtuale`.`CognomeDest`)
        When `codicitabelle`.`nometabella` =  "incassoAssegno" Then CONCAT(`incassoAssegno`.`Nome`, ' ', `incassoAssegno`.`Cognome`)
        When `codicitabelle`.`nometabella` =  "postepay" Then `postepay`.`CodFiscTitolare`
      End
    )
    ELSE
    "Beneficiario non individuabile"
  End
  AS beneficiary
FROM `movimenticonti`
RIGHT OUTER JOIN `servizi` ON (`servizi`.`idservizio` = `movimenticonti`.`idtransazione`
                      AND (`servizi`.`importo` = `movimenticonti`.`Importo` OR (`servizi`.`importo` + `servizi`.`commissioni`) = `movimenticonti`.`Importo`)
                      AND (`servizi`.`status` IN ('5','6','7','8'))
                      AND (`servizi`.`nomeprodotto` <> 'Token')
                      AND (`servizi`.`nomeprodotto` <> 'Sms')
                      )
RIGHT OUTER JOIN `prodotti` ON `prodotti`.`idProdotto` = `servizi`.`prodotto`
LEFT JOIN `codicitabelle` ON `codicitabelle`.`codtab` = `prodotti`.`codtabella` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0)
LEFT JOIN `ricarichecarta` ON `ricarichecarta`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "ricarichecarta")
LEFT JOIN `ricariche` ON `ricariche`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "Ricariche")
LEFT JOIN `utenze` ON `utenze`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "utenze")
LEFT JOIN `utenzeaflusso` ON `utenzeaflusso`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "utenzeaflusso")
LEFT JOIN `prelievo` ON `prelievo`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "prelievo")
LEFT JOIN `bonifici` ON `bonifici`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "bonifici")
LEFT JOIN `assegnovirtuale` ON `assegnovirtuale`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "assegnovirtuale")
LEFT JOIN `incassoAssegno` ON `incassoAssegno`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "incassoAssegno")
LEFT JOIN `postepay` ON `postepay`.`idservizio` = `movimenticonti`.`idtransazione` AND (`prodotti`.`codtabella` IS NOT NULL AND `prodotti`.`codtabella` != 0 AND `codicitabelle`.`nometabella` = "postepay")
WHERE (`movimenticonti`.`Point` != 70 AND `movimenticonti`.`Point` != 75);



CREATE 
VIEW `risk_movements` AS
    SELECT 
        `movimenticonti`.`idMovimentiConti` AS `movement_id`,
        `movimenticonti`.`idtransazione` AS `service_id`,
        `movimenticonti`.`Point` AS `user_id`,
        `movimenticonti`.`dataMovimento` AS `movement_created_at`,
        `servizi`.`status` AS `service_status`,
        `servizi`.`lastupdate` AS `service_updated_at`,
        `movimenticonti`.`Importo` AS `movement_amount`,
        `prodotti`.`idprodotto` AS `product_net_id`,
        `prodotti`.`prodottolistino` AS `product_id`,
        `prodotti`.`nome` AS `product_name`,
        `prodotti`.`codtabella` AS `table_code`,
        `prodotti`.`base_risk` AS `product_base_risk`,
        (CASE
            WHEN
                ((`prodotti`.`codtabella` IS NOT NULL)
                    AND (`prodotti`.`codtabella` <> 0))
            THEN
                `codicitabelle`.`nometabella`
            WHEN
                (ISNULL(`prodotti`.`codtabella`)
                    OR (`prodotti`.`codtabella` = 0))
            THEN
                'No table'
        END) AS `table_name`,
        (CASE
            WHEN
                ((`prodotti`.`codtabella` IS NOT NULL)
                    AND (`prodotti`.`codtabella` <> 0))
            THEN
                (CASE
                    WHEN (`codicitabelle`.`nometabella` = 'ricarichecarta') THEN `ricarichecarta`.`destinatario`
                    WHEN (`codicitabelle`.`nometabella` = 'Ricariche') THEN `ricariche`.`numerotelefono`
                    WHEN (`codicitabelle`.`nometabella` = 'Utenze') THEN `utenze`.`intestato`
                    WHEN (`codicitabelle`.`nometabella` = 'utenzeaflusso') THEN `utenzeaflusso`.`eseguito`
                    WHEN (`codicitabelle`.`nometabella` = 'prelievo') THEN `prelievo`.`destinatario`
                    WHEN (`codicitabelle`.`nometabella` = 'bonifici') THEN `bonifici`.`destinatario`
                    WHEN
                        (`codicitabelle`.`nometabella` = 'assegnovirtuale')
                    THEN
                        CONCAT(`assegnovirtuale`.`NomeDest`,
                                ' ',
                                `assegnovirtuale`.`CognomeDest`)
                    WHEN
                        (`codicitabelle`.`nometabella` = 'incassoAssegno')
                    THEN
                        CONCAT(`incassoAssegno`.`Nome`,
                                ' ',
                                `incassoAssegno`.`Cognome`)
                    WHEN (`codicitabelle`.`nometabella` = 'postepay') THEN `postepay`.`CodFiscTitolare`
                END)
            ELSE 'Beneficiario non individuabile'
        END) AS `beneficiary`
    FROM
        (((((((((((`prodotti`
        LEFT JOIN (`servizi`
        LEFT JOIN `movimenticonti` ON (((`servizi`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND ((`servizi`.`importo` = `movimenticonti`.`Importo`)
            OR ((`servizi`.`importo` + `servizi`.`commissioni`) = `movimenticonti`.`Importo`)
            OR (`servizi`.`commissioni` = `movimenticonti`.`Importo`))
            AND (`servizi`.`status` IN ('5' , '6', '7', '8'))
            AND (`servizi`.`nomeprodotto` <> 'Token')
            AND (`servizi`.`nomeprodotto` <> 'Sms')))) ON ((`prodotti`.`idprodotto` = `servizi`.`prodotto`)))
        LEFT JOIN `codicitabelle` ON (((`codicitabelle`.`codtab` = `prodotti`.`codtabella`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0))))
        LEFT JOIN `ricarichecarta` ON (((`ricarichecarta`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'ricarichecarta'))))
        LEFT JOIN `ricariche` ON (((`ricariche`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'Ricariche'))))
        LEFT JOIN `utenze` ON (((`utenze`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'utenze'))))
        LEFT JOIN `utenzeaflusso` ON (((`utenzeaflusso`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'utenzeaflusso'))))
        LEFT JOIN `prelievo` ON (((`prelievo`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'prelievo'))))
        LEFT JOIN `bonifici` ON (((`bonifici`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'bonifici'))))
        LEFT JOIN `assegnovirtuale` ON (((`assegnovirtuale`.`Idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'assegnovirtuale'))))
        LEFT JOIN `incassoAssegno` ON (((`incassoAssegno`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'incassoAssegno'))))
        LEFT JOIN `postepay` ON (((`postepay`.`idservizio` = `movimenticonti`.`idtransazione`)
            AND (`prodotti`.`codtabella` IS NOT NULL)
            AND (`prodotti`.`codtabella` <> 0)
            AND (`codicitabelle`.`nometabella` = 'postepay'))))
    WHERE
        ((`movimenticonti`.`Point` <> 70)
            AND (`movimenticonti`.`Point` <> 75))
=end

