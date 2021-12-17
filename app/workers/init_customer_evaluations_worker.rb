class InitCustomerEvaluationsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    Anagrafica.alive.select(:IdUtente).find_in_batches(batch_size: 50) do |customers|
      customers.each do |customer|
        InitCustomerEvaluationWorker.perform_async(customer.IdUtente)
      end
    end
  end

end

