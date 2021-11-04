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
  include MovimentocontoFilters
  
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

  EXCLUDED = ExcludedProduct.all.pluck(:last_3_numbers)

  #belongs_to :bank_user_part, -> {select [:idutente, :nome, :cognome, :ragionesociale, :vendor] }, foreign_key: "point", class_name: "Anagrafica"
  belongs_to :servizio, class_name: "Servizio", foreign_key: "idtransazione", optional: true
  # belongs_to :main_service, -> { includes(:servizio).where("servizi.status IN (?)", %w{5 6 7 8}).references(:servizio) }, class_name: "Servizio", foreign_key: "idtransazione", optional: true

  
  belongs_to :conto, foreign_key: "numeroConto", primary_key: "Pan", class_name: 'Conto'
  
 # has_one :anagrafica, through: :servizio, class_name: "Anagrafica"
  has_one :anagrafica, through: :conto, class_name: "Anagrafica", source: :bank_user

  belongs_to :mandato, foreign_key: "IdMandato", class_name: "Mandato", optional: true
  has_one :product, through: :servizio

  has_one :evaluated_movement, primary_key: 'idMovimentiConti', foreign_key: 'movement_id'

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
    return false if anagrafica.Attivo.try(:to_i) == 6
    if self.out?
      return false unless servizio || mandato
      servizio.get_principal_movement_out.try(:ids).include?(self.id) && 
        (product ? !EXCLUDED.include?(product.idprodotto.to_s[3...]) : false) 
    else
      unless servizio
        return mandato.try(:Iban) ? true : false 
      end
      return false if EXCLUDED.include?(product.idprodotto.to_s[3...])
      return servizio.get_principal_movement_in.try(:id) === self.id if servizio
    end
  end

  def trigger!
    evaluated_movement.destroy if evaluated_movement
    em = build_evaluated_movement(movement_created_at: self.dataMovimento)
    em.save
  end

  def self.init_trigger
    self.to_trigger.select(:idMovimentiConti).find_in_batches(batch_size: 50) do |movements|
      movements.each do |m|
        movement = self.find m.idMovimentiConti
        movement.trigger! if movement.to_trigger?
        # movement.to_trigger?
      end
    end
  end
end












