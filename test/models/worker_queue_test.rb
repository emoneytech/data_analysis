# == Schema Information
#
# Table name: worker_queues
#
#  id          :bigint           not null, primary key
#  service_id  :integer          not null
#  last_update :datetime         not null
#
require "test_helper"

class WorkerQueueTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
