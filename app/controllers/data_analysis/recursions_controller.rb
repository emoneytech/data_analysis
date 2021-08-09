module DataAnalysis
  class RecursionsController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :sync }

    def index
    end
    
    def chart
      @key = params[:key] ||= 'all_7'
      field = "recursion_#{@key}".to_sym
      recursions = Hash.new
      EvalMovement.where.not(field => nil, field => 0).for_month(Date.today - 1.month).group(field).group_by_day(:movement_created_at).order(field => :asc).count.map{|k,v| recursions[ [k[0],k[1]] ] = v}
      render json: recursions.chart_json
    end

  end
end