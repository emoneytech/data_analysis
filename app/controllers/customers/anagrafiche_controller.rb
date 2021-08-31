module Customers
  class AnagraficheController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('users')} #{Anagrafica.model_name.human(count: 2)}"), :customers_anagrafiche
    
    def index
      @anagrafiche = Anagrafica.filter(filtering_params)
      @anagrafiche = @anagrafiche.alive.active.page(params[:page]).per(params[:per])
    end

    def show
      @anagrafica.set_current_place unless @anagrafica.current_place
      add_breadcrumb helpers.raw("#{helpers.fa_icon('user')} #{@anagrafica.full_name}"), @anagrafica
    end

    def set_eval_movements
      @anagrafica.set_eval_movements
      redirect_to customers_anagrafica_path(@anagrafica)
    end

    def reports
      add_breadcrumb @anagrafica.full_name, :customers_anagrafica
      @time_lapse = params[:time_lapse].split('/')
      add_breadcrumb "Reports #{@time_lapse}", :reports_customers_anagrafica
      @services = @anagrafica.servizi.grouped_by_month(params[:time_lapse].split('/')).group_by(&:month_group)
    end


    private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :full_name,
        :vendor
      ).permit! : {}
    end

  end
end