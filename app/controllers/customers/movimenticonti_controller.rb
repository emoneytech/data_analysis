module Customers
  class MovimenticontiController < CustomersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{Movimentoconto.model_name.human(count: 2)}"), [:customers, :anagrafica, :movimenticonti]

    def index
      @movimenticonti = @anagrafica.movimenticonti.order(movimentoconto_id: :desc).page(params[:page]).per(30)
    end

    def show
      @movimentoconto = @anagrafica.movimenticonti.where(id: params[:id]).first
      add_breadcrumb @movimentoconto.id, :customers_movimentoconto
    end

  end
end
