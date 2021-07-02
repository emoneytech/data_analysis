class InitEvaluatedMovementPlacesWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  def perform()
    EvaluatedMovement.all_bankwire.order(service_updated_at: :desc).select(:id).find_in_batches(batch_size: 500) do |evaluated_movements|
      evaluated_movements.each do |evaluated_movement|
        SetEvaluatedMovementPlaceWorker.perform_async(evaluated_movement.id)
      end
    end
  end

end