module DataAnalysis
  class MandatiController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('microchip')} #{Mandato.model_name.human(count: 2)}"), :data_analysis_mandati

    def index
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today - 1.month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      mandati = Mandato.filter(filtering_params)# .includes(:servizio, :anagrafica)
      @mandati = mandati.order(IdMandato: :desc).page(params[:page]).per(30)#.without_count
    end

    def show
      @mandato = Mandato.where(IdMandato: params[:id]).first
      add_breadcrumb @mandato.id, :data_analysis_mandato
    end
  
  private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :customer_id,
        :daterange,
        :min_amount,
        :max_amount
      ).permit! : {}
    end
  end
end
