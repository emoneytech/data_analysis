class AddClientInfoToWebpushSubscriptions < ActiveRecord::Migration[6.1]
  def change
    add_column :webpush_subscriptions, :client, :jsonb, null: false, default: '{}'
    add_index :webpush_subscriptions, :client, using: :gin
  end
end
