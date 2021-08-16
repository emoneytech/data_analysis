module Brokers
  class ProdottiController < BrokersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('box')} #{Prodotto.model_name.human(count: 2)}"), [:brokers, :vendor, :prodotti]

    def index
      @prodotti = @vendor.products.page(params[:page]).per(50)
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('box')} #{@prodotto.nome}"), [:brokers, @vendor, @prodotto]
      @prodotto = @vendor.products.where(id: params[:id]).first
    end

  end
end
