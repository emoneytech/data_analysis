class CreateCustomerCategoryConditionalVars < ActiveRecord::Migration[6.1]
  def change
    create_table :customer_category_conditional_vars do |t|
      t.references :customer_category, null: false, foreign_key: true, index: {name: 'customer_category_on_var_index'}
      t.references :conditional_var, null: false, foreign_key: true, index: {name: 'conditional_var_on_var_index'}
      t.float :value, null: false

      t.timestamps
    end
  end
end
