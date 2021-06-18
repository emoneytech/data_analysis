class UpdateEvaluatedMovementWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'critical', retry: false, backtrace: true

  def perform(service_id, point, default_product_base_risk,
              max_base_risk, factor_for_amount, divisor_amount_for_factor)

    service = Servizio.joins(:product, :anagrafica).preload( :product, {anagrafica: :conti}, :movimenticonti, :ricaricacarta, :bonifico, :assegnovirtuale, :incassoassegno ).includes(:movimenticonti).where('movimenticonti.Point = ?', point).references(:movimenticonti).where(point: point, idservizio: service_id).uniq.first
    return unless service
    em = EvaluatedMovement.where(service_id: service.id).first_or_initialize
    em.set_properties(
      service,
      default_product_base_risk,
      max_base_risk,
      factor_for_amount,
      divisor_amount_for_factor)
    em.save
  end
end
