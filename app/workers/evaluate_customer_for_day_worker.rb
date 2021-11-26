class EvaluateCustomerForDayWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_id

  def perform(evaluated_movement_id)
    evaluated_movement = EvaluatedMovement.includes(:angrafica).find(evaluated_movement_id)
    begin
      evaluated_movement.customer.evaluate_for_day(evaluated_movement.movement_created_at.to_date)
    rescue Exception => e
      raise e 
    end
  end

end

