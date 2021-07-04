module DataAnalysis
  class SetupController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :setup }
    add_breadcrumb helpers.raw("#{helpers.fa_icon('wrench')} Setp"), :data_analysis_setup_index
    add_breadcrumb "Sync", :data_analysis_sync_index_path
    
    def index
      @evaluated_products = EvalMovement.select(:product_id, :product_name).distinct
    end

  end
end