class AddServiceCreatedAtToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :evaluated_movements, :service_created_at, :datetime
    add_index :evaluated_movements, :service_created_at
  end
end
