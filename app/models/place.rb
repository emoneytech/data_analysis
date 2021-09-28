# == Schema Information
#
# Table name: places
#
#  id                :bigint           not null, primary key
#  positionable_type :string           not null
#  positionable_id   :bigint           not null
#  name              :string
#  address           :string
#  city              :string
#  region            :string
#  country           :string
#  lonlat            :geography        point, 4326
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Place < CorePgRecord
  attr_reader :latitude, :longitude

  # relations
  belongs_to :positionable, polymorphic: true, optional: true

  scope :geocoded, -> { where.not( lonlat: nil) }
  # geocoded_by :address
  # after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

  
  # PostGIS SPATIAL QUERIES
  # for finding place X distance from a particular point (i.e. radius)
  scope :within, -> (lon, lat, meter) {
    where(%{
     ST_Distance(lonlat, 'POINT(%f %f)') < %d
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
    where('ST_Intersects(lonlat, :bbox)', bbox: bbox)
  }

  def latitude
    self.lonlat.try(:lat)
  end

  def longitude
    self.lonlat.try(:lon)
  end

end
