class ConditionalVar < CorePgRecord
  
  has_many :algorithm_calculator_conditional_vars, dependent: :destroy
  has_many :algorithm_calculators, through: :algorithm_calculator_conditional_vars
  
  has_many :condition_items, dependent: :destroy
  accepts_nested_attributes_for :condition_items, reject_if: :all_blank, allow_destroy: true

  FIELD_TYPES = %w(string number)

  validates :field_source_name, presence: true
  validates :name, presence: true, uniqueness: true
  validates :default_value, presence: true
  validates :field_type,
    presence: true,
    inclusion: {
    in: FIELD_TYPES,
    message: "%{value} is not a valid type"
  }

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
  
  def self.field_types
    FIELD_TYPES
  end

  def field_props
    Anagrafica.alive.group("#{field_source_name}")
  end

  def self.default_value(name = '')
    where(name: name).first.try(:default_value) || 0
  end
  
  def values
    self.condition_items.map{|item| item.value }
  end

end

# == Schema Information
#
# Table name: conditional_vars
#
#  id                :bigint           not null, primary key
#  default_value     :string           default("1"), not null
#  description       :string           not null
#  field_source_name :string           not null
#  field_type        :string           not null
#  name              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_conditional_vars_on_name  (name) UNIQUE
#
