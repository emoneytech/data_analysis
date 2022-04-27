class AddActiveToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :active, :boolean, default: true, null: false
    add_index :users, :active
  end
end
