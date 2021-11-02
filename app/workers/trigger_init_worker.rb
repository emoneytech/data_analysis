class TriggerInitWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    Movimentoconto.to_trigger.select(:idMovimentiConti).find_in_batches(batch_size: 50) do |movements|
      movements.each do |movement|
        TriggerMovementWorker.perform_async(movement.idMovimentiConti)
      end
    end
  end

end

