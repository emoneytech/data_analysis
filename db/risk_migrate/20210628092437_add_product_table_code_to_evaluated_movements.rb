class AddProductTableCodeToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :evaluated_movements, :product_table_code, :integer
    add_index :evaluated_movements, :product_table_code
  end
end
