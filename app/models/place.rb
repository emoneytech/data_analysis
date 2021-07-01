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
class Place < CorePgRecord
  # relations
  belongs_to :positionable, polymorphic: true, optional: true

  scope :geocoded, -> { where.not( lonlat: nil) }
  # geocoded_by :address
  # after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

end
