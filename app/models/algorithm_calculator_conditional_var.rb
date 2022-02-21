class AlgorithmCalculatorConditionalVar < CorePgRecord
  
  belongs_to :algorithm_calculator
  belongs_to :conditional_var

  before_destroy :check_algorithm_calculator_presence

  def check_algorithm_calculator_presence
    return false if algorithm_calculator
  end

end
