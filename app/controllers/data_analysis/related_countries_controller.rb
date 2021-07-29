module DataAnalysis
  class RelatedCountriesController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('globe')} #{RelatedCountry.model_name.human(count: 2)}"), :data_analysis_related_countries

    def index
      @related_countries = @related_countries.order(alpha2: :asc).page(params[:page]).per(250)
    end

    def show
    end
    
  end
end