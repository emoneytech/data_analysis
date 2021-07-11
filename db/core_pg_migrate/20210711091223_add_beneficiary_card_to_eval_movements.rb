class AddBeneficiaryCardToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :beneficiary_card, :string, limit: 50
    add_index :eval_movements, :beneficiary_iban
    add_index :eval_movements, :beneficiary_card
  end
end
