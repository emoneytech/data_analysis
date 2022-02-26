class RemoveDefaultValueFromConditionalVars < ActiveRecord::Migration[6.1]
  def change
    remove_column :conditional_vars, :default_value, :string
  end
end
