class EvaluateEvaluatedMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_id

  def perform(evaluated_movement_id)
    evaluated_movement = EvaluatedMovement.find evaluated_movement_id
    begin
      evaluated_movement.save
    rescue Exception => e
      raise e 
    end
  end

end

