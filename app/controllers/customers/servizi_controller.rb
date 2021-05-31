module Customers
  class ServiziController < CustomersController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{Servizio.model_name.human(count: 2)}"), [:customers, :anagrafica, :servizi]
    respond_to :json, only: :map

    def index
      @servizi = @anagrafica.servizi.order(servizio_id: :desc).page(params[:page]).per(30)
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@servizio.id}"), @servizio
    end

    def map
    end

  end
end