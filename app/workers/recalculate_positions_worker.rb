class RecalculatePositionsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    EvaluatedMovement.select(:id).find_in_batches(batch_size: 500) do |evaluated_movements|
      evaluated_movements.each do |evaluated_movement|
        RecalculatePositionWorker.perform_async(evaluated_movement.id)
      end
    end
  end

end
