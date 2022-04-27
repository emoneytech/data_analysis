# == Schema Information
#
# Table name: messages
#
#  id         :uuid             not null, primary key
#  content    :text             not null
#  readed_at  :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_messages_on_readed_at  (readed_at)
#  index_messages_on_user_id    (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
