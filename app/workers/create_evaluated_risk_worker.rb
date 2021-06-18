class CreateEvaluatedRiskWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform(
    customer_id,
    day,
    default_risk = Configurable.min_base_risk.to_f,
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f,
    factor_for_amount = Configurable.factor_for_amount.to_f,
    max_base_risk = Configurable.max_base_risk.to_f
  ) 
    
    customer = Anagrafica.find customer_id
    evaluated_risk = customer.evaluated_risks.where(
      eval_year: day.to_date.year,
      eval_month: day.to_date.month
    ).first_or_initialize
    evaluated_risk.eval_days = {}
    evaluated_risk.eval_days[day] = []

    evaluated_movements = customer.evaluated_movements.with_all_for_day(day.to_date)
    hash = {}
    evaluated_movements.each do |evaluated_movement|
      recursion = evaluated_movement.recursion ? evaluated_movement.recursion["customer_id"].symbolize_keys : {day_7: 0, day_30: 0}

      recursion7 = recursion[:day_7]
      recursion30 = recursion[:day_30]
      hash7 = set_evaluated_by_recursion(recursion7, evaluated_movement, divisor_amount_for_factor, factor_for_amount)
      hash30 = set_evaluated_by_recursion(recursion30, evaluated_movement, divisor_amount_for_factor, factor_for_amount)
      h2 = {
        "#{evaluated_movement.movement_id}": {
          day_7: hash7,
          day_30: hash30 
        }
      }
      hash.merge!(h2)
    end
    evaluated_risk.eval_days[day] << {movements: hash}

    tlf = customer.time_lapse_factor.time_lapse_factor
    current_risk = customer.evaluated_risk_for_day(day.to_date - 1.day)

    hash.values.each do |v|
      current_risk[:day_7]  = current_risk[:day_7].to_f  * v[:day_7][:evaluated_factor].to_f
      current_risk[:day_30] = current_risk[:day_30].to_f * v[:day_30][:evaluated_factor].to_f
    end

    # APPLY DECREASE FACTOR
    current_risk_decreased = {}
    current_risk_decreased[:day_7] = (current_risk[:day_7] * tlf).to_f
    current_risk_decreased[:day_7] = current_risk_decreased[:day_7] <= default_risk ? default_risk : current_risk_decreased[:day_7]

    current_risk_decreased[:day_30] = (current_risk[:day_30] * tlf).to_f
    current_risk_decreased[:day_30] = current_risk_decreased[:day_30] <= default_risk ? default_risk : current_risk_decreased[:day_30]

    hash2 = {
      "current_risk": current_risk,
      "nr_movements": evaluated_movements.count,
      "current_risk_decreased": current_risk_decreased
    }
    evaluated_risk.eval_days[day] << {details: hash2}
    evaluated_risk.save
  end

  def set_evaluated_by_recursion(recursion, evaluated_movement, divisor_amount_for_factor, factor_for_amount)
    unless recursion > 0
      evaluated_factor =
        (
          (
            (
              (
                ((evaluated_movement.product_base_risk.percentage_of(1)) - 100) *
                evaluated_movement.product_base_risk
              ) *
                (
                  factor_for_amount *
                    ((evaluated_movement.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description = "Operation factor: #{evaluated_factor}"
    else
      evaluated_factor =
        (
          (
            (
              (((evaluated_movement.product_base_risk.percentage_of(1)) - 100) * recursion) *
                (
                  factor_for_amount *
                    ((evaluated_movement.amount_cents / 100).to_f / divisor_amount_for_factor)
                )
            ) + 100
          ) / 100
        ).to_f
      evaluated_description =
        "Repeated: #{recursion} - Factor: #{evaluated_factor}"
    end
    hash = {
      evaluated_movement: evaluated_movement.id,
      evaluated_factor: evaluated_factor,
      evaluated_description: evaluated_description,
      recursion: recursion 
    }
    return hash
  end

end

