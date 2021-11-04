class TriggerMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true
  
  # PARAMS
  # movement_id = 1293485

  def perform(movement_id) 
    movement = Movimentoconto.find movement_id
    movement.trigger! if movement.to_trigger?
  end

end

