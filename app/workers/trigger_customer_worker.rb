class TriggerCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    QueueCustomer.order(updated_at: :asc).each do |queue|
      TriggerEvaluateCustomerWorker.perform_async(queue.customer_id, queue.created_at.to_date, queue.id)
    end
  end

end

