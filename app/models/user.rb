# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  nickname               :string(255)
#  role_id                :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string(255)
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string(255)
#  locked_at              :datetime
#  last_name              :string(255)
#  first_name             :string(255)
#  deleted_at             :datetime
#

class User < RiskRecord

  acts_as_paranoid
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable, :lockable
  belongs_to :role
  has_many :notes
  
  alias_attribute :name, :nickname

  validates_presence_of :first_name, :last_name
  validates :nickname, presence: true, uniqueness: {case_sensitive: false}

  before_save :assign_role

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
