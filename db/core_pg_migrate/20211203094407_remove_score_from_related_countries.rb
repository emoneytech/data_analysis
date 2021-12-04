class RemoveScoreFromRelatedCountries < ActiveRecord::Migration[6.1]
  def change
    remove_index :related_countries, :score
    remove_column :related_countries, :score, :float
  end
end
