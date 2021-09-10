class AddEvalMovementType < ActiveRecord::Migration[6.1]
  def up
    create_enum "eval_movement_type", %w[IN OUT]
  end

  def down
    drop_enum "eval_movement_type"
  end
end
