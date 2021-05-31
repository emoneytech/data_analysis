# == Schema Information
#
# Table name: tipi
#
#  IdTipo    :integer          not null, primary key
#  Tipo      :string(100)      not null
#  base_risk :decimal(10, 2)   default(5.0)
#

class Tipo < ApplicationCoreRecord

  self.table_name = 'tipi'
  self.primary_key = 'IdTipo'

  alias_attribute :id, "IdTipo"
  alias_attribute :name, "Tipo"

  scope :alive, -> { where(id: %w{2 3 9}).order(name: :asc) }
  scope :newest, -> { where('IdTipo > ?', Tipo.last_id).order(IdTipo: :asc) }

  def self.last_id
    order(IdTipo: :desc).select(:IdTipo).first.IdTipo
  end

end
