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
