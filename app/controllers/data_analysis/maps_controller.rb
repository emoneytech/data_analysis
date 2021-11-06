module DataAnalysis
  class MapsController < ApplicationController
    before_action(only: :index) { authorize! :admin, :dashboard }
    QUERY_LIMIT = 5000
    DEFAULT_COORDS = [35.9480742, 14.3973929] # latitude,longitude or y,x
    
    def index
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
      @places = EvaluatedMovement.geocoded.with_all_for_day(@day).order(created_at: :desc).limit(QUERY_LIMIT)
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
    def spatial_query(coords, day)
      EvaluatedMovement.with_all_for_day(day).bbox(coords[0], coords[1], coords[2], coords[3]).limit(QUERY_LIMIT)
    end

    def spatial_datetime_query(start_date, end_date, coords)
      EvaluatedMovement.geocoded.where("movement_created_at between ? and ?", start_date, end_date).bbox(coords[0], coords[1], coords[2], coords[3]).limit(QUERY_LIMIT)
    end
    def datetime_query(start_date, end_date)
      EvaluatedMovement.geocoded.where("movement_created_at between ? and ?", start_date, end_date).limit(QUERY_LIMIT)
    end
  end
end
=begin
module DataAnalysis
  class MapsController < ApplicationController
    before_action(only: :index) { authorize! :admin, :dashboard }

    QUERY_LIMIT = 5000

    def index
      query = generate_query(params)
      # splits coordinates  
      if params[:bbox].present?
        coords = params[:bbox].split(',')
      end
      
      # checks if bbox is among params and generates either combined spatial query or single spatial query
      if params[:bbox].present?
        render json: spatial_query(coords, query), serializer: EvaluatedMovementsSerializer
      end
    end


  private

    # combined queries where one is bbox


    # simple single query
    def normal_query(query)
      EvaluatedMovement.geocoded.where(query).limit(QUERY_LIMIT)
    end

    # query generator
    def generate_query(params)
      query = {}
      [:product_name, :service_status, :beneficiary, :customer_full_name, :service_id].each do |key|
        if params[key].present?
          query[key] = params[key]
        end
      end
      query
    end

  end
end

=end