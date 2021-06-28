class UpdateCustomerPositionsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform()
    Position.where(positionable_type: 'Anagrafica', latitude: nil, longitude: nil).find_in_batches(batch_size: 500) do |positions|
      positions.each do |position|
        SetCustomerPositionWorker.perform_async(position.positionable_id)
      end
    end
  end

end

