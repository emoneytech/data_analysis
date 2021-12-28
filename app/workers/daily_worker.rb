class DailyWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'critical', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    DailyCustomerWorker.perform_async
  end

end