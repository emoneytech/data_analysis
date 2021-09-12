class UpdateIndexCustomerIdToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_index :eval_movements, [:customer_id, :service_id], unique: true
  end
end
