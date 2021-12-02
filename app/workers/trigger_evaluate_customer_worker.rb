class TriggerEvaluateCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS
  # customer_id = 
  # day = 
  # queue_id = 

  def perform(customer_id, day, queue_id) 
    customer = Anagrafica.find customer_id
    QueueCustomer.find(queue_id).destroy if customer.evaluate_for_day(day.to_date)
  end

end

