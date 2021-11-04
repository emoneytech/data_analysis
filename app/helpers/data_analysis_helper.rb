module DataAnalysisHelper

  def delete_link(item)
    link_to fa_icon("times"), item, data: {toggle: "tooltip", confirm: t(:are_you_sure, default: 'Are you sure?'), title: t(:delete_resource, resource: item.model_name.human), commit: t(:sure, default: 'Sure!'), cancel: t(:cancel, default: 'Cancel')}, :method => :delete, class: "btn btn-xs btn-danger"
  end

  def edit_link(item)
    link_to fa_icon("edit"), [:edit, item], class: "btn btn-xs btn-warning", data: {toggle: "tooltip", title: t(:edit_resource, resource: item.model_name.human)}
  end

  def back_link(path)
    link_to fa_icon("arrow-left"), path, class: "btn btn-xs btn-info", data: {toggle: "tooltip", title: t(:back, default: "Back")}
  end

  def show_link(item)
    link_to fa_icon("eye"), item, class: "btn btn-xs btn-primary", data: {toggle: "tooltip", title: t(:show_resource, resource: item.model_name.human)}
  end

  def links(item)
    show_link(item) + " " + edit_link(item) + " " + delete_link(item)
  end

  def nested_delete_link(item, parent)
    link_to fa_icon("times"), [parent, item], data: {toggle: "tooltip", confirm: t(:are_you_sure, default: 'Are you sure?'), title: t(:delete_resource, resource: item.model_name.human), commit: t(:sure, default: 'Sure!'), cancel: t(:cancel, default: 'Cancel')}, :method => :delete, class: "btn btn-xs btn-danger"
  end

  def nested_edit_link(item, parent)
    link_to fa_icon("edit"), [:edit, parent, item], class: "btn btn-xs btn-warning", data: {toggle: "tooltip", title: t(:edit_resource, resource: item.model_name.human)}
  end

  def nested_show_link(item, parent)
    link_to fa_icon("eye"), [:data_analysis, parent, item], class: "btn btn-xs btn-primary", data: {toggle: "tooltip", title: t(:show_resource, resource: item.model_name.human)}
  end

  def nested_links(item, parent)
    nested_show_link(item, parent) + " " + nested_edit_link(item, parent) + " " + nested_delete_link(item, parent)
  end

  def tuple_to_html(tuple)
    "#{t("date.month_names")[tuple[1]]} - #{tuple[0]}"
  end

  def year_to_daterange(year)
    start_date_string = "#{year}-01-01".to_date.strftime('%d/%m/%Y')
    end_date =Date.today.year === year.to_i ? Date.today : "#{year}-12-31".to_date
    end_date_string = end_date.strftime('%d/%m/%Y')
    return "#{start_date_string} - #{end_date_string}"
  end

  def ordinante_proc(mandato)
    str = ""
    if mandato.Beneficiario === 0 && ":".in?(mandato.Ordinante)
      pre, service_id = mandato.Ordinante.split(":")
      str = "#{pre}: #{link_to service_id, data_analysis_servizio_path(service_id.strip)}"
    elsif "From".in?(mandato.Ordinante) && "To".in?(mandato.Ordinante)
      marker1 = 'From'
      marker2 = 'To'
      from = mandato.Ordinante.string_between_markers(marker1, marker2)
      name, iban = from.split(' - ')
      to = mandato.Ordinante.split("#{iban}")[1].strip[3..]
      to_name, to_iban, to_other = to.split(' - ')

      str =  "From: #{name.strip}<br/>"
      str +=  "Iban: #{link_to iban.strip, data_analysis_check_ibans_path(params: {filter: {iban: iban.strip}})}<br/>"
      str += "To: #{to_name}<br/>"
      str += "Iban dest: #{link_to to_iban.strip, data_analysis_iban_path(to_iban.strip)}<br/>"
      str += "Informations: #{to_other}<br/>"
    end
    return str === "" ? mandato.Ordinante : str.html_safe
  end
end
