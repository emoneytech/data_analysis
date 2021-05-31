module Customers
  class EvaluatedMovementsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @evaluated_movements = @anagrafica.evaluated_movements.page(params[:page]).per(params[:per])
    end

    def show
      @evaluated_movement = @anagrafica.evaluated_movements.find(params[:id])
      @prev = @evaluated_movement.previous
      @next = @evaluated_movement.next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvaluatedMovement.model_name.human(count: 2)}"), [:customers, @anagrafica, :evaluated_movements]
    end

  end
end
