# == Schema Information
#
# Table name: customer_categories
#
#  id         :bigint           not null, primary key
#  base_risk  :float            not null
#  default    :boolean          default(FALSE), not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_customer_categories_on_default  (default)
#  index_customer_categories_on_name     (name)
#
require "test_helper"

class CustomerCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
