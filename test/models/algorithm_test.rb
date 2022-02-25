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
require "test_helper"

class AlgorithmTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
