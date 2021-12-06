class AddIsoNumericToRelatedCountries < ActiveRecord::Migration[6.1]
  def change
    add_column :related_countries, :iso_numeric, :integer
    add_index :related_countries, :iso_numeric
  end
end
