class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :record_activity
  before_action :get_module_name
  add_flash_types :info, :error, :warning

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden }
      format.html { redirect_to forbidden_path, alert: exception.message }
    end
  end


private
  def get_module_name
    my_class_name = self.class.name
    if my_class_name.index("::").nil? then
      @module_name = nil
    else
      @module_name = my_class_name.split("::").first
    end
  end

  def record_activity
    @activity = ActivityLog.new
    @activity.user = current_user
    @activity.browser = request.env['HTTP_USER_AGENT']
    @activity.ip_address = request.env['REMOTE_ADDR']
    @activity.controller = controller_name 
    @activity.action = action_name 
    @activity.params = params.inspect
    @activity.save
  end

end
