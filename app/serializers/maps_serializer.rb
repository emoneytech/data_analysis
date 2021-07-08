class MapsSerializer < ActiveModel::Serializer
  attributes :type, :features

  def type
    return "FeatureCollection"
  end

  def features
    object.map do |eval_movement|
      EvalMovementSerializer.new(eval_movement)
    end
  end
end
