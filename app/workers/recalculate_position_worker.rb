class RecalculatePositionWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_id

  def perform(evaluated_movement_id)
    evaluated_movement = EvaluatedMovement.find evaluated_movement_id
    evaluated_movement.recalculate_position
  end

end
