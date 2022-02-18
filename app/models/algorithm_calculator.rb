class AlgorithmCalculator < CorePgRecord
  
  belongs_to :customer_category

  validates :customer_category_id, presence: true, uniqueness: true

  RESULT_TYPES = %w(integer float)
  validates :name, 
    :presentation,
    :value, 
    :result_type,
    :abscissa,
    :abscissa_min,
    :abscissa_max,
    :abscissa_intervall, presence: true
  validates :name, uniqueness: true, length: { minimum: 1 }
  validates :result_type, inclusion: {in: RESULT_TYPES,
    message: "%{value} is not a valid type"}


  def self.icon
    'square-root-variable'
  end
  
  def self.result_types
    RESULT_TYPES
  end
end

# == Schema Information
#
# Table name: algorithm_calculators
#
#  id                   :bigint           not null, primary key
#  abscissa             :string           not null
#  abscissa_intervall   :float            not null
#  abscissa_max         :float            not null
#  abscissa_min         :float            not null
#  multidimension       :boolean          default(FALSE), not null
#  name                 :string           not null
#  presentation         :string           not null
#  result_type          :string           not null
#  value                :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  customer_category_id :bigint           not null
#
# Indexes
#
#  index_algorithm_calculators_on_customer_category_id  (customer_category_id)
#  index_algorithm_calculators_on_name                  (name) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (customer_category_id => customer_categories.id)
#
