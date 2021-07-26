# == Schema Information
#
# Table name: eval_movements
#
#  id                  :bigint           not null, primary key
#  customer_id         :integer          not null
#  customer_full_name  :string
#  service_id          :integer          not null
#  service_status      :string
#  service_updated_at  :datetime
#  service_created_at  :datetime
#  movement_id         :integer          not null
#  movement_created_at :datetime         not null
#  product_net_id      :integer
#  product_id          :integer
#  product_table_code  :integer
#  product_name        :string
#  product_base_risk   :float
#  beneficiary         :string
#  beneficiary_iban    :string
#  beneficiary_other   :string
#  risk_factor         :float
#  risk_description    :string
#  recursion           :jsonb            not null
#  amount_cents        :integer          default(0), not null
#  amount_currency     :string           default("EUR"), not null
#  destination_lonlat  :geography        point, 4326
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  beneficiary_card    :string(50)
#
class EvalMovement < CorePgRecord
  monetize :amount_cents
  
  belongs_to :customer,
             class_name: 'Anagrafica',
             foreign_key: 'customer_id',
             primary_key: 'IdUtente'
  belongs_to :service,
             class_name: 'Servizio',
             foreign_key: 'service_id',
             primary_key: 'idservizio'
  belongs_to :movement,
             class_name: 'Movimentoconto',
             foreign_key: 'movement_id',
             primary_key: 'idMovimentiConti'
  belongs_to :product,
             class_name: 'Prodotto',
             foreign_key: 'product_id',
             primary_key: 'idprodotto',
             optional: true
       
  delegate :current_place, to: :customer
  alias_method :origin, :current_place

  validates :service_id, uniqueness: true
  
# attr reader
  attr_reader :recursion_customer_7, :recursion_customer_30, :recursion_all_7, :recursion_all_30
  before_save :set_recursion
  # after_save :set_destination, if: :is_bankwire?

  scope :for_evaluation, -> { order(movement_created_at: :asc)}

  scope :with_all_for_day, ->(day) {
    where("movement_created_at BETWEEN '#{day.beginning_of_day}' 
    AND '#{day.end_of_day}'").order(movement_created_at: :asc)
  }
  scope :with_all_for_month, ->(day) {
    where("movement_created_at BETWEEN '#{day.beginning_of_month}' 
    AND '#{day.at_end_of_month}'").order(movement_created_at: :asc)
  }
  scope :for_month, ->(day) {
    where("movement_created_at BETWEEN '#{day.beginning_of_month}' 
    AND '#{day.at_end_of_month}'")
  }
  scope :all_bankwire, -> { where(product_table_code: Codicetabella.find_by_nometabella('bonifici').codtab)}

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

  def latitude
    self.destination_lonlat.try(:lat)
  end

  def longitude
    self.destination_lonlat.try(:lon)
  end

  def is_bankwire?
    self.product_table_code.to_i === Codicetabella.find_by_nometabella('bonifici').codtab
  end

  def self.last_service_id
    select(:service_id).order(service_id: :desc).first.try(:service_id) || 0
  end

  def previous
    EvalMovement.where("customer_id = ? AND movement_created_at < ? ", self.customer_id, self.movement_created_at).order(movement_created_at: :desc).first
  end
  
  def all_previous
    EvalMovement.where("movement_created_at < ? ", self.movement_created_at).order(movement_created_at: :desc).first
  end

  def next
    EvalMovement.where("customer_id = ? AND movement_created_at > ?", self.customer_id, self.movement_created_at).order(movement_created_at: :asc).first
  end

  def all_next
    EvalMovement.where("movement_created_at > ?", self.movement_created_at).order(movement_created_at: :asc).first
  end

  def set_properties(service,
    default_product_base_risk = Configurable.default_product_base_risk.to_f,
    max_base_risk = Configurable.max_base_risk.to_f,
    factor_for_amount = Configurable.factor_for_amount.to_f,
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f)

    self.set_customer(service.anagrafica)
    self.set_service(service)
    self.set_movement(service)
    self.set_beneficiary(service)
    self.set_product_base_risk(service.product, default_product_base_risk)
    self.set_evaluated_customer_factor(service.anagrafica, factor_for_amount, divisor_amount_for_factor)
  end

  def build_for_service(service)
    self.set_customer(service.anagrafica)
    self.set_service(service)
    self.set_movement(service)
    self.set_beneficiary(service)
  end

  def set_customer(anagrafica)
    self.customer_id = anagrafica.id
    self.customer_full_name = anagrafica.full_name
  end

  def set_service(service)
    self.service_id = service.id
    self.service_status = service.status
    self.service_created_at = service.datainserimento
    self.service_updated_at = service.lastupdate
    self.product_id = service.prodotto
    self.product_name = service.nomeprodotto
    self.product_table_code = service.product.codtabella
    self.amount = service.importo.to_f
  end

  def set_movement(service)
    movement = service.movimenticonti.where(Point: service.anagrafica.id).where(contodiprovenienza: service.anagrafica.conti.pluck(:Pan)).first
    return unless movement
    self.movement_id = movement.id
    self.movement_created_at = movement.dataMovimento
  end

  def set_beneficiary(service = self.service)
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
        self.beneficiary_iban = "#{service.ricaricacarta.numerocrip}"
        self.beneficiary_other = "#{service.anagrafica.full_address}"
      else
        self.beneficiary_other =
          "check for #{service.prodotto}: #{service.nomeprodotto}"
      end
    when 'bonifici'
      if service.bonifico
        self.beneficiary = "#{service.bonifico.destinatario}"
        self.beneficiary_iban = "#{service.bonifico.ibandest}"
        self.set_beneficiary_point
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

  def set_beneficiary_point
    if self.beneficiary_iban != ''
      iban = self.beneficiary_iban
      iban_info = IbanUtils.validate_iban(iban)
      bank_data_hash = iban_info["bank_data"]
      city = bank_data_hash["city"]
      country = bank_data_hash["country"]
      address = bank_data_hash["address"]
      result = Geocoder.search(city, params: {country: country, address: address}).first
      self.beneficiary_other = "#{address} - #{city}, #{country}"
      self.destination_lonlat = "POINT(#{result.longitude} #{result.latitude})"
    end
  end

  def set_product_base_risk(
    product,
    default_product_base_risk = Configurable.default_product_base_risk.to_f)
    self.product_base_risk =
      product.try(:base_risk) ? product.base_risk : default_product_base_risk
  end

  def set_evaluated_customer_factor(anagrafica,
                                factor_for_amount = Configurable.factor_for_amount.to_f,
                                divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f)

    recursive = self.count_recursive(30)
    unless recursive > 0
      self.risk_factor =
        (
          (
            (
              (
                ((self.product_base_risk.percentage_of(1)) - 100) *
                  self.product_base_risk
              ) *
                (
                  factor_for_amount *
                    ((self.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      self.risk_description = "Operation factor: #{self.risk_factor}"
    else
      self.risk_factor =
        (
          (
            (
              (((self.product_base_risk.percentage_of(1)) - 100) * recursive) *
                (
                  factor_for_amount *
                    ((self.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      self.risk_description =
        "Repeated: #{recursive} - Factor: #{self.risk_factor}"
    end
  end

  def count_recursive_for_customer(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at.to_date
    EvalMovement.where(customer_id: self.customer_id)
    .where("eval_movements.beneficiary = ? OR eval_movements.beneficiary_iban = ?", self.beneficiary, self.beneficiary_iban)
    .where("eval_movements.movement_created_at BETWEEN '#{start_date.to_date.beginning_of_day}' 
            AND '#{end_date}'").count
  end

  def count_recursive(days=7)
    start_date = self.movement_created_at.to_date - days.days
    end_date = self.movement_created_at.to_date
    EvalMovement.where(
      "eval_movements.beneficiary = ? 
        OR eval_movements.beneficiary_iban = ?", self.beneficiary, self.beneficiary_iban
    ).where(
      "eval_movements.movement_created_at 
        BETWEEN '#{start_date.to_date.beginning_of_day}' 
        AND '#{end_date}'"
    ).count
  end

  def set_recursion
    self.recursion = {
      "customer_id": {
        "day_7": count_recursive_for_customer(days=7),
        "day_30": count_recursive_for_customer(days=30)
      },
      "all": {
        "day_7": count_recursive(days=7),
        "day_30": count_recursive(days=30)
      }
    }
  end

  def recursion_customer_7
    self.recursion["customer_id"] ? self.recursion["customer_id"]["day_7"] : ' - '
  end
  def recursion_customer_30
    self.recursion["customer_id"] ? self.recursion["customer_id"]["day_30"] : ' - '
  end
  def recursion_all_7
    self.recursion["all"] ? self.recursion["all"]["day_7"] : ' - '
  end
  def recursion_all_30
    self.recursion["all"] ? self.recursion["all"]["day_30"] : ' - '
  end
  
end
