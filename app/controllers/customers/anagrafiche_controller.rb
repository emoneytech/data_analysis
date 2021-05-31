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
      @anagrafiche = @anagrafiche.active.page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{@anagrafica.full_name}"), @anagrafica
    end

  end
end