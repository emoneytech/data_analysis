# == Schema Information
#
# Table name: assegnovirtuale
#
#  IdTab         :bigint           not null, primary key
#  Idservizio    :bigint
#  IdUtente      :bigint
#  IdAssegno     :string(45)       not null
#  NomeEm        :string(45)
#  CognomeEm     :string(45)
#  NomeDest      :string(145)
#  CognomeDest   :string(45)
#  ContoAssegno  :string(45)
#  Importo       :decimal(10, 2)
#  Fee           :decimal(10, 2)
#  ContoFee      :string(45)
#  DataEmissione :date
#  ExternalId    :string(45)
#  MetodoIncasso :integer          default(0)
#  DataIncasso   :date
#  Stato         :integer          default(0)
#  IdStorno      :bigint           default(0)
#  IdIncasso     :bigint           default(0)
#
class Assegnovirtuale < ApplicationCoreRecord

  self.table_name = 'assegnovirtuale'
  self.primary_key = 'IdTab'

  def beneficiary_name
    "#{self.NomeDest} #{self.CognomeDest}"
  end


end
