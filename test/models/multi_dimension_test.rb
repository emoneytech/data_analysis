# == Schema Information
#
# Table name: multi_dimensions
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  dimension_id :bigint           not null
#  parent_id    :bigint           not null
#
# Indexes
#
#  algorithm_dimension_index  (dimension_id,parent_id) UNIQUE
#
require "test_helper"

class MultiDimensionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
