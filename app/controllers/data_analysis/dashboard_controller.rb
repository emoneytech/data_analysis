module DataAnalysis
  class DashboardController < ApplicationController
    before_action :authenticate_user!
    before_action(only: :index) { authorize! :admin, :revenue }
    add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index

    def index
      #      @anagrafiche = Anagrafica.where(id: EvalRiskiness.for_type('Anagrafica').all_for_month("[#{Date.today.year}, #{Date.today.month}]").order(eval_score: :desc).pluck(:eval_evaluable_id)).page(params[:page])
      @current_tuple = "[#{Date.today.year}, #{Date.today.month}]"
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
        @eval_riskinesses = EvalRiskiness.for_type('Anagrafica').all_for_month("#{@current_tuple}").where(eval_evaluable_id: @anagrafiche.pluck(:id)).order(eval_score: :desc, number_of_movements: :desc).page(params[:page])
      else
        @eval_riskinesses = EvalRiskiness.for_type('Anagrafica').all_for_month("#{@current_tuple}").order(eval_score: :desc, number_of_movements: :desc).page(params[:page])
      end
    end
      
=begin
    def index
      if params[:filter]
        if params[:filter][:daterange]
          start_date, end_date = params[:filter][:daterange].split(' - ') 
        end
        if params[:filter][:vendor]
          vendors = params[:filter][:vendor]
        end
        @movimenticonti = Movimentoconto.where(datamovimento: start_date.to_date.beginning_of_day..end_date.to_date.end_of_day).page(params[:page]).per(30)
      else
        # @cached_total_pages = (RowCount.where(relname: 'movimenticonti').pluck(:reltuples).first / 30.0).ceil
        @cached_total_pages = (Movimentoconto.count / 30.0).ceil
        params[:page] = 1 unless params[:page]
        @movimenticonti = Movimentoconto.order(idmovimenticonti: :desc).page(params[:page]).per(30).without_count
      end
    end
=end
    def reports
    end

  end
end
