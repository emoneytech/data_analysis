module DataAnalysis
  class EvalMovementsController < DataAnalysisController

    before_action :local_breadcrumb #, :init_risk

    def index
      @eval_movements = @eval_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: EvalMovement.model_name.human)}"), [:data_analysis, :eval_movement]
      @prev = @eval_movement.all_previous
      @next = @eval_movement.all_next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalMovement.model_name.human(count: 2)}"), [:data_analysis, :eval_movements]
    end

  end
end
