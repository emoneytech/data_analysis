class CreateEvalMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'serial', retry: true, backtrace: true

  # PARAMS
  # service_id, point, default_product_base_risk 
  
  def perform(service_id, point, default_product_base_risk = Configurable.default_product_base_risk.to_f)
    return if [70, 75].include?(point.to_i)
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
    em = EvalMovement.where(service_id: service.id, customer_id: service.point).first_or_initialize
    em.build_for_service(service)
    em.set_product_base_risk(service.product, default_product_base_risk)
    em.save
    if internal_beneficiary = service.try(:bonifico).try(:internal_beneficiary)
      em2 = EvalMovement.where(service_id: service.id, customer_id: internal_beneficiary.id).first_or_initialize
      em2.customer_full_name = internal_beneficiary.full_name
      em2.service_status =  em.service_status
      em2.service_updated_at = em.service_updated_at
      em2.service_created_at = em.service_created_at

      in_movement = service.movimenticonti.where(numeroconto: internal_beneficiary.conti.pluck(:Pan)).first
      em2.movement_id = in_movement.id
      em2.movement_created_at = in_movement.dataMovimento

      em2.product_id = em.product_id
      em2.product_net_id = em.product_net_id
      em2.product_table_code = em.product_table_code
      em2.product_name = em.product_name
      em2.product_base_risk = em.product_base_risk
      
      em2.beneficiary = em.beneficiary
      em2.beneficiary_iban = em.beneficiary_iban
      em2.beneficiary_other = em.beneficiary_other
      em2.beneficiary_card = em.beneficiary_card
      
      em2.risk_factor = em.risk_factor
      em2.risk_description = em.risk_description
 
      em2.amount_cents = em.amount_cents
      em2.amount_currency = em.amount_currency

      em2.destination_lonlat = em.destination_lonlat
      em2.origin_country = em.origin_country
      em2.destination_country = em.destination_country
      em2.internal = true
      em2.in_out = "IN"
      em2.save
    end
  end
end
# service = Servizio.joins(:product,:anagrafica,:movimenticonti).preload(:product,{anagrafica: :conti},:movimenticonti,:ricarica,:ricaricacarta,:bonifico,:assegnovirtuale,:incassoassegno).where('movimenticonti.Point = ?', point).references(:movimenticonti).where(point: point,idservizio: service_id).where.not('SUBSTRING(prodotto, -3, 3) IN (?)',ExcludedProduct.all.pluck(:last_3_numbers)).uniq.first
