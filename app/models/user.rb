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
#  obfuscator             :boolean          default(TRUE), not null
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
#  public_users_deleted_at7_idx            (deleted_at)
#  public_users_email0_idx                 (email) UNIQUE
#  public_users_first_name5_idx            (first_name)
#  public_users_last_name4_idx             (last_name)
#  public_users_nickname6_idx              (nickname)
#  public_users_reset_password_token1_idx  (reset_password_token) UNIQUE
#  public_users_role_id3_idx               (role_id)
#  public_users_unlock_token2_idx          (unlock_token) UNIQUE
#
# Foreign Keys
#
#  users_role_id_fkey  (role_id => roles.id) ON DELETE => restrict ON UPDATE => restrict
#

class User < CorePgRecord

  acts_as_paranoid
  
  has_many :notifications, as: :recipient, dependent: :destroy

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable, :lockable
  belongs_to :role
  has_many :notes
  has_many :reports, -> { order(created_at: :desc) }
  has_many :webpush_subscriptions, dependent: :destroy
  has_many :activity_logs, dependent: :destroy
  
  alias_attribute :name, :nickname

  validates_presence_of :first_name, :last_name
  validates :nickname, presence: true, uniqueness: {case_sensitive: false}

  before_save :assign_role

  scope :recipients, -> { includes(:role).where('roles.policy <= ?', 5).references(:role) }

  def self.icon
    "book-reader"
  end

  def to_s
    full_name
  end
  
  def full_name
    "#{first_name.try(:capitalize)} #{last_name.try(:capitalize)}"
  end

  def username
    full_name
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
