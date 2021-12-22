class CreateObservedElements < ActiveRecord::Migration[6.1]
  def change
    create_table :observed_elements do |t|
      t.string :category_element, null: false
      t.string :content, null: false
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :observed_elements, :category_element
    add_index :observed_elements, :content
    add_index :observed_elements, :deleted_at
  end
end
