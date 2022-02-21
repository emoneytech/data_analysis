class CreateAlgorithmCalculators < ActiveRecord::Migration[6.1]
  def change
    create_table :algorithm_calculators do |t|
      t.string :name, null: false
      t.string :presentation, null: false
      t.string :result_type, null: false
      t.string :value, null: false
      t.boolean :multidimension, null: false, default: false
      t.boolean :conditional, null: false, default: false

      t.string :abscissa, null: false
      t.float :abscissa_min, null: false
      t.float :abscissa_max, null: false
      t.float :abscissa_intervall, null: false
    
      t.timestamps
    end
    add_index :algorithm_calculators, :name, {unique: true}

  end
end
