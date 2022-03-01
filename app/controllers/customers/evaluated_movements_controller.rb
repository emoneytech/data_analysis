class Customers::EvaluatedMovementsController < CustomersController
  before_action :local_breadcrumb #, :init_risk

  def index
    unless params[:filter] && params[:filter][:daterange]
      params[:filter] = {
        daterange:
          "#{(Date.today - 1.month).strftime('%d/%m/%Y')} - #{Date.today.strftime('%d/%m/%Y')}",
      }
    end
    @evaluated_movements =
      EvaluatedMovement
        .filter(filtering_params)
        .where(customer_id: @anagrafica.id)
        .includes(:customer, :triggerable)
    @evaluated_movements =
      @evaluated_movements
        .order(movement_created_at: :desc)
        .page(params[:page])
        .per(params[:per])
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    add_breadcrumb helpers.raw(
                     "#{helpers.fa_icon(EvaluatedMovement.icon)} #{t(:show_resource, resource: EvaluatedMovement.model_name.human)}",
                   ),
                   %i[data_analysis evaluated_movement]
    @evaluated_movement = @anagrafica.evaluated_movements.find(params[:id])
    @prev = @evaluated_movement.previous
    @next = @evaluated_movement.next
  end

  def recursive
    authorize! :read, EvaluatedMovement
    add_breadcrumb helpers.raw(
                     "#{helpers.fa_icon(EvaluatedMovement.icon)} #{t(:show_resource, resource: EvaluatedMovement.model_name.human)}",
                   ),
                   %i[data_analysis evaluated_movement]
    add_breadcrumb helpers.raw("#{t(:show_resource, resource: 'Recursions')}"),
                   %i[recursion data_analysis evaluated_movement]
    method_name = "recursive_for_#{params[:q]}"
    @recursions =
      @evaluated_movement
        .send(method_name.to_sym, params[:days].to_i)
        .includes(:triggerable)
        .page(params[:page])
    # render 'index'
  end

  def for_day
    @daterange =
      if params[:filter] && params[:filter][:daterange]
        params[:filter][:daterange]
      else
        "#{params[:day].to_date.strftime('%d/%m/%Y')} - #{params[:day].to_date.strftime('%d/%m/%Y')}"
      end
    @evaluated_movements =
      @anagrafica
        .evaluated_movements
        .with_all_for_day(params[:day].to_date)
        .order(recursion_all_7: :desc)
        .page(params[:page])
        .per(params[:per])
  end

  def for_month
    month = DateTime.new(params[:year].to_i, params[:month].to_i, 1)
    @daterange =
      if params[:filter] && params[:filter][:daterange]
        params[:filter][:daterange]
      else
        "#{month.at_beginning_of_month.strftime('%d/%m/%Y')} - #{month.at_end_of_month.strftime('%d/%m/%Y')}"
      end
    @evaluated_movements =
      @anagrafica
        .evaluated_movements
        .with_all_for_month(month)
        .order(movement_created_at: :desc)
        .page(params[:page])
        .per(params[:per])
    render 'index'
  end

  private
    def filtering_params
      if params[:filter]
        params[:filter].slice(
          :min_amount,
          :max_amount,
          :first_digit,
          :beneficiary,
          :beneficiary_card,
          :beneficiary_iban,
          :beneficiary_other,
          :payer,
          :payer_card,
          :payer_iban,
          :payer_other,
          :customer_id,
          :customer_full_name,
          :daterange,
          :destination_country,
          :in_out,
          :internal,
          :min_recursion_all_7,
          :min_recursion_all_30,
          :min_recursion_customer_7,
          :min_recursion_customer_30,
          :movement_id,
          :origin_country,
          :payer,
          :payer_iban,
          :product_id,
          :product_name,
          :recursion_all_7,
          :service_id,
          :reason,
        ).delete_if { |k, v| k == 'in_out' && v == 'ALL' }.permit!
      else
        {}
      end
    end

  def local_breadcrumb
    add_breadcrumb helpers.raw(
                     "#{helpers.fa_icon(EvaluatedMovement.icon)} #{EvaluatedMovement.model_name.human(count: 2)}",
                   ),
                   [:customers, @anagrafica, :evaluated_movements]
  end
end
