class AddObfuscatorToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :obfuscator, :boolean, null: false, default: true
  end
end
