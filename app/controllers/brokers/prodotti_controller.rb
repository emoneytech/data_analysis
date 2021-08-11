module Brokers
  class ProdottiController < BrokersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('box')} #{Prodotto.model_name.human(count: 2)}"), [:brokers, :anagrafica, :prodotti]

    def index
      prodotti = @vendor.products
      @tp = @vendor.all_products.group(:prodotto).count
      @all_products = @tp.map{|k,v| {prodotti.find_by_idprodotto(k).nome => v}}.reduce(:merge)
      @prodotti = prodotti.page(params[:page]).per(50)
    end

    def show
      @prodotto = @vendor.products.where(id: params[:id]).first
    end

  end
end
