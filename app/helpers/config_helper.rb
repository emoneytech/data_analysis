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

  def errors_for(object)
    if object.errors.any?
      content_tag(:div, class: "card border-danger") do
        concat(content_tag(:div, class: "card-header bg-danger text-white") do
          concat "#{pluralize(object.errors.count, "error")} prohibited this #{object.class.name.downcase} from being saved:"
        end)
        concat(content_tag(:ul, class: 'mb-0 list-group list-group-flush') do
          object.errors.full_messages.each do |msg|
            concat content_tag(:li, msg, class: 'list-group-item')
          end
        end)
      end
    end
  end

end