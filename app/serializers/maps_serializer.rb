class MapsSerializer < ActiveModel::Serializer
  attributes :type, :features

  def type
    return "FeatureCollection"
  end

  def features
    object.map do |evaluated_movement|
      EvaluatedMovementSerializer.new(evaluated_movement)
    end
  end
end
