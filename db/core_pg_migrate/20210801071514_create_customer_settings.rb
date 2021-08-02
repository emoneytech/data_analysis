class CreateCustomerSettings < ActiveRecord::Migration[6.1]
  def change
    create_table :customer_settings do |t|
      t.boolean :active, null: false, default: true
      t.integer :customer_id, null: false
      t.integer :product_id, null: false, default: 0
      t.float :attention_factor, null: false, default: 1.0

      t.timestamps
    end
    add_index :customer_settings, :active
    add_index :customer_settings, :customer_id
    add_index :customer_settings, :product_id, unique: true
  end
end
