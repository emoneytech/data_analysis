class RemoveFkColumnSanctionListToSantionListItems < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :sanction_list_items, column: :sanction_list_id
  end
end
