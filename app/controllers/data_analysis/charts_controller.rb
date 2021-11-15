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

    def count_evaluated_movements
      day = params[:day].to_date
      evaluated_movements = case params[:period]
        when 'year'
          EvaluatedMovement.with_all_for_year(day.year).group_by_month(:movement_created_at).count
        when 'month'
          EvaluatedMovement.with_all_for_year(day.year).with_all_for_month(day.month).group_by_day(:movement_created_at).count
        else 
          EvaluatedMovement.with_all_for_day(params[:day]).group_by_hour(:movement_created_at).count
      end
      render json: evaluated_movements.chart_json
    end

    def sum_evaluated_movements
      day = params[:day].to_date
      evaluated_movements = case params[:period]
        when 'year'
          EvaluatedMovement.with_all_for_year(day.year).group_by_month(:movement_created_at).sum(:amount_cents)
        when 'month'
          EvaluatedMovement.with_all_for_year(day.year).with_all_for_month(day.month).group_by_day(:movement_created_at).sum(:amount_cents)
        else 
          EvaluatedMovement.with_all_for_day(params[:day]).group_by_hour(:movement_created_at).sum(:amount_cents).map{|em| [em[0].strftime("%H:%M"), em[1]]}
      end
      render json: evaluated_movements.map{|em| [em[0], (em[1]/100).to_f]}.chart_json
      # render json: evaluated_movements.chart_json
    end

  end
end