# == Schema Information
#
# Table name: queue_movements
#
#  id          :bigint           not null, primary key
#  action      :string(20)       not null
#  last_update :datetime         not null
#  movement_id :integer          not null
#
# Indexes
#
#  index_queue_movements_on_action       (action)
#  index_queue_movements_on_movement_id  (movement_id)
#
require "test_helper"

class QueueMovementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
