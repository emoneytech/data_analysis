# == Schema Information
#
# Table name: ricariche
#
#  idservizio     :bigint           not null, primary key
#  numerotelefono :string(45)
#  optelefonico   :string(45)
#  action         :string(45)
#  tipoopcog      :string(45)
#  crocog         :string(45)       default("vuoto")
#  recID          :string(255)      default("vuoto")
#  auth           :string(255)      default("vuoto")
#  taglio         :decimal(10, 2)   default(0.0)
#  codicetaglio   :string(45)       default("0")
#  valuta         :string(45)       default("EUR")
#  paese          :string(45)       default("ITA")
#  valorespedito  :string(100)      default("vuoto")
#  valorericevuto :string(100)      default("vuoto")
#  timestamp      :string(45)       default("vuoto")
#  trid           :string(45)       default("0000")
#  pin            :string(45)
#  expiration     :string(45)
#  seriale        :string(45)       default("0000")
#
class Ricarica < ApplicationCoreRecord

  self.table_name = 'ricariche'
  self.primary_key = 'idservizio'

end
