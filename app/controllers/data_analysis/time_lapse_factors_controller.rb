module DataAnalysis
  class TimeLapseFactorsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{TimeLapseFactor.model_name.human(count: 2)}"), [:data_analysis, :time_lapse_factors]


    def index
      @time_lapse_factors = TimeLapseFactor.filter(filtering_params).includes(:anagrafica)
      @time_lapse_factors = @time_lapse_factors.order(time_lapse_factor: :asc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: TimeLapseFactor.model_name.human)}"), [:data_analysis, :time_lapse_factor]
    end

    def edit
    end

    def update
      
      respond_to do |format|
        if @time_lapse_factor.time_lapse_factor_audits.create(
          user_id: current_user.id,
          old_value: @time_lapse_factor.time_lapse_factor,
          old_evaluate_risk_value: @time_lapse_factor.anagrafica.eval_score.to_f
        ) && @time_lapse_factor.update(time_lapse_factor_params)
          format.html { redirect_to [:data_analysis, @time_lapse_factor], notice: 'TimeLapseFactor was successfully updated.' }
          format.js {  }
        else
          format.html { render :edit }
          format.js { render :edit }
        end
      end
    end


    private

    def time_lapse_factor_params
      params.require(:time_lapse_factor).permit(:time_lapse_factor)
    end
    
    def filtering_params
      params[:filter] ? params[:filter].slice(
        :anagrafica_id,
        :max_time_lapse_factor,
        :min_time_lapse_factor
      ).permit! : {}
    end
    
  end
end
