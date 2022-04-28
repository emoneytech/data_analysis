class AddFieldsToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :icon, :string, null: false, default: 'message'
    add_column :messages, :title, :string, null: false, default: 'System Message'
    add_column :messages, :subtitle, :string, null: false, default: ''
    add_column :messages, :widget_type, :string, null: false, default: 'info'
  end
end
