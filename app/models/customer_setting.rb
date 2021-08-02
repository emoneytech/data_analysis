# == Schema Information
#
# Table name: customer_settings
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  customer_id      :integer          not null
#  product_id       :integer          default(0), not null
#  attention_factor :float            default(1.0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
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
  validate :validate_factor
  validates :product_id, uniqueness: {scope: :customer_id}

private

  def validate_product
    unless self.product_id === 0
      product = Prodotti.find(self.product_id) rescue nil
      errors.add(:product_id, "You cannot select a non-existent product") unless product
    end
  end

  def validate_factor
    if self.attention_factor === 1.0
      errors.add(:attention_factor, "You're trying to insert a useless record") unless product
    end
  end
end
