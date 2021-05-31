module ApplicationHelper

  def ui_translations(section)
    translations = {current: I18n.t('.')[:vue][section]}
    translations.to_json.html_safe
  end
  def j_paginate(scope, default_per_page = scope.default_per_page)
    collection = scope.page(params[:page]).per((params[:per_page] || default_per_page).to_i)
    current, total, per_page = collection.current_page, collection.total_pages, collection.limit_value

    {
      current:  current,
      previous: (current > 1 ? (current - 1) : nil),
      next:     (current == total ? nil : (current + 1)),
      per_page: per_page,
      pages:    total,
      count:    collection.total_count
    }
  end
  def flash_class(level)
    case level
      when 'info' then "alert alert-info"
      when 'notice','success' then "alert alert-success"
      when 'error' then "alert alert-danger"
      when 'alert' then "alert alert-warning"
    end
  end
  def boolean_span(field)
    "<span class='label label-#{field ? "success" : "warning"}'><i class='fa fa-#{field ? "check" : "minus"}'></i></span>".html_safe
  end
  def fa_icon(icon)
    raw "<i class=\"fas fa-#{icon}\"></i>"
  end

  def trend_helper(trend)
    if trend == "growing"
      raw "<i class=\"fas fa-long-arrow-alt-up text-danger\"></i><i class=\"fa fa-long-arrow-alt-up text-danger\"></i>"
    elsif trend == "down"
      raw "<i class=\"fa fa-long-arrow-alt-down text-success\"></i><i class=\"fa fa-long-arrow-alt-down text-success\"></i>"
    elsif trend == "stable"
      raw "<i class=\"fa fa-exchange-alt\"></i>"
    end
  end

  def blur_number(number)
    #binding.pry
    (number.to_s[0...1] == "5" || number.to_s[0...1] == "1" || number.to_s[0...1] == "3") && (number.to_s.size==16 || number.to_s.size==10) ? "#{number.to_s[0...2]}** **** **#{number.to_s[-6...-4]} #{number.to_s[-4...number.to_s.size]}" : number
  end

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
  
end
