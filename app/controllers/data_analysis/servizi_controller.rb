module DataAnalysis
  class ServiziController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{Servizio.model_name.human(count: 2)}"), :data_analysis_servizi
    respond_to :json, only: :map

    def index
      @servizi = Servizio.filter(filtering_params).includes(:anagrafica).order(servizio_id: :desc).page(params[:page]).per(30)
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@servizio.id}"), @servizio
    end

    def map
    end
  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :min_amount,
        :max_amount,
        :customer_id,
        :product_id,
        :product_name,
        :vendor,
        :daterange
      ).permit! : {}
    end

  end
end

