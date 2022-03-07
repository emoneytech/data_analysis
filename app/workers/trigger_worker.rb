class TriggerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'serial', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    QueueMovement.order(last_update: :asc).each do |queue|
      movement_to_trigger = Movimentoconto.to_trigger.find(queue.movement_id) rescue nil
      TriggerMovementWorker.perform_async(queue.movement_id) if movement_to_trigger
      queue.destroy
    end
  end

end

