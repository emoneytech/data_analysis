class SetRecursionToEvaluatedMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical'

  def perform(evaluated_movement_id)
    em = EvaluatedMovement.find evaluated_movement_id
    em.set_recursion
  end
end
