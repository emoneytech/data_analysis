# == Schema Information
#
# Table name: sanction_lists
#
#  id                        :bigint           not null, primary key
#  name                      :string
#  sanction_list_items_count :integer
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#
require "test_helper"

class SanctionListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
