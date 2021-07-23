class CreateEvaluatedRiskWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform(customer_id,
    default_risk = Configurable.min_base_risk.to_f,
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f,
    factor_for_amount = Configurable.factor_for_amount.to_f,
    max_base_risk = Configurable.max_base_risk.to_f) 
    customer = Anagrafica.includes(:time_lapse_factor).find customer_id
    tlf = customer.time_lapse_factor.time_lapse_factor
    customer.set_attention_factors(tlf,default_risk,divisor_amount_for_factor,factor_for_amount,max_base_risk)
  end

end

