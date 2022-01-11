# == Schema Information
#
# Table name: observed_elements
#
#  id               :bigint           not null, primary key
#  category_element :string           not null
#  common_process   :boolean          default(FALSE), not null
#  content          :string           not null
#  deleted_at       :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_observed_elements_on_category_element  (category_element)
#  index_observed_elements_on_common_process    (common_process)
#  index_observed_elements_on_content           (content)
#  index_observed_elements_on_deleted_at        (deleted_at)
#
require "test_helper"

class ObservedElementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
