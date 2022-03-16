class TriggerMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  ##### SET FOR INIT
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS
  # movement_id = 13572500

  def perform(movement_id) 
    movement = Movimentoconto.find movement_id
    movement.trigger! if movement.to_trigger?
  end

end

