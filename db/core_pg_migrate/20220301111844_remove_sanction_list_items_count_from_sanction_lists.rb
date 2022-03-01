class RemoveSanctionListItemsCountFromSanctionLists < ActiveRecord::Migration[6.1]
  def change
    remove_column :sanction_lists, :sanction_list_items_count, :integer
  end
end
