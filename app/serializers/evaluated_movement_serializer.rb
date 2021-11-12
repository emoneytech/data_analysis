class EvaluatedMovementSerializer < ActiveModel::Serializer
  attributes :type, :properties, :geometry

  def type
    return "Feature"
  end

  def properties
    return {
      id: object.id,
      in_out: object.in_out,
      address: object.beneficiary_other,
      risk_factor: object.risk_factor,
      recursions: object.recursions,
      amount: object.amount,
      triggerable_id: object.triggerable_id,
      triggerable_type: object.triggerable_type,
      triggerable_status: object.triggerable_status,
      customer_full_name: object.customer_full_name,
      beneficiary: object.beneficiary,
      beneficiary_iban: object.beneficiary_iban,
      beneficiary_card: object.beneficiary_card,
      movement_created_at: object.movement_created_at
    }
  end

  def geometry
    return {
      type: "Point",
      coordinates: [
        object.destination_lonlat.x,
        object.destination_lonlat.y
      ]
    }
  end

end
