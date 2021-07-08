module DataAnalysis
  class PlacesController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{Place.model_name.human(count: 2)}"), [:data_analysis, :places]

    QUERY_LIMIT = 5000
    DEFAULT_COORDS = [35.9480742, 14.3973929] # latitude,longitude or y,x

    def index
      if params[:bbox].present?
        coords = params[:bbox].split(',')
      end
      respond_to do |format|
        format.html do
          @places = @places.order(created_at: :desc).geocoded.page(params[:page]).per(params[:per])
        end
        format.json do
          @places = spatial_query(coords)
          render json: PlacesSerializer.new(@places).serializable_hash
        end
      end
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: Place.model_name.human)}"), [:data_analysis, :place]
    end
  
  private

    def spatial_query(coords)
      Place.bbox(coords[0], coords[1], coords[2], coords[3]).limit(QUERY_LIMIT)
    end


  end
end
