# == Schema Information
#
# Table name: customer_settings
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  tollerance :float            default(1.0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  customer_id      :integer          not null
#  product_id       :integer          default(0), not null
#
# Indexes
#
#  index_customer_settings_on_active       (active)
#  index_customer_settings_on_customer_id  (customer_id)
#  index_customer_settings_on_product_id   (product_id) UNIQUE
#
class CustomerSetting < CorePgRecord
  
  belongs_to :customer,
    class_name: 'Anagrafica',
    foreign_key: 'customer_id',
    primary_key: 'IdUtente'
  belongs_to :product,
    class_name: 'Prodotto',
    foreign_key: 'product_id',
    primary_key: 'idprodotto',
    optional: true

  validate :validate_product
  validate(on: :create) :validate_tollerance

  validates :tollerance, presence: true, numericality: { only_integer: false,  greater_than_or_equal_to: 0.78, less_than_or_equal_to: 3.0 }
  
  validates :product_id, uniqueness: {scope: :customer_id}

  scope :global, -> { where(product_id: 0) }
private

  def validate_product
    unless self.product_id === 0
      product = Prodotti.find(self.product_id) rescue nil
      errors.add(:product_id, "You cannot select a non-existent product") unless product
    end
  end

  def validate_tollerance
    if self.tollerance === 1.0
      errors.add(:tollerance, "You're trying to insert a useless record") unless product
    end
  end
end
