class AddCustomerCategoryToAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    add_reference :algorithm_calculators, :customer_category, null: false, foreign_key: true
  end
end
