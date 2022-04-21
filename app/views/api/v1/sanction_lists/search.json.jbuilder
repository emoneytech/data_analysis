json.results @items.each do |item|
  json.partial! 'api/v1/sanction_lists/item', item: item
end