module Customers
  class ProdottiController < CustomersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('box')} #{Prodotto.model_name.human(count: 2)}"), [:customers, :anagrafica, :prodotti]

    def index
      prodotti = @anagrafica.prodotti
      @tp = @anagrafica.tutti_prodotti.group(:prodotto).count
      @tutti_prodotti = @tp.map{|k,v| {prodotti.find_by_idprodotto(k).nome => v}}.reduce(:merge)
      @prodotti = prodotti.page(params[:page]).per(30)
    end

    def show
      @prodotto = @anagrafica.prodotti.where(id: params[:id]).first
      binding.pry
      @eval_movements = @prodotto.eval_movements.where(customer_id: @anagrafica.id).page(params[:page]).per(30)
      # @servizi = @prodotto.active_servizi.where(point: @anagrafica.id).page(params[:page]).per(30)
      add_breadcrumb @prodotto.idprodotto, :customers_prodotto
    end

  end
end
