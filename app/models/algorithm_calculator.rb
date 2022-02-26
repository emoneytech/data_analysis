class AlgorithmCalculator < CorePgRecord
  
  has_many :algorithm_algorithm_calculators, dependent: :destroy
  has_many :algorithms, through: :algorithm_algorithm_calculators

  has_many :algorithm_calculator_conditional_vars, dependent: :destroy
  has_many :conditional_vars, through: :algorithm_calculator_conditional_vars
  has_many :customer_categories, ->{distinct}, through: :conditional_vars

  amoeba do
    enable
  end


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
  
  def to_s
    "#{presentation}"
  end
  
  def siblings
    self.new_record? ? AlgorithmCalculator.all : AlgorithmCalculator.where.not(id: self.id)
  end

  def self.result_types
    RESULT_TYPES
  end

  def default_value
    opts = self.conditional_vars.map{|v| ["#{v.name}", v.default_value.to_f]}.to_h
    opts[self.abscissa] = self.default_input_value.to_f
    calculator = Keisan::Calculator.new
    calculator.evaluate(self.value, opts)
  end


  def default_eq
    eq = self.value
    self.conditional_vars.each do |v|
      eq.gsub!("#{v.name}", "#{v.default_value}")
    end
    return eq
  end

  def conditional
    conditional_vars.any?
  end
  
end

# == Schema Information
#
# Table name: algorithm_calculators
#
#  id                  :bigint           not null, primary key
#  abscissa            :string           not null
#  abscissa_intervall  :float            not null
#  abscissa_max        :float            not null
#  abscissa_min        :float            not null
#  default_input_value :float            default(1.01), not null
#  name                :string           not null
#  presentation        :string           not null
#  result_type         :string           not null
#  value               :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
# Indexes
#
#  index_algorithm_calculators_on_name  (name) UNIQUE
#
