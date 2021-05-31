class DataAnalysisController < ApplicationController
  before_action :start_time
  before_action :authenticate_user!

  include ApplicationHelper
  load_and_authorize_resource
  add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index

protected
  def start_time
    @start_time = Time.now
  end

end
