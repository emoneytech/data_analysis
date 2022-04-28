class DataAnalysis::DashboardController < ApplicationController
  before_action :authenticate_user!
  before_action(only: :index) { authorize! :admin, :dashboard }
  add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index

  def index
    #      @anagrafiche = Anagrafica.where(id: EvalRiskiness.for_type('Anagrafica').all_for_month("[#{Date.today.year}, #{Date.today.month}]").order(eval_score: :desc).pluck(:eval_evaluable_id)).page(params[:page])
    date = Date.today.day == 1 ? Date.today - 1.days : Date.today 
    @current_tuple = [date.year, date.month]
    @anagrafiche = Anagrafica.alive
    if params[:filter]
      if params[:filter][:vendor] && ! params[:filter][:vendor].empty?
        @current_vendor = params[:filter][:vendor]
        @anagrafiche = @anagrafiche.where(vendor: @current_vendor)
      end
      if params[:filter][:tipo] && ! params[:filter][:tipo].empty?
        @current_type = params[:filter][:tipo]
        @anagrafiche = @anagrafiche.where(type_id: @current_type)
      end
      if params[:filter][:q] && ! params[:filter][:q].empty?
        @current_full_name = params[:filter][:q]
        @anagrafiche = @anagrafiche.search_by_full_name(@current_full_name).order(nome: :asc).order(cognome: :asc)
      end
      @customer_evaluations = CustomerEvaluation.includes({anagrafica: [:siblings, :customer_settings]}).where(eval_year: @current_tuple[0], eval_month: @current_tuple[1]).where(anagrafica_id: @anagrafiche.pluck(:id)).order(last_attention_factor7: :desc, last_attention_factor7: :desc, nr_movements: :asc).page(params[:page]).per(50)
    else
      @customer_evaluations = CustomerEvaluation.includes(
          {anagrafica: :siblings}
        ).where(
          eval_year: @current_tuple[0],
          eval_month: @current_tuple[1]
        ).where.not(
          anagrafica_id: %w[70 75 34221]
        ).order(
          last_attention_factor7: :desc,
          last_attention_factor30: :desc,
          nr_movements: :asc
        ).page(params[:page]).per(50)
        # (item.anagrafica.current_evaluation.last_attention_factor30 * item.anagrafica.tollerance)
    end
  end
    
  def reports
  end

end
