class RemoveConditionalFromAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    remove_column :algorithm_calculators, :conditional, :boolean
  end
end
