class CreateRelatedCountries < ActiveRecord::Migration[6.1]
  def change
    create_table :related_countries do |t|
      t.string :continent
      t.string :region
      t.string :subregion
      t.string :name
      t.text :unofficial_names, array:true, default: []
      t.string :gec
      t.string :alpha2, null: false
      t.string :alpha3, null: false
      t.string :world_region
      t.boolean :in_eu
      t.boolean :in_eea
      t.boolean :in_esm
      t.float :score, null: false, default: 1.0

      t.timestamps
    end
    add_index :related_countries, :continent
    add_index :related_countries, :region
    add_index :related_countries, :subregion
    add_index :related_countries, :name
    add_index :related_countries, :unofficial_names
    add_index :related_countries, :gec
    add_index :related_countries, :alpha2, unique: true
    add_index :related_countries, :alpha3, unique: true
    add_index :related_countries, :world_region
    add_index :related_countries, :in_eu
    add_index :related_countries, :in_eea
    add_index :related_countries, :in_esm
    add_index :related_countries, :score
  end
end
