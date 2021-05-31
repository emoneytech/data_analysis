require 'date'

def date_tuples(from,to)
  prec   = from.size
  start  = Date.new(*from)
  finish = Date.new(*to)

  filter_on = [:day,:mon].first(3-prec)
  filter = ->(d) { filter_on.all? {|attr| d.send(attr) == 1 } }

  (start..finish)
    .select(&filter)
    .map { |d| [d.year,d.mon,d.day].first(prec) }
end
