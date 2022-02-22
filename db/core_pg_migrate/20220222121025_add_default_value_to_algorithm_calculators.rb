class AddDefaultValueToAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    add_column :algorithm_calculators, :default_input_value, :float, null: false, default: 1.01
  end
end
