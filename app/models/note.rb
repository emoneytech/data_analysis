# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  body        :text(65535)
#  deleted_at  :datetime
#  subject     :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  customer_id :integer          not null
#  user_id     :integer
#
# Indexes
#
#  index_notes_on_customer_id  (customer_id)
#  index_notes_on_deleted_at   (deleted_at)
#  index_notes_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

class Note < RiskRecord

  belongs_to :user
  belongs_to :anagrafica, foreign_key: :customer_id

  validates :subject, :body, presence: true
  acts_as_paranoid

  ATTR_FIELD = [
    :user_id,
    :customer_id,
    :subject,
    :body
  ]

  def self.icon
    'sticky-note'
  end

  def self.attr_field
    ATTR_FIELD
  end

  def to_label
    "#{subject}"
  end

  def to_s
    to_label
  end

  def presentation
    to_label
  end

  def previous
    Note.where(customer_id: self.customer_id).where("id < ?", self.id).order(id: :desc).first
  end
  
  def next
    Note.where(customer_id: self.customer_id).where("id > ?", self.id).order(id: :asc).first
  end

end
