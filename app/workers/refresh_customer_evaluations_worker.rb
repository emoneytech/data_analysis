class RefreshCustomerEvaluationsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    CustomerEvaluation.select(:id).find_in_batches(batch_size: 1000) do |customer_evaluations|
      customer_evaluations.each do |customer_evaluation|
        RefreshCustomerEvaluationWorker.perform_async(customer_evaluation.id)
      end
    end
  end

end