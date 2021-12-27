class CreateWebpushSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :webpush_subscriptions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :endpoint
      t.string :auth_key
      t.string :p256dh_key
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :webpush_subscriptions, :deleted_at
  end
end
