# == Schema Information
#
# Table name: sanction_lists
#
#  id         :bigint           not null, primary key
#  name       :string
#  remote_url :string
#  state      :string           default("new"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_sanction_lists_on_state  (state)
#
require "test_helper"

class SanctionListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
