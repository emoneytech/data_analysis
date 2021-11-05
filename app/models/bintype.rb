# == Schema Information
#
# Table name: bintype
#
#  id                                                                              :integer          unsigned, not null, primary key
#  Annuale                                                                         :decimal(10, 2)   default(0.0)
#  Balance                                                                         :decimal(10, 2)   default(0.0)
#  Giornaliero                                                                     :decimal(10, 2)   default(0.0)
#  Mensile                                                                         :decimal(10, 2)   default(0.0)
#  Settimanale                                                                     :decimal(10, 2)   default(0.0)
#  Singola                                                                         :decimal(10, 2)   default(0.0)
#  TurnOver                                                                        :decimal(10, 2)   default(0.0)
#  descrprod(corrisponde al vecchio campo "Tipo" della tabella BinType)            :string(60)       default("descrive il prodotto")
#  idBinType(corrisponde al "Firstbin" della vecchia tabella "BinType")            :string(8)        not null
#  mascheramento(coincide col campo "mascheramento" della vecchia tabella BinType) :string(8)
#  subprodotto                                                                     :string(5)
#  tipoprodotto(corrisponde al campo "Descrizione" della vecchia tab "BinType")    :integer          not null
#  tiposervizio(coincide con l'anaologo campo della vecchia tabella BinType)       :string(45)
#
# Indexes
#
#  id_UNIQUE            (id) UNIQUE
#  tipoprodotto_UNIQUE  (tipoprodotto) UNIQUE
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
