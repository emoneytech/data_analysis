class CreateEvalCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :eval_customers do |t|

      t.integer :anagrafica_id, null: false
      t.integer :eval_year, limit: 4, null: false
      t.integer :eval_month, limit: 2, null: false
      t.integer :nr_movements, null: false, default: 0
      t.float :last_attention_factor7
      t.float :last_attention_factor30
      
      t.jsonb :eval_days, null: false, default: '{}'

      t.timestamps
    end

    add_index :eval_customers, :anagrafica_id
    add_index :eval_customers, :last_attention_factor7
    add_index :eval_customers, :last_attention_factor30
    
    add_index :eval_customers, :eval_days, using: :gin

    add_index :eval_customers, [:anagrafica_id, :eval_year, :eval_month], unique: true, name: 'attention_factor_for_month_index'
 
  end
end
