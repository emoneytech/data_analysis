class Algorithm < CorePgRecord

  has_many :algorithm_algorithm_calculators, dependent: :destroy
  accepts_nested_attributes_for :algorithm_algorithm_calculators, reject_if: :all_blank, allow_destroy: true

  has_many :algorithm_calculators, through: :algorithm_algorithm_calculators


  amoeba do
    enable
  end

  def self.icon
    'square-root-variable'
  end

  def value
    opts = self.algorithm_calculators.map{|v| ["#{v.name}", v.default_value.to_f]}.to_h
    calculator = Keisan::Calculator.new
    calculator.evaluate(self.eq, opts)
  end

  private

  def calculate_factor(eq, opts)
    calculator = Keisan::Calculator.new
    calculator.evaluate(eq, opts)
  end

end

# == Schema Information
#
# Table name: algorithms
#
#  id           :bigint           not null, primary key
#  default      :boolean          default(FALSE), not null
#  eq           :string           not null
#  name         :string           not null
#  presentation :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_algorithms_on_default  (default)
#  index_algorithms_on_name     (name) UNIQUE
#
