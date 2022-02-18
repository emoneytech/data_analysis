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
#  IdUtente                  :bigint           not null, primary key
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
#  base_risk                 :decimal(10, 2)   default(0.0)
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
#  Codicefiscale           (Codicefiscale)
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
  self.primary_key = 'IdUtente'
  self.table_name = 'anagrafiche'

  has_many :company_shares,
           foreign_key: 'idUtente',
           primary_key: 'IdUtente',
           class_name: 'RelazioniAnagrafica'
  has_many :companies,
           through: :company_shares,
           source: :company,
           class_name: 'Anagrafica'

  #  idTipoRelazione(1:UBO\n2:Director\n3:Owner)
  has_many :relations,
           foreign_key: 'idLegato',
           primary_key: 'IdUtente',
           class_name: 'RelazioniAnagrafica'
  has_many :ubo_relations,
           -> { where(idTipoRelazione: 1) },
           foreign_key: 'idLegato',
           primary_key: 'IdUtente',
           class_name: 'RelazioniAnagrafica'
  has_many :director_relations,
           -> { where(idTipoRelazione: 2) },
           foreign_key: 'idLegato',
           primary_key: 'IdUtente',
           class_name: 'RelazioniAnagrafica'
  has_many :owner_relations,
           -> { where(idTipoRelazione: 3) },
           foreign_key: 'idLegato',
           primary_key: 'IdUtente',
           class_name: 'RelazioniAnagrafica'

  has_many :ubos, through: :ubo_relations
  has_many :directors, through: :director_relations
  has_many :owners, through: :owner_relations

  has_many :conti,
           -> { order(amount: :desc) },
           foreign_key: 'IdUtente',
           class_name: 'Conto'
  has_many :ibans, foreign_key: 'IdUtente', class_name: 'Iban'

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
  belongs_to :referral,
             foreign_key: 'Padre',
             primary_key: 'IdUtente',
             class_name: 'Anagrafica'

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
  has_many :siblings,
           -> {
             where(
               "(`anagrafiche`.`Attivo` <> 6) AND (`anagrafiche`.`IdTipo` in (3, 9, 2)) AND (`anagrafiche`.`Codicefiscale` <> '')",
             )
           },
           class_name: 'Anagrafica',
           foreign_key: 'Codicefiscale',
           primary_key: 'Codicefiscale'

  scope :for_groups,
        -> {
          where(
            "(`anagrafiche`.`Attivo` <> 6) AND (`anagrafiche`.`IdTipo` in (3, 9, 2)) AND (`anagrafiche`.`Codicefiscale` <> '')",
          )
        }
  scope :active, -> { where.not('anagrafiche.IdUtente' => %w[70 75 34221]) }

  ######################## da verificare
  scope :alive,
        -> {
          joins(:conti)
            .distinct
            .where('anagrafiche.tipo' => Tipo.alive.pluck(:id))
            .where
            .not('anagrafiche.IdUtente' => %w[70 75 34221])
            .where('anagrafiche.Attivo' => [1,4])
            .where
            .not('anagrafiche.created' => nil)
        }

  scope :user_or_business,
        -> {
          joins(:conti)
            .distinct
            .where(
              'anagrafiche.IdTipo' => %w[2 3],
              'anagrafiche.TipoKYC' => %w[3 4],
            )
            .where
            .not('anagrafiche.IdUtente' => %w[70 75 34221])
            .where('anagrafiche.Attivo' => [1,4])
            .where
            .not('anagrafiche.Created' => nil)
        }
  scope :business,
        -> {
          joins(:conti)
            .distinct
            .where('anagrafiche.IdTipo' => 3)
            .where
            .not('anagrafiche.IdUtente' => %w[70 75 34221])
            .where('anagrafiche.Attivo' => [1,4])
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

  # Evaluated Movements on Pg
  has_many :evaluated_movements,
           primary_key: 'IdUtente',
           foreign_key: :customer_id

  # Customer Evaluation on Pg
  has_many :customer_evaluations,
           primary_key: 'IdUtente',
           foreign_key: :anagrafica_id

  # Current Evaluation on Pg
  has_one :current_evaluation,
          -> {
            where(eval_month: Date.today.month, eval_year: Date.today.year)
          },
          class_name: 'CustomerEvaluation',
          primary_key: 'IdUtente',
          foreign_key: :anagrafica_id

  # Customer settings on Pg
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

  has_many :places,
           -> { order(created_at: :desc) },
           as: :positionable,
           primary_key: 'IdUtente',
           foreign_key: :positionable_id
  has_one :current_place,
          -> { order(created_at: :desc) },
          as: :positionable,
          primary_key: 'IdUtente',
          foreign_key: :positionable_id,
          class_name: 'Place'

  # scope :for_evaluation, -> { includes(:rischio_corrente).references(:rischio_corrente).order('rischio.Rischio desc')}
  has_one :observer, -> { where(category_element: 'customer_id', deleted_at: nil) }, primary_key: 'IdUtente', foreign_key: :content, class_name: 'ObservedElement'

  scope :filter_by_full_name,
        ->(name) {
          where(
            '(anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
    OR (anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
    OR anagrafiche.RagioneSociale LIKE ?',
            "%#{name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}"}%",
            "%#{name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}"}%",
            "%#{name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}"}%",
            "%#{name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}"}%",
            "%#{name}%",
          )
        }

  scope :filter_by_customer_id,
        ->(value) { where('anagrafiche.IdUtente = ?', value) }
  scope :filter_by_vendor, ->(value) { where('anagrafiche.Vendor = ?', value) }
  scope :filter_by_fiscal_code,
        ->(value) { where('anagrafiche.Codicefiscale like ?', value) }
  scope :filter_by_min_base_risk,
        ->(value) { where('anagrafiche.base_risk >= ?', value) }
  scope :filter_by_max_base_risk,
        ->(value) { where('anagrafiche.base_risk <= ?', value) }
  scope :filter_by_min_base_risk_calc,
        ->(value) { where('anagrafiche.base_risk_calc >= ?', value) }

  def self.icon
    'user'
  end
  
  def tollerance
    if customer_settings.global.any?
      customer_settings.global.first.tollerance
    else
      1
    end
  end

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
    if self.IdTipo == 3
      "#{NormalizeCountry(self.NazionePoint)}"
    else
      "#{NormalizeCountry(self.NazioneResidenza)}"
    end
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

  def as_json
    { id: id, text: "#{id} - #{full_name}" }
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
  def hash_name_products(name_products, idprodotto)
    name_products["#{idprodotto}"] =
      Prodotto
        .where(idprodotto: idprodotto)
        .pluck(:nome)
        .first unless name_products["#{idprodotto}"]
    return name_products["#{idprodotto}"]
  end

  def tuple_activities
    date_tuples(
      [data_creazione.year, data_creazione.month],
      [Date.today.year, Date.today.month],
    )
  end

  def set_evaluate_risk
    Emoney::SetEvaluateRisk.new(id, current_evaluate_risk)
  end

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

  def account_numbers
    self.conti.pluck(:Pan)
  end

  def set_current_place
    p = self.current_place || self.build_current_place
    p.name = self.full_name
    if self.IdTipo == 3
      city, state, address =
        self.ComunePoint,
        NormalizeCountry(self.NazionePoint),
        self.IndirizzoPoint
    else
      city, state, address =
        self.Citta, NormalizeCountry(self.NazioneResidenza), self.Indirizzo
    end
    result = Geocoder.search("#{address}, #{city}, #{country}").first
    result = Geocoder.search("#{city},#{state},#{country}").first unless result
    result =
      Geocoder.search(country, params: { city: city, address: address })
        .first unless result
    if result
      p.country = result.country
      p.city = result.city
      p.address = result.address
      p.region = result.state
      p.lonlat = "POINT(#{result.longitude} #{result.latitude})"
    end
    p.save
  end

  def init_evaluation
    customer_evaluations.destroy_all
    max_base_risk = Configurable.max_base_risk.to_f
    min_base_risk = self.try(:base_risk).to_f || Configurable.min_base_risk.to_f
    tlf = Configurable.time_lapse_factor.to_f
    amount_f = Configurable.amount_f.to_f
    amount_d = Configurable.amount_d.to_f
    years_of_activity = self.years_of_activity
    tuples = self.tuple_activities
    years_of_activity.each do |eval_year|
      evaluated_movements =
        self
          .evaluated_movements
          .select(
            'evaluated_movements.*, movement_created_at::date as day, CONCAT(EXTRACT(YEAR FROM movement_created_at),\'-\',EXTRACT(MONTH FROM movement_created_at)) as month',
          )
          .with_all_for_year(eval_year)
          .order(movement_created_at: :asc)
          .as_json
      tuples.select { |t| t[0] == eval_year }.each do |tuple|
        ce =
          self.customer_evaluations.build(
            eval_month: tuple[1],
            eval_year: tuple[0],
          )
        evaluated_movements_for_date =
          evaluated_movements.select do |h|
            h['month'] == "#{tuple[0]}-#{tuple[1]}"
          end
        ce.recalculate(
          evaluated_movements_for_date,
          max_base_risk,
          min_base_risk,
          tlf,
        )
        ce.save
      end
    end
  end

  def evaluate_for_tuple(tuple = self.tuple_activities.last)
    max_base_risk = Configurable.max_base_risk.to_f
    tlf = Configurable.time_lapse_factor.to_f
    min_base_risk = self.try(:base_risk).to_f || Configurable.min_base_risk.to_f
    evaluated_movements_for_date =
      self
        .evaluated_movements
        .select(
          'evaluated_movements.*, movement_created_at::date as day, CONCAT(EXTRACT(YEAR FROM movement_created_at),\'-\',EXTRACT(MONTH FROM movement_created_at)) as month',
        )
        .with_all_for_year(tuple[0])
        .with_all_for_month(tuple[1])
        .order(movement_created_at: :asc)
        .as_json
    ce =
      self
        .customer_evaluations
        .where(eval_month: tuple[1], eval_year: tuple[0])
        .first_or_initialize
    ce.recalculate(
      evaluated_movements_for_date,
      max_base_risk,
      min_base_risk,
      tlf,
    )
    ce.save
  end

  def last_evaluated_day
    self.current_evaluation.last_evaluated_day.try(:to_date)
  end

  def check_evaluated_days(day = Date.today)
    self.init_evaluation unless self.current_evaluation
    if (
         day ==
           Date.new(
             self.tuple_activities.last[0],
             self.tuple_activities.last[1],
             1,
           )
       ) || (day - last_evaluated_day).to_i > 1
      self.evaluate_for_tuple
    end
  end

  def evaluate_for_day(day = Date.today)
    check_evaluated_days(day)
    max_base_risk = Configurable.max_base_risk.to_f
    tlf = Configurable.time_lapse_factor.to_f
    min_base_risk = self.try(:base_risk).to_f || Configurable.min_base_risk.to_f
    evaluated_movements_for_date =
      self
        .evaluated_movements
        .select(
          'evaluated_movements.*, movement_created_at::date as day, CONCAT(EXTRACT(YEAR FROM movement_created_at),\'-\',EXTRACT(MONTH FROM movement_created_at)) as month',
        )
        .with_all_for_year(day.year)
        .with_all_for_month(day.month)
        .order(movement_created_at: :asc)
        .as_json
    ce =
      self
        .customer_evaluations
        .where(eval_month: day.month, eval_year: day.year)
        .first_or_initialize
    ce.calculate_day(day, ce.eval_days, max_base_risk, min_base_risk, tlf)
    ce.save
  end

  def years_of_activity
    (self.data_creazione.to_date.year..Date.today.year).to_a
  end

  def attention_factor_sent
    res =
      (self.current_evaluation.last_attention_factor30 * self.tollerance).to_f
    res >= self.base_risk.to_f ? res : self.base_risk.to_f
  end

  def current_attention_factor30
    current_evaluation.last_attention_factor30
  end

  def current_attention_factor7
    current_evaluation.try(:last_attention_factor7)
  end

  def initialize_evaluation
    max_base_risk = Configurable.max_base_risk.to_f
    min_base_risk = self.try(:base_risk).to_f || Configurable.min_base_risk.to_f
    tlf = Configurable.time_lapse_factor.to_f
    tuple = [Date.today.year, Date.today.month]
    ce =
      self.customer_evaluations.build(eval_month: tuple[1], eval_year: tuple[0])
    evaluated_movements_for_date =
      evaluated_movements.select { |h| h['month'] == "#{tuple[0]}-#{tuple[1]}" }
    ce.recalculate(
      evaluated_movements_for_date,
      max_base_risk,
      min_base_risk,
      tlf,
    )
    ce.save
    return ce
  end

  def current_evaluation
    super || initialize_evaluation
  end
end
