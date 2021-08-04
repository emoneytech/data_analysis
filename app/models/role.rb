# == Schema Information
#
# Table name: roles
#
#  id           :integer          not null, primary key
#  name         :string(255)      not null
#  presentation :string(255)
#  description  :string(255)
#  policy       :integer          default(99), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  active       :boolean          default(TRUE), not null
#

class Role < RiskRecord

  alias_attribute :level, :policy

  has_many :users
  validates :name, presence: true, uniqueness: true
  validates :presentation, presence: true, uniqueness: true

  validates :policy, presence: true, uniqueness: true, numericality: { only_integer: true, greater_or_equal_than: 0 }

  scope :active, -> { where(active: true).order(level: :asc) }

  def to_s
    "#{presentation}"
  end

  def to_label
    "#{presentation}"
  end


end
