class AddDeletedAtToNotifications < ActiveRecord::Migration[6.1]
  def change
    add_column :notifications, :deleted_at, :datetime
    add_index :notifications, :deleted_at
  end
end
