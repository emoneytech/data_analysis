module DataAnalysis
  class MovimenticontiController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{Movimentoconto.model_name.human(count: 2)}"), :data_analysis_servizi

    def index
      # @cached_total_pages = (RowCount.where(relname: 'movimenticonti').pluck(:reltuples).first / 30.0).ceil
      @cached_total_pages = (Movimentoconto.count / 30.0).ceil
      @movimenticonti = Movimentoconto.order(movimentoconto_id: :desc).page(params[:page]).per(30).without_count
    end

    def show
      @movimentoconto = Movimentoconto.where(id: params[:id]).first
    end

  end
end
