class CreateQueueMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :queue_movements do |t|
      t.integer :movement_id, null: false

      t.timestamp :last_update, null: false, default: -> { 'CURRENT_TIMESTAMP' }
    end
    add_index :queue_movements, :movement_id
  end
end
