class WebpushSubscription < CorePgRecord
  acts_as_paranoid

  belongs_to :user

  def self.icon
    'bell'
  end

  def browser_name
    user_agent = client["userAgent"]
    res = case user_agent
            when /chrome|chromium|crios/i
              "chrome"
            when /firefox|fxios/i
              "firefox"
            when /safari/i
              "safari"
            when /opr\//i
              "opera"
            when /edg/i
              "edge"
            else
              "unkown"
          end
    return res
  end

  def publish(message)
    Webpush.payload_send(
      message: message,
      endpoint: self.endpoint,
      p256dh: self.p256dh_key,
      auth: self.auth_key,
      vapid: {
        subject: "eDataAnalisys",
        private_key: Rails.application.credentials.dig(:webpush, :private_key),
        public_key:  Rails.application.credentials.dig(:webpush, :public_key),
      }
    )
  end
end

# == Schema Information
#
# Table name: webpush_subscriptions
#
#  id         :bigint           not null, primary key
#  auth_key   :string
#  client     :jsonb            not null
#  deleted_at :datetime
#  endpoint   :string
#  p256dh_key :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_webpush_subscriptions_on_client      (client) USING gin
#  index_webpush_subscriptions_on_deleted_at  (deleted_at)
#  index_webpush_subscriptions_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
