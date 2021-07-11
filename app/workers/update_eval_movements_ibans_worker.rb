class UpdateEvalMovementsIbansWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: false, backtrace: true
  
  # PARAMS
  # 

  def perform()
    EvalMovement.select(:id).where('beneficiary_iban iLIKE ?', '%*****%').find_in_batches(batch_size: 500) do |eval_movements|
      eval_movements.each do |eval_movement|
        SetEvalMovementCardWorker.perform_async(eval_movement.id)
      end
    end
  end

end

