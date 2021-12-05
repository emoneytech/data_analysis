# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string(255)
#  deleted_at             :datetime
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  failed_attempts        :integer          default(0), not null
#  first_name             :string(255)
#  last_name              :string(255)
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string(255)
#  locked_at              :datetime
#  nickname               :string(255)
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  sign_in_count          :integer          default(0), not null
#  unconfirmed_email      :string(255)
#  unlock_token           :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  role_id                :integer
#
# Indexes
#
#  index_users_on_deleted_at            (deleted_at)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_first_name            (first_name)
#  index_users_on_last_name             (last_name)
#  index_users_on_nickname              (nickname)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_role_id               (role_id)
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (role_id => roles.id)
#

class User < CorePgRecord

  acts_as_paranoid
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable, :lockable
  belongs_to :role
  has_many :notes
  has_many :reports
  
  alias_attribute :name, :nickname

  validates_presence_of :first_name, :last_name
  validates :nickname, presence: true, uniqueness: {case_sensitive: false}

  before_save :assign_role

  def to_s
    full_name
  end
  
  def full_name
    "#{first_name.try(:capitalize)} #{last_name.try(:capitalize)}"
  end

  def name
    full_name
  end

  def short_name
    "#{first_name[0..1].try(:capitalize)} #{last_name.try(:capitalize)}"
  end

  def include_role?(rolename)
    return false unless rolename
    r = Role.where(name: rolename).first
    self.role.level.to_i <= r.level ? true : false
  end

  def has_role?(rolename)
    return false unless rolename
    if self.role
      self.role.name == rolename
    else
      false
    end
  end

  def role_name
    role.name
  end

private
  def assign_role
    self.role = Role.find_by name: "observer" if self.role.nil?
  end


end
