class SetReasonWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_ids =

  def perform(evaluated_movement_ids)
    EvaluatedMovement.where(id: evaluated_movement_ids).each do |evaluated_movement|
      evaluated_movement.save
    end
  end

end
