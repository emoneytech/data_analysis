# == Schema Information
#
# Table name: bintype
#
#  id            :integer          unsigned, not null, primary key
#  idBinType     :string(8)        not null
#  tipoprodotto  :integer          not null
#  descrprod     :string(60)       default("descrive il prodotto")
#  mascheramento :string(8)
#  tiposervizio  :string(45)
#  subprodotto   :string(5)
#  Giornaliero   :decimal(10, 2)   default(0.0)
#  Settimanale   :decimal(10, 2)   default(0.0)
#  Mensile       :decimal(10, 2)   default(0.0)
#  Annuale       :decimal(10, 2)   default(0.0)
#  Singola       :decimal(10, 2)   default(0.0)
#  TurnOver      :decimal(10, 2)   default(0.0)
#  Balance       :decimal(10, 2)   default(0.0)
#

class Bintype < ApplicationCoreRecord

  self.table_name = "bintype"
  self.primary_key = 'id'
  has_many :conti, foreign_key: "bintype", class_name: "Conto"

  def self.last_id
    order(id: :desc).select(:id).first.id
  end

  def last_update
    sql = "SELECT UPDATE_TIME FROM information_schema.tables WHERE TABLE_SCHEMA = 'dbconti_prod' AND TABLE_NAME = '#{self.table_name}'"
  end

end
