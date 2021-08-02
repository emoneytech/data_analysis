class UpdateRecursionToEvalMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true

  def perform(eval_movement_id)
    em = EvalMovement.find eval_movement_id
    em.recursion_all_7       = em.recursion['all']['day_7'].to_i
    em.recursion_all_30      = em.recursion['all']['day_30'].to_i
    em.recursion_customer_7  = em.recursion['customer_id']['day_7'].to_i
    em.recursion_customer_30 = em.recursion['customer_id']['day_30'].to_i
    EvalMovement.skip_callback(:save, :before, :set_recursion)
    em.save
    EvalMovement.set_callback(:save, :before, :set_recursion)
  end
end
