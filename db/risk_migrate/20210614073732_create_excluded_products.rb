class CreateExcludedProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :excluded_products do |t|
      t.string :name, null: false
      t.string :last_3_numbers, null: false

      t.timestamps
    end
    add_index :excluded_products, :last_3_numbers, unique: true
  end
end
