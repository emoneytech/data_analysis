module DataAnalysis
  class EvalMovementsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalMovement.model_name.human(count: 2)}"), [:data_analysis, :eval_movements]


    def index
      if params[:filter]
        if params[:filter][:daterange]
          start_date, end_date = params[:filter][:daterange].split(' - ') if params[:filter][:daterange]
          @eval_movements = @eval_movements.between_date(start_date.to_date, end_date.to_date)
        end
      end
      @eval_movements = @eval_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: EvalMovement.model_name.human)}"), [:data_analysis, :eval_movement]
      @prev = @eval_movement.all_previous
      @next = @eval_movement.all_next
    end

  end
end
