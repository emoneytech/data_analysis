class InitEvaluatedRiskWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform()
    default_risk = Configurable.min_base_risk.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    max_base_risk = Configurable.max_base_risk.to_f

    Anagrafica.alive.order(Created: :asc).select(:IdUtente).find_in_batches(batch_size: 500) do |customers|
      customers.each do |customer|
        CreateEvaluatedRiskWorker.perform_async(customer.IdUtente,default_risk,divisor_amount_for_factor,factor_for_amount,max_base_risk)
      end
    end

  end

end
