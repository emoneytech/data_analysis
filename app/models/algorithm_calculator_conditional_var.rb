class AlgorithmCalculatorConditionalVar < CorePgRecord
  
  belongs_to :algorithm_calculator
  belongs_to :conditional_var

  before_destroy :check_algorithm_calculator_presence

  def check_algorithm_calculator_presence
    return false if algorithm_calculator
  end

end

# == Schema Information
#
# Table name: algorithm_calculator_conditional_vars
#
#  id                      :bigint           not null, primary key
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  algorithm_calculator_id :bigint           not null
#  conditional_var_id      :bigint           not null
#
# Indexes
#
#  algorithm_calculator_index  (algorithm_calculator_id)
#  conditional_var_index       (conditional_var_id)
#
# Foreign Keys
#
#  fk_rails_...  (algorithm_calculator_id => algorithm_calculators.id)
#  fk_rails_...  (conditional_var_id => conditional_vars.id)
#
