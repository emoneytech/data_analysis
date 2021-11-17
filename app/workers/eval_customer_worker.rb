class EvalCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform(customer_id,
    default_risk = Configurable.min_base_risk.to_f,
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f,
    factor_for_amount = Configurable.factor_for_amount.to_f,
    max_base_risk = Configurable.max_base_risk.to_f) 

    customer = Anagrafica.includes(:time_lapse_factor).find customer_id
    tlf = Configurable.time_lapse_factor.to_f
    customer.set_eval_customers(tlf,default_risk,divisor_amount_for_factor,factor_for_amount,max_base_risk)

  end

end

