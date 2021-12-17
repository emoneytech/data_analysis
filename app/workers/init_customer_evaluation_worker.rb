class InitCustomerEvaluationWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform(customer_id) 
    customer = Anagrafica.includes(:time_lapse_factor).find customer_id
    customer.init_evaluation
  end

end

