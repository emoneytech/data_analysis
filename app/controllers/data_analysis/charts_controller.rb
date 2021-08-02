module DataAnalysis
  class ChartsController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :dashboard }
    
    def all_risk_movements
      render json: RiskMovement.where("movement_amount > ?", "1".to_f).by_year.group(:table_name).group_by_month(:movement_created_at).count.chart_json
    end

    def average_stocks
      conto = Conto.find(params[:id])
      # conto.movimenticonti.select("avg(SaldoProg) AS avg, DATE_FORMAT(dataMovimento, '%m-%d-%Y') AS date").group("date").to_json
      movimenti = conto.movimenticonti.order(dataMovimento: :asc).select("avg(SaldoProg) AS avg, dataMovimento").group_by_month(:dataMovimento).map{|m| [m.dataMovimento, m.avg]}
      render json: movimenti.chart_json
    end

    def recursions
      recursions = Hash.new
      EvalMovement.where.not(recursion_all_7: nil, recursion_all_7: 0).for_month(Date.today - 1.month).group(:recursion_all_7).group_by_day(:movement_created_at).order(recursion_all_7: :asc).count.map{|k,v| recursions[ [k[0],k[1]] ] = v}
      render json: recursions.chart_json
    end

  end
end