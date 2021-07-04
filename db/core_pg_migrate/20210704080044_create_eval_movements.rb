class CreateEvalMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :eval_movements do |t|
      t.integer :customer_id, null: false
      t.string :customer_full_name
      
      t.integer :service_id, null: false
      t.string :service_status
      t.datetime :service_updated_at
      t.datetime :service_created_at
      
      t.integer :movement_id, null: false
      t.datetime :movement_created_at, null: false

      t.integer :product_net_id
      t.integer :product_id
      t.integer :product_table_code
      t.string :product_name
      t.float :product_base_risk
      
      t.string :beneficiary
      t.string :beneficiary_iban
      t.string :beneficiary_other

      t.float :risk_factor
      t.string  :risk_description

      t.jsonb :recursion, null: false, default: '{}'

      t.monetize :amount

      t.st_point :destination_lonlat, geographic: true
      
      t.timestamps
    end
    add_index :eval_movements, :customer_id
    add_index :eval_movements, :service_id
    add_index :eval_movements, :movement_id

    add_index :eval_movements, :service_updated_at
    add_index :eval_movements, :service_created_at
    add_index :eval_movements, :movement_created_at
    
    add_index :eval_movements, :product_name
    add_index :eval_movements, :product_table_code

    add_index  :eval_movements, :recursion, using: :gin

    add_index  :eval_movements, :amount_cents

    add_index :eval_movements, :destination_lonlat, using: :gist
  end
end
