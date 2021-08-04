# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  customer_id :integer          not null
#  subject     :string(255)      not null
#  body        :text(65535)
#  deleted_at  :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < RiskRecord

  belongs_to :user
  belongs_to :anagrafica, foreign_key: :customer_id

  acts_as_paranoid

  ATTR_FIELD = [
    :user_id,
    :customer_id,
    :subject,
    :body
  ]
  def self.attr_field
    ATTR_FIELD
  end


  def self.fa_icon
    "sticky-note"
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

end
