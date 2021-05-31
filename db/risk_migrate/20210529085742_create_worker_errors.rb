class CreateWorkerErrors < ActiveRecord::Migration[6.1]
  def change
    create_table :worker_errors do |t|
      t.string :name
      t.string :params

      t.timestamps
    end
  end
end
