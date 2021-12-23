# == Schema Information
#
# Table name: evaluated_movements
#
#  id                    :bigint           not null, primary key
#  amount_cents          :integer          default(0), not null
#  amount_currency       :string           default("EUR"), not null
#  beneficiary           :string
#  beneficiary_card      :string(50)
#  beneficiary_iban      :string(50)
#  beneficiary_other     :string
#  destination_country   :string           not null
#  destination_lonlat    :geography        point, 4326
#  evaluated_factor30    :float
#  evaluated_factor7     :float
#  in_out                :enum             default("OUT")
#  internal              :boolean          default(FALSE), not null
#  lock_version          :integer          default(0), not null
#  movement_created_at   :datetime         not null
#  origin_country        :string           not null
#  origin_lonlat         :geography        point, 4326
#  payer                 :string
#  payer_card            :string(50)
#  payer_iban            :string(50)
#  payer_other           :string
#  product_base_risk     :float
#  product_name          :string
#  product_table_code    :integer
#  recursion_all_30      :integer
#  recursion_all_7       :integer
#  recursion_customer_30 :integer
#  recursion_customer_7  :integer
#  risk_description      :string
#  risk_factor           :float
#  triggerable_status    :string           not null
#  triggerable_type      :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  customer_id           :integer          not null
#  movement_id           :integer          not null
#  product_id            :integer
#  product_net_id        :integer
#  triggerable_id        :bigint           not null
#
# Indexes
#
#  index_evaluated_movements_on_amount_cents           (amount_cents)
#  index_evaluated_movements_on_beneficiary            (beneficiary)
#  index_evaluated_movements_on_beneficiary_card       (beneficiary_card)
#  index_evaluated_movements_on_beneficiary_iban       (beneficiary_iban)
#  index_evaluated_movements_on_customer_id            (customer_id)
#  index_evaluated_movements_on_destination_country    (destination_country)
#  index_evaluated_movements_on_destination_lonlat     (destination_lonlat) USING gist
#  index_evaluated_movements_on_evaluated_factor30     (evaluated_factor30)
#  index_evaluated_movements_on_evaluated_factor7      (evaluated_factor7)
#  index_evaluated_movements_on_in_out                 (in_out)
#  index_evaluated_movements_on_internal               (internal)
#  index_evaluated_movements_on_lock_version           (lock_version)
#  index_evaluated_movements_on_movement_created_at    (movement_created_at)
#  index_evaluated_movements_on_origin_country         (origin_country)
#  index_evaluated_movements_on_origin_lonlat          (origin_lonlat) USING gist
#  index_evaluated_movements_on_payer                  (payer)
#  index_evaluated_movements_on_payer_card             (payer_card)
#  index_evaluated_movements_on_payer_iban             (payer_iban)
#  index_evaluated_movements_on_product_id             (product_id)
#  index_evaluated_movements_on_product_name           (product_name)
#  index_evaluated_movements_on_product_table_code     (product_table_code)
#  index_evaluated_movements_on_recursion_all_30       (recursion_all_30)
#  index_evaluated_movements_on_recursion_all_7        (recursion_all_7)
#  index_evaluated_movements_on_recursion_customer_30  (recursion_customer_30)
#  index_evaluated_movements_on_recursion_customer_7   (recursion_customer_7)
#  index_triggerable_on_customer                       (customer_id,triggerable_id,triggerable_type) UNIQUE
#  index_triggerable_on_evaluated_movements            (triggerable_type,triggerable_id)
#
class EvaluatedMovement < CorePgRecord
  include Filterable
  include EvaluatedMovementFilters

  include PGEnum(evaluated_movement_type: %w[IN OUT])
  monetize :amount_cents

  # triggerable Service or Mandato
  belongs_to :triggerable, polymorphic: true#, optional: true
  validates :triggerable_id, uniqueness: { scope: [:customer_id, :triggerable_type] }
  
  validates :origin_country, :destination_country, presence: true
  # customer
  belongs_to :customer,
             class_name: 'Anagrafica',
             foreign_key: 'customer_id',
             primary_key: 'IdUtente'
  # movement
  belongs_to :movement,
             class_name: 'Movimentoconto',
             foreign_key: 'movement_id',
             primary_key: 'idMovimentiConti'
  # product
  belongs_to :product,
             class_name: 'Prodotto',
             foreign_key: 'product_id',
             primary_key: 'idprodotto',
             optional: true

  # attr reader
  attr_reader :recursions
  
  
  after_initialize :build_from_movement
  
  before_save :set_recursion
  after_create :send_notification
  # after_save :set_queue_customer

  def self.icon
    'search-dollar'
  end

  def self.reports(daterange)
    items = self.filter_by_daterange(daterange)
    ary = {
      count: items.count,
      max: items.maximum(:amount_cents),
      min: items.minimum(:amount_cents),
      average: items.average(:amount_cents),
      balanced_average: items.for_medium(3).average(:amount_cents),
      in: {
        count: items.filter_by_in_out('IN').count,
        max: items.filter_by_in_out('IN').maximum(:amount_cents),
        min: items.filter_by_in_out('IN').minimum(:amount_cents),
        average: items.filter_by_in_out('IN').average(:amount_cents),
      },
      out: {
        count: items.filter_by_in_out('OUT').count,
        max: items.filter_by_in_out('OUT').maximum(:amount_cents),
        min: items.filter_by_in_out('OUT').minimum(:amount_cents),
        average: items.filter_by_in_out('OUT').average(:amount_cents),
      }
    }
    return ary
  end

  def customer_full_name
    self.in_out === 'IN' ? "#{beneficiary}" : "#{payer}"
  end

  def self.last_id
    order(movement_created_at: :desc).select(:movement_id).first.movement_id
  end

  def previous
    EvaluatedMovement.where("customer_id = ? AND movement_created_at < ? ", self.customer_id, self.movement_created_at).order(movement_created_at: :desc).first
  end
  
  def next
    EvaluatedMovement.where("customer_id = ? AND movement_created_at > ?", self.customer_id, self.movement_created_at).order(movement_created_at: :asc).first
  end
  
  def all_previous
    EvaluatedMovement.where("movement_created_at < ? ", self.movement_created_at).order(movement_created_at: :desc).first
  end

  def all_next
    EvaluatedMovement.where("movement_created_at > ?", self.movement_created_at).order(movement_created_at: :asc).first
  end

  def build_from_movement
    return unless new_record?
    movement = Movimentoconto.only_customers.find movement_id rescue nil
    return unless movement

    if movement.out?
      self.in_out = 'OUT'
      self.customer_id = point = movement.Point
      return if [70, 75].include?(point.to_i)
      if movement.IdMandato && movement.IdMandato != 0
        # binding.pry
      else
        out_from_service_id(movement.idtransazione, point)
      end
    else
      self.in_out = 'IN'
      self.customer_id = point = movement.anagrafica.id
      if movement.IdMandato && movement.IdMandato != 0
        in_from_mandato_id(movement.IdMandato)
      else
        in_from_service_id(movement.idtransazione, point)
      end
    end
    self.amount = movement.Importo.to_f.abs
  end

  def in_from_mandato_id(mandato_id)
    mandato = Mandato.find mandato_id rescue nil
    return unless mandato
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    self.product_base_risk = Configurable.default_bankwire_in_base_risk
    build_for_mandato(mandato)
  end
  
  def build_for_mandato(mandato)
    # set_payer_from_customer(mandato.bank_user)
    set_from_mandato(mandato)
    set_beneficiary_from_mandato(mandato)
  end
  
  def set_beneficiary_from_mandato(mandato = self.mandato)
    self.beneficiary = "#{mandato.bank_user.full_name}"
    self.beneficiary_iban = "#{mandato.Iban}"
    self.beneficiary_other = "#{mandato.Ordinante}"
    destination_account = mandato.try(:bank_user)
    if destination_account
      destination_account.set_current_place unless destination_account.current_place
      self.destination_lonlat = destination_account.reload.current_place.lonlat
      self.destination_country = "MT"
    end
    self.internal = false
    self.payer = "#{mandato.info[:name]}"
    self.payer_iban = "#{mandato.info[:iban]}"
    self.payer_other = "#{mandato.info[:to_other]}"
    set_origin_lonlat()
  end


  def set_from_mandato(mandato)
    self.triggerable = mandato
    self.triggerable_status = mandato.Stato
    self.product_id = ''
    self.product_name = 'Bank Wire From Mandato'
    self.product_table_code = ''
    # self.amount = mandato.Importo.to_f
  end

  def in_from_service_id(service_id, point)
    service = Servizio.joins(:product,:anagrafica, :movimenticonti)
      .preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno)
      .where(idservizio: service_id)
      .where
      .not(
        'SUBSTRING(prodotto, -3, 3) IN (?)',
        ExcludedProduct.all.pluck(:last_3_numbers)
      )
      .uniq.first
    return unless service
    return if service.anagrafica.Attivo.try(:to_i) == 6
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    set_product_base_risk(service.product, default_product_base_risk)
    build_for_service(service)
  end

  def out_from_service_id(service_id, point)
    service = set_service(service_id, point)
    return unless service
    return if service.anagrafica.Attivo.try(:to_i) == 6
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    set_product_base_risk(service.product, default_product_base_risk)
    build_for_service(service)
  end

  def set_service(service_id, point)
    service = Servizio.joins(:product,:anagrafica,:movimenticonti)
      .preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno)
      .where('movimenticonti.Point = ?', point)
      .references(:movimenticonti)
      .where(point: point, idservizio: service_id)
      .where
      .not(
        'SUBSTRING(prodotto, -3, 3) IN (?)',
        ExcludedProduct.all.pluck(:last_3_numbers)
      )
      .uniq.first
  end

  def build_for_service(service)
    set_payer_from_customer(service.anagrafica)
    set_from_service(service)
    set_beneficiary_from_service(service)
  end

  def set_payer_from_customer(customer)
    self.payer = customer.full_name
    unless customer.current_place
      customer.set_current_place 
      customer.reload
    end
    customer.set_current_place unless customer.current_place.try(:lonlat)
    self.origin_lonlat = customer.reload.current_place.lonlat
    self.origin_country = "MT"
  end

  def set_from_service(service)
    self.triggerable = service
    self.triggerable_status = service.status
    self.product_id = service.prodotto
    self.product_name = service.nomeprodotto
    self.product_table_code = service.product.codtabella
    # self.amount = service.importo.to_f
  end

  def set_beneficiary_from_service(service = self.service)
    self.beneficiary = 'Beneficiary not identifiable'
    return unless service.product.try(:nometabella)
    case service.product.nometabella
    when 'Ricariche'
      if service.ricarica
        self.beneficiary = "#{service.ricarica.numerotelefono}"
        self.beneficiary_iban = ""
        self.beneficiary_other = "#{service.ricarica.action}"
      end
    when 'ricarichecarta'
      if service.anagrafica.conti.where(Pan: service.ricaricacarta.numerocarta).count > 0
        self.beneficiary = "#{service.anagrafica.full_name}"
        self.beneficiary_iban = ''
        self.beneficiary_card = "#{service.ricaricacarta.numerocrip}"
        self.beneficiary_other = "#{service.anagrafica.full_address}"
      else
        destination_account = Conto.find_by_Pan(service.ricaricacarta.numerocarta).try(:bank_user)
        unless destination_account
          self.beneficiary_other = "check for #{service.prodotto}: #{service.nomeprodotto}"
        else
          self.beneficiary = "#{destination_account.full_name}"
          self.beneficiary_iban = ''
          self.beneficiary_card = "#{service.ricaricacarta.numerocrip}"
          self.beneficiary_other = "#{destination_account.full_address}"
          destination_account.set_current_place unless destination_account.current_place
          self.destination_lonlat = destination_account.reload.current_place.lonlat
          self.internal = true
        end
      end
      self.destination_country = "MT"
    when 'bonifici'
      if service.bonifico
        self.internal = true if service.bonifico.internal?
        self.beneficiary = "#{service.bonifico.destinatario}"
        self.beneficiary_iban = "#{service.bonifico.ibandest}"
        self.payer = "#{service.bonifico.ordinante}"
        self.payer_iban = "#{service.bonifico.ibanOrdinante}"
        self.payer_other = "#{service.bonifico.causale}"
        self.set_destination_lonlat
      end
    when 'assegnovirtuale'
      if service.prodotto.to_s == "1614" || service.prodotto.to_s == "1612"
        movement = service.movimenticonti.where(Point: service.anagrafica.id).where(contodiprovenienza: service.anagrafica.conti.pluck(:Pan)).first
        self.beneficiary = "#{movement.Causale}"
      elsif service.prodotto.to_s == "200618" || service.prodotto.to_s == "200619" || service.prodotto.to_s == "200620"
        self.beneficiary = "Beneficiary not identifiable"
      else
        self.beneficiary = "#{service.assegnovirtuale.beneficiary_name}"
      end
    when 'incassoAssegno'
      self.beneficiary = "#{service.incassoassegno.beneficiary_name}"
      self.beneficiary_iban = "#{service.incassoassegno.beneficiary_iban}"
      self.beneficiary_other = "#{service.incassoassegno.beneficiary_other}"
    else
      self.beneficiary = 'Beneficiary not identifiable'
    end
  end


  def recursions
    {
      all_7: self.recursion_all_7,
      all_30: self.recursion_all_30,
      customer_7: self.recursion_customer_7,
      customer_30: self.recursion_customer_30
    }
  end

  def all_previous
    EvaluatedMovement.where("movement_created_at < ? ", self.movement_created_at).order(movement_created_at: :desc).first
  end

  def all_next
    EvaluatedMovement.where("movement_created_at > ?", self.movement_created_at).order(movement_created_at: :asc).first
  end

  #private

  def set_destination_lonlat
    if self.beneficiary_iban && self.beneficiary_iban != ''
      iban = self.beneficiary_iban
      iban_info = IbanCheck.validate_iban(iban)
      bank_data_hash = iban_info["bank_data"]
      city = bank_data_hash["city"]
      country = bank_data_hash["country"]
      self.destination_country = NormalizeCountry(country, :to => :alpha2)
      address = bank_data_hash["address"]
      self.beneficiary_other = "#{address} - #{city}, #{country}"
      self.destination_lonlat = "POINT(#{iban_info["position"]["longitude"]} #{iban_info["position"]["latitude"]})"
    end
  end

  def set_origin_lonlat
    if self.payer_iban && self.payer_iban != ''
      iban = self.payer_iban
      iban_info = IbanCheck.validate_iban(iban)
      bank_data_hash = iban_info["bank_data"]
      city = bank_data_hash["city"]
      country = bank_data_hash["country"]
      self.origin_country = NormalizeCountry(country, :to => :alpha2)
      address = bank_data_hash["address"]
      self.origin_lonlat = "POINT(#{iban_info["position"]["longitude"]} #{iban_info["position"]["latitude"]})"
    end
  end

  def recalculate_position
    self.set_origin_lonlat
    self.set_destination_lonlat
    self.save
  end

  def recursive_for_customer(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at
    return EvaluatedMovement.where(
      customer_id: self.customer_id
    ).where(
      "(evaluated_movements.beneficiary ilike ? 
      OR (evaluated_movements.beneficiary_iban != '' AND evaluated_movements.beneficiary_iban = ?)
      OR (evaluated_movements.beneficiary_card != '' AND evaluated_movements.beneficiary_card = ?))", self.beneficiary.gsub("\\", "-"), self.beneficiary_iban, self.beneficiary_card
    ).where(
      "(evaluated_movements.payer ilike ? 
      OR (evaluated_movements.payer_iban != '' AND evaluated_movements.payer_iban = ?)
      OR (evaluated_movements.payer_card != '' AND evaluated_movements.payer_card = ?))", self.payer.gsub("\\", "-"), self.payer_iban, self.payer_card
    ).where(
      "evaluated_movements.movement_created_at 
        BETWEEN '#{start_date.to_date.beginning_of_day}' 
        AND '#{end_date}'"
    )
  end

  def count_recursive_for_customer(days=7)
    recursive_for_customer(days).count
  end

  def recursive_for_all(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at
    EvaluatedMovement.where(
      "(evaluated_movements.beneficiary ilike ? 
      OR (evaluated_movements.beneficiary_iban != '' AND evaluated_movements.beneficiary_iban = ?)
      OR (evaluated_movements.beneficiary_card != '' AND evaluated_movements.beneficiary_card = ?))", self.beneficiary.gsub("\\", "-"), self.beneficiary_iban, self.beneficiary_card
    ).where(
      "(evaluated_movements.payer ilike ? 
      OR (evaluated_movements.payer_iban != '' AND evaluated_movements.payer_iban = ?)
      OR (evaluated_movements.payer_card != '' AND evaluated_movements.payer_card = ?))", self.payer.gsub("\\", "-"), self.payer_iban, self.payer_card
    ).where(
      "evaluated_movements.movement_created_at 
        BETWEEN '#{start_date.to_date.beginning_of_day}' 
        AND '#{end_date}'"
    )
  end

  def count_recursive(days=7)
    recursive_for_all(days).count
  end

  def set_recursion
    self.recursion_all_7       = count_recursive(7)
    self.recursion_all_30      = count_recursive(30)
    self.recursion_customer_7  = count_recursive_for_customer(7)
    self.recursion_customer_30 = count_recursive_for_customer(30)
    self.set_evaluated_factors
  end

  def set_product_base_risk(
    product,
    default_product_base_risk = Configurable.default_product_base_risk.to_f)
    self.product_base_risk =
      product.try(:base_risk) ? product.base_risk : default_product_base_risk
  end

  def send_notification
    type = self.in_out === 'IN' ? 'success' : 'error'
    content = "#{self.product_name}: #{self.amount}"
    if self.in_out === 'IN' && self.origin_lonlat
      coords = [self.origin_lonlat.lat, self.origin_lonlat.lon]
    elsif self.in_out === 'out' && self.destination_lonlat
      coords = [self.destination_lonlat.lat, self.destination_lonlat.lon]
    else
      coords = [35.9480742, 14.3973929]
    end

    NotifyWorker.perform_async(type, content, coords)
  end

  def set_evaluated_factors
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    base_calc7 = recursion_customer_7 > 0 ? (((self.product_base_risk.percentage_of(1)) - 100) * recursion_customer_7).to_f : ((self.product_base_risk.percentage_of(1)) - 100).to_f
    self.evaluated_factor7 = (((base_calc7 * (factor_for_amount * ((self.amount_cents / 100).to_f / divisor_amount_for_factor))) + 100) / 100).to_f
    base_calc30 = recursion_customer_30 > 0 ? (((self.product_base_risk.percentage_of(1)) - 100) * recursion_customer_30).to_f : ((self.product_base_risk.percentage_of(1)) - 100).to_f
    self.evaluated_factor30 = (((base_calc30 * (factor_for_amount * ((self.amount_cents / 100).to_f / divisor_amount_for_factor))) + 100) / 100).to_f
  end

  def evaluate_customer
    EvaluateCustomerForMovement.perform_async(self.id)
  end

  def set_queue_customer
    QueueCustomer.where(customer_id: self.customer_id).first_or_create
  end

end
