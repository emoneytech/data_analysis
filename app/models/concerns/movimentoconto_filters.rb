module MovimentocontoFilters
  extend ActiveSupport::Concern

  included do
    # filters
    scope :for_month, -> (month) { where("MONTH(datamovimento) = ?", month) }

    scope :order_asc, -> {order(idmovimenticonti: :asc)}
    scope :fast_service, -> {includes(:servizio, :mandato, :product => :codicetabella).references(:servizio).order_asc}
    scope :fast_out, -> {fast_service.where("movimenticonti.dare > ?", 0.0)}
    scope :fast_out_for_user, -> (user_id) {fast_out.where("point" => user_id).order_asc}
  
    scope :with_service, -> { where('movimenticonti.idtransazione IS NOT NULL AND movimenticonti.idtransazione != ?',0) }

    scope :filter_by_customer_id, -> (customer_id) { where(numeroConto: Conto.where(IdUtente: customer_id).pluck(:Pan)) }
    scope :filter_by_service_id, -> (service_id) { where(idtransazione: service_id)}
    
    scope :filter_by_daterange, -> (daterange) { where(
      "DATE_FORMAT(movimenticonti.dataMovimento , '%Y-%m-%d') between ? and ?", daterange.split(' - ')[0].to_date.strftime('%Y-%m-%d'), daterange.split(' - ')[1].to_date.strftime('%Y-%m-%d')
    )}
    scope :filter_by_min_amount, -> (amount) { where("Importo >= ?", amount)}
    scope :filter_by_max_amount, -> (amount) { where("Importo <= ?", amount)}

    scope :filter_by_in, -> (value) { where("Avere >= ?", value)}
    scope :filter_by_out, -> (value) { where("Dare >= ?", value)}

    scope :filter_by_reason, -> (value) { where("Causale like ?", "%#{value}%")}

    scope :only_customers, -> { where.not( numeroConto: Conto.where(IdUtente: %w[70 75 34221]).pluck(:Pan) ) }

    scope :to_trigger, -> { joins(:anagrafica).where('anagrafiche.Attivo != 6 AND anagrafiche.IdUtente NOT IN (?)', %w[70 75 34221]).references(:anagrafica) } 
    
  end

end