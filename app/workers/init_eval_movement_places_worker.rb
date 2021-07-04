class InitEvalMovementPlacesWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  def perform()
    EvalMovement.all_bankwire.order(service_updated_at: :desc).select(:id).find_in_batches(batch_size: 500) do |eval_movements|
      eval_movements.each do |eval_movement|
        SetEvalMovementPlaceWorker.perform_async(eval_movement.id)
      end
    end
  end

end