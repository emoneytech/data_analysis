module DataAnalysis
  class IbansController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('bank')} #{Iban.model_name.human(count: 2)}"), :data_analysis_ibans
    respond_to :json, only: :map

    def index
      @ibans = @ibans.includes(:anagrafica, :conto).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@iban.iban}"), :data_analysis_iban
    end

    def map
    end
  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :customer_id,
        :conto
      ).permit! : {}
    end

  end
end

