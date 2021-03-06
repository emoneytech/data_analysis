class CustomerCategoryConditionalVar < CorePgRecord
  belongs_to :customer_category
  belongs_to :conditional_var

  validates :value, presence: true
  validates :conditional_var_id, uniqueness: {scope: :customer_category_id }
  validates :default, uniqueness: {scope: :conditional_var_id }, if: :default

  scope :default, -> { where(default: true) }
end

# == Schema Information
#
# Table name: customer_category_conditional_vars
#
#  id                   :bigint           not null, primary key
#  default              :boolean          default(FALSE), not null
#  value                :float            not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  conditional_var_id   :bigint           not null
#  customer_category_id :bigint           not null
#
# Indexes
#
#  conditional_var_on_var_index                         (conditional_var_id)
#  customer_category_on_var_index                       (customer_category_id)
#  index_customer_category_conditional_vars_on_default  (default)
#
# Foreign Keys
#
#  fk_rails_...  (conditional_var_id => conditional_vars.id)
#  fk_rails_...  (customer_category_id => customer_categories.id)
#
