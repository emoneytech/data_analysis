class ActivityLogsController < ApplicationController
  load_and_authorize_resource except: :create
  add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{User.model_name.human(count: 2)}"), :users


  def index
    @activity_logs = @activity_logs.page(params[:page])
  end


  def show
  end


private

end

