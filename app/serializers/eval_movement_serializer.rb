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
class EvalMovementSerializer < ActiveModel::Serializer
  attributes :type, :properties, :geometry

  def type
    return "Feature"
  end

  def properties
    return {
      id: object.id,
      address: object.beneficiary_other,
      risk_factor: object.risk_factor,
      recursion: object.recursion,
      amount: object.amount,
      service: object.service_id,
      service_status: object.service_status,
      customer_full_name: object.customer_full_name,
      beneficiary: object.beneficiary,
      beneficiary_iban: object.beneficiary_iban
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
