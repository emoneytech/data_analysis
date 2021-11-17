# == Schema Information
#
# Table name: conti
#
#  AccessoConto                                                                  :integer          default(0)
#  Attivazione(Data di attivazione conto)                                        :datetime
#  BinType                                                                       :string(8)
#  DeskUser(oepratore che interviene sulla tabella)                              :string(10)       default("nd")
#  Hour(ora dell'ultimo addebito sul conto)                                      :time
#  IPan(Identificativo conto carta)                                              :string(16)       default("0000000000000000"), not null
#  IdUtente(Identificativo utente collegato alla tabella ANAGRAFICA)             :bigint           not null
#  Inserimento(Data di inserimento conto)                                        :datetime         not null
#  Nota1                                                                         :string(255)      default("no note")
#  Nota2                                                                         :string(255)      default("no note")
#  Pan(Identificativo numero di conto)                                           :string(46)       not null, primary key
#  Preferito                                                                     :integer          default(0)
#  ProductState(Stato dei prodotti (vecchio Service code))                       :integer          default(1), not null
#  ProductType(Tipo prodotto)                                                    :integer          not null
#  Saldo                                                                         :decimal(12, 2)   default(0.0), not null
#  Scadenza                                                                      :date
#  StatoKyc                                                                      :integer          default(0)
#  Valuta(Tipo di moneta (collegato alla tab moneta))                            :string(6)        default("EUR"), not null
#  Visualizza                                                                    :integer          default(0)
#  Webpin(Webpin generato dal cliente)                                           :string(6)        default("999999"), not null
#  alias                                                                         :string(50)
#  datanumerica(Data dell'ultimo addebito in conto in formato numerico unsigned) :integer          unsigned
#  datascadenzaservizi                                                           :date
#  family(Tipo di conto (Tesoreria (TES)o Tecnico(TEC)))                         :integer          default(4), not null
#  fido                                                                          :boolean          default(FALSE)
#  idConti(Contatore)                                                            :integer          not null
#  idpoint                                                                       :bigint           default(0), not null
#  ipDskUser                                                                     :string(45)       default("nd")
#  lastMovimento(Data ed ora dell'ultimo addebito sul conto)                     :datetime
#  lastUpdateuser(Data dell'ultimo intervento di un operatore)                   :datetime
#  limite                                                                        :decimal(10, 2)   default(0.0)
#  nazione                                                                       :string(3)        default("ND")
#  scadenza_wp2                                                                  :date
#  scadwebpin                                                                    :datetime         not null
#  subtypeprod                                                                   :integer
#  webpin2                                                                       :string(6)        default("000000")
#
# Indexes
#
#  IPan                          (IPan)
#  IdPoint                       (idpoint)
#  IdUtente                      (IdUtente)
#  fk_Conti_ProductState_idx     (ProductState)
#  fk_Conti_valuta_idx           (Valuta)
#  fk_conti_caratt_prodotti_idx  (ProductType)
#  fk_conti_subtype_idx          (subtypeprod)
#  fk_tipoconto_idx              (family)
#  idConti_UNIQUE                (idConti) UNIQUE
#

class Conto < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "conti"
  self.primary_key = 'Pan'

  alias_attribute :amount, "saldo"
  alias_attribute :product_type, "ProductType"
  
  belongs_to :bank_user, primary_key: "IdUtente", foreign_key: "IdUtente", class_name: "Anagrafica"

  belongs_to :tipo_conto, primary_key: "tipoprodotto", foreign_key: "ProductType", class_name: "Bintype"
  belongs_to :stato, primary_key: "idstato", foreign_key: "ProductState", class_name: "Stato"

  delegate :product_name, to: :tipo_conto
  has_many :movimenticonti, primary_key: "Pan", foreign_key: "numeroConto", class_name: 'Movimentoconto'
  scope :only_customers, -> { where.not(IdUtente: %w[70 75]) }
  scope :filter_by_customer_id, -> (value) { where(IdUtente: value) }
  scope :filter_by_status_id, -> (value) { where(ProductState: value) }
  scope :filter_by_product_type_id, -> (value) { where(ProductType: value) }
  scope :filter_by_min_amount, -> (value) { where("conti.Saldo >= ?", value) }
  scope :filter_by_max_amount, -> (value) { where("conti.Saldo <= ?", value) }
  scope :filter_by_last_movement_daterange, -> (daterange) { where(
    "DATE_FORMAT(conti.lastMovimento , '%Y-%m-%d') between ? and ?", daterange.split(' - ')[0].to_date.strftime('%Y-%m-%d'), daterange.split(' - ')[1].to_date.strftime('%Y-%m-%d')
  )}

  scope :only_fees_ary, -> {
    where(IdUtente: 70).pluck(:Pan)
  }
  scope :alive, -> { where(ProductState: 1) }

  def self.icon
    'wallet'
  end

  def self.last_id
    order(idconti: :desc).select(:idconti).first.idconti
  end

  def self.last_update
    order(lastMovimento: :desc).select(:lastMovimento).first.lastMovimento
  end

  def first_movement_date
    movimenticonti.order(dataMovimento: :asc).first.try(:dataMovimento)
  end

  def average_stock(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.any? ? movimenticonti.select('AVG(SaldoProg) AS average_stock').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_stock : 'nu'
  end

  def average_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('AVG(Avere) AS average_movement_amount_in').where('Avere > 0').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_movement_amount_in || 'nu'
  end

  def average_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('AVG(Dare) AS average_movement_amount_out').where('Dare > 0').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_movement_amount_out || 'nu'
  end

  def min_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Avere as min_movement_amount_in').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").where('Avere > 0').order(Avere: :asc).first.try(:min_movement_amount_in) || 'nu'
  end

  def min_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Dare as min_movement_amount_out').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").where('Dare > 0').order(Dare: :asc).first.try(:min_movement_amount_out) || 'nu'
  end

  def max_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Avere as max_movement_amount_in').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").order(Avere: :desc).first.try(:max_movement_amount_in) || 'nu'
  end

  def max_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Dare as max_movement_amount_out').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").order(Dare: :desc).first.try(:max_movement_amount_out) || 'nu'
  end

  def nr_of_movement
    movimenticonti.count
  end
end
