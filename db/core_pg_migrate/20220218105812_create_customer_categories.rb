class CreateCustomerCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :customer_categories do |t|
      t.string :name, null: false
      t.float :base_risk, null: false

      t.timestamps
    end
    add_index :customer_categories, :name
  end
end
