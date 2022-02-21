class CreateConditionItems < ActiveRecord::Migration[6.1]
  def change
    create_table :condition_items do |t|
      t.references :conditional_var, null: false, foreign_key: true
      t.string :field_operator, null: false
      t.string :field_value, null: false
      t.string :eq, null: false

      t.timestamps
    end
  end
end
