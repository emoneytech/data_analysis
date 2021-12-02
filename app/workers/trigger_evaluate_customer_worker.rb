class TriggerEvaluateCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS
  # customer_id = 
  # day = 

  def perform(customer_id, day) 
    customer = Anagrafica.find customer_id
    customer.evaluate_for_day(day.to_date)
  end

end

