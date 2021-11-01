# == Schema Information
#
# Table name: movimenticonti
#
#  idMovimentiConti   :bigint           not null, primary key
#  idtransazione      :bigint
#  Point              :integer          not null
#  ipPoint            :string(15)       not null
#  TipoTransazione    :string(1)        not null
#  numeroConto        :string(16)       not null
#  contodiprovenienza :string(16)
#  contodestinazione  :string(16)
#  dataMovimento      :datetime         not null
#  datanumerica       :integer          unsigned
#  Dare               :decimal(10, 2)   default(0.0), unsigned, not null
#  Avere              :decimal(10, 2)   default(0.0), unsigned, not null
#  Importo            :decimal(10, 2)   default(0.0), not null
#  Valuta             :string(6)        not null
#  SaldoProg          :decimal(12, 2)   default(0.0), not null
#  idCausale          :string(45)
#  Causale            :text(65535)
#  Cro                :string(45)
#  IdMandato          :bigint           default(0)
#

class Movimentoconto < ApplicationCoreRecord
  include Filterable

  self.table_name = 'movimenticonti'
  self.primary_key = 'idMovimentiConti'

  alias_attribute :id, "idMovimentiConti"
  alias_attribute :movimentoconto_id, "idMovimentiConti"
  alias_attribute :idmovimenticonti, "idMovimentiConti"
  alias_attribute :avere, "Avere"
  alias_attribute :causale, "Causale"
  alias_attribute :idcausale, "idCausale"
  alias_attribute :dare, "Dare"
  alias_attribute :data_movimento, "dataMovimento"
  alias_attribute :datamovimento, "dataMovimento"
  alias_attribute :importo, "Importo"
  alias_attribute :point, "Point"
  alias_attribute :tipo_transazione, "TipoTransazione"
  alias_attribute :tipotransazione, "TipoTransazione"
  alias_attribute :payment_order_id, "IdMandato"


  #belongs_to :bank_user_part, -> {select [:idutente, :nome, :cognome, :ragionesociale, :vendor] }, foreign_key: "point", class_name: "Anagrafica"
  belongs_to :servizio, class_name: "Servizio", foreign_key: "idtransazione", optional: true
  # belongs_to :main_service, -> { includes(:servizio).where("servizi.status IN (?)", %w{5 6 7 8}).references(:servizio) }, class_name: "Servizio", foreign_key: "idtransazione", optional: true

  
  belongs_to :conto, foreign_key: "numeroConto", primary_key: "Pan", class_name: 'Conto'
  
 # has_one :anagrafica, through: :servizio, class_name: "Anagrafica"
  has_one :anagrafica, through: :conto, class_name: "Anagrafica", source: :bank_user

  belongs_to :mandato, foreign_key: "IdMandato", class_name: "Mandato", optional: true
  has_one :product, through: :servizio

  has_one :evaluated_movement, primary_key: 'idMovimentiConti', foreign_key: 'movement_id'
  # default_scope -> { order(idmovimenticonti: :desc)}

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

  scope :only_customers, -> { where.not( numeroConto: Conto.where(IdUtente: %w[70 75]).pluck(:Pan) ) }

  def in?
    self.Avere > self.Dare
  end

  def out?
    self.Dare > self.Avere
  end

  def main_service
    Movimentoconto.includes(:servizio).where("servizi.status IN (?)", %w{5 6 7 8}).references(:servizio).find (self.id)
  end

  def self.last_id
    order(idmovimenticonti: :desc).select(:idmovimenticonti).first.idmovimenticonti
  end

  def self.last_update
    order(dataMovimento: :desc).select(:dataMovimento).first.dataMovimento
  end

  def to_trigger?
    if self.out?
      servizio.get_principal_movement_out.try(:ids).include?(self.id) && 
        (product ? !ExcludedProduct.all.pluck(:last_3_numbers).include?(product.idprodotto.to_s[1...]) : false) 
    else
      return true unless servizio
      return servizio.get_principal_movement_in.try(:id) === self.id if servizio
    end
  end

  def trigger!
    evaluated_movement.destroy if evaluated_movement
    em = build_evaluated_movement(movement_created_at: self.dataMovimento)
    em.save rescue nil
  end
end












