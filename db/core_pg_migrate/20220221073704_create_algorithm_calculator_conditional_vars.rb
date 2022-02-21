class CreateAlgorithmCalculatorConditionalVars < ActiveRecord::Migration[6.1]
  def change
    create_table :algorithm_calculator_conditional_vars do |t|
      t.references :algorithm_calculator, null: false, foreign_key: true, index: { name: 'algorithm_calculator_index' }
      t.references :conditional_var, null: false, foreign_key: true, index: { name: 'conditional_var_index' }

      t.timestamps
    end
  end
end
