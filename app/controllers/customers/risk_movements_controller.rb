module Customers
  class RiskMovementsController < CustomersController

    before_action :local_breadcrumb #, :init_risk

    def index
      @eval_riskinesses = @anagrafica.eval_riskinesses
      unless params[:t]
        @current_tuple = eval "[#{Date.today.year}, #{Date.today.month}]"
      else
        @current_tuple = eval @eval_riskinesses.find(params[:t]).try(:eval_month)
      end
      @eval_riskiness = @anagrafica.eval_riskinesses.for_month("#{@current_tuple}")
      @all_risk_movements = @anagrafica.risk_movements.for_month(@current_tuple)
      @risk_movements = @all_risk_movements.page(params[:page])
      @danger_movements = @anagrafica.danger_movements(@current_tuple)
    end

    def details
      add_breadcrumb I18n.t(:details, default: "Details"), customers_anagrafica_risk_movements_path(@anagrafica.id)
      @eval_riskinesses = @anagrafica.eval_riskinesses
      @current_tuple = eval @eval_riskinesses.find_by_eval_month("#{params[:t].map{|t| t.to_i}}").try(:eval_month)
      @eval_riskiness = @anagrafica.eval_riskinesses.for_month("#{@current_tuple}")
      @all_risk_movements = @anagrafica.risk_movements.for_month(@current_tuple)
      @risk_movements = @all_risk_movements.page(params[:page])
    end

    def recalculate_risk
      SetEvalRiskWorker.perform_async(@anagrafica.id) if @anagrafica.set_init_risk
      redirect_to data_analysis_anagrafica_risk_movements_path(@anagrafica)
    end


  private
    def local_breadcrumb
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{RiskMovement.model_name.human(count: 2)}"), [:customers, @anagrafica, :risk_movements]
    end

    def init_risk
      @anagrafica.set_init_risk if @anagrafica.eval_riskinesses.empty?
    end

  end
end
