module DataAnalysis
  class RelatedCountriesController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('globe')} #{RelatedCountry.model_name.human(count: 2)}"), :data_analysis_related_countries

    def index
      @related_countries = @related_countries.order(alpha2: :asc).page(params[:page]).per(250)
    end

    def show
      add_breadcrumb helpers.raw("#{t(:show_resource, resource: RelatedCountry.model_name.human)}"), [:data_analysis, :related_country]
      @prev = @related_country.previous
      @next = @related_country.next
    end

  end
end