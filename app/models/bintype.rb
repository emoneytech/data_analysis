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

  alias_attribute :product_name, "descrprod"
  alias_attribute :name, "descrprod"

  has_many :conti, foreign_key: "tipoprodotto", primary_key: "ProductType", class_name: "Conto"

  def self.last_id
    order(id: :desc).select(:id).first.id
  end
  
  def self.table_stats
    sql = "SELECT * FROM mysql.innodb_table_stats WHERE database_name = 'dbconti_prod' AND table_name = '#{self.table_name}'"
    ActiveRecord::Base.connection.exec_query(sql)
  end

end
