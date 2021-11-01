class InitEvaluatedMovementsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    Movimentoconto.only_customers.order(dataMovimento: :asc).select(:idMovimentiConti).find_in_batches(batch_size: 500) do |movements|
      movements.each do |movement|
        TriggerMovementWorker.perform_async(movement.idMovimentiConti) if movement.to_trigger?
      end
    end
  end

end

