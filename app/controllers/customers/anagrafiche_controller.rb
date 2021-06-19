module Customers
  class AnagraficheController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('users')} #{Anagrafica.model_name.human(count: 2)}"), :customers_anagrafiche
    
    def index
      if params[:f]
        @anagrafiche = @anagrafiche.where("anagrafiche.Codicefiscale like ?", params[:f])
      end
      if params[:filter] && params[:filter][:q]
        @anagrafiche = @anagrafiche.search_by_full_name(params[:filter][:q])
      end
      @anagrafiche = @anagrafiche.alive.page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{@anagrafica.full_name}"), @anagrafica
    end

    def set_evaluated_movements
      @anagrafica.set_evaluated_movements
      redirect_to customers_anagrafica_path(@anagrafica)
    end

  end
end