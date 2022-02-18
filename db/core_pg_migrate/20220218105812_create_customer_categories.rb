class CreateCustomerCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :customer_categories do |t|
      t.string :name, null: false
      t.string :field_name, null: false
      t.string :field_type, null: false
      t.string :value, null: false

      t.timestamps
    end
    add_index :customer_categories, :name
  end
end
