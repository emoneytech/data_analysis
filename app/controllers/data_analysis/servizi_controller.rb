module DataAnalysis
  class ServiziController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{Servizio.model_name.human(count: 2)}"), :data_analysis_servizi
    respond_to :json, only: :map

    def index
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today - 1.month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      @servizi = Servizio.filter(filtering_params).includes(:anagrafica, :statoservizio).order(servizio_id: :desc).page(params[:page]).per(30)
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{@servizio.id}"), @servizio
    end

    def reports
      add_breadcrumb "Reports #{@time_lapse}", :reports_customers_anagrafica
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today.at_beginning_of_month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      @services = Servizio.filter(filtering_params).grouped_by_month(format_daterange()).group_by(&:month_group)
    end


    def map
    end
  private

    def format_daterange
      daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today.at_beginning_of_month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      start_date, end_date = daterange.split(' - ')
      return [start_date.to_date.strftime("%Y-%m-%d"), end_date.to_date.strftime("%Y-%m-%d")]
    end

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :idservizio,
        :daterange,
        :min_amount,
        :max_amount,
        :customer_id,
        :product_id,
        :product_name,
        :status,
        :vendor
      ).permit! : {}
    end

  end
end

