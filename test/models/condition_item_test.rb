# == Schema Information
#
# Table name: condition_items
#
#  id                 :bigint           not null, primary key
#  eq                 :string           not null
#  field_operator     :string           not null
#  field_value        :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  conditional_var_id :bigint           not null
#
# Indexes
#
#  index_condition_items_on_conditional_var_id  (conditional_var_id)
#
# Foreign Keys
#
#  fk_rails_...  (conditional_var_id => conditional_vars.id)
#
require "test_helper"

class ConditionItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
