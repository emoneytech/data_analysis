class Stato < ApplicationCoreRecord

  self.table_name = 'stati'
  self.primary_key = 'idstato'

  alias_attribute :id, "idstato"
  alias_attribute :name, "stato"

  has_many :conti, primary_key: "idstato", foreign_key: "ProductState", class_name: "Conto"

  def to_s
    "#{stato}"
  end
  
end
