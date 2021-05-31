module DataAnalysis
  class ServiziController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{Servizio.model_name.human(count: 2)}"), :data_analysis_servizi
    respond_to :json, only: :map

    def index
      # @cached_total_pages = (RowCount.where(relname: 'servizi').pluck(:reltuples).first / 30.0).ceil
      @cached_total_pages = (Servizio.count / 30.0).ceil
      @servizi = Servizio.includes(:anagrafica).order(servizio_id: :desc).page(params[:page]).per(30).without_count
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@servizio.id}"), @servizio
    end

    def map
    end

  end
end