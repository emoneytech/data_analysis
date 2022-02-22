class CreateMultiDimensions < ActiveRecord::Migration[6.1]
  def change
    create_table :multi_dimensions do |t|
      t.bigint :parent_id, null: false
      t.bigint :dimension_id, null: false

      t.timestamps
    end
    add_index :multi_dimensions, [:dimension_id, :parent_id], 
      name: 'algorithm_dimension_index', unique: true
  end
end
