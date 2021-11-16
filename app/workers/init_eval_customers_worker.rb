class InitEvalCustomersWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    default_risk = Configurable.min_base_risk.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    max_base_risk = Configurable.max_base_risk.to_f
    Anagrafica.alive.select(:IdUtente).find_in_batches(batch_size: 50) do |customers|
      customers.each do |customer|
        EvalCustomerWorker.perform_async(customer.IdUtente, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk)
      end
    end
  end

end

