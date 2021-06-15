class SyncEvaluatedMovementsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true

  sidekiq_options queue: 'default'

  def perform(default_product_base_risk = Configurable.default_product_base_risk.to_f)
    last_id = EvaluatedMovement.select(:service_id).order(service_id: :desc).first.service_id

    servizi = Servizio.for_evaluation

    servizi.where.not(
      "SUBSTRING(prodotto, -3, 3) IN (?)", ExcludedProduct.all.pluck(:last_3_numbers)
    ).where(
      "servizi.idservizio > ?", last_id
    ).order(
      datainserimento: :asc
    ).select(
      :idservizio, :point
    ).each_slice(100) do |services|
      services.each do |s|
        worker_id = CreateEvaluatedMovementWorker.perform_async(
          s.idservizio,
          s.point,
          default_product_base_risk
        )
      end
    end
  end
end

# last_id = EvaluatedMovement.select(:service_id).order(service_id: :desc).first.service_id
#.select(:idservizio, :point)
# servizi.where.not("SUBSTRING(prodotto, -3, 3) IN (?)", ExcludedProduct.all.pluck(:last_3_numbers)).where("servizi.idservizio > ?", last_id).order(datainserimento: :asc).select(:idservizio, :point).first
