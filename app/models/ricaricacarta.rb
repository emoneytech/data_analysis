# == Schema Information
#
# Table name: ricarichecarta
#
#  idservizio       :integer          not null, primary key
#  destinatario     :string(45)
#  numerocarta      :string(45)
#  numerocrip       :string(45)
#  provenienza      :string(45)       default("\"\"")
#  pagatafornitore  :string(45)       default("\"\"")
#  datapagfornitore :string(45)       default("\"\"")
#  wallet           :string(45)       default("0")
#  webpin           :string(6)        default("000000")
#  causale          :string(251)      default(" ")
#  quotaCbs         :decimal(10, 2)   default(0.0)
#  giustificativo   :integer          default(0)
#
class Ricaricacarta < ApplicationCoreRecord

  self.table_name = 'ricarichecarta'
  self.primary_key = 'idservizio'

end
