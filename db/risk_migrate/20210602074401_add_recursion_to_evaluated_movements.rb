class AddRecursionToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :evaluated_movements, :recursion, :text
  end
end
