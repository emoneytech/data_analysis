module DataAnalysis
  class ChartsController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :dashboard }
    
    def all_risk_movements
      render json: RiskMovement.where("movement_amount > ?", "1".to_f).by_year.group(:table_name).group_by_month(:movement_created_at).count
    end

  end
end