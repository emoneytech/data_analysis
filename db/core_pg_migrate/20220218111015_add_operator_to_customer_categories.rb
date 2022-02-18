class AddOperatorToCustomerCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :customer_categories, :field_operator, :string, null: false
  end
end
