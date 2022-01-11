class ObservedElement < CorePgRecord
  include Filterable

  audited comment_required: true
  validates :audit_comment, presence: true

  acts_as_paranoid

  CATEGORY_VALUES = %w(iban notified_user customer_id country system)

  validates :category_element, presence: true, inclusion: { in: CATEGORY_VALUES }
  validates :content, presence: true
  validate :content_validation, if: :category_element?
  
  scope :ibans, -> { where(category_element: "iban")}
  scope :users, -> { where(category_element: "notified_user")}
  scope :customers, -> { where(category_element: "customer_id")}
  scope :countries, -> { where(category_element: "country")}
  
  scope :filter_by_iban, ->(iban) { ibans.where(content: iban)}
  scope :filter_by_customer_id, ->(customer_id) { customers.where(content: customer_id)}
  scope :filter_by_country, ->(country) { countries.where(content: country)}
  
  scope :filter_by_user, ->(user_full_name) { users.where(
    "content iLIKE ?
      OR content iLIKE ?
      OR content iLIKE ?",
    "%#{ user_full_name.split(' ').count > 2 ? "#{user_full_name.split(' ')[0]} #{user_full_name.split(' ')[1]}  #{user_full_name.split(' ')[2]}" : "#{user_full_name.split(' ')[0]} #{user_full_name.split(' ')[1]}" }%",
    "%#{ user_full_name.split(' ').count > 2 ? "#{user_full_name.split(' ')[2]} #{user_full_name.split(' ')[0]}  #{user_full_name.split(' ')[1]}" : "#{user_full_name.split(' ')[1]} #{user_full_name.split(' ')[0]}" }%",
    "%#{user_full_name}%"
  )}




  def self.category_values(current_user)
    current_user.has_role?('superadmin') ? %w(iban notified_user customer_id country system) : %w(iban notified_user customer_id country)
  end

  def self.icon
    'search-plus'
  end

  def content_validation
    case self.category_element
    when 'iban'
      checked_iban = IbanUtils.validate_iban(self.content)
      errors.add(:content, "Iban error") if checked_iban[:errors].present?
    when 'notified_user'
      true
    when 'system'
      true
    when 'customer_id'
      errors.add(:content, "customer_id error") unless Anagrafica.find(self.content) rescue nil
    when 'country'
      errors.add(:content, "country error") unless RelatedCountry.find(self.content) rescue nil
    else
      errors.add(:content, "Generic error")
    end

  end

end

# == Schema Information
#
# Table name: observed_elements
#
#  id               :bigint           not null, primary key
#  category_element :string           not null
#  common_process   :boolean          default(FALSE), not null
#  content          :string           not null
#  deleted_at       :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_observed_elements_on_category_element  (category_element)
#  index_observed_elements_on_common_process    (common_process)
#  index_observed_elements_on_content           (content)
#  index_observed_elements_on_deleted_at        (deleted_at)
#
