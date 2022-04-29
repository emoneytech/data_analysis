class AddSentToCustomerEvaluations < ActiveRecord::Migration[6.1]
  def change
    add_column :customer_evaluations, :sent, :float
    add_index :customer_evaluations, :sent
  end
end
