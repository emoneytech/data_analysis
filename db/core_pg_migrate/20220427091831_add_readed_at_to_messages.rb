class AddReadedAtToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :readed_at, :datetime
    add_index :messages, :readed_at
  end
end
