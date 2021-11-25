class ApplicationController < ActionController::Base
  before_action :get_module_name
  add_flash_types :info, :error, :warning
private
  def get_module_name
    my_class_name = self.class.name
    if my_class_name.index("::").nil? then
      @module_name = nil
    else
      @module_name = my_class_name.split("::").first
    end
  end
end
