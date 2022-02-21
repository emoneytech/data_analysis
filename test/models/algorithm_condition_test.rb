# == Schema Information
#
# Table name: algorithm_conditions
#
#  id                      :bigint           not null, primary key
#  default_value           :string           default("1"), not null
#  field_name              :string           not null
#  field_type              :string           not null
#  var_name                :string           default("y"), not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  algorithm_calculator_id :bigint           not null
#
# Indexes
#
#  index_algorithm_conditions_on_algorithm_calculator_id  (algorithm_calculator_id)
#  index_algorithm_conditions_on_var_name                 (var_name,algorithm_calculator_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (algorithm_calculator_id => algorithm_calculators.id)
#
require "test_helper"

class AlgorithmConditionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
