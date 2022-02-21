module ConfigHelper
  def config_delete_link(item)
    link_to fa_icon("times"), [:config, item], data: {toggle: "tooltip", confirm: t(:are_you_sure, default: 'Are you sure?'), title: t(:delete_resource, resource: item.model_name.human), commit: t(:sure, default: 'Sure!'), cancel: t(:cancel, default: 'Cancel')}, :method => :delete, class: "btn btn-xs btn-danger"
  end

  def config_edit_link(item)
    link_to fa_icon("edit"), [:edit, :config, item], class: "btn btn-xs btn-warning", data: {toggle: "tooltip", title: t(:edit_resource, resource: item.model_name.human)}
  end

  def config_show_link(item)
    link_to fa_icon("eye"), [:config, item], class: "btn btn-xs btn-primary", data: {toggle: "tooltip", title: t(:show_resource, resource: item.model_name.human)}
  end

  def config_links(item)
    config_show_link(item) + " " + config_edit_link(item) + " " + config_delete_link(item)
  end

end