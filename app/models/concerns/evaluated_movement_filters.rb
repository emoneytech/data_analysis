module EvaluatedMovementFilters
  extend ActiveSupport::Concern

  included do
    # filters
    scope :filter_by_customer_id, -> (customer_id) { where(customer_id: customer_id)}
    scope :filter_by_payer, -> (name) { where("customer_payer ilike ?", "%#{name}%")}
    scope :filter_by_service_id, -> (service_id) { where(service_id: service_id)}

    scope :filter_by_beneficiary, -> (name) { where("beneficiary ilike ?", "%#{name}%")}
    scope :filter_by_beneficiary_card, -> (beneficiary_card) { where("beneficiary_card ilike ?", "%#{beneficiary_card}%")}
    scope :filter_by_beneficiary_iban, -> (beneficiary_iban) { where("beneficiary_iban ilike ?", "%#{beneficiary_iban}%")}
    scope :filter_by_beneficiary_other, -> (beneficiary_other) { where("beneficiary_other ilike ?", "%#{beneficiary_other}%")}

    scope :filter_by_product_name, -> (product_name) { where("product_name ilike ?", "%#{product_name}%")}

    scope :filter_by_daterange, ->(daterange) {
      where("movement_created_at BETWEEN '#{daterange.split(' - ')[0].to_date.beginning_of_day}' 
        AND '#{daterange.split(' - ')[1].to_date.end_of_day}'")
    }

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
  end

end