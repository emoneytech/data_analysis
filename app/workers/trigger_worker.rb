class TriggerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    QueueMovement.order(last_update: :asc).each do |queue|
      queue.destroy if TriggerMovementWorker.perform_async(queue.movement_id)
    end
  end

end

