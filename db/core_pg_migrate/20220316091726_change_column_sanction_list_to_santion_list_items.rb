class ChangeColumnSanctionListToSantionListItems < ActiveRecord::Migration[6.1]
  def change
    change_column_null :sanction_list_items, :sanction_list_id, true
  end
end
