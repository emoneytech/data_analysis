class DataAnalysisController < ApplicationController
  before_action :start_time
  before_action :authenticate_user!
  before_action :record_activity

  include ApplicationHelper
  load_and_authorize_resource
  add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index

protected
  def start_time
    @start_time = Time.now
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
