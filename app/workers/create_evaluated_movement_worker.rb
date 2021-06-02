class CreateEvaluatedMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical'

  def perform(service_id, point)

    service = Servizio.joins(:product,:anagrafica)
                .preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno)
                .includes(:movimenticonti)
                .where('movimenticonti.Point = ?', point)
                .references(:movimenticonti)
                .where(point: point,idservizio: service_id)
                .uniq.first
    return unless service
    em = EvaluatedMovement.where(service_id: service.id).first_or_initialize
    em.build_for_service(service)
    em.save
  end
end
