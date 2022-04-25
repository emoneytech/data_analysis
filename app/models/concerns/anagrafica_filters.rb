module AnagraficaFilters
  extend ActiveSupport::Concern

  included do
    # filters
    scope :filter_by_full_name,
      ->(name) {
        where(
          '(anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
          OR (anagrafiche.nome LIKE ? AND anagrafiche.cognome LIKE ?)
          OR anagrafiche.RagioneSociale LIKE ?',
          "%#{name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}"}%",
          "%#{name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}"}%",
          "%#{name.split(' ').count > 2 ? "#{name.split(' ')[2]}" : "#{name.split(' ')[1]}"}%",
          "%#{name.split(' ').count > 2 ? "#{name.split(' ')[0]} #{name.split(' ')[1]}" : "#{name.split(' ')[0]}"}%",
          "%#{name}%",
        )
      }

  scope :filter_by_customer_id,
    ->(value) { where('anagrafiche.IdUtente = ?', value) }
  scope :filter_by_vendor, ->(value) { where('anagrafiche.Vendor = ?', value) }
  scope :filter_by_fiscal_code,
    ->(value) { where('anagrafiche.Codicefiscale like ?', value) }
  scope :filter_by_min_base_risk,
    ->(value) { where('anagrafiche.base_risk >= ?', value) }
  scope :filter_by_max_base_risk,
    ->(value) { where('anagrafiche.base_risk <= ?', value) }
  scope :filter_by_min_base_risk_calc,
    ->(value) { where('anagrafiche.base_risk_calc >= ?', value) }
  scope :filter_by_status,
    ->(value) { where('anagrafiche.Attivo = ?', value) }
  scope :filter_by_solar_year_movings,
    ->(value) { 
      includes(:movimenticonti).where(
        "DATE_FORMAT(movimenticonti.dataMovimento , '%Y-%m-%d') between ? and ?", "#{value}-01-01", "#{value}-12-31"
      ).references(:movimenticonti)
    }
  # details_operations.select{|key, hash| hash > 4 }
  end
end