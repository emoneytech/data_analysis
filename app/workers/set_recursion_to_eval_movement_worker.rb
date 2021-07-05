class SetRecursionToEvalMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: false, backtrace: true

  def perform(eval_movement_id)
    em = EvalMovement.find eval_movement_id
    em.set_recursion
    em.save
  end
end