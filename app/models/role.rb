# == Schema Information
#
# Table name: roles
#
#  id           :integer          not null, primary key
#  active       :boolean          default(TRUE), not null
#  description  :string(255)
#  name         :string(255)      not null
#  policy       :integer          default(99), not null
#  presentation :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_roles_on_active  (active)
#  index_roles_on_name    (name) UNIQUE
#  index_roles_on_policy  (policy) UNIQUE
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
