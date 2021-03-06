class InitReasonsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    EvaluatedMovement.select(:id).find_in_batches(batch_size: 100) do |evaluated_movements|
      ids = []
      evaluated_movements.each do |evaluated_movement|
        ids << evaluated_movement.id
      end
      SetReasonWorker.perform_async(ids)
    end
  end

end
