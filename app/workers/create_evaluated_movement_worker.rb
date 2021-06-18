class CreateEvaluatedMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: false, backtrace: true

  def perform(service_id, point, default_product_base_risk = Configurable.default_product_base_risk.to_f)

    service = Servizio.joins(:product,:anagrafica,:movimenticonti)
                .preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno)
                .where('movimenticonti.Point = ?', point)
                .references(:movimenticonti)
                .where(point: point,idservizio: service_id)
                .uniq.first
    return unless service
    em = EvaluatedMovement.where(service_id: service.id).first_or_initialize
    em.build_for_service(service)
    em.set_product_base_risk(service.product, default_product_base_risk)
    em.save
  end
end

# service = Servizio.joins(:product,:anagrafica,:movimenticonti).preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno).where('movimenticonti.Point = ?', point).references(:movimenticonti).where(point: point,idservizio: service_id).uniq.first
