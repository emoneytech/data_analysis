json.sanction_lists @sanction_lists.each do |sanction_list|
  json.partial! 'api/v1/sanction_lists/sanction_list', sanction_list: sanction_list
end
