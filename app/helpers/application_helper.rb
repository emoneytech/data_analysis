module ApplicationHelper
  include LetterAvatar::AvatarHelper

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
      when 'info' then "info"
      when 'notice','success' then "success"
      when 'error' then "danger"
      when 'alert' then "warning"
    end
  end

  def flash_icon(level)
    case level
      when 'info' then "info"
      when 'notice','success' then "check"
      when 'error' then "ban"
      when 'alert' then "exclamation-triangle"
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
  
  def link_to_function(name, *args, &block)
    html_options = args.extract_options!.symbolize_keys

    function = block_given? ? update_page(&block) : args[0] || ''
    onclick = "#{"#{html_options[:onclick]}; " if html_options[:onclick]}#{function}; return false;"
    href = html_options[:href] || '#'

    content_tag(:a, name, html_options.merge(:href => href, :onclick => onclick))
  end

  def toastr_flash
    flash.each_with_object([]) do |(type, message), flash_messages|
      type = 'success' if type == 'notice'
      type = 'error' if type == 'alert'
      text = "<script>toastr.#{type}('#{message}', '', { closeButton: true, progressBar: true })</script>"
      flash_messages << text.html_safe if message
    end.join("\n").html_safe
  end

  def country_style(attention_factor)
    case attention_factor
    when 0...1.59
      "#ffcc00"
    when 1.6..1.9
      "#ff0000"
    when 1.9...Float::INFINITY
      "#000000"
    else
      "transparent"
    end
  end

  def country_txt_style(attention_factor)
    case attention_factor
    when 1.9...Float::INFINITY
      "#ffffff"
    end
  end

  def observed_element_helper(observed_element)
    case observed_element.category_element
    when 'customer_id'
      link_to Anagrafica.find(observed_element.content).full_name, customers_anagrafica_path(observed_element.content) 
    when 'country'
      link_to RelatedCountry.find(observed_element.content).name, data_analysis_related_country_path(observed_element.content) 
    else
      observed_element.content
    end
  end

  def obfuscator(str)
    return str unless @obfuscator
    return "[obfuscated demo]"
  end

end
