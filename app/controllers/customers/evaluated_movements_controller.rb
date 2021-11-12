module Customers
  class EvaluatedMovementsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @evaluated_movements = @anagrafica.evaluated_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('search-dollar')} #{t(:show_resource, resource: EvaluatedMovement.model_name.human)}"), [:data_analysis, :evaluated_movement]
      @evaluated_movement = @anagrafica.evaluated_movements.find(params[:id])
      @prev = @evaluated_movement.previous
      @next = @evaluated_movement.next
    end

    def for_day
      @evaluated_movements = @anagrafica.evaluated_movements.with_all_for_day(params[:day].to_date).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def for_month
      month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
      @evaluated_movements = @anagrafica.evaluated_movements.with_all_for_month(month).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('search-dollar')} #{EvaluatedMovement.model_name.human(count: 2)}"), [:customers, @anagrafica, :evaluated_movements]
    end

  end
end
