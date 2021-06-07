# == Schema Information
#
# Table name: movimenticonti
#
#  idMovimentiConti   :bigint           not null
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

  self.table_name = 'movimenticonti'
  self.primary_key = 'idmovimenticonti'

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

  belongs_to :conto, foreign_key: "numeroconto", class_name: "Conto"

  #belongs_to :bank_user_part, -> {select [:idutente, :nome, :cognome, :ragionesociale, :vendor] }, foreign_key: "point", class_name: "Anagrafica"
  belongs_to :servizio, class_name: "Servizio", foreign_key: "idtransazione", optional: true
  # belongs_to :main_service, -> { includes(:servizio).where("servizi.status IN (?)", %w{5 6 7 8}).references(:servizio) }, class_name: "Servizio", foreign_key: "idtransazione", optional: true
  has_one :anagrafica, through: :servizio, class_name: "Anagrafica"

  belongs_to :mandato, foreign_key: "idmandato", class_name: "Mandato", optional: true
  has_one :product, through: :main_service

  # default_scope -> { order(idmovimenticonti: :desc)}

  scope :for_month, -> (month) { where("MONTH(datamovimento) = ?", month) }

  scope :order_asc, -> {order(idmovimenticonti: :asc)}
  scope :fast_service, -> {includes(:main_service, :mandato, :product => :codicetabella).references(:main_service).order_asc}
  scope :fast_out, -> {fast_service.where("movimenticonti.dare > ?", 0.0)}
  scope :fast_out_for_user, -> (user_id) {fast_out.where("point" => user_id).order_asc}
 
  scope :with_service, -> { where('movimenticonti.idtransazione IS NOT NULL AND movimenticonti.idtransazione != ?',0) }

  def main_service
    Movimentoconto.includes(:servizio).where("servizi.status IN (?)", %w{5 6 7 8}).references(:servizio).find (self.id)
  end

  def self.last_id
    order(idmovimenticonti: :desc).select(:idmovimenticonti).first.idmovimenticonti
  end

  def self.last_update
    order(dataMovimento: :desc).select(:dataMovimento).first.dataMovimento
  end

end












