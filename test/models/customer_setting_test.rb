# == Schema Information
#
# Table name: customer_settings
#
#  id          :bigint           not null, primary key
#  active      :boolean          default(TRUE), not null
#  tollerance  :float            default(1.0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  customer_id :integer          not null
#  product_id  :integer          default(0), not null
#
# Indexes
#
#  index_customer_settings_on_active       (active)
#  index_customer_settings_on_customer_id  (customer_id)
#  product_customer_index                  (product_id,customer_id) UNIQUE
#
require "test_helper"

class CustomerSettingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
