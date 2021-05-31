module DataAnalysisHelper

  def delete_link(item)
    link_to fa_icon("times"), item, data: {toggle: "tooltip", confirm: t(:are_you_sure, default: 'Are you sure?'), title: t(:delete_resource, resource: item.model_name.human), commit: t(:sure, default: 'Sure!'), cancel: t(:cancel, default: 'Cancel')}, :method => :delete, class: "btn btn-xs btn-danger"
  end

  def edit_link(item)
    link_to fa_icon("edit"), [:edit, item], class: "btn btn-xs btn-warning", data: {toggle: "tooltip", title: t(:edit_resource, resource: item.model_name.human)}
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
end
