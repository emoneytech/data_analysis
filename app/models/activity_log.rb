class ActivityLog < CorePgRecord
  acts_as_paranoid
  belongs_to :user

  scope :latest, -> { order(created_at: :desc).limit(10) }
  
  def self.icon
    "list-alt"
  end

end

# == Schema Information
#
# Table name: activity_logs
#
#  id         :bigint           not null, primary key
#  action     :string           not null
#  browser    :string
#  controller :string           not null
#  deleted_at :datetime
#  ip_address :string
#  note       :string
#  params     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_activity_logs_on_deleted_at  (deleted_at)
#  index_activity_logs_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
