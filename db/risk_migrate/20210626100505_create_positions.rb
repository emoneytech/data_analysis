class CreatePositions < ActiveRecord::Migration[6.1]
  def change
    create_table :positions do |t|
      t.references :positionable, polymorphic: true, null: false, index: true
      t.decimal :latitude, {:precision=>10, :scale=>6}
      t.decimal :longitude, {:precision=>10, :scale=>6}
      t.string :address
      t.text :description
      t.timestamps
    end
    add_index :positions, [:latitude, :longitude]
  end
end
