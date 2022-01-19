class Notification < CorePgRecord
  include Noticed::Model
  belongs_to :recipient, polymorphic: true
  
  acts_as_paranoid

  scope :latest, -> { order(created_at: :desc).limit(5) }
  
  def self.icon
    'bell'
  end

  def previous
    Notification.where("recipient_type = ?  AND recipient_id = ? AND created_at < ? ", self.recipient_type, self.recipient_id, self.created_at).order(created_at: :desc).first
  end
  
  def next
    Notification.where("recipient_type = ?  AND recipient_id = ? AND created_at > ? ", self.recipient_type, self.recipient_id, self.created_at).order(created_at: :desc).first
  end

end

# == Schema Information
#
# Table name: notifications
#
#  id             :bigint           not null, primary key
#  deleted_at     :datetime
#  params         :json
#  read_at        :datetime
#  recipient_type :string           not null
#  type           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  recipient_id   :bigint           not null
#
# Indexes
#
#  index_notifications_on_deleted_at  (deleted_at)
#  index_notifications_on_read_at     (read_at)
#  index_notifications_on_recipient   (recipient_type,recipient_id)
#
