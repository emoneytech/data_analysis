class AddLockVersionToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :lock_version, :integer, null: false, default: 0
    add_index :eval_movements, :lock_version
    add_index :eval_movements, :service_id, unique: true, name: 'service_unique_on_eval_movements'
  end

end

