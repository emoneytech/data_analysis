# == Schema Information
#
# Table name: worker_errors
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  error      :string(255)
#  params     :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class WorkerErrorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
