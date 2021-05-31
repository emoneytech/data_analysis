class CreateEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :evaluated_movements do |t|
      t.integer :customer_id, null: false
      t.string :customer_full_name
      
      t.integer :service_id, null: false
      t.string :service_status
      t.datetime :service_updated_at
      
      t.integer :movement_id, null: false
      t.datetime :movement_created_at, null: false

      t.integer :product_net_id
      t.integer :product_id
      t.string :product_name
      t.float :product_base_risk
      
      t.string :beneficiary
      t.string :beneficiary_iban
      t.string :beneficiary_other

      t.float :risk_factor
      t.string  :risk_description

      t.monetize :amount

      t.timestamps
    end
    add_index :evaluated_movements, :customer_id
    add_index :evaluated_movements, :service_id
    add_index :evaluated_movements, :movement_id
  end
end
