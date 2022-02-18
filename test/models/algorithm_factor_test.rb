# == Schema Information
#
# Table name: algorithm_factors
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  presentation :string           not null
#  value        :string           not null
#  var_type     :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_algorithm_factors_on_name  (name) UNIQUE
#
require "test_helper"

class AlgorithmFactorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
