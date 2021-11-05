# == Schema Information
#
# Table name: anagrafiche
#
#  AbilitaTokenApp           :boolean          default(TRUE)
#  AbilitaWebPin             :integer          default(0)
#  Agente                    :bigint
#  AltreAtt                  :string(250)
#  AttSec                    :string(250)
#  AttSvolte                 :string(250)
#  Attivo                    :integer
#  AutEmail                  :string(2)
#  Autorizzazioni            :string(20)
#  Avanzamento               :integer          default(0)
#  AziendaRuolo              :string(150)
#  CAB                       :string(10)
#  CAP                       :string(18)
#  CapAzienda                :string(18)
#  CapPoint                  :string(18)
#  Cellulare                 :string(20)
#  Citta                     :string(100)
#  Cittadinanza              :string(45)
#  CivSedeLegale             :string(20)
#  Civico                    :string(55)
#  CodSpinoff                :string(5)
#  CodSpinoff2               :string(5)
#  Codalt                    :string(6)
#  Codicefiscale             :string(26)
#  CodicefiscaleAzienda      :string(86)
#  Cognome                   :string(100)
#  ComuneAzienda             :string(100)
#  ComunePoint               :string(100)
#  ContoPoint                :string(50)
#  ContoPoint2               :string(50)
#  ContoTecnico              :string(30)
#  Contratto                 :integer          default(0)
#  Created                   :datetime
#  DataAgreement             :date
#  DataArchiviazione         :date
#  DataAttivazione           :datetime
#  DataCostituzioneSocieta   :date
#  DataLastUpdate            :datetime
#  DataLastUpdateKYC         :datetime
#  DataNascita               :date
#  DataNumOkKyc              :string(8)
#  DataOkKyc                 :datetime
#  DataPassword              :datetime
#  DataRilascio              :datetime
#  DataScadenza              :datetime
#  DataUltimoSollecito       :datetime
#  DataVerificaEmail         :date
#  DataVerificaSms           :date
#  DateSollecito             :string(250)
#  Datiok                    :string(2)
#  DisplayOnly               :integer          default(0)
#  Email                     :string(50)
#  EmailLegalerappresentante :string(100)
#  EmailSollecito            :string(150)
#  EnteRilascio              :string(150)
#  ExPep                     :integer          default(0)
#  Fatca                     :integer          default(0)
#  Fax                       :string(20)
#  FaxAzienda                :string(20)
#  FunzionarioResponsabile   :string(100)
#  IdConcession              :bigint           default(0)
#  IdLastUpdateKYC           :bigint           default(0)
#  IdOpArchiviazione         :bigint           default(0)
#  IdTipo                    :integer          default(0)
#  IdTipoDocumento           :integer
#  IdToken                   :integer          default(0)
#  IdUtente                  :bigint           not null
#  Indirizzo                 :string(100)
#  IndirizzoPoint            :string(100)
#  Insegna                   :string(100)
#  InvioEmail                :integer
#  LastRevision              :date
#  LastUpdate                :string(10)
#  Lastcheckcompliance       :date
#  LimiteMastercard          :integer          default(1)
#  Lingua                    :string(45)
#  LinkAltriDocumenti        :integer          default(0)
#  LinkBill                  :integer          default(0)
#  LinkCF                    :integer          default(0)
#  LinkContratto             :integer          default(0)
#  LinkDistributorAgreement  :integer          default(0)
#  LinkDoc                   :integer          default(0)
#  LinkFacta                 :integer          default(0)
#  LinkPointAccount          :integer          default(0)
#  LinkSelfie                :integer          default(0)
#  LinkVisura                :integer          default(0)
#  Livello                   :integer          default(0)
#  LuogoNascita              :string(100)
#  Messaggio                 :text(65535)
#  ModPagamento              :string(50)
#  NationDocument            :string(45)
#  NazioneAzienda            :string(3)
#  NazioneNascita            :string(3)
#  NazionePoint              :string(3)
#  NazioneResidenza          :string(3)
#  NextRevision              :date
#  Nextcheckcompliance       :date
#  Nome                      :string(100)
#  Note                      :text(4294967295)
#  NumeroDocumento           :string(20)
#  NumeroDocumentoEuropeo    :string(255)
#  NumeroEmailSollecito      :integer          default(0)
#  Occasionale               :integer          default(0)
#  OkAgente                  :string(2)
#  OkKyc                     :string(2)
#  OkMagazzino               :integer          default(0)
#  OkUIC                     :string(2)        default("0")
#  OkUffamm                  :string(2)
#  OkUffcontratti            :string(2)
#  OpHelpDeskKyc             :string(7)
#  OpHelpdesk                :string(5)
#  OutsideMalta              :integer          default(0)
#  PacchettoPoint            :string(20)
#  Padre                     :bigint           default(0)
#  PartitaIva                :string(86)
#  Password                  :string(100)
#  Pep                       :integer          default(0)
#  PrimaConnessione          :integer
#  Provider                  :string(6)        default("COG")
#  ProviderDefault           :string(6)        default("COG")
#  Provincia                 :string(2)
#  ProvinciaAzienda          :string(2)
#  ProvinciaNascita          :string(2)
#  ProvinciaPoint            :string(5)
#  RagioneSociale            :string(100)
#  Rea                       :string(50)
#  ScadenzaAgreement         :date
#  ScadenzaDocumentoEuropeo  :date
#  ScadenzaTokenApp          :date
#  SedeLegale                :string(100)
#  SerialCog                 :string(6)
#  Sesso                     :string(1)
#  SitoAzienda               :string(100)
#  Skipdatecompliance        :date
#  StatoAgreement            :integer
#  SubStato                  :integer          default(0)
#  Subconcession             :string(7)
#  Supervisor                :integer          default(0)
#  Telefono                  :string(20)
#  TelefonoAzienda           :string(20)
#  TerminiCondizioni         :string(2)
#  TipoAzienda               :string(150)
#  TipoDocumentoEuropeo      :string(255)
#  TipoKYC                   :integer          default(0)
#  TokenApp                  :string(45)
#  Toponimo                  :string(8)
#  Toponimo1                 :string(15)
#  Toponimo2                 :string(15)
#  Username                  :string(100)
#  UtilizziWebPin            :integer          default(0)
#  Vendor                    :integer          default(0)
#  VersioneAgreement         :string(45)
#  WebPin                    :string(6)
#  base_risk                 :decimal(10, 2)   default(4.0)
#  base_risk_calc            :decimal(10, 2)   default(0.0)
#  bonifico                  :integer          default(0)
#  classificazione           :string(45)       default("ZZ")
#  dataNominaPoint           :date
#  dataSendPergamena         :date
#  dateForcedIdQuestionaire  :datetime
#  forcedIdQuestionaire      :integer          default(0)
#  linguaPergamena           :string(45)
#  nazionePorting            :string(45)
#  organizzazioneazienda     :string(255)
#  tipobusiness              :string(255)
#
# Indexes
#
#  IdUtente_UNIQUE         (IdUtente) UNIQUE
#  Tipo                    (IdTipo)
#  agente                  (Agente)
#  idx_anagrafiche_Citta   (Citta)
#  idx_anagrafiche_Vendor  (Vendor)
#  kyc                     (TipoKYC)
#  nextrevision            (NextRevision)
#  provincia               (Provincia)
#  stato                   (Attivo)
#  substato                (SubStato)
#  vendor                  (Vendor)
#

class Anagrafica < ApplicationCoreRecord
  include Filterable
  self.primary_key = 'idutente'
  self.table_name = 'anagrafiche'

  has_many :conti,
           -> { order(amount: :desc) },
           foreign_key: 'IdUtente',
           class_name: 'Conto'

  has_many :servizi, foreign_key: 'point', class_name: 'Servizio'

  # has_many :positve_servizi, -> { where('servizi.importo > 0') }, foreign_key: "point", class_name: "Servizio"
  has_many :active_servizi,
           -> {
             where('servizi.importo > 0').where(
               status: [Servizio.status_active],
             )
           },
           foreign_key: 'point',
           class_name: 'Servizio'

  has_many :movimenticonti, through: :conti
  # has_many :movimenticonti, through: :servizi, foreign_key: 'Point'

  has_many :prodotti,
           -> { distinct },
           through: :active_servizi,
           source: :product #, primary_key: "idprodotto", class_name: "Prodotto"
  has_many :tutti_prodotti, through: :active_servizi, source: :product #, primary_key: "idprodotto", class_name: "Prodotto"

  belongs_to :tipo, foreign_key: 'IdTipo', class_name: 'Tipo'
  belongs_to :broker, foreign_key: 'Vendor', class_name: 'Vendor'

  alias_attribute :id, 'IdUtente'
  alias_attribute :idutente, 'IdUtente'
  alias_attribute :nome, 'Nome'
  alias_attribute :name, 'Nome'
  alias_attribute :cognome, 'Cognome'
  alias_attribute :vendor, 'Vendor'
  alias_attribute :active, 'Attivo'
  alias_attribute :type_id, 'IdTipo'
  alias_attribute :company, 'RagioneSociale'
  alias_attribute :data_attivazione, 'DataAttivazione'
  alias_attribute :data_creazione, 'Created'
  alias_attribute :codice_fiscale, 'Codicefiscale'
  alias_attribute :created, 'Created'

  # scope :for_type, -> (id) { where(:type_id => id) }

  scope :active, -> { where.not('anagrafiche.IdUtente' => %w[70 75]) }
  scope :alive,
        -> {
          joins(:conti).distinct
            .where('anagrafiche.tipo' => Tipo.alive.pluck(:id))
            .where
            .not('anagrafiche.IdUtente' => %w[70 75])
            .where
            .not('anagrafiche.Attivo' => 6)
            .where
            .not('anagrafiche.created' => nil)
        }

  scope :user_or_business,
        -> {
          joins(:conti).distinct
            .where(
              'anagrafiche.IdTipo' => %w[2 3],
              'anagrafiche.TipoKYC' => %w[3 4],
            )
            .where
            .not('anagrafiche.IdUtente' => %w[70 75])
            .where
            .not('anagrafiche.Attivo' => 6)
            .where
            .not('anagrafiche.Created' => nil)
        }
  scope :business,
        -> {
          joins(:conti).distinct
            .where(
              'anagrafiche.IdTipo' => 3
            )
            .where
            .not('anagrafiche.IdUtente' => %w[70 75])
            .where
            .not('anagrafiche.Attivo' => 6)
            .where
            .not('anagrafiche.Created' => nil)
        }

  has_one :base_riskiness, as: :base_evaluable
  has_many :eval_riskinesses, as: :eval_evaluable

  has_many :notes, foreign_key: :customer_id

  # has_many :user_movements, foreign_key: :user_id, dependent: :destroy
  has_many :risk_movements,
           -> { order(movement_created_at: :asc) },
           foreign_key: :user_id

  has_many :eval_movements,
           primary_key: 'IdUtente',
           foreign_key: :customer_id
  # Eval Customer on Pg
  has_many :eval_customers,
           primary_key: 'IdUtente',
           foreign_key: :anagrafica_id

  has_many :customer_settings,
    primary_key: 'IdUtente',
    foreign_key: :customer_id

  has_many :rischi,
           primary_key: 'IdUtente',
           foreign_key: :IdUtente,
           class_name: 'Rischio'
  has_one :rischio_corrente,
          -> { order(Data: :desc) },
          primary_key: 'IdUtente',
          foreign_key: :IdUtente,
          class_name: 'Rischio'
  has_one :time_lapse_factor, 
          primary_key: 'IdUtente',
          foreign_key: :anagrafica_id,
          class_name: 'TimeLapseFactor'
  
#  has_many :positions, -> { order(created_at: :desc) }, as: :positionable, primary_key: 'IdUtente', foreign_key: :positionable_id
#  has_one :current_position, -> { order(created_at: :desc) }, as: :positionable, primary_key: 'IdUtente', foreign_key: :positionable_id, class_name: 'Position'

  has_many :places, -> { order(created_at: :desc) }, as: :positionable, primary_key: 'IdUtente', foreign_key: :positionable_id
  has_one :current_place, -> { order(created_at: :desc) }, as: :positionable, primary_key: 'IdUtente', foreign_key: :positionable_id, class_name: 'Place'

  # scope :for_evaluation, -> { includes(:rischio_corrente).references(:rischio_corrente).order('rischio.Rischio desc')}

  scope :filter_by_full_name, -> (name) { where(
    '(anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
    OR (anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
    OR anagrafiche.RagioneSociale LIKE ?',
    "%#{ name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}" }%",
    "%#{ name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}" }%",
    "%#{ name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}" }%",
    "%#{ name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}" }%",
    "%#{name}%",
  )}

  scope :filter_by_customer_id        , -> (value) { where("anagrafiche.IdUtente = ?", value)}
  scope :filter_by_vendor             , -> (value) { where("anagrafiche.Vendor = ?", value)}
  scope :filter_by_fiscal_code        , -> (value) { where("anagrafiche.Codicefiscale like ?", value)}
  scope :filter_by_min_base_risk      , -> (value) { where("anagrafiche.base_risk >= ?", value)}
  scope :filter_by_max_base_risk      , -> (value) { where("anagrafiche.base_risk <= ?", value)}
  scope :filter_by_min_base_risk_calc , -> (value) { where("anagrafiche.base_risk_calc >= ?", value)}

  def full_name
    company ? "#{company}" : "#{self.nome} #{self.cognome}"
  end

  def full_address
    if self.IdTipo == 3
      "#{self.ComunePoint}, #{self.ProvinciaPoint}, #{NormalizeCountry(self.NazionePoint)}"
    else
      "#{self.Indirizzo}, #{self.Citta}, #{NormalizeCountry(self.NazioneResidenza)}"
    end
  end

  def country
    self.IdTipo == 3 ? "#{NormalizeCountry(self.NazionePoint)}" : "#{NormalizeCountry(self.NazioneResidenza)}"
  end

  def to_s 
    "#{full_name}"
  end
  
  def time_lapse_factor
    super || TimeLapseFactor.where(anagrafica_id: id).first_or_create
  end

  def self.vendors
    self.select(:vendor).distinct
  end

  def as_json()
    { id: id, text: full_name }
  end

  def self.search_by_full_name(search)
    names = search.split(' ')
    where(
      '(nome LIKE ? AND cognome LIKE ?)
                                    OR (nome LIKE ? AND cognome LIKE ?)
                                    OR RagioneSociale LIKE ?',
      "%#{names[1]}%",
      "%#{names[0]}%",
      "%#{names[0]}%",
      "%#{names[1]}%",
      "%#{search}%",
    )
  end

  def days_of_activity(tuple = nil)
    end_date = tuple ? Date.new(tuple[0], tuple[1]).at_end_of_month : Date.today
    days = (end_date - data_creazione.to_date).to_i
  end

  def risk_base(tuple = nil)
    if tuple
      last_id = eval_riskinesses.where(eval_month: "#{tuple}").last.try(:id)
      if last_id
        base =
          eval_riskinesses
            .where('id < ?', last_id)
            .order(id: :desc)
            .first
            .try(:eval_score)
      end
    end
    return base || base_risk
  end

  def eval_score(tuple = nil)
    if tuple
      risk =
        eval_riskinesses.where(eval_month: "#{tuple}").first.try(:eval_score)
    else
      risk = eval_riskinesses.order(created_at: :desc).first.try(:eval_score)
    end
    return risk
  end

  def danger_movements(tuple = nil)
    unless tuple
      risk_movements
        .group(
          "CONCAT(IFNULL(product_net_id, 'Prodotto non individuabile'), '|||', IFNULL(beneficiary, 'Beneficiario non individuabile'))",
        )
        .having('count(*) > 1')
        .count
    else
      risk_movements
        .for_month(tuple)
        .group(
          "CONCAT(IFNULL(product_net_id, 'Prodotto non individuabile'), '|||', IFNULL(beneficiary, 'Beneficiario non individuabile'))",
        )
        .having('count(*) > 1')
        .count
    end
  end

  def danger_movement_ids(tuple = nil)
    ids = []
    current_movements = tuple ? risk_movements.for_month(tuple) : risk_movements
    danger_movements(tuple)
      .keys
      .each do |k|
        if k
          p, b = k.split('|||')
          ids <<
            current_movements
              .where(product_net_id: p, beneficiary: b)
              .pluck(:movement_id)
        else
          ids <<
            current_movements
              .where(product_net_id: nil, beneficiary: nil)
              .pluck(:movement_id)
        end
      end
    return ids.flatten
  end

  def danger_movements_to_html(tuple = nil)
    dm_to_html = {}
    name_products = {}
    danger_movements(tuple).each do |key, value|
      if key
        idprodotto, v = key.split('|||')
        nome = hash_name_products(name_products, idprodotto)
      else
        nome = 'Prodotto non individuabile'
      end
      dm_to_html["#{nome}"] = value
    end
    return dm_to_html
  end

  def hash_name_products(name_products, idprodotto)
    name_products["#{idprodotto}"] =
      Prodotto
        .where(idprodotto: idprodotto)
        .pluck(:nome)
        .first unless name_products["#{idprodotto}"]
    return name_products["#{idprodotto}"]
  end

  def set_init_risk
    tuple_activities.each do |t|
      number_of_movements = risk_movements.for_month(t).count
      risk_for_month(t, number_of_movements)
    end
  end

  def recalculate_for_tuple(tuple)
    number_of_movements = risk_movements.for_month(tuple).count
    risk_for_month(tuple, number_of_movements)
  end

  def tuple_activities
    date_tuples(
      [data_creazione.year, data_creazione.month],
      [Date.today.year, Date.today.month],
    )
  end

  def risk_for_month(t, number_of_movements)
    danger_movement_ids = danger_movement_ids(t)
    danger_movements_to_html = danger_movements_to_html(t)
    e = eval_riskinesses.where(eval_month: t.to_s).first_or_initialize
    e.number_of_movements = number_of_movements
    risk_dictionary =
      eval_risk_for_tuple(t, danger_movement_ids, danger_movements_to_html)

    e.trend = Anagrafica.get_trend(risk_dictionary)
    e.eval_score = risk_dictionary[:risk]
    e.details_operations = risk_dictionary[:details_operations]

    e.save
  end

  def self.get_trend(risk_dictionary)
    return 'stable' if risk_dictionary[:details_operations].count == 1
    if risk_dictionary[:details_operations].values[
         (risk_dictionary[:details_operations].count - 1)
       ] >
         risk_dictionary[:details_operations].values[
           (risk_dictionary[:details_operations].count - 2)
         ]
      t = 'growing'
    elsif risk_dictionary[:details_operations].values[
          (risk_dictionary[:details_operations].count - 1)
        ] <
          risk_dictionary[:details_operations].values[
            (risk_dictionary[:details_operations].count - 2)
          ]
      t = 'down'
    elsif risk_dictionary[:details_operations].values[
          (risk_dictionary[:details_operations].count - 1)
        ] ==
          risk_dictionary[:details_operations].values[
            (risk_dictionary[:details_operations].count - 2)
          ]
      t = 'stable'
    end
    return t
  end

  def eval_risk_for_tuple(tuple, danger_movement_ids, danger_movements_to_html)
    max_base_risk = Configurable.max_base_risk.to_f
    min_base_risk = try(:base_risk).to_f || Configurable.min_base_risk.to_f

    tlf = time_lapse_factor.time_lapse_factor #Configurable.time_lapse_factor.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f

    risk_dictionary = { details_operations: {}, risk: risk_base(tuple) }
    start_date =
      if Date.new(tuple[0], tuple[1]).at_beginning_of_month <
           data_creazione.to_date
        data_creazione.to_date
      else
        Date.new(tuple[0], tuple[1]).at_beginning_of_month
      end
    end_date = Date.new(tuple[0], tuple[1]).at_end_of_month
    end_date = Date.today if end_date > Date.today

    # risk = risk_base(tuple)
    start_date.upto end_date do |day|
      current_day_movements = risk_movements.for_day(day)
      if current_day_movements.any?
        current_day_movements.each do |rm|
          unless danger_movement_ids.include?(rm.id)
            current_factor =
              (
                (
                  (
                    (
                      ((rm.product_base_risk.percentage_of(1)) - 100) *
                        rm.product_base_risk
                    ) *
                      (
                        factor_for_amount *
                          (rm.movement_amount / divisor_amount_for_factor)
                      )
                  ) + 100
                ) / 100
              ).to_f
            risk_dictionary[:risk] =
              (risk_dictionary[:risk] * current_factor).to_f
          else
            this_factor = danger_movements_to_html["#{rm.product_name}"]
            current_factor =
              (
                (
                  (
                    (
                      ((rm.product_base_risk.percentage_of(1)) - 100) *
                        this_factor
                    ) *
                      (
                        factor_for_amount *
                          (rm.movement_amount / divisor_amount_for_factor)
                      )
                  ) + 100
                ) / 100
              ).to_f

            risk_dictionary[:risk] =
              (risk_dictionary[:risk] * current_factor).to_f
          end
          risk_dictionary[:risk] = max_base_risk if risk_dictionary[:risk] >
            max_base_risk
        end
      end
      risk_dictionary[:risk] = (risk_dictionary[:risk] * tlf).to_f
      risk_dictionary[:risk] = min_base_risk if risk_dictionary[:risk] <
        min_base_risk

      risk_dictionary[:details_operations]["#{day}"] = risk_dictionary[:risk]
    end
    return risk_dictionary
  end

  def self.init_risk
    alive.each { |a| a.set_init_risk }
  end

  def self.recalculate
    tuple = [Date.today.year, Date.today.month]
    alive.each do |a|
      a.recalculate_for_tuple(tuple)
      SetEvalRiskWorker.perform_async(a.id)
    end
  end

  def current_evaluate_risk
    eval_riskinesses.pluck(:eval_score).last
  end

  def set_evaluate_risk
    Emoney::SetEvaluateRisk.new(id, current_evaluate_risk)
  end

=begin
  def trend
  end
=end
  def self.set_global_evaluate_risk
    alive.each_slice(20) { |a| a.each { |b| b.set_evaluate_risk } }
  end

  def self.last_id
    order(idutente: :desc).select(:idutente).first.idutente
  end

  def self.last_update
    order(Created: :desc).select(:Created).first.Created
  end

  def to_map
    return unless self.Citta
    results = Geocoder.search(self.Citta)
    return unless geo = results.first
    ita = {
      "id": "#{self.id}",
      "iso2Code": geo.data['address']['country_code'].upcase,
      "name": geo.data['display_name'],
      "region": {
        "id": geo.data['address']['country_code'].upcase,
        "value": geo.data['display_name'],
      },
      "adminregion": {
        "id": geo.data['address']['town'],
        "value": geo.data['address']['state'],
      },
      "incomeLevel": {
        "id": 'OEC',
        "value": 'High income: OECD',
      },
      "lendingType": {
        "id": 'LNX',
        "value": 'Not classified',
      },
      "capitalCity": geo.data['address']['town'],
      "longitude": geo.data['lon'],
      "latitude": geo.data['lat'],
    }
  end

  def set_init_eval_movement
    max_base_risk = Configurable.max_base_risk.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    self
      .servizi
      .for_evaluation
      .each do |s|
        em =
          s.build_eval_movement(
            max_base_risk,
            factor_for_amount,
            divisor_amount_for_factor,
          )
        em.risk_factor = em.risk_factor.to_f.round(6)
        em.save
      end
  end

  def last_evaluated_customer
    evaluated_customers
      .order(eval_year: :desc, eval_month: :desc)
      .pluck(:last_evaluated_customer)
      .first || Configurable.min_base_risk.to_f
  end

  def account_numbers
    self.conti.pluck(:Pan)
  end

=begin
  def set_evaluated_customers
    # self.evaluated_customers.destroy_all
    default_risk = Configurable.min_base_risk.to_f
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    max_base_risk = Configurable.max_base_risk.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    tlf = self.time_lapse_factor.time_lapse_factor
    base_risk = self.base_risk
    date = self.data_creazione.to_date
    date_begin = date.to_date.beginning_of_month
    stop = Date.today.beginning_of_month
    # stop = date.at_end_of_month
    while (date_begin <= stop)
      evaluated_customer = self.evaluated_customers.where(
        anagrafica_id: self.id,
        eval_year: date_begin.year,
        eval_month: date_begin.month
      ).first_or_initialize
      evaluated_customer.eval_days = {}
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop = days_begin.at_end_of_month
      while (days_begin <= days_stop)
        services = Servizio.with_all_for_day(days_begin, self.id)
        current_risk_factor = 1
        services.each do |service|
          em = EvalMovement.where(service_id: service.id).first_or_initialize
          em.set_properties(
            service,
            default_product_base_risk,
            max_base_risk,
            factor_for_amount,
            divisor_amount_for_factor)
          em.save
        end
        # APPLY DECREASE FACTOR
        current_risk_decreased = (current_risk * tlf).to_f
        current_risk_decreased = current_risk_decreased >= base_risk ? current_risk_decreased : base_risk
        evaluated_customer.eval_days[days_begin] = {
          "current_risk": current_risk,
          "nr_movements": services.count,
          "current_risk_decreased": current_risk_decreased
        }
        days_begin = days_begin.advance(days: 1)
      end
      evaluated_customer.save!
      date_begin = date_begin.advance(months: 1)
    end
    return self.evaluated_customers
  end
=end
  def evaluated_customer_for_day(day, default_risk)
    default_min_base_risk = {
      day_7: default_risk,
      day_30: default_risk
    }
    unless a =
             self
               .evaluated_customers
               .find_by_eval_year_and_eval_month(day.year, day.month)
               .try(:eval_days)
      return default_min_base_risk
    end
    return default_min_base_risk unless b = a["#{day}"]
    b[0]["details"]["current_risk_decreased"] || b[0]["details"]["current_risk"]
  end

  def set_eval_movements
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    self
      .servizi
      .for_evaluation
      .select(:idservizio, :point)
      .where
      .not(
        'SUBSTRING(prodotto, -3, 3) IN (?)',
        ExcludedProduct.all.pluck(:last_3_numbers),
      )
      .order(datainserimento: :asc)
      .each_slice(100) do |services|
        services.each do |s|
          worker_id =
            CreateEvalMovementWorker.perform_async(
              s.idservizio,
              s.point,
              default_product_base_risk,
            )
        end
      end
  end

  def set_evaluated_customers(
      tlf = self.time_lapse_factor.time_lapse_factor,
      default_risk = Configurable.min_base_risk.to_f,
      divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f,
      factor_for_amount = Configurable.factor_for_amount.to_f,
      max_base_risk = Configurable.max_base_risk.to_f)

    date = self["Created"].to_date
    date_begin = date.to_date.beginning_of_month
    stop = Date.today.to_date
    #stop = date_begin + 3.day
    while (date_begin <= stop)
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop  = days_begin.at_end_of_month > stop ? stop : days_begin.at_end_of_month
      while (days_begin <= days_stop)
        worker_id =
        set_evaluated_customer_for_day(
            days_begin,
            tlf,
            default_risk,
            divisor_amount_for_factor,
            factor_for_amount,
            max_base_risk
          )
        days_begin = days_begin.advance(days: 1)
      end
      date_begin = date_begin.advance(months: 1)
    end
  end

  def set_evaluated_customer_for_day(day,
    tlf = self.time_lapse_factor.time_lapse_factor,
    default_risk = Configurable.min_base_risk.to_f,
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f,
    factor_for_amount = Configurable.factor_for_amount.to_f,
    max_base_risk = Configurable.max_base_risk.to_f)

    customer = self

    evaluated_customer = customer.evaluated_customers.where(
      eval_year: day.to_date.year,
      eval_month: day.to_date.month
    ).first_or_initialize
    evaluated_customer.eval_days = {} if evaluated_customer.new_record?
    evaluated_customer.eval_days[day] = []
    eval_movements = customer.eval_movements.with_all_for_day(day.to_date)
    hash = {}
    eval_movements.each do |eval_movement|
      recursion = eval_movement.recursion ? eval_movement.recursion["customer_id"].symbolize_keys : {day_7: 0, day_30: 0}

      recursion7 = recursion[:day_7]
      recursion30 = recursion[:day_30]
      hash7 = set_evaluated_by_recursion(recursion7, eval_movement, divisor_amount_for_factor, factor_for_amount)
      hash30 = set_evaluated_by_recursion(recursion30, eval_movement, divisor_amount_for_factor, factor_for_amount)
      h2 = {
        "#{eval_movement.movement_id}": {
          day_7: hash7,
          day_30: hash30 
        }
      }
      hash.merge!(h2)
    end
    # evaluated_customer.eval_days[day] << {movements: hash}

    
    current_risk = customer.evaluated_customer_for_day(day.to_date - 1.day, default_risk).symbolize_keys

    hash.values.each do |v|
      current_risk[:day_7]  = current_risk[:day_7].to_f  * v[:day_7][:evaluated_factor].to_f
      current_risk[:day_30] = current_risk[:day_30].to_f * v[:day_30][:evaluated_factor].to_f
    end
    current_risk[:day_7] = current_risk[:day_7] >= max_base_risk ? max_base_risk : current_risk[:day_7]
    current_risk[:day_30] = current_risk[:day_30] >= max_base_risk ? max_base_risk : current_risk[:day_30]


    # APPLY DECREASE FACTOR
    current_risk_decreased = {}
    current_risk_decreased[:day_7] = (current_risk[:day_7] * tlf).to_f
    current_risk_decreased[:day_7] = current_risk_decreased[:day_7] <= default_risk ? default_risk : current_risk_decreased[:day_7]

    current_risk_decreased[:day_30] = (current_risk[:day_30] * tlf).to_f
    current_risk_decreased[:day_30] = current_risk_decreased[:day_30] <= default_risk ? default_risk : current_risk_decreased[:day_30]

    hash2 = {
      "current_risk": current_risk,
      "nr_movements": eval_movements.count,
      "current_risk_decreased": current_risk_decreased
    }
    evaluated_customer.eval_days[day] << {details: hash2}
    evaluated_customer.save
  end

  def set_evaluated_by_recursion(recursion, eval_movement, divisor_amount_for_factor, factor_for_amount)
    unless recursion > 0
      evaluated_factor =
        (
          (
            (
              (
                ((eval_movement.product_base_risk.percentage_of(1)) - 100) *
                eval_movement.product_base_risk
              ) *
                (
                  factor_for_amount *
                    ((eval_movement.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description = "Operation factor: #{evaluated_factor}"
    else
      evaluated_factor =
        (
          (
            (
              (((eval_movement.product_base_risk.percentage_of(1)) - 100) * recursion) *
                (
                  factor_for_amount *
                    ((eval_movement.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description =
        "Repeated: #{recursion} - Factor: #{evaluated_factor}"
    end
    hash = {
      eval_movement: eval_movement.id,
      evaluated_factor: evaluated_factor,
      evaluated_description: evaluated_description,
      recursion: recursion 
    }
    return hash
  end

  def set_current_place
    p = self.current_place || self.build_current_place
    p.name = self.full_name
    if self.IdTipo == 3
      city, state, address = self.ComunePoint, NormalizeCountry(self.NazionePoint), self.IndirizzoPoint
    else
      city, state, address = self.Citta, NormalizeCountry(self.NazioneResidenza), self.Indirizzo
    end 
    result = Geocoder.search(city, params: {country: state, address: address}).first
    if result
      p.country = result.country
      p.city = result.city
      p.address = result.address
      p.region = result.state
      p.lonlat = "POINT(#{result.longitude} #{result.latitude})"
    end
    p.save
  end
end

=begin
USE `dbconti_prod`;
CREATE  OR REPLACE VIEW `customers` AS 
  SELECT 
    anagrafiche.IdUtente as id,
    anagrafiche.IdTipo as type_id,
    anagrafiche.Nome as first_name,
    anagrafiche.Cognome as last_name,
    anagrafiche.Codicefiscale as fiscal_code,
    anagrafiche.RagioneSociale as company_name,
    anagrafiche.Email as email,
    anagrafiche.Cellulare as mobile,
    anagrafiche.Attivo as active,
    anagrafiche.Username as username,
    anagrafiche.Vendor as vendor,
    anagrafiche.Agente as agente,
    anagrafiche.Livello as level,
    anagrafiche.base_risk as base_risk,
    anagrafiche.base_risk_calc as base_risk_calc,
    anagrafiche.DataAttivazione AS data_attivazione,
    anagrafiche.Created as created,
    anagrafiche.LastUpdate as updated
  FROM anagrafiche;
=end
