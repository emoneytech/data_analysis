class CreateQueueCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :queue_customers do |t|
      t.integer :customer_id, null: false
      t.datetime :evaluated_at
      t.timestamps
    end
    add_index :queue_customers, :evaluated_at
    add_index :queue_customers, [:customer_id, :evaluated_at],  unique: true, name: :evaluated_at_index
  end
end
