class AddDeletedAtToActivityLogs < ActiveRecord::Migration[6.1]
  def change
    add_column :activity_logs, :deleted_at, :datetime
    add_index :activity_logs, :deleted_at
  end
end
