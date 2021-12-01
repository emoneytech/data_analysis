class TriggerCustomerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    QueueCustomer.unqueued.order(updated_at: :asc).each do |queue|
      queue.update(evaluated_at: Time.now) if TriggerEvaluateCustomerWorker.perform_async(queue.customer_id, date.created_at.to_date)
    end
  end

end

