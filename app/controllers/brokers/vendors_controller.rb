module Brokers
  class VendorsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('money-check')} #{Vendor.model_name.human(count: 2)}"), [:brokers, :vendors]

    def index
      @vendors = Vendor.filter(filtering_params)
      @vendors = @vendors.page(params[:page]).per(params[:per])
      start_date = (Date.today - 1.year).to_date.at_beginning_of_year
      end_date = (Date.today - 1.year).to_date.at_end_of_year
      @time_lapse = [start_date, end_date]
    end

    def show
      add_breadcrumb @vendor.ragionesociale, :brokers_vendor
    end

    def reports
      add_breadcrumb @vendor.ragionesociale, :brokers_vendor
      @time_lapse = params[:time_lapse].split('/')
      add_breadcrumb "Reports #{@time_lapse}", :reports_brokers_vendor
      @services = @vendor.servizi.grouped_by_month(params[:time_lapse].split('/'))
    end

  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :ragione_sociale
      ).permit! : {}
    end
  end
end
