module Customers
  class CustomerEvaluationsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @customer_evaluations = @anagrafica.customer_evaluations.order(eval_year: :desc).page(params[:page]).per(params[:per])
    end

    def show
      @customer_evaluation = @anagrafica.customer_evaluations.find(params[:id])
      add_breadcrumb "#{I18n.t(:listing_resource, resource: CustomerEvaluation.model_name.human(:count => 2))} - #{Date::MONTHNAMES[@customer_evaluation.eval_month]} #{@customer_evaluation.eval_year}", [:customers, @anagrafica, @customer_evaluation]
      @prev = @customer_evaluation.previous
      @next = @customer_evaluation.next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon(CustomerEvaluation.icon)} #{CustomerEvaluation.model_name.human(count: 2)}"), [:customers, @anagrafica, :customer_evaluations]
    end

  end
end