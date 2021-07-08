class PlacesSerializer < ActiveModel::Serializer
  attributes :type, :features

  def type
    return "FeatureCollection"
  end

  def features
    object.map do |place|
      PlaceSerializer.new(place)
    end
  end
end
