# == Schema Information
#
# Table name: statiservizi
#
#  idstatiservizi :integer          not null, primary key
#  descrizione    :string(45)
#
class Statoservizio < ApplicationCoreRecord

  self.table_name = 'statiservizi'
  self.primary_key = 'idstatiservizi'

  alias_attribute :id, "idstatiservizi"
  alias_attribute :name, "descrizione"

  has_many :servizi, primary_key: "idstatiservizi", foreign_key: "status", class_name: "Servizio"

  def to_s
    "#{descrizione}"
  end
  
end
