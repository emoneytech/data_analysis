class RecalculateRecursionWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_id

  def perform(evaluated_movement_id)
    evaluated_movement = EvaluatedMovement.find evaluated_movement_id
    evaluated_movement.save
  end

end
