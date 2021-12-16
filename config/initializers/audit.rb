# Make Audited send its data to a different database
Audited::Audit.class_eval do
  establish_connection :core_pg
end
Audited.current_user_method = :current_user
