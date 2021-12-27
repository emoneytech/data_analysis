# == Schema Information
#
# Table name: webpush_notifications
#
#  id         :bigint           not null, primary key
#  auth_key   :string
#  deleted_at :datetime
#  endpoint   :string
#  p256dh_key :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_webpush_notifications_on_deleted_at  (deleted_at)
#  index_webpush_notifications_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class WebpushNotificationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
