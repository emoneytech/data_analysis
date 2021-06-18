module Customers
  class EvaluatedRisksController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @evaluated_risks = @anagrafica.evaluated_risks.order(eval_year: :desc).page(params[:page]).per(12)
    end

    def show
      @evaluated_risk = @anagrafica.evaluated_risks.find(params[:id])
      add_breadcrumb "#{I18n.t(:listing_resource, resource: EvalRiskiness.model_name.human(:count => 2))} - #{Date::MONTHNAMES[@evaluated_risk.eval_month]} #{@evaluated_risk.eval_year}", [:customers, @anagrafica, @evaluated_risk]
      @prev = @evaluated_risk.previous
      @next = @evaluated_risk.next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvaluatedRisk.model_name.human(count: 2)}"), [:customers, @anagrafica, :evaluated_risks]
    end

  end
end
