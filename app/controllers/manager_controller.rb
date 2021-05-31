class ManagerController < ApplicationController
  before_action :start_time
  before_action :authenticate_user!

  include ApplicationHelper
  load_and_authorize_resource
  add_breadcrumb helpers.raw("#{helpers.fa_icon('dashboard')} Dashboard"), :manager_dashboard_index_path

protected
  def start_time
    @start_time = Time.now
  end

end
