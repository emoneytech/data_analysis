# == Schema Information
#
# Table name: iban
#
#  IdUtente :bigint           not null, primary key
#  Iban     :string(45)       default(""), not null, primary key
#  Conto    :string(45)       default(""), not null, primary key
#  Tipo     :integer          default(0)
#  C        :integer          default(1)
#
class Iban < ApplicationCoreRecord
  include Filterable
  
  self.table_name = 'iban'
  self.primary_key = :IdUtente, :Iban, :Conto

  belongs_to :anagrafica, primary_key: 'IdUtente', foreign_key: 'IdUtente'
  belongs_to :conto, primary_key: 'Conto', foreign_key: 'Pan'

  scope :filter_by_customer_id, -> (value) { where(IdUtente: value) }
  scope :filter_by_conto, -> (value) { where(Conto: value) }
  scope :filter_by_iban, -> (value) { where("Iban LIKE ?", "%#{value}%") }
  scope :filter_by_type, -> (value) { where(Tipo: value) }
  scope :filter_by_c, -> (value) { where(C: value) }

  def to_s
    "#{Iban}"
  end

end
