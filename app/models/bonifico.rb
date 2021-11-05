# == Schema Information
#
# Table name: bonifici
#
#  Operatore      :bigint           default(0)
#  Paese          :string(75)       default("\"\"")
#  causale        :string(350)      default("\"")
#  codicefiscale  :string(45)       not null
#  contofee       :string(45)       default("0")
#  conversione    :decimal(10, 2)
#  destinatario   :string(150)      not null
#  dfiliale       :string(150)      default("\"")
#  dindirizzo     :string(250)      not null
#  dloc           :string(150)      not null
#  family         :string(10)
#  feeOption      :string(6)        default("0")
#  giustificativo :integer          default(0)
#  ibanOrdinante  :string(45)
#  ibandest       :string(50)       not null
#  idServExt      :bigint           default(0)
#  idbonifico     :integer          not null, primary key
#  idservizio     :bigint           not null
#  ordinante      :string(150)      not null
#  swift          :string(45)       default("\"\"")
#  valuta         :string(45)
#
# Indexes
#
#  giustificativo     (giustificativo)
#  ibandest           (ibandest)
#  idservizio_UNIQUE  (idservizio) UNIQUE
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
