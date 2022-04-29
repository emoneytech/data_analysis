class RefreshCustomerEvaluationWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: true, backtrace: true
  
  # PARAMS
  # customer_evaluation_id

  def perform(customer_evaluation_id)
    customer_evaluation = CustomerEvaluation.find(customer_evaluation_id)
    return unless customer_evaluation
    customer_evaluation.save
  end

end