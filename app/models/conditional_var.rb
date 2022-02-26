class ConditionalVar < CorePgRecord
  
  has_many :algorithm_calculator_conditional_vars, dependent: :destroy
  has_many :algorithm_calculators, through: :algorithm_calculator_conditional_vars
  
  before_destroy :check_algorithm_calculators_presence

  has_many :customer_category_conditional_vars, dependent: :destroy
  accepts_nested_attributes_for :customer_category_conditional_vars, reject_if: :all_blank, allow_destroy: true
  
  has_many :customer_categories, through: :customer_category_conditional_vars

  validates :name, presence: true, uniqueness: true

  validate :check_categories

  
  amoeba do
    enable
    include_association :condition_items
  end

  def self.icon
    'percentage'
  end

  def to_s
    "#{self.name}"
  end
  
  def self.default_value(name = '')
    where(name: name).first.try(:default_value) || 0
  end
  
  def values
    self.customer_category_conditional_vars.map{|item| item.value }
  end

  def default_value
    self.customer_category_conditional_vars.default.first.try(:value)
  end

  private

  def check_categories
    if self.customer_category_conditional_vars.size != CustomerCategory.count
      errors.add(:customer_categories, "Insert a value for all categories")
    end
  end

  def check_algorithm_calculators_presence
    return false if self.algorithm_calculators.any?
  end

end

# == Schema Information
#
# Table name: conditional_vars
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_conditional_vars_on_name  (name) UNIQUE
#
