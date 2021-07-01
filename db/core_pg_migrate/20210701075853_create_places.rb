class CreatePlaces < ActiveRecord::Migration[6.1]
  def change
    create_table :places do |t|
      t.references :positionable, polymorphic: true, null: false
      t.string :name
      t.string :address
      t.string :city
      t.string :region
      t.string :country
      t.st_point :lonlat, geographic: true

      t.timestamps
    end
    add_index :places, [:positionable_type, :positionable_id]
    add_index :places, :positionable_type
    add_index :places, :lonlat, using: :gist
  end
end
