class ActivityLogsController < ApplicationController
  before_action :load_user, except: :create
  load_and_authorize_resource except: :create
  add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{User.model_name.human(count: 2)}"), :users


  def index
    @activity_logs = @user.activity_logs.order(created_at: :desc).page(params[:page])
  end


  def show
  end


private
  def load_user
    @user = User.find(params[:user_id])
  end
end

