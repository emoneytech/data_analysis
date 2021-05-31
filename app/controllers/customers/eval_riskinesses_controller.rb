module Customers
  class EvalRiskinessesController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @eval_riskinesses = @anagrafica.eval_riskinesses
      unless params[:t]
        @current_tuple = eval "[#{Date.today.year}, #{Date.today.month}]"
      else
        @current_tuple = eval @eval_riskinesses.find(params[:t]).try(:eval_month)
      end
      @eval_riskiness = @eval_riskinesses.for_month("#{@current_tuple}")
    end

  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalRiskiness.model_name.human(count: 2)}"), [:customers, @anagrafica, :risk_movements]
    end

  end
end
