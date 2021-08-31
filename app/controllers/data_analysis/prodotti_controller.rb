module DataAnalysis
  class ProdottiController < ApplicationController
    before_action :authenticate_user!
    include ApplicationHelper
    add_breadcrumb helpers.raw("#{helpers.fa_icon('tachometer-alt')} Dashboard"), :data_analysis_dashboard_index
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{Prodotto.model_name.human(count: 2)}"), :data_analysis_prodotti
    load_and_authorize_resource :except => [:show]

    def index
      # @cached_total_pages = (RowCount.where(relname: 'prodotti').pluck(:reltuples).first / 30.0).ceil
      @prodotti = []
      respond_to do |format|
        format.html
        format.json { 
          # binding.pry
          render json: ProdottoDatatable.new(params)
        }
      end
    end

    def show
      @prodotto = Prodotto.where(idprodotto: params[:id]).first
      add_breadcrumb @prodotto.nome, :data_analysis_prodotto
    end

  end
end
