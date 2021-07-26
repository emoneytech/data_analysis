module Customers
  class ContiController < CustomersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('wallet')} #{Conto.model_name.human(count: 2)}"), [:customers, :anagrafica, :conti]

    def index
      @conti = @anagrafica.conti.order(Attivazione: :asc).page(params[:page]).per(30)
    end

    def show
      @conto = @anagrafica.conti.where(Pan: params[:id]).first
      @movimenticonti = @conto.movimenticonti.order(dataMovimento: :desc).page(params[:page]).per(params[:per])
      add_breadcrumb @conto.id, :customers_movimentoconto
    end

  end
end
