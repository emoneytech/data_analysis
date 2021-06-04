module DataAnalysis
  class EvaluatedMovementsController < DataAnalysisController

    before_action :local_breadcrumb #, :init_risk

    def index
      @evaluated_movements = @evaluated_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: EvaluatedMovement.model_name.human)}"), [:data_analysis, :evaluated_movement]
      @prev = @evaluated_movement.all_previous
      @next = @evaluated_movement.all_next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvaluatedMovement.model_name.human(count: 2)}"), [:data_analysis, :evaluated_movements]
    end

  end
end
