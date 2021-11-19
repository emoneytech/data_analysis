class AddEvaluatedFieldsToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :evaluated_movements, :evaluated_factor7, :float
    add_index :evaluated_movements, :evaluated_factor7
    add_column :evaluated_movements, :evaluated_factor30, :float
    add_index :evaluated_movements, :evaluated_factor30
  end
end
