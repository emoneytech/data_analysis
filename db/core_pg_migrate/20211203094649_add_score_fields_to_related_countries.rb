class AddScoreFieldsToRelatedCountries < ActiveRecord::Migration[6.1]
  def change
    add_column :related_countries, :kyc_score, :float
    add_column :related_countries, :eval_kyc_score, :float
    add_index :related_countries, :kyc_score

    add_column :related_countries, :basel_score, :float
    add_column :related_countries, :eval_basel_score, :float
    add_index :related_countries, :basel_score
    
    add_column :related_countries, :corruption_perception, :float
    add_column :related_countries, :eval_corruption_perception, :float
    add_index :related_countries, :corruption_perception
    
    add_column :related_countries, :gray_or_black_list, :integer
    add_index :related_countries, :gray_or_black_list
    
    add_column :related_countries, :attention_factor, :float
    add_index :related_countries, :attention_factor
    
  end
end
