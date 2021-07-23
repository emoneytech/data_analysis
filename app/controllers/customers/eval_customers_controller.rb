module Customers
  class EvalCustomersController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @eval_customers = @anagrafica.eval_customers.order(eval_year: :desc).page(params[:page]).per(params[:per])
    end

    def show
      @eval_customer = @anagrafica.eval_customers.find(params[:id])
      add_breadcrumb "#{I18n.t(:listing_resource, resource: EvalCustomer.model_name.human(:count => 2))} - #{Date::MONTHNAMES[@eval_customer.eval_month]} #{@eval_customer.eval_year}", [:customers, @anagrafica, @eval_customer]
      @prev = @eval_customer.previous
      @next = @eval_customer.next
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalCustomer.model_name.human(count: 2)}"), [:customers, @anagrafica, :eval_customers]
    end

  end
end
