module DataAnalysis
  class EvalMovementsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvalMovement.model_name.human(count: 2)}"), [:data_analysis, :eval_movements]


    def index
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today - 1.month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      @eval_movements = EvalMovement.filter(filtering_params)
      @eval_movements = @eval_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: EvalMovement.model_name.human)}"), [:data_analysis, :eval_movement]
      @prev = @eval_movement.all_previous
      @next = @eval_movement.all_next
    end

    def for_day
      @eval_movements = @eval_movements.for_day(params[:day].to_date).order(recursion_all_7: :desc).page(params[:page]).per(params[:per])
      render 'index'
    end

    def for_month
      month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
      @eval_movements = @eval_movements.with_all_for_month(month).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
      render 'index'
    end

    private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :daterange,
        :customer_full_name,
        :beneficiary,
        :internal,
        :origin_country,
        :destination_country,
        :product_name,
        :recursion_all_7,
        :min_recursion_all_7,
        :min_recursion_all_30,
        :min_recursion_customer_7,
        :min_recursion_customer_30
      ).permit! : {}
    end
    
  end
end
