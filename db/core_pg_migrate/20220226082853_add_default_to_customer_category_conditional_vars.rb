class AddDefaultToCustomerCategoryConditionalVars < ActiveRecord::Migration[6.1]
  def change
    add_column :customer_category_conditional_vars, :default, :boolean, null: false, default: false
    add_index :customer_category_conditional_vars, :default
  end
end
