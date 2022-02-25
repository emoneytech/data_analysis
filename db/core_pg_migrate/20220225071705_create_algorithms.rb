class CreateAlgorithms < ActiveRecord::Migration[6.1]
  def change
    create_table :algorithms do |t|
      t.string :name, null: false
      t.string :presentation, null: false
      t.string :eq, null: false
      t.boolean :default, null: false, default: false

      t.timestamps
    end
    add_index :algorithms, :name, unique: true
    add_index :algorithms, :default
  end
end
