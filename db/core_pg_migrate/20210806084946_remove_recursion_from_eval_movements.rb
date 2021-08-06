class RemoveRecursionFromEvalMovements < ActiveRecord::Migration[6.1]
  def change
    remove_index :eval_movements, :recursion
    remove_column :eval_movements, :recursion, :jsonb
  end
end
