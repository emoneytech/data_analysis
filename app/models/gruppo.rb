# == Schema Information
#
# Table name: gruppi
#
#  idgruppo    :integer          not null, primary key
#  nomegruppo  :string(255)
#  tabella     :integer
#  iva         :integer
#  desiva      :string(255)
#  calcolo     :string(45)
#  codiva      :string(45)
#  contospinof :integer
#  codcausale  :integer
#  tipoconto   :string(45)
#  base_risk   :decimal(10, 2)   default(1.01)
#

class Gruppo < ApplicationCoreRecord

  self.table_name = 'gruppi'
  self.primary_key = 'idgruppo'

  # has_many :servizi, foreign_key: "gruppo", class_name: 'Servizio'
  has_many :prodotti, -> { order(nome: :asc) }, foreign_key: "gruppo", class_name: "Prodotto"

  alias_attribute :name, "nomegruppo"

  # default_scope -> { order(name: :asc) }

  def to_s
    "#{name}"
  end

  def self.last_id
    order(idgruppo: :desc).select(:idgruppo).first.idgruppo
  end

end
