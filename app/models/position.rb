# == Schema Information
#
# Table name: positions
#
#  id                :bigint           not null, primary key
#  positionable_type :string(255)      not null
#  positionable_id   :bigint           not null
#  latitude          :decimal(10, 6)
#  longitude         :decimal(10, 6)
#  address           :string(255)
#  description       :text(65535)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Position < RiskRecord
  geocoded_by :address
  belongs_to :positionable, polymorphic: true, optional: true
  after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

end
