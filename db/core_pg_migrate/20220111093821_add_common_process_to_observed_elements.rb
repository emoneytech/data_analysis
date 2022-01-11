class AddCommonProcessToObservedElements < ActiveRecord::Migration[6.1]
  def change
    add_column :observed_elements, :common_process, :boolean, default: false, null: false
    add_index :observed_elements, :common_process
  end
end
