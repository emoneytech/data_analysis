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

    def edit
      add_breadcrumb helpers.raw("#{t(:show_resource, resource: RelatedCountry.model_name.human)}"), [:data_analysis, :related_country]
      add_breadcrumb helpers.raw("#{t(:edit_resource, resource: RelatedCountry.model_name.human)} #{@related_country.name}"), [:edit, :data_analysis, :related_country]

    end

    def update
      respond_to do |format|
        if @related_country.update(related_country_params)
          format.html { redirect_to [:data_analysis, @related_country], notice: 'Country was successfully updated.' }
          format.json { render :show, status: :ok, location: @related_country }
          format.js {}
        else
          binding.pry
          format.html { render :edit }

          format.js { render :edit }
          format.json { render json: @related_country.errors, status: :unprocessable_entity }
        end
      end
    end
  private

    def related_country_params
      params.require(:related_country).permit(:score)
    end

  end
end