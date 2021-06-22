module Customers
  class ChartsController < ApplicationController
    load_and_authorize_resource :anagrafica
    authorize_resource class: false
    respond_to :json

    def evaluated_movements_for_month
      month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
      render json: @anagrafica.evaluated_movements.with_all_for_month(month).group(:product_name).group_by_day(:service_updated_at).count.chart_json
    end
    
  end
end