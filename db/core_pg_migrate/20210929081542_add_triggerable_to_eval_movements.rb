class AddTriggerableToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :triggerable_type, :string
    add_column :eval_movements, :triggerable_id, :bigint
    add_index :eval_movements, [:triggerable_type, :triggerable_id]
  end
end
