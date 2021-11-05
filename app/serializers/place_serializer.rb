# == Schema Information
#
# Table name: places
#
#  id                :bigint           not null, primary key
#  address           :string
#  city              :string
#  country           :string
#  lonlat            :geography        point, 4326
#  name              :string
#  positionable_type :string           not null
#  region            :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  positionable_id   :bigint           not null
#
# Indexes
#
#  index_places_on_lonlat                                 (lonlat) USING gist
#  index_places_on_positionable                           (positionable_type,positionable_id)
#  index_places_on_positionable_type                      (positionable_type)
#  index_places_on_positionable_type_and_positionable_id  (positionable_type,positionable_id)
#
class PlaceSerializer < ActiveModel::Serializer
  attributes :type, :properties, :geometry

  def type
    return "Feature"
  end

  def properties
    return {
      id: object.id,
      address: object.address,
      name: object.name
    }
  end

  def geometry
    return {
      type: "Point",
      coordinates: [
        object.lonlat.x,
        object.lonlat.y
      ]
    }
  end

end
