class CreateAlgorithmAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    create_table :algorithm_algorithm_calculators do |t|
      t.references :algorithm, null: false, foreign_key: true, index: {name: 'algorithm_references_index'}
      t.references :algorithm_calculator, null: false, foreign_key: true, index: {name: 'algorithm_calc_references_index'}
      t.boolean :abscissa, null: false, default: false
      t.timestamps
    end
    add_index :algorithm_algorithm_calculators, :abscissa
    add_index :algorithm_algorithm_calculators, [:algorithm_id, :algorithm_calculator_id], unique: true, name: 'calculator_algorithm_unique_index'
  end
end
