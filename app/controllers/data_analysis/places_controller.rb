module DataAnalysis
  class PlacesController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{Place.model_name.human(count: 2)}"), [:data_analysis, :places]

    def index
      @places = @places.order(created_at: :desc).geocoded.page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: Place.model_name.human)}"), [:data_analysis, :place]
    end


  end
end
