module DataAnalysis
  class EvaluatedMovementsController < DataAnalysisController
    add_breadcrumb helpers.raw("#{helpers.fa_icon('exclamation-triangle')} #{EvaluatedMovement.model_name.human(count: 2)}"), [:data_analysis, :evaluated_movements]


    def index
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{(Date.today - 1.month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
      @evaluated_movements = EvaluatedMovement.filter(filtering_params)
      @evaluated_movements = @evaluated_movements.order(movement_created_at: :desc).page(params[:page]).per(params[:per])
    end

    def show
      add_breadcrumb helpers.raw("#{helpers.fa_icon('exchange-alt')} #{t(:show_resource, resource: EvaluatedMovement.model_name.human)}"), [:data_analysis, :evaluated_movement]
      @prev = @evaluated_movement.all_previous
      @next = @evaluated_movement.all_next
    end

    def for_day
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{params[:day].to_date.strftime("%d/%m/%Y")} - #{params[:day].to_date.strftime("%d/%m/%Y")}"
      @evaluated_movements = @evaluated_movements.for_day(params[:day].to_date).order(recursion_all_7: :desc).page(params[:page]).per(params[:per])
      render 'index'
    end

    def for_month
      month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
      @daterange = params[:filter] && params[:filter][:daterange] ? params[:filter][:daterange] : "#{month.at_beginning_of_month.strftime("%d/%m/%Y")} - #{month.at_end_of_month.strftime("%d/%m/%Y")}"
      @evaluated_movements = @evaluated_movements.with_all_for_month(month).order(movement_created_at: :desc).page(params[:page]).per(params[:per])
      render 'index'
    end

    private

    def filtering_params
      params[:filter] ? params[:filter].slice(
        :beneficiary,
        :beneficiary_card,
        :beneficiary_iban,
        :beneficiary_other,
        :customer_id,
        :payer,
        :daterange,
        :destination_country,
        :in_out,
        :internal,
        :min_recursion_all_7,
        :min_recursion_all_30,
        :min_recursion_customer_7,
        :min_recursion_customer_30,
        :origin_country,
        :product_name,
        :recursion_all_7,
        :service_id
      ).permit! : {}
    end
    
  end
end
