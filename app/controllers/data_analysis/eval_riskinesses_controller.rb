module DataAnalysis
  class EvalRiskinessesController < DataAnalysisController
    load_and_authorize_resource :anagrafica
    
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{EvalRiskiness.model_name.human(count: 2)}"), :data_analysis_risk_movements

    def index
      @current_tuple = "[#{Date.today.year}, #{Date.today.month}]"
      #@eval_riskinesses = []
      @eval_riskinesses = EvalRiskiness.for_type('Anagrafica').all_for_month("#{@current_tuple}").order(eval_score: :desc, number_of_movements: :desc).page(params[:page])
    end

    def show
      # add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@servizio.id}"), @servizio
    end

  end
end