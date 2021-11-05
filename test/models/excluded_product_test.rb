# == Schema Information
#
# Table name: excluded_products
#
#  id             :bigint           not null, primary key
#  last_3_numbers :string(255)      not null
#  name           :string(255)      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_excluded_products_on_last_3_numbers  (last_3_numbers) UNIQUE
#
require "test_helper"

class ExcludedProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
