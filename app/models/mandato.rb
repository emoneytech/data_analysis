# == Schema Information
#
# Table name: mandati
#
#  Beneficiario           :bigint
#  Blocco                 :integer          default(0)
#  ContoBeneficiario      :string(45)       default("0")
#  ContoRiferimento       :string(45)
#  Data                   :date
#  Iban                   :string(45)
#  IdMandato              :integer          not null, primary key
#  IdMovimentoTecnico     :bigint
#  IdMovimentoValidazione :bigint           default(0)
#  Importo                :decimal(12, 2)   default(0.0)
#  Intestatario           :integer          default(0)
#  Note                   :string(250)
#  Operatore              :integer          default(0)
#  Ordinante              :text(65535)
#  Passivi                :integer          default(0)
#  Stato                  :string(45)
#  Tipo                   :string(45)
#
# Indexes
#
#  Beneficiario      (Beneficiario)
#  Contoriferimento  (ContoRiferimento)
#  Stato             (Stato)
#  movTecnico        (IdMovimentoTecnico)
#  validazione       (IdMovimentoValidazione)
#

class Mandato < ApplicationCoreRecord
  include Filterable

  self.table_name = 'mandati'
  self.primary_key = :IdMandato

  has_many :eval_movements, as: :triggerable, primary_key: :IdMandato, inverse_of: :triggerable

  belongs_to :movimento, class_name: "Movimentoconto", foreign_key: "IdMovimentoValidazione", optional: true
  belongs_to :bank_user, class_name: "Anagrafica", foreign_key: "Beneficiario", optional: true
  delegate :datanumerica, to: :movimento
  delegate :dataMovimento, to: :movimento

  scope :filter_by_customer_id, -> (customer_id) { where(Beneficiario: customer_id) }
  scope :filter_by_iban, -> (value) { where(Iban: value) }
  scope :filter_by_service_id, -> (service_id) { where("Ordinante like ?", "% #{service_id}")}
  scope :filter_by_ordinante, -> (value) { where("Ordinante like ?", "%#{value}%")}

  scope :filter_by_in_out, -> (value) { where( value == 'IN' ? "Beneficiario != 0" : "Beneficiario = 0" ) }

  scope :filter_by_daterange, -> (daterange) { where(
    "DATE_FORMAT(mandati.Data , '%Y-%m-%d') between ? and ?", daterange.split(' - ')[0].to_date.strftime('%Y-%m-%d'), daterange.split(' - ')[1].to_date.strftime('%Y-%m-%d')
  )}

  # alias_attribute :codspinoff2dest, "ContoBeneficiario"
  def self.last_id
    order(idmandato: :desc).select(:idmandato).first.idmandato
  end

  def to_s
    "Mandato"
  end
  
  def info
    info = {
      form: '',
      name: '',
      iban: '',
      to_name: '',
      to_iban: '',
      to_other: ''      
    }
    if " - ".in?(self.Ordinante) && "From ".in?(self.Ordinante) && "To ".in?(self.Ordinante)
      marker1 = 'From '
      marker2 = 'To '
      from = self.Ordinante.string_between_markers(marker1, marker2)
      from_ary = from.split(' - ')
      iban = from_ary.pop().strip
      name = from_ary.join(' - ')
      to = self.Ordinante.split("#{iban}")[1].strip[3..]
      to_name, to_iban, to_other = to.split(' - ')

      info = {
        from: from.strip,
        name: name.strip,
        iban: iban,
        to_name: to_name.strip,
        to_iban: to_iban.try(:strip),
        to_other: to_other.try(:strip)
      }
    end
    return info
  end

end
