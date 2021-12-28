class AddIndexToCustomerEvaluations < ActiveRecord::Migration[6.1]
  def change
    add_index :customer_evaluations, [:eval_year, :eval_month]
  end
end
