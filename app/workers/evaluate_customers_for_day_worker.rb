class EvaluateCustomersForDayWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # day = "2021/12/20"

  def perform(day)
    Anagrafica.alive.select(:IdUtente).find_in_batches(batch_size: 500) do |customers|
      customers.each do |customer|
        EvaluateCustomerForDayWorker.perform_async(customer.IdUtente, day)
      end
    end
  end

end

