module DataAnalysis
  class PositionsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{Position.model_name.human(count: 2)}"), [:data_analysis, :positions]

    def index
      @positions = @positions.where(latitude: nil, longitude: nil).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: Position.model_name.human)}"), [:data_analysis, :position]
      @prev = @position.all_previous
      @next = @position.all_next
    end


  end
end
