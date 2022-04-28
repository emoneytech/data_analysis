class Message < CorePgRecord
  belongs_to :user

  scope :latest, -> { order(created_at: :desc).limit(20)}
  after_create_commit :send_notification

  def send_notification
    NotifyPrivateChannelWorker.perform_async(self.user_id, self.data_notification)
  end

  def data_notification
    { 
      content: content,
      icon: icon,
      subtitle: subtitle,
      title: title,
      widget_type: widget_type
    }
  end

end

# == Schema Information
#
# Table name: messages
#
#  id          :uuid             not null, primary key
#  content     :text             not null
#  icon        :string           default("message"), not null
#  readed_at   :datetime
#  subtitle    :string           default(""), not null
#  title       :string           default("System Message"), not null
#  widget_type :string           default("info"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint           not null
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
