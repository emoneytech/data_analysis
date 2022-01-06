class AddReasonToEvaluatedMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :evaluated_movements, :reason, :text
  end
end
