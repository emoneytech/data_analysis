class AddLockVersionToEvalMovements < ActiveRecord::Migration[6.1]
  def change
    add_column :eval_movements, :lock_version, :integer, null: false, default: 0
    add_index :eval_movements, :lock_version
    add_index :eval_movements, :service_id, unique: true, name: 'service_unique_on_eval_movements'
  end

=begin
dups = EvalMovement.select(:service_id).group(:service_id).having("count(*) > 1").count
dups.keys.each do |key|
  EvalMovement.where(service_id: key).order(:service_updated_at).limit( dups[key] - 1 ).offset(1).destroy_all
end
=end

end

