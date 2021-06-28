class Position < RiskRecord
  geocoded_by :address
  belongs_to :positionable, polymorphic: true, optional: true
  after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

end
