class SetInitRecursionWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true

  def perform()
    EvalMovement.order(movement_created_at: :asc).select(:id).find_in_batches(batch_size: 500) do |eval_movements|
      eval_movements.each do |eval_movement|
        SetRecursionToEvalMovementWorker.perform_async(eval_movement.id)
      end
    end
  end

end
