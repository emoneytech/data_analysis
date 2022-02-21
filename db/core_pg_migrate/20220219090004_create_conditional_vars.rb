class CreateConditionalVars < ActiveRecord::Migration[6.1]
  def change
    create_table :conditional_vars do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :field_source_name, null: false
      t.string :field_type, null: false
      t.string :default_value, null: false, default: 1

      t.timestamps
    end
    add_index :conditional_vars, :name, unique: true
  end
end
