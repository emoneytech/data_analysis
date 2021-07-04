module Customers
  class EvalMovementsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @eval_movements = @anagrafica.eval_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      @eval_movement = @anagrafica.eval_movements.find(params[:id])
      @prev = @eval_movement.previous
      @next = @eval_movement.next
    end

    def for_day
      @eval_movements = @anagrafica.eval_movements.with_all_for_day(params[:day].to_date).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def for_month
      month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
      @eval_movements = @anagrafica.eval_movements.with_all_for_month(month).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalMovement.model_name.human(count: 2)}"), [:customers, @anagrafica, :eval_movements]
    end

  end
end
