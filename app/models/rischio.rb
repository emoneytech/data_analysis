# == Schema Information
#
# Table name: rischio
#
#  IdUtente :bigint           not null
#  Rischio  :decimal(10, 2)   default(0.0)
#  Data     :datetime         not null
#
class Rischio < ApplicationCoreRecord

  self.table_name = "rischio"
  self.primary_keys = :IdUtente,:Data

  belongs_to :anagrafica, foreign_key: "IdUtente", class_name: "Anagrafica"

end 
