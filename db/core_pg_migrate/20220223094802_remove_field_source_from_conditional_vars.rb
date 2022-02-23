class RemoveFieldSourceFromConditionalVars < ActiveRecord::Migration[6.1]
  def change
    remove_column :conditional_vars, :field_source_name, :string
    remove_column :conditional_vars, :field_type, :string
  end
end
