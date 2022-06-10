class Boundary < ApplicationCoreRecord
  include Filterable
  
  self.table_name = "Limiti"
  self.primary_key = 'Conto'

  belongs_to :conto, primary_key: "IdUtente", foreign_key: "IdUtente", class_name: "Anagrafica"


  scope :only_customers, -> { where.not(IdUtente: %w[70 75 34221]) }
  scope :filter_by_customer_id, -> (value) { where(IdUtente: value) }
  
  def self.icon
    'ban'
  end

end

# == Schema Information
#
# Table name: Limiti
#
#  Annuale     :decimal(12, 2)   default(0.0)
#  Balance     :decimal(12, 2)   default(0.0)
#  Changed     :integer          default(0)
#  Conto       :string(20)       not null, primary key
#  Giornaliero :decimal(10, 2)   default(0.0)
#  IdUtente    :bigint
#  Mensile     :decimal(12, 2)   default(0.0)
#  Settimanale :decimal(12, 2)   default(0.0)
#  Singola     :decimal(10, 2)   default(0.0)
#  TurnOver    :decimal(12, 2)   default(0.0)
#
