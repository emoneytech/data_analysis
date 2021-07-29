class AddCountriesToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :origin_country, :string
    add_index :eval_movements, :origin_country
    add_column :eval_movements, :destination_country, :string
    add_index :eval_movements, :destination_country
    add_column :eval_movements, :internal, :boolean, null: false, default: false
    add_index :eval_movements, :internal
  end
end
