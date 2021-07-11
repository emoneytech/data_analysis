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
