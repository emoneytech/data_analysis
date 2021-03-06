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
require "test_helper"

class AlgorithmCalculatorConditionalVarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
