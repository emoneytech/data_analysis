# == Schema Information
#
# Table name: excluded_products
#
#  id             :bigint           not null, primary key
#  name           :string(255)      not null
#  last_3_numbers :string(255)      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require "test_helper"

class ExcludedProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
