# == Schema Information
#
# Table name: customer_category_conditional_vars
#
#  id                   :bigint           not null, primary key
#  value                :float            not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  conditional_var_id   :bigint           not null
#  customer_category_id :bigint           not null
#
# Indexes
#
#  conditional_var_on_var_index    (conditional_var_id)
#  customer_category_on_var_index  (customer_category_id)
#
# Foreign Keys
#
#  fk_rails_...  (conditional_var_id => conditional_vars.id)
#  fk_rails_...  (customer_category_id => customer_categories.id)
#
require "test_helper"

class CustomerCategoryConditionalVarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
