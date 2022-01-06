class InitReasonsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    EvaluatedMovement.select(:id).find_in_batches(batch_size: 1000) do |evaluated_movement_ids|
      SetReasonWorker.perform_async(evaluated_movement_ids)
    end
  end

end
