class EnqueuerWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # 

  def perform
    WorkerQueue.order(last_update: :asc).each do |queue|
      service = Servizio.find(queue.service_id)
      CreateEvalMovementWorker.perform_async(service.idservizio, service.point, Configurable.default_product_base_risk.to_f)
      queue.destroy
    end
  end

end




