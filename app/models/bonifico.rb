# == Schema Information
#
# Table name: bonifici
#
#  idbonifico     :integer          not null, primary key
#  idservizio     :bigint           not null
#  ordinante      :string(150)      not null
#  codicefiscale  :string(45)       not null
#  ibanOrdinante  :string(45)
#  ibandest       :string(50)       not null
#  destinatario   :string(150)      not null
#  Paese          :string(75)       default("\"\"")
#  dindirizzo     :string(250)      not null
#  dloc           :string(150)      not null
#  swift          :string(45)       default("\"\"")
#  causale        :string(350)      default("\"")
#  dfiliale       :string(150)      default("\"")
#  family         :string(10)
#  giustificativo :integer          default(0)
#  idServExt      :bigint           default(0)
#  contofee       :string(45)       default("0")
#  feeOption      :string(6)        default("0")
#  Operatore      :bigint           default(0)
#  valuta         :string(45)
#  conversione    :decimal(10, 2)
#
class Bonifico < ApplicationCoreRecord

  self.table_name = 'bonifici'
  self.primary_key = 'idbonifico'

  def internal?
    Iban.where(Iban: self.ibandest).any?
  end

  def internal_beneficiary
    Iban.find_by_Iban(self.ibandest).try(:anagrafica)
  end

end
