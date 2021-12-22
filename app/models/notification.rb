class Notification < CorePgRecord
  include Noticed::Model
  belongs_to :recipient, polymorphic: true

  def self.icon
    'bell'
  end
  
end

# == Schema Information
#
# Table name: notifications
#
#  id             :bigint           not null, primary key
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
#  index_notifications_on_read_at    (read_at)
#  index_notifications_on_recipient  (recipient_type,recipient_id)
#
