class AddDefaultToCustomerCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :customer_categories, :default, :boolean, null: false, default: false
    add_index :customer_categories, :default
  end
end
