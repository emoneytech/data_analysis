class CreateSanctionLists < ActiveRecord::Migration[6.1]
  def change
    create_table :sanction_lists do |t|
      t.string :name
      t.integer :sanction_list_items_count

      t.timestamps
    end
  end
end
