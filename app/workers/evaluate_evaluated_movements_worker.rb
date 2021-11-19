class EvaluateEvaluatedMovementsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    EvaluatedMovement.select(:id).find_in_batches(batch_size: 500) do |movements|
      movements.each do |movement|
        EvaluateEvaluatedMovementWorker.perform_async(movement.id)
      end
    end
  end

end

