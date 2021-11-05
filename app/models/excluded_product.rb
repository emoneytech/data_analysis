# == Schema Information
#
# Table name: excluded_products
#
#  id             :bigint           not null, primary key
#  last_3_numbers :string(255)      not null
#  name           :string(255)      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_excluded_products_on_last_3_numbers  (last_3_numbers) UNIQUE
#
class ExcludedProduct < RiskRecord

  validates :last_3_numbers, presence: true, uniqueness: true
  validates :name, presence: true
  
end
