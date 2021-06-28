class AddIndexToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_index :evaluated_movements, :product_name
  end
end
