# == Schema Information
#
# Table name: iban
#
#  IdUtente :bigint           not null, primary key
#  Iban     :string(45)       default(""), not null, primary key
#  Conto    :string(45)       default(""), not null, primary key
#  Tipo     :integer          default(0)
#  C        :integer          default(1)
#
class Iban < ApplicationCoreRecord
  include Filterable
  
  self.table_name = 'iban'
  self.primary_key = :IdUtente, :Iban, :Conto

  belongs_to :anagrafica, primary_key: 'IdUtente', foreign_key: 'IdUtente'
  belongs_to :conto, primary_key: 'Conto', foreign_key: 'Pan'

  def to_s
    "#{Iban}"
  end

end
