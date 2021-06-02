class CreateEvaluatedPerYearWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default'

  def perform(year)
    Servizio.create_evaluated_movements(year.to_i)
  end
end
