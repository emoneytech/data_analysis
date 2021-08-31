# == Schema Information
#
# Table name: reports
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string
#  opts       :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class ReportTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
