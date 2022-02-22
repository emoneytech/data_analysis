class RemoveMultidimensionFromAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    remove_column :algorithm_calculators, :multidimension, :boolean
  end
end
