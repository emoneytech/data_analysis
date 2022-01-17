class Customers::ChartsController < ApplicationController
  load_and_authorize_resource :anagrafica
  # authorize_resource class: false
  respond_to :json

  def evaluated_movements_for_month
    period = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
    render json: @anagrafica.evaluated_movements.with_all_for_year(period.year).with_all_for_month(period.month).group(:product_name).group_by_day(:movement_created_at).count.chart_json
  end

  def evaluated_movements
    if filtering_params["in_out"] == "ALL"
      result = EvaluatedMovement.filter(filtering_params.except("in_out"))
    else
      result = EvaluatedMovement.filter(filtering_params)
    end
    if params[:group_by_day] && params[:group_by_day].to_i == 1
      render json: result.group(:product_name).group_by_day(:movement_created_at).count.chart_json
    else
      render json: result.group(:product_name).group_by_month(:movement_created_at).count.chart_json
    end
  end

  def latest_evaluated_movements
    daterange = "#{(Date.today - 1.year).strftime("%d/%m/%Y")} - #{(Date.today).strftime("%d/%m/%Y")}"
    result = @anagrafica.evaluated_movements.filter_by_daterange(daterange)
    result = result.filter_by_in_out(params[:in_out]) if params[:in_out]
    render json: result.group(:product_name).group_by_month(:movement_created_at).count.chart_json
  end

  def latest_products
    prodotti = @anagrafica.prodotti
    tp = @anagrafica.tutti_prodotti.group(:prodotto).count
    products = tp.map{|k,v| {prodotti.find_by_idprodotto(k).nome => v}}.reduce(:merge)
    render json: products.chart_json
  end

  def latest_customer_evaluations
    customer_evaluations = 
      @anagrafica.customer_evaluations.select(
        "CONCAT(eval_year, '-', eval_month) AS period",
        :last_attention_factor7,
        :last_attention_factor30
      ).order(
        eval_year: :desc,
        eval_month: :desc
      ).limit(12)
    hsh = {}
    customer_evaluations.reverse.each do |customer_evaluation|
      hsh[["7 days attention factor", customer_evaluation.period]] = customer_evaluation.last_attention_factor7
      hsh[["30 days attention factor", customer_evaluation.period]] = customer_evaluation.last_attention_factor30
    end
    render json: hsh.chart_json
  end

  private

  def filtering_params
    params[:filter] ? params[:filter].slice(
      :customer_id,
      :daterange,
      :in_out,
    ).permit! : {}
  end

end
