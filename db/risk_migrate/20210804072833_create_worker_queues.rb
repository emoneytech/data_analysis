class CreateWorkerQueues < ActiveRecord::Migration[6.1]
  def change
    create_table :worker_queues do |t|
      t.integer :service_id, null: false

      t.timestamp :last_update, null: false, default: -> { 'CURRENT_TIMESTAMP' }
    end
    add_index :worker_queues, :service_id
  end
end
