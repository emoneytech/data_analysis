class InitReasonsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    EvaluatedMovement.where("reason is Null").select(:id).find_in_batches(batch_size: 100) do |evaluated_movement_ids|
      # set_reason(evaluated_movement_ids)
      SetReasonWorker.perform_async(evaluated_movement_ids)
    end
  end

end
