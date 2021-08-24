class EnableExtensionPgTrgmToSanctionListItems < ActiveRecord::Migration[6.1]
  def change
    enable_extension :pg_trgm
    add_index :sanction_list_items, :name_alias_last_name, opclass: :gin_trgm_ops, using: :gin
    add_index :sanction_list_items, :name_alias_first_name, opclass: :gin_trgm_ops, using: :gin
    add_index :sanction_list_items, :name_alias_middle_name, opclass: :gin_trgm_ops, using: :gin
    add_index :sanction_list_items, :name_alias_whole_name, opclass: :gin_trgm_ops, using: :gin

  end
end
