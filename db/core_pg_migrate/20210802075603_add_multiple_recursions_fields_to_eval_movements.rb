class AddMultipleRecursionsFieldsToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :recursion_all_7, :integer
    add_index :eval_movements, :recursion_all_7
    add_column :eval_movements, :recursion_all_30, :integer
    add_index :eval_movements, :recursion_all_30
    add_column :eval_movements, :recursion_customer_7, :integer
    add_index :eval_movements, :recursion_customer_7
    add_column :eval_movements, :recursion_customer_30, :integer
    add_index :eval_movements, :recursion_customer_30
  end
end
