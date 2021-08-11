module Brokers
  class VendorsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('money-check')} #{Vendor.model_name.human(count: 2)}"), [:brokers, :vendors]

    def index
      @vendors = Vendor.filter(filtering_params)
      @vendors = @vendors.page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb @vendor.ragionesociale, :brokers_vendor
    end
    
  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :ragione_sociale
      ).permit! : {}
    end
  end
end
