class DropEvalMovements < ActiveRecord::Migration[6.1]
  def up
    drop_table :eval_movements
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end

end
