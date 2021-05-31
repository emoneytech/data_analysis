module Customers
  class EvaluatedRisksController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @evaluated_risks = @anagrafica.evaluated_risks.order(eval_year: :desc).page(params[:page]).per(12)
    end

    def show
      @evaluated_risk = @anagrafica.evaluated_risks.find(params[:id])
      @prev = @evaluated_risk.previous
      @next = @evaluated_risk.next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvaluatedRisk.model_name.human(count: 2)}"), [:customers, @anagrafica, :risk_movements]
    end

  end
end
