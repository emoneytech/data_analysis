class TestFailureWorker
  include Sidekiq::Worker
  sidekiq_options queue: 'critical', retry: 3

  def perform(complexity)
    case(complexity)
    when 'super'
      logger.info "Super job"
      sleep 20
      logger.info "Si può fare!!"
    when 'hard'
      logger.info "Hard job"
      sleep 10
      logger.info "non era così complesso"
    else
      logger.info "Default job"
      # raise JobWorkerErrors.new("TestFailureWorker", complexity)
      sleep 1
      logger.info "robetta da ragazzi"
    end
  end
end
