class AddInOutToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    change_table :eval_movements do |t|
      t.enum :in_out, as: "eval_movement_type", default: "OUT"
    end
  end
end
