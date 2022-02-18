# == Schema Information
#
# Table name: stati
#
#  idstato :integer          not null, primary key
#  stato   :string(100)
#
class Stato < ApplicationCoreRecord

  self.table_name = 'stati'
  self.primary_key = 'idstato'

  alias_attribute :id, "idstato"
  alias_attribute :name, "stato"

  has_many :anagrafiche, primary_key: "idstato", foreign_key: "Attivo", class_name: "Anagrafica"

  def to_s
    "#{stato}"
  end
  
end
