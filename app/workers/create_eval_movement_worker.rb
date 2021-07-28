class CreateEvalMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true

  # PARAMS
  # service_id, point, default_product_base_risk 
  
  def perform(service_id, point, default_product_base_risk = Configurable.default_product_base_risk.to_f)

    service = Servizio.joins(:product,:anagrafica,:movimenticonti)
                .preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno)
                .where('movimenticonti.Point = ?', point)
                .references(:movimenticonti)
                .where(point: point,idservizio: service_id)
                .where
                .not(
                  'SUBSTRING(prodotto, -3, 3) IN (?)',
                  ExcludedProduct.all.pluck(:last_3_numbers)
                )
                .uniq.first
    return unless service
    return if service.anagrafica.Attivo.try(:to_i) == 6
    em = EvalMovement.where(service_id: service.id).first_or_initialize
    em.build_for_service(service)
    em.set_product_base_risk(service.product, default_product_base_risk)
    em.save
  end
end
# service = Servizio.joins(:product,:anagrafica,:movimenticonti).preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno).where('movimenticonti.Point = ?', point).references(:movimenticonti).where(point: point,idservizio: service_id).where.not('SUBSTRING(prodotto, -3, 3) IN (?)',ExcludedProduct.all.pluck(:last_3_numbers)).uniq.first
