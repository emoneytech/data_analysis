class CreateEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :evaluated_movements do |t|
      t.bigint :triggerable_id, null: false
      t.string :triggerable_type, null: false

      t.string :triggerable_status, null: false
      

      t.enum :in_out, as: "eval_movement_type", default: "OUT"
      t.boolean :internal, null: false, default: false
      

      t.integer :customer_id, null: false

      
      t.integer :movement_id, null: false
      t.datetime :movement_created_at, null: false
      
      t.integer :product_id
      t.integer :product_net_id
      t.integer :product_table_code
      t.string :product_name
      t.float :product_base_risk
      
      t.string :payer
      t.string :payer_iban, limit: 50
      t.string :payer_card, limit: 50
      t.string :payer_other

      t.string :beneficiary
      t.string :beneficiary_iban, limit: 50
      t.string :beneficiary_card, limit: 50
      t.string :beneficiary_other

      t.float :risk_factor
      t.string  :risk_description

      t.integer :recursion_customer_7
      t.integer :recursion_customer_30
      t.integer :recursion_all_7
      t.integer :recursion_all_30

      t.monetize :amount

      t.st_point :origin_lonlat, geographic: true
      t.st_point :destination_lonlat, geographic: true

      t.string :origin_country, null: false
      t.string :destination_country, null: false

      t.integer :lock_version, null: false, default: 0
      t.timestamps

    end
    add_index :evaluated_movements, [:triggerable_type, :triggerable_id], name: 'index_triggerable_on_evaluated_movements'
    add_index :evaluated_movements, :customer_id
    add_index :evaluated_movements, [:customer_id, :triggerable_id, :triggerable_type], unique: true, name: 'index_triggerable_on_customer'
    add_index :evaluated_movements, :in_out

    add_index :evaluated_movements, :movement_created_at

    add_index :evaluated_movements, :payer
    add_index :evaluated_movements, :payer_iban
    add_index :evaluated_movements, :payer_card

    add_index :evaluated_movements, :beneficiary
    add_index :evaluated_movements, :beneficiary_iban
    add_index :evaluated_movements, :beneficiary_card

    add_index :evaluated_movements, :product_id
    add_index :evaluated_movements, :product_name
    add_index :evaluated_movements, :product_table_code

    add_index :evaluated_movements, :recursion_customer_7
    add_index :evaluated_movements, :recursion_customer_30
    add_index :evaluated_movements, :recursion_all_7
    add_index :evaluated_movements, :recursion_all_30

    add_index :evaluated_movements, :origin_country
    add_index :evaluated_movements, :destination_country

    add_index :evaluated_movements, :amount_cents
    
    
    add_index :evaluated_movements, :origin_lonlat, using: :gist
    add_index :evaluated_movements, :destination_lonlat, using: :gist
    
    add_index :evaluated_movements, :internal
    add_index :evaluated_movements, :lock_version
  end
end
