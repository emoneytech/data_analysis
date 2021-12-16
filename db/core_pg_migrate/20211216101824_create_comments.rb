class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :related_country, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :subject, null: false
      t.text :body, null: false
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :comments, :subject
    add_index :comments, :deleted_at
  end
end
