class TriggerEvaluateCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS
  # customer_id, day, queue_id = 38868, "2022-01-06", 3595

  def perform(customer_id, day, queue_id)
    queue = QueueCustomer.find(queue_id) rescue nil
    return unless queue
    customer = Anagrafica.find customer_id
    queue.destroy if customer.evaluate_for_day(day.to_date)
  end

end

