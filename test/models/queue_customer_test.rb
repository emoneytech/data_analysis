# == Schema Information
#
# Table name: queue_customers
#
#  id           :bigint           not null, primary key
#  evaluated_at :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  customer_id  :integer          not null
#
# Indexes
#
#  evaluated_at_index                     (customer_id,evaluated_at) UNIQUE
#  index_queue_customers_on_evaluated_at  (evaluated_at)
#
require "test_helper"

class QueueCustomerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
