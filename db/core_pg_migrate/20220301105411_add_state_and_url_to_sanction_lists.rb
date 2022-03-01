class AddStateAndUrlToSanctionLists < ActiveRecord::Migration[6.1]
  def change
    add_column :sanction_lists, :state, :string, null: false, default: 'new'
    add_index :sanction_lists, :state
    add_column :sanction_lists, :remote_url, :string
  end
end
