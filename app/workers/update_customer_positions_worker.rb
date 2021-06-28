class UpdateCustomerPositionsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform()
    Position.where(latitude: nil, longitude: nil).select(:positionable_id).find_in_batches(batch_size: 500) do |customers|
      customers.each do |customer|
        SetCustomerPositionWorker.perform_async(customer.positionable_id)
      end
    end
  end

end

