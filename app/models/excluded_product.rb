# == Schema Information
#
# Table name: excluded_products
#
#  id             :bigint           not null, primary key
#  name           :string(255)      not null
#  last_3_numbers :string(255)      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class ExcludedProduct < RiskRecord

  validates :last_3_numbers, presence: true, uniqueness: true
  validates :name, presence: true
  
end
