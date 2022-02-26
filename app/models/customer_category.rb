class CustomerCategory < CorePgRecord

  has_many :customer_category_conditional_vars, dependent: :destroy
  has_many :conditional_vars, through: :customer_category_conditional_vars

  validates :name, presence: true, uniqueness: true
  validates :base_risk, presence: true, uniqueness: true

  validates :default, uniqueness: true, if: :default

  before_validation :unset_default, if: :default
  
  def to_s
    "#{self.name}"
  end
  
  def self.icon
    'user-group'
  end

  def self.field_props
    Anagrafica.alive.group(:base_risk)
  end

  def query_result
    sql = Anagrafica.alive.where("anagrafiche.base_risk = ?", self.base_risk)
  end

  private 
 
  def unset_default
    CustomerCategory.update_all(default: false)
  end

end

# == Schema Information
#
# Table name: customer_categories
#
#  id         :bigint           not null, primary key
#  base_risk  :float            not null
#  default    :boolean          default(FALSE), not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_customer_categories_on_default  (default)
#  index_customer_categories_on_name     (name)
#
