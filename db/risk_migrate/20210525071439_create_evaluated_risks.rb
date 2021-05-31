class CreateEvaluatedRisks < ActiveRecord::Migration[6.1]
  def change
    create_table :evaluated_risks do |t|
      t.integer :anagrafica_id, null: false
      t.integer :eval_year, limit: 4, null: false
      t.integer :eval_month, limit: 2, null: false
      t.integer :nr_movements, null: false, default: 0
      t.text :eval_days
      t.float :last_evaluated_risk
      t.timestamps
    end
    add_index :evaluated_risks, :anagrafica_id
    add_index :evaluated_risks, :last_evaluated_risk
    add_index :evaluated_risks, [:anagrafica_id, :eval_year, :eval_month], unique: true, name: 'evaluated_risk_for_month_index'
  end
end
