module DataAnalysis
  class MapsController < ApplicationController
    before_action(only: :index) { authorize! :admin, :dashboard }
    before_action :set_query_limit
    QUERY_LIMIT = 5000
    DEFAULT_COORDS = [35.9480742, 14.3973929] # latitude,longitude or y,x
    
    def index
      @period = 'month'
      if params[:day].present?
        @day = params[:day].to_date
      else
        @day = Date.today
      end

      if params[:bbox].present?
        coords = params[:bbox].split(',')
      end

      if params[:start_date].present?
        start_date = params[:start_date].to_datetime
      end

      if params[:end_date].present?
        end_date = params[:end_date].to_datetime
      end
      @places = EvaluatedMovement.geocoded.with_all_for_day(@day).order(created_at: :desc).limit(@query_limit)
      respond_to do |format|
        format.html
        format.json do
          @places = spatial_datetime_query(start_date, end_date, coords)
          # @places = datetime_query(start_date, end_date)
          render json: MapsSerializer.new(@places).serializable_hash
        end
      end
  
    end

  private
    def set_query_limit
      @query_limit = params[:limit] ||= QUERY_LIMIT

    end

    def spatial_query(coords, day)
      EvaluatedMovement.with_all_for_day(day).bbox(coords[0], coords[1], coords[2], coords[3]).limit(@query_limit)
    end

    def spatial_datetime_query(start_date, end_date, coords)
      EvaluatedMovement.geocoded.where("movement_created_at between ? and ?", start_date, end_date).bbox(coords[0], coords[1], coords[2], coords[3]).limit(@query_limit)
    end
    def datetime_query(start_date, end_date)
      EvaluatedMovement.geocoded.where("movement_created_at between ? and ?", start_date, end_date).limit(@query_limit)
    end

  end
end
