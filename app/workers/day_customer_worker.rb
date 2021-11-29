class DayCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(customer_id) 
    customer = Anagrafica.find customer_id
    customer.evaluate_for_day
  end

end

