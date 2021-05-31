module DataAnalysis
  class Dashboard2Controller < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :revenue }
    add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index
    layout "application2"
    def index
      puts params[:fy]
    end
      
    def reports
    end

  end
end
