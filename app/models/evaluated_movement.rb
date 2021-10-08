# == Schema Information
#
# Table name: evaluated_movements
#
#  id                    :bigint           not null, primary key
#  triggerable_id        :bigint           not null
#  triggerable_type      :string           not null
#  triggerable_status    :string           not null
#  in_out                :enum             default("OUT")
#  internal              :boolean          default(FALSE), not null
#  customer_id           :integer          not null
#  movement_id           :integer          not null
#  movement_created_at   :datetime         not null
#  product_id            :integer
#  product_net_id        :integer
#  product_table_code    :integer
#  product_name          :string
#  product_base_risk     :float
#  payer                 :string
#  payer_iban            :string(50)
#  payer_card            :string(50)
#  payer_other           :string
#  beneficiary           :string
#  beneficiary_iban      :string(50)
#  beneficiary_card      :string(50)
#  beneficiary_other     :string
#  risk_factor           :float
#  risk_description      :string
#  recursion_customer_7  :integer
#  recursion_customer_30 :integer
#  recursion_all_7       :integer
#  recursion_all_30      :integer
#  amount_cents          :integer          default(0), not null
#  amount_currency       :string           default("EUR"), not null
#  origin_lonlat         :geography        point, 4326
#  destination_lonlat    :geography        point, 4326
#  origin_country        :string           not null
#  destination_country   :string           not null
#  lock_version          :integer          default(0), not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
class EvaluatedMovement < CorePgRecord
  include Filterable
  include PGEnum(eval_movement_type: %w[IN OUT])
  monetize :amount_cents

  # triggerable Service or Mandato
  belongs_to :triggerable, polymorphic: true, optional: true
  validates :triggerable_id, uniqueness: { scope: [:customer_id, :triggerable_type] }
  
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
  
  before_save :set_recursion


  # filters
  scope :filter_by_customer_id, -> (customer_id) { where(customer_id: customer_id)}
  scope :filter_by_payer, -> (name) { where("customer_payer ilike ?", "%#{name}%")}
  scope :filter_by_service_id, -> (service_id) { where(service_id: service_id)}

  scope :filter_by_beneficiary, -> (name) { where("beneficiary ilike ?", "%#{name}%")}
  scope :filter_by_beneficiary_card, -> (beneficiary_card) { where("beneficiary_card ilike ?", "%#{beneficiary_card}%")}
  scope :filter_by_beneficiary_iban, -> (beneficiary_iban) { where("beneficiary_iban ilike ?", "%#{beneficiary_iban}%")}
  scope :filter_by_beneficiary_other, -> (beneficiary_other) { where("beneficiary_other ilike ?", "%#{beneficiary_other}%")}

  scope :filter_by_product_name, -> (product_name) { where("product_name ilike ?", "%#{product_name}%")}
  scope :filter_by_daterange, -> (daterange) { where(
    "DATE_FORMAT(evaluated_movements.movement_created_at , '%Y-%m-%d') between ? and ?", daterange.split(' - ')[0].to_date.strftime('%Y-%m-%d'), daterange.split(' - ')[1].to_date.strftime('%Y-%m-%d')
  )}

  scope :filter_by_origin_country, -> (country) { where("origin_country = ?", "#{country}")}
  scope :filter_by_destination_country, -> (country) { where("destination_country = ?", "#{country}")}

  scope :filter_by_amount,     -> (amount_cents) { where("amount_cents  = ?", amount_cents)}
  scope :filter_by_min_amount, -> (amount_cents) { where("amount_cents >= ?", amount_cents)}
  scope :filter_by_max_amount, -> (amount_cents) { where("amount_cents <= ?", amount_cents)}

  scope :filter_by_recursion_all_7,       -> (recursion_all_7) { where("recursion_all_7  = ?", recursion_all_7)}
  scope :filter_by_min_recursion_all_7,   -> (recursion_all_7) { where("recursion_all_7 >= ?", recursion_all_7)}
  scope :filter_by_max_recursion_all_7,   -> (recursion_all_7) { where("recursion_all_7 <= ?", recursion_all_7)}

  scope :filter_by_recursion_all_30,      -> (recursion_all_30) { where("recursion_all_30  = ?", recursion_all_30)}
  scope :filter_by_min_recursion_all_30,  -> (recursion_all_30) { where("recursion_all_30 >= ?", recursion_all_30)}
  scope :filter_by_max_recursion_all_30,  -> (recursion_all_30) { where("recursion_all_30 <= ?", recursion_all_30)}

  scope :filter_by_recursion_customer_7,     -> (recursion_customer_7) { where("recursion_customer_7  = ?", recursion_customer_7)}
  scope :filter_by_min_recursion_customer_7, -> (recursion_customer_7) { where("recursion_customer_7 >= ?", recursion_customer_7)}
  scope :filter_by_max_recursion_customer_7, -> (recursion_customer_7) { where("recursion_customer_7 <= ?", recursion_customer_7)}

  scope :filter_by_recursion_customer_30,     -> (recursion_customer_30) { where("recursion_customer_30  = ?", recursion_customer_30)}
  scope :filter_by_min_recursion_customer_30, -> (recursion_customer_30) { where("recursion_customer_30 >= ?", recursion_customer_30)}
  scope :filter_by_max_recursion_customer_30, -> (recursion_customer_30) { where("recursion_customer_30 <= ?", recursion_customer_30)}

  scope :filter_by_internal, -> (internal) { where(internal: internal)}
  scope :filter_by_in_out, -> (value) { where(in_out: value)}

  # PostGIS SPATIAL QUERIES
  # for finding place X distance from a particular point (i.e. radius)
  scope :geocoded, -> { where.not( destination_lonlat: nil) }

  scope :within, -> (lon, lat, meter) {
    where(%{
     ST_Distance(destination_lonlat, 'POINT(%f %f)') < %d
    } % [lon, lat, meter])
  }

  # for finding trees within a certain bounding box
  scope :bbox, -> (sw_lon, sw_lat, ne_lon, ne_lat) {
    factory = RGeo::Geographic.spherical_factory(srid: 4326, geo_type: 'point')
    sw = factory.point(sw_lon, sw_lat)
    nw = factory.point(sw_lon, ne_lat)
    ne = factory.point(ne_lon, ne_lat)
    se = factory.point(ne_lon, sw_lat)

    ring = factory.linear_ring([sw, nw, ne, se])
    bbox = factory.polygon(ring)
    where('ST_Intersects(destination_lonlat, :bbox)', bbox: bbox)
  }

  def self.build_from_movement_id(movement_id)
    movement = Movimentoconto.only_customers.find movement_id rescue nil
    return unless movement
    point = movement.Point

    return if [70, 75].include?(point.to_i)
    if movement.IdMandato && movement.IdMandato != 0
      EvaluatedMovement.build_from_mandato_id(movement.IdMandato)
    else
      service_id = movement.idtransazione
      EvaluatedMovement.build_from_service_id(service_id, point)
    end
  end

  def self.build_from_mandato_id(mandato_id)
    mandato = Mandato.find mandato_id rescue nil
    return mandato
  end

  def self.build_from_service_id(service_id, point)
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
    return unless service
    return if service.anagrafica.Attivo.try(:to_i) == 6

    default_product_base_risk = Configurable.default_product_base_risk.to_f
    em = EvaluatedMovement.where(triggerable_type: "Servizio", triggerable_id: service.id, customer_id: service.point).first_or_initialize
    em.build_for_service(service)
    em.set_product_base_risk(service.product, default_product_base_risk)
    em.save
    return em
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

  def build_for_service(service)
    self.set_payer_from_customer(service.anagrafica)
    self.set_service(service)
    self.set_movement_for_out(service)
    self.set_beneficiary_from_service(service)
  end

  def set_payer_from_customer(customer)
    self.payer = customer.full_name
    unless customer.current_place
      customer.set_current_place 
      customer.reload
    end
    self.origin_lonlat = customer.current_place.lonlat
    self.origin_country = "MT"
  end

  def set_service(service)
    self.triggerable_status = service.status
    self.product_id = service.prodotto
    self.product_name = service.nomeprodotto
    self.product_table_code = service.product.codtabella
    self.amount = service.importo.to_f
  end

  def set_movement_for_out(service)
    movement = service.movimenticonti.where(Point: service.anagrafica.id).where(contodiprovenienza: service.anagrafica.conti.pluck(:Pan)).first
    return unless movement
    self.movement_id = movement.id
    self.movement_created_at = movement.dataMovimento
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

  def set_destination_lonlat
    if self.beneficiary_iban != ''
      iban = self.beneficiary_iban
      iban_info = IbanUtils.validate_iban(iban)
      bank_data_hash = iban_info["bank_data"]
      city = bank_data_hash["city"]
      country = bank_data_hash["country"]
      self.destination_country = NormalizeCountry(country, :to => :alpha2)
      address = bank_data_hash["address"]
      result = Geocoder.search(country, params: {city: city, address: address}).first
      result = Geocoder.search("#{address}, #{country}").first unless result
      self.beneficiary_other = "#{address} - #{city}, #{country}"
      self.destination_lonlat = "POINT(#{result.longitude} #{result.latitude})" if result
    end
  end

  def count_recursive_for_customer(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at
    EvalMovement.where(
      customer_id: self.customer_id
    ).where(
      "eval_movements.beneficiary = ? 
      OR (eval_movements.beneficiary_iban != '' AND eval_movements.beneficiary_iban = ?)
      OR (eval_movements.beneficiary_card != '' AND eval_movements.beneficiary_card = ?)", self.beneficiary, self.beneficiary_iban, self.beneficiary_card
    ).where(
      "eval_movements.movement_created_at 
        BETWEEN '#{start_date.to_date.beginning_of_day}' 
        AND '#{end_date}'"
    ).count
  end

  def count_recursive(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at
    EvalMovement.where(
      "eval_movements.beneficiary = ? 
      OR (eval_movements.beneficiary_iban != '' AND eval_movements.beneficiary_iban = ?)
      OR (eval_movements.beneficiary_card != '' AND eval_movements.beneficiary_card = ?)", self.beneficiary, self.beneficiary_iban, self.beneficiary_card
   ).where(
      "eval_movements.movement_created_at 
        BETWEEN '#{start_date.to_date.beginning_of_day}' 
        AND '#{end_date}'"
    ).count
  end

  def set_recursion
    self.recursion_all_7       = count_recursive(days=7)
    self.recursion_all_30      = count_recursive(days=30)
    self.recursion_customer_7  = count_recursive_for_customer(days=7)
    self.recursion_customer_30 = count_recursive_for_customer(days=30)
  end

  def set_product_base_risk(
    product,
    default_product_base_risk = Configurable.default_product_base_risk.to_f)
    self.product_base_risk =
      product.try(:base_risk) ? product.base_risk : default_product_base_risk
  end

end
