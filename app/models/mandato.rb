# == Schema Information
#
# Table name: mandati
#
#  IdMandato              :integer          not null
#  Data                   :date
#  Tipo                   :string(45)
#  Importo                :decimal(12, 2)   default(0.0)
#  Beneficiario           :bigint
#  ContoBeneficiario      :string(45)       default("0")
#  Ordinante              :text(65535)
#  ContoRiferimento       :string(45)
#  Note                   :string(250)
#  Stato                  :string(45)
#  Operatore              :integer          default(0)
#  IdMovimentoTecnico     :bigint
#  IdMovimentoValidazione :bigint           default(0)
#  Intestatario           :integer          default(0)
#  Passivi                :integer          default(0)
#  Blocco                 :integer          default(0)
#  Iban                   :string(45)
#

class Mandato < ApplicationCoreRecord
  include Filterable

  self.table_name = 'mandati'
  self.primary_key = 'IdMandato'

  belongs_to :movimento, class_name: "Movimentoconto", foreign_key: "idmovimentovalidazione", optional: true
  delegate :datanumerica, to: :movimento
  delegate :dataMovimento, to: :movimento

  # alias_attribute :codspinoff2dest, "ContoBeneficiario"
  def self.last_id
    order(idmandato: :desc).select(:idmandato).first.idmandato
  end

end
