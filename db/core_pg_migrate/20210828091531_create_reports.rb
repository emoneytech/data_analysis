class CreateReports < ActiveRecord::Migration[6.1]
  def change
    create_table :reports do |t|
      t.integer :user_id, null: false
      t.string :name
      t.jsonb :opts, null: false, default: '{}'

      t.timestamps
    end
    add_index :reports, :user_id
    add_index :reports, :name
    add_index  :reports, :opts, using: :gin
  end
end
