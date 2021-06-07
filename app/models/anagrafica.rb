# == Schema Information
#
# Table name: anagrafiche
#
#  IdUtente                  :bigint           not null
#  CodSpinoff                :string(5)
#  CodSpinoff2               :string(5)
#  Attivo                    :integer
#  DataPassword              :datetime
#  Username                  :string(100)
#  Password                  :string(100)
#  Contratto                 :integer          default(0)
#  Vendor                    :integer          default(0)
#  IdConcession              :bigint           default(0)
#  Agente                    :bigint
#  RagioneSociale            :string(100)
#  CodicefiscaleAzienda      :string(86)
#  Rea                       :string(50)
#  CivSedeLegale             :string(20)
#  SedeLegale                :string(100)
#  ComuneAzienda             :string(100)
#  CapAzienda                :string(18)
#  ProvinciaAzienda          :string(2)
#  TelefonoAzienda           :string(20)
#  FaxAzienda                :string(20)
#  SitoAzienda               :string(100)
#  EmailLegalerappresentante :string(100)
#  Nome                      :string(100)
#  Cognome                   :string(100)
#  Codicefiscale             :string(26)
#  Sesso                     :string(1)
#  DataNascita               :date
#  LuogoNascita              :string(100)
#  ProvinciaNascita          :string(2)
#  NazioneNascita            :string(3)
#  Indirizzo                 :string(100)
#  Civico                    :string(55)
#  Citta                     :string(100)
#  CAP                       :string(18)
#  Provincia                 :string(2)
#  NazioneResidenza          :string(3)
#  Telefono                  :string(20)
#  Fax                       :string(20)
#  Cellulare                 :string(20)
#  Email                     :string(50)
#  IdTipo                    :integer          default(0)
#  IdTipoDocumento           :integer
#  NumeroDocumento           :string(20)
#  DataRilascio              :datetime
#  DataScadenza              :datetime
#  EnteRilascio              :string(150)
#  AziendaRuolo              :string(150)
#  DataCostituzioneSocieta   :date
#  PartitaIva                :string(86)
#  TipoAzienda               :string(150)
#  FunzionarioResponsabile   :string(100)
#  TerminiCondizioni         :string(2)
#  Datiok                    :string(2)
#  PrimaConnessione          :integer
#  Created                   :datetime
#  AttSvolte                 :string(250)
#  AttSec                    :string(250)
#  AltreAtt                  :string(250)
#  PacchettoPoint            :string(20)
#  Insegna                   :string(100)
#  IndirizzoPoint            :string(100)
#  CapPoint                  :string(18)
#  ComunePoint               :string(100)
#  ProvinciaPoint            :string(5)
#  NazionePoint              :string(3)
#  ModPagamento              :string(50)
#  Note                      :text(4294967295)
#  OkUIC                     :string(2)        default("0")
#  OkAgente                  :string(2)
#  OkUffcontratti            :string(2)
#  OkUffamm                  :string(2)
#  OkMagazzino               :integer          default(0)
#  Avanzamento               :integer          default(0)
#  ContoPoint                :string(50)
#  ContoPoint2               :string(50)
#  LastUpdate                :string(10)
#  DataLastUpdate            :datetime
#  Livello                   :integer          default(0)
#  Padre                     :bigint           default(0)
#  Autorizzazioni            :string(20)
#  InvioEmail                :integer
#  AutEmail                  :string(2)
#  SerialCog                 :string(6)
#  OpHelpdesk                :string(5)
#  Toponimo                  :string(8)
#  DataAttivazione           :datetime
#  LinkDoc                   :integer          default(0)
#  LinkCF                    :integer          default(0)
#  LinkBill                  :integer          default(0)
#  LinkContratto             :integer          default(0)
#  LinkVisura                :integer          default(0)
#  LinkPointAccount          :integer          default(0)
#  LinkDistributorAgreement  :integer          default(0)
#  LinkAltriDocumenti        :integer          default(0)
#  LinkSelfie                :integer          default(0)
#  LinkFacta                 :integer          default(0)
#  OkKyc                     :string(2)
#  TipoKYC                   :integer          default(0)
#  DataOkKyc                 :datetime
#  DataNumOkKyc              :string(8)
#  OpHelpDeskKyc             :string(5)
#  IdLastUpdateKYC           :bigint           default(0)
#  DataLastUpdateKYC         :datetime
#  EmailSollecito            :string(150)
#  NumeroEmailSollecito      :integer          default(0)
#  Messaggio                 :text(65535)
#  DataUltimoSollecito       :datetime
#  DateSollecito             :string(250)
#  Codalt                    :string(6)
#  CAB                       :string(10)
#  Subconcession             :string(7)
#  IdToken                   :integer          default(0)
#  NazioneAzienda            :string(3)
#  ContoTecnico              :string(30)
#  Toponimo1                 :string(15)
#  Toponimo2                 :string(15)
#  WebPin                    :string(6)
#  AbilitaWebPin             :integer          default(0)
#  UtilizziWebPin            :integer          default(0)
#  Supervisor                :integer          default(0)
#  DataVerificaEmail         :date
#  DataVerificaSms           :date
#  TokenApp                  :string(45)
#  ScadenzaTokenApp          :date
#  AbilitaTokenApp           :boolean          default(TRUE)
#  Cittadinanza              :string(45)
#  Lingua                    :string(45)
#  VersioneAgreement         :string(45)
#  StatoAgreement            :integer
#  ScadenzaAgreement         :date
#  DataAgreement             :date
#  LimiteMastercard          :integer          default(1)
#  Provider                  :string(6)        default("COG")
#  ProviderDefault           :string(6)        default("COG")
#  dataNominaPoint           :date
#  linguaPergamena           :string(45)
#  nazionePorting            :string(45)
#  dataSendPergamena         :date
#  base_risk                 :decimal(10, 2)   default(5.0)
#  bonifico                  :integer          default(0)
#  base_risk_calc            :decimal(10, 2)   default(0.0)
#  tipobusiness              :string(255)
#  organizzazioneazienda     :string(255)
#  SubStato                  :integer          default(0)
#  TipoDocumentoEuropeo      :string(255)
#  NumeroDocumentoEuropeo    :string(255)
#  ScadenzaDocumentoEuropeo  :date
#  Skipdatecompliance        :date
#  Lastcheckcompliance       :date
#  Nextcheckcompliance       :date
#  LastRevision              :date
#  NextRevision              :date
#  DataArchiviazione         :date
#  IdOpArchiviazione         :bigint           default(0)
#  classificazione           :string(45)       default("ZZ")
#  NationDocument            :string(45)
#  DisplayOnly               :integer          default(0)
#  Fatca                     :integer          default(0)
#  OutsideMalta              :integer          default(0)
#  Pep                       :integer          default(0)
#  ExPep                     :integer          default(0)
#  Occasionale               :integer          default(0)
#

class Anagrafica < ApplicationCoreRecord

  self.primary_key = 'idutente'
  self.table_name = 'anagrafiche'

  has_many :conti, -> { order(amount: :desc) }, foreign_key: "IdUtente", class_name: "Conto"

  has_many :servizi, foreign_key: "point", class_name: "Servizio"

  # has_many :positve_servizi, -> { where('servizi.importo > 0') }, foreign_key: "point", class_name: "Servizio"
  has_many :active_servizi, -> { where('servizi.importo > 0').where(status: [Servizio.status_active]) }, foreign_key: "point", class_name: "Servizio"

  # has_many :movimenticonti, through: :conti
  has_many :movimenticonti, through: :servizi, foreign_key: "Point"
  has_many :prodotti, -> { distinct }, through: :active_servizi, source: :product#, primary_key: "idprodotto", class_name: "Prodotto"
  has_many :tutti_prodotti, through: :active_servizi, source: :product#, primary_key: "idprodotto", class_name: "Prodotto"

  belongs_to :tipo, foreign_key: "IdTipo", class_name: "Tipo"
  belongs_to :broker, foreign_key: "Vendor", class_name: "Vendor"

  alias_attribute :id, "IdUtente"
  alias_attribute :idutente, "IdUtente"
  alias_attribute :nome, "Nome"
  alias_attribute :name, "Nome"
  alias_attribute :cognome, "Cognome"
  alias_attribute :vendor, "Vendor"
  alias_attribute :active, "Attivo"
  alias_attribute :type_id, "IdTipo"
  alias_attribute :company, "RagioneSociale"
  alias_attribute :data_attivazione, "DataAttivazione"
  alias_attribute :data_creazione, "Created"
  alias_attribute :codice_fiscale, "Codicefiscale"
  alias_attribute :created, "Created"

  # scope :for_type, -> (id) { where(:type_id => id) }

  scope :active, -> { where.not("anagrafiche.IdUtente" => %w{70 75})}
  scope :alive, -> { includes(:conti).where("anagrafiche.tipo" => Tipo.alive.pluck(:id)).where.not("anagrafiche.IdUtente" => %w{70 75}).where.not("anagrafiche.Attivo" => %w{3 6}, "anagrafiche.created" => nil).where("conti.idConti IS NOT NULL").references(:conti)}

  scope :user_or_business, -> { includes(:conti).where("anagrafiche.IdTipo" => %w(2 3), "anagrafiche.TipoKYC" => %w(3 4)).where.not("anagrafiche.IdUtente" => %w{70 75}).where.not("anagrafiche.Attivo" => %w{3 6}, "anagrafiche.Created" => nil).where("conti.idConti IS NOT NULL").references(:conti)}

  has_one :base_riskiness, as: :base_evaluable
  has_many :eval_riskinesses, as: :eval_evaluable

  has_many :notes, foreign_key: :customer_id

  # has_many :user_movements, foreign_key: :user_id, dependent: :destroy
  has_many :risk_movements, -> { order(movement_created_at: :asc)}, foreign_key: :user_id
  has_many :evaluated_movements, -> { order(movement_created_at: :asc)}, foreign_key: :customer_id

  has_many :evaluated_risks, primary_key: 'IdUtente', foreign_key: :anagrafica_id
  has_many :rischi, primary_key: 'IdUtente', foreign_key: :IdUtente, class_name: 'Rischio'
  has_one :rischio_corrente, ->{ order(Data: :desc)}, primary_key: 'IdUtente', foreign_key: :IdUtente, class_name: 'Rischio'

  # scope :for_evaluation, -> { includes(:rischio_corrente).references(:rischio_corrente).order('rischio.Rischio desc')}
  def full_name
     company ? "#{company}" : "#{self.nome} #{self.cognome}"
  end

  def time_lapse_factor
    AnagraficaTimeLapseFactor.where(anagrafica_id: id).first_or_create
  end

  def self.vendors
    self.select(:vendor).distinct
  end

  def as_json()
    { id: id, text: full_name }
  end

  def self.search_by_full_name(search)
     names = search.split(" ")
     where("(nome LIKE ? AND cognome LIKE ?)
                                    OR (nome LIKE ? AND cognome LIKE ?)
                                    OR RagioneSociale LIKE ?",
                                    "%#{names[1]}%","%#{names[0]}%",
                                    "%#{names[0]}%","%#{names[1]}%",
                                    "%#{search}%")
  end

  def days_of_activity(tuple=nil)
    end_date = tuple ? Date.new(tuple[0],tuple[1]).at_end_of_month : Date.today
    days = (end_date - data_creazione.to_date).to_i
  end

  def risk_base(tuple=nil)
    if tuple
      last_id = eval_riskinesses.where(eval_month: "#{tuple}").last.try(:id)
      if last_id
        base = eval_riskinesses.where("id < ?", last_id).order(id: :desc).first.try(:eval_score)
      end
    end
    return base || base_risk
  end

  def eval_score(tuple=nil)
    if tuple
      risk = eval_riskinesses.where(eval_month: "#{tuple}").first.try(:eval_score)
    else
      risk = eval_riskinesses.order(created_at: :desc).first.try(:eval_score)
    end
    return risk
  end

  def danger_movements(tuple=nil)
    unless tuple
      risk_movements.group("CONCAT(IFNULL(product_net_id, 'Prodotto non individuabile'), '|||', IFNULL(beneficiary, 'Beneficiario non individuabile'))").having("count(*) > 1").count
    else
      risk_movements.for_month(tuple).group("CONCAT(IFNULL(product_net_id, 'Prodotto non individuabile'), '|||', IFNULL(beneficiary, 'Beneficiario non individuabile'))").having("count(*) > 1").count
    end
  end

  def danger_movement_ids(tuple=nil)
    ids = []
    current_movements = tuple ? risk_movements.for_month(tuple) : risk_movements
    danger_movements(tuple).keys.each do |k|
      if k
        p, b = k.split("|||")
        ids << current_movements.where(product_net_id: p, beneficiary: b).pluck(:movement_id)
      else
        ids << current_movements.where(product_net_id: nil, beneficiary: nil).pluck(:movement_id)
      end
    end
    return ids.flatten
  end

  def danger_movements_to_html(tuple=nil)
    dm_to_html = {}
    name_products = {}
    danger_movements(tuple).each do |key, value|
      if key
        idprodotto,v = key.split("|||")
        nome = hash_name_products(name_products, idprodotto)
      else
        nome = "Prodotto non individuabile"
      end
      dm_to_html["#{nome}"] = value
    end
    return dm_to_html
  end

  def hash_name_products(name_products, idprodotto)
    name_products["#{idprodotto}"] = Prodotto.where(idprodotto: idprodotto).pluck(:nome).first unless name_products["#{idprodotto}"]
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
    date_tuples([data_creazione.year, data_creazione.month], [Date.today.year, Date.today.month])
  end


  def risk_for_month(t, number_of_movements)
    danger_movement_ids = danger_movement_ids(t)
    danger_movements_to_html = danger_movements_to_html(t)
    e = eval_riskinesses.where(eval_month: t.to_s).first_or_initialize
    e.number_of_movements = number_of_movements
    risk_dictionary = eval_risk_for_tuple(t, danger_movement_ids, danger_movements_to_html)
    #binding.pry if number_of_movements > 0
    e.trend = Anagrafica.get_trend(risk_dictionary)
    e.eval_score = risk_dictionary[:risk]
    e.details_operations = risk_dictionary[:details_operations]
    # binding.pry if number_of_movements > 0
    e.save
  end

  def self.get_trend(risk_dictionary)
    return "stable" if risk_dictionary[:details_operations].count == 1
    if risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 1)] > risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 2)]
      t = "growing"
    elsif risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 1)] < risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 2)]
      t = "down"
    elsif risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 1)] == risk_dictionary[:details_operations].values[(risk_dictionary[:details_operations].count - 2)]
      t = "stable"
    end
    return t
  end

  def eval_risk_for_tuple(tuple, danger_movement_ids, danger_movements_to_html)


    max_base_risk = Configurable.max_base_risk.to_f
    min_base_risk = try(:base_risk).to_f || Configurable.min_base_risk.to_f

    tlf = time_lapse_factor.time_lapse_factor #Configurable.time_lapse_factor.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f

    risk_dictionary = {details_operations: {}, risk: risk_base(tuple)}
    start_date = Date.new(tuple[0],tuple[1]).at_beginning_of_month < data_creazione.to_date ? data_creazione.to_date : Date.new(tuple[0],tuple[1]).at_beginning_of_month
    end_date = Date.new(tuple[0],tuple[1]).at_end_of_month
    end_date = Date.today if end_date > Date.today
    # risk = risk_base(tuple)
    start_date.upto end_date do |day|
      current_day_movements = risk_movements.for_day(day)
      if current_day_movements.any?
        current_day_movements.each do |rm|
          unless danger_movement_ids.include?(rm.id)
            current_factor = ((((((rm.product_base_risk.percentage_of(1)) - 100) * rm.product_base_risk) * (factor_for_amount * (rm.movement_amount/divisor_amount_for_factor))) + 100) / 100).to_f
            risk_dictionary[:risk] = (risk_dictionary[:risk] * current_factor).to_f
          else
            this_factor = danger_movements_to_html["#{rm.product_name}"]
            current_factor = ((((((rm.product_base_risk.percentage_of(1)) - 100) * this_factor) * (factor_for_amount * (rm.movement_amount/divisor_amount_for_factor))) + 100) / 100).to_f
            # binding.pry
            risk_dictionary[:risk] = (risk_dictionary[:risk] * current_factor).to_f
          end
          risk_dictionary[:risk] = max_base_risk if risk_dictionary[:risk] > max_base_risk
        end
      end
      risk_dictionary[:risk] = (risk_dictionary[:risk] * tlf).to_f
      risk_dictionary[:risk] = min_base_risk if risk_dictionary[:risk] < min_base_risk

      risk_dictionary[:details_operations]["#{day}"] = risk_dictionary[:risk]
    end
    return risk_dictionary
  end

  def self.init_risk
    alive.each do |a|
      a.set_init_risk
    end
  end

  def self.recalculate
    tuple = [Date.today.year,Date.today.month]
    alive.each do |a|
      a.recalculate_for_tuple(tuple)
      SetEvalRiskWorker.perform_async(a.id)
    end
  end

  def current_evaluate_risk
    eval_riskinesses.pluck(:eval_score).last
  end

  def set_evaluate_risk
    Emoney::SetEvaluateRisk.new(id,current_evaluate_risk)
  end

=begin
  def trend
  end
=end
  def self.set_global_evaluate_risk
    alive.each_slice(20) do |a|
      a.each do |b|
        b.set_evaluate_risk
      end
    end
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
            "iso2Code": geo.data["address"]["country_code"].upcase,
            "name": geo.data["display_name"],
            "region": {
              "id": geo.data["address"]["country_code"].upcase,
              "value": geo.data["display_name"]
            },
            "adminregion": {
              "id": geo.data["address"]["town"],
              "value": geo.data["address"]["state"]
            },
            "incomeLevel": {
              "id": "OEC",
              "value": "High income: OECD"
            },
            "lendingType": {
              "id": "LNX",
              "value": "Not classified"
            },
            "capitalCity": geo.data["address"]["town"],
            "longitude": geo.data["lon"],
            "latitude": geo.data["lat"]
          }
  end

  def set_init_evaluated_movement
    max_base_risk = Configurable.max_base_risk.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    self.servizi.for_evaluation.each do |s|
      em = s.build_eval_movement(max_base_risk,factor_for_amount,divisor_amount_for_factor)
      em.risk_factor = em.risk_factor.to_f.round(6)
      em.save
    end
  end

  def last_evaluated_risk
    evaluated_risks.order(eval_year: :desc, eval_month: :desc).pluck(:last_evaluated_risk).first || Configurable.min_base_risk
  end

  def account_numbers
    self.conti.pluck(:Pan)
  end

  def set_evaluated_risks
    # self.evaluated_risks.destroy_all
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
      evaluated_risk = self.evaluated_risks.where(
        anagrafica_id: self.id,
        eval_year: date_begin.year,
        eval_month: date_begin.month
      ).first_or_initialize
      evaluated_risk.eval_days = {}
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop = days_begin.at_end_of_month
      while (days_begin <= days_stop)
        services = Servizio.with_all_for_day(days_begin, self.id)
        current_risk_factor = 1
        services.each do |service|
          em = EvaluatedMovement.where(service_id: service.id).first_or_initialize
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
        evaluated_risk.eval_days[days_begin] = {
          "current_risk": current_risk,
          "nr_movements": services.count,
          "current_risk_decreased": current_risk_decreased
        }
        days_begin = days_begin.advance(days: 1)
      end
      evaluated_risk.save!
      date_begin = date_begin.advance(months: 1)
    end
    return self.evaluated_risks
  end


  def set_evaluated_movements
    self.evaluated_movements.destroy_all
    default_risk = Configurable.min_base_risk.to_f
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    max_base_risk = Configurable.max_base_risk.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    date = self.data_creazione.to_date
    date_begin = date.to_date.beginning_of_month
    stop = Date.today.beginning_of_month
    # stop = date.at_end_of_month
    while (date_begin <= stop)
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop = days_begin.at_end_of_month
      while (days_begin <= days_stop)
        services = Servizio.with_all_for_day(days_begin, self.id)
        services.each do |service|
          em = EvaluatedMovement.where(service_id: service.id).first_or_initialize
          em.set_properties(
            service,
            default_product_base_risk,
            max_base_risk,
            factor_for_amount,
            divisor_amount_for_factor)
          em.save
        end
        days_begin = days_begin.advance(days: 1)
      end
      date_begin = date_begin.advance(months: 1)
    end
    return self.evaluated_movements.count
  end

  def evaluated_risk_for_day(day)
    return Configurable.min_base_risk.to_f unless a = self.evaluated_risks.find_by_eval_year_and_eval_month(day.year,day.month).try(:eval_days)
    return Configurable.min_base_risk.to_f unless b = a["#{day}"]
    b["current_risk_decreased"] || b["current_risk"]
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
