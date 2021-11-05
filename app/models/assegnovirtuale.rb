# == Schema Information
#
# Table name: assegnovirtuale
#
#  CognomeDest   :string(45)
#  CognomeEm     :string(45)
#  ContoAssegno  :string(45)
#  ContoFee      :string(45)
#  DataEmissione :date
#  DataIncasso   :date
#  ExternalId    :string(45)
#  Fee           :decimal(10, 2)
#  IdAssegno     :string(45)       not null
#  IdIncasso     :bigint           default(0)
#  IdStorno      :bigint           default(0)
#  IdTab         :bigint           not null, primary key
#  IdUtente      :bigint
#  Idservizio    :bigint
#  Importo       :decimal(10, 2)
#  MetodoIncasso :integer          default(0)
#  NomeDest      :string(145)
#  NomeEm        :string(45)
#  Stato         :integer          default(0)
#
# Indexes
#
#  IdAssegno_UNIQUE  (IdAssegno) UNIQUE
#  IdServizio        (Idservizio)
#
class Assegnovirtuale < ApplicationCoreRecord

  self.table_name = 'assegnovirtuale'
  self.primary_key = 'IdTab'

  def beneficiary_name
    "#{self.NomeDest} #{self.CognomeDest}"
  end


end
