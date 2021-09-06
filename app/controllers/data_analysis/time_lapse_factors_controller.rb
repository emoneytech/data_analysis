module DataAnalysis
  class TimeLapseFactorsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{TimeLapseFactor.model_name.human(count: 2)}"), [:data_analysis, :time_lapse_factors]


    def index
      @time_lapse_factors = TimeLapseFactor.filter(filtering_params).includes(:anagrafica)
      @time_lapse_factors = @time_lapse_factors.order(time_lapse_factor: :asc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: TimeLapseFactor.model_name.human)}"), [:data_analysis, :time_lapse_factor]
    end

    private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :anagrafica_id,
        :max_time_lapse_factor,
        :min_time_lapse_factor
      ).permit! : {}
    end
    
  end
end
