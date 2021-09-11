module DataAnalysis
  class ContiController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('wallet')} #{Conto.model_name.human(count: 2)}"), :data_analysis_conti

    def index
      @daterange = params[:filter] && params[:filter][:last_movement_daterange] ? params[:filter][:last_movement_daterange] : "#{(Date.today - 3.years).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      conti = Conto.filter(filtering_params).only_customers.includes(:bank_user, :tipo_conto, :stato)
      @conti = conti.order(lastMovimento: :desc).page(params[:page]).per(params[:per])
    end

    def show
      @conto = Conto.where("idConti = ? OR Pan = ?", params[:id], params[:id]).first
      add_breadcrumb @conto.Pan, :data_analysis_conto
    end

    def get_average
      conto = Conto.where(Pan: params[:id]).first
      render json: helpers.raw(helpers.humanized_money_with_symbol(conto.average_stock)).to_json
    end

    def get_max_amount
      conto = Conto.where(Pan: params[:id]).first
      render json: "#{helpers.raw(helpers.humanized_money_with_symbol(conto.max_movement_amount_in))} / #{helpers.raw(helpers.humanized_money_with_symbol(conto.max_movement_amount_out))}".to_json
    end

    def get_average_amount
      conto = Conto.where(Pan: params[:id]).first
      render json: "#{helpers.raw(helpers.humanized_money_with_symbol(conto.average_movement_amount_in))} / #{helpers.raw(helpers.humanized_money_with_symbol(conto.average_movement_amount_out))}".to_json
    end

  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :customer_id,
        :status_id,
        :product_type_id,
        :last_movement_daterange,
        :min_amount,
        :max_amount
      ).permit! : {}
    end
  end
end
