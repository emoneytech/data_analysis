# == Schema Information
#
# Table name: customer_settings
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  customer_id      :integer          not null
#  product_id       :integer          default(0), not null
#  attention_factor :float            default(1.0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require "test_helper"

class CustomerSettingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
