class SetInitRecursionWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true

  def perform()
    EvaluatedMovement.order(movement_created_at: :asc).select(:id).find_in_batches(batch_size: 500) do |evaluated_movements|
      evaluated_movements.each do |evaluated_movement|
        SetRecursionToEvaluatedMovementWorker.perform_async(evaluated_movement.id)
      end
    end
  end

end
