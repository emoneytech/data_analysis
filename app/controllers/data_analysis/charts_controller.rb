module DataAnalysis
  class ChartsController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :dashboard }
    
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
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_year(day.year).group(:product_name).group_by_month(:movement_created_at).count
        when 'month'
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_year(day.year).with_all_for_month(day.month).group(:product_name).group_by_day(:movement_created_at).count
        else 
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_day(params[:day]).group(:product_name).group_by_hour(:movement_created_at).count
      end
      render json: evaluated_movements.chart_json
    end

    def sum_evaluated_movements
      day = params[:day].to_date
      evaluated_movements = case params[:period]
        when 'year'
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_year(day.year).group_by_month(:movement_created_at).sum(:amount_cents)
        when 'month'
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_year(day.year).with_all_for_month(day.month).group_by_day(:movement_created_at).sum(:amount_cents)
        else 
          EvaluatedMovement.filter_by_in_out(params[:in_out]).with_all_for_day(params[:day]).group_by_hour(:movement_created_at).sum(:amount_cents).map{|em| [em[0].strftime("%H:%M"), em[1]]}
      end
      render json: evaluated_movements.map{|em| [em[0], (em[1]/100).to_f]}.chart_json
      # render json: evaluated_movements.chart_json
    end

    def amount_evaluated_movements
      if evaluated_movements_filtering_params["in_out"] == "ALL"
        evaluated_movements = EvaluatedMovement.filter(evaluated_movements_filtering_params.except("in_out"))
      else
        evaluated_movements = EvaluatedMovement.filter(evaluated_movements_filtering_params)
      end
      evaluated_movements = case params[:period]
        when 'year'
          evaluated_movements.group_by_month(:movement_created_at).sum(:amount_cents)
        when 'month'
          evaluated_movements.group_by_day(:movement_created_at).sum(:amount_cents)
        else 
          evaluated_movements.group_by_hour(:movement_created_at).sum(:amount_cents).map{|em| [em[0].strftime("%H:%M"), em[1]]}
      end
      render json: evaluated_movements.map{|em| [em[0], (em[1]/100).to_f]}.chart_json
    end

    def evaluated_movements
      if evaluated_movements_filtering_params["in_out"] == "ALL"
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params.except("in_out"))
      else
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params)
      end
      if params[:group_by_day] && params[:group_by_day].to_i == 1
        render json: result.group(:product_name).group_by_day(:movement_created_at).count.chart_json
      else
        render json: result.group(:product_name).group_by_month(:movement_created_at).count.chart_json
      end
    end
  
    def benfords_law
      if evaluated_movements_filtering_params["in_out"] == "ALL"
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params.except("in_out"))
      else
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params)
      end
      render json: result.group("SUBSTR(CAST(amount_cents as CHAR), 1, 1)").count.chart_json
    end

    def map_destination_countries
      result =  EvaluatedMovement.group(:destination_country).count
      render json: result.as_json
    end

    def map_origin_countries
      result =  EvaluatedMovement.group(:origin_country).count
      render json: result.as_json
    end

    def attention_factors_map
      result = RelatedCountry.select(:iso_numeric, :attention_factor).where.not(attention_factor: nil).map{|c| {code: c.iso_numeric, value: c.attention_factor}}
      render json: result.as_json
    end

    def kyc_scores_map
      result = RelatedCountry.select(:iso_numeric, :kyc_score).where.not(kyc_score: nil).map{|c| {code: c.iso_numeric, value: c.kyc_score}}
      render json: result.as_json
    end

    def basel_scores_map
      result = RelatedCountry.select(:iso_numeric, :basel_score).where.not(basel_score: nil).map{|c| {code: c.iso_numeric, value: c.basel_score}}
      render json: result.as_json
    end

    def gray_or_black_lists_map
      result = RelatedCountry.select(:iso_numeric, :gray_or_black_list).where.not(gray_or_black_list: nil).map{|c| {code: c.iso_numeric, value: c.gray_or_black_list}}
      render json: result.as_json
    end

    def test
      result = {
        "financialreport": [
          {
            "month": "Jan",
            "cost": 30,
            "profit": 60,
            "revenue": 90
          },
          {
            "month": "Feb",
            "cost": 30,
            "profit": 90,
            "revenue": 120
          }, 
          {
            "month": "Mar",
            "cost": 30,
            "profit": 120,
            "revenue": 150
          },
          {
            "month": "Apr",
            "cost": 30,
            "profit": 210,
            "revenue": 240
          },
          {
            "month": "May",
            "cost": 30,
            "profit": 60,
            "revenue": 90
          },
          {
            "month": "Jun",
            "cost": 30,
            "profit": 160,
            "revenue": 190
          }
        ]
      } 
      render json: result.as_json
    end

    def products
      if evaluated_movements_filtering_params["in_out"] == "ALL"
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params.except("in_out"))
      else
        result = EvaluatedMovement.filter(evaluated_movements_filtering_params)
      end
      render json: result.group(:product_name).count.chart_json
    end

  private

  def evaluated_movements_filtering_params
    params[:filter] ? params[:filter].slice(
      :customer_id,
      :daterange,
      :in_out,
    ).permit! : {}
  end

  end
end