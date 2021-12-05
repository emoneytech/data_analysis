class CreateActivityLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_logs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :browser
      t.string :ip_address
      t.string :controller, null: false
      t.string :action, null: false
      t.string :params
      t.string :note

      t.timestamps
    end
  end
end
