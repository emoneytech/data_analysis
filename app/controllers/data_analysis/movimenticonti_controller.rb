module DataAnalysis
  class MovimenticontiController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{Movimentoconto.model_name.human(count: 2)}"), :data_analysis_servizi

    def index
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today - 1.month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      # @cached_total_pages = (RowCount.where(relname: 'movimenticonti').pluck(:reltuples).first / 30.0).ceil
      movimenticonti = Movimentoconto.filter(filtering_params).only_customers.includes(:servizio, :anagrafica)
      #@count = 
      # @cached_total_pages = (movimenticonti.count / 30.0).ceil
      @movimenticonti = movimenticonti.order(movimentoconto_id: :desc).page(params[:page]).per(30)#.without_count
    end

    def show
      @movimentoconto = Movimentoconto.where(id: params[:id]).first
    end
  
  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :customer_id,
        :daterange,
        :min_amount,
        :max_amount,
        :in,
        :out,
        :service_id
      ).permit! : {}
    end
  end
end
