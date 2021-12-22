class ObservedElement < CorePgRecord
  audited comment_required: true
  validates :audit_comment, presence: true

  acts_as_paranoid

  CATEGORY_VALUES = %w(iban notified_user customer_id country)

  validates :category_element, presence: true, inclusion: { in: CATEGORY_VALUES }
  validates :content, presence: true
  validate :content_validation, if: :category_element?
  
  
  
  def self.category_values
    CATEGORY_VALUES
  end

  def self.icon
    'search-plus'
  end

  def content_validation
    case self.category_element
    when 'iban'
      errors.add(:content, "Iban error")
    when 'notified_user'
      errors.add(:content, "Notified user error")
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
#  content          :string           not null
#  deleted_at       :datetime
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_observed_elements_on_category_element  (category_element)
#  index_observed_elements_on_content           (content)
#  index_observed_elements_on_deleted_at        (deleted_at)
#
