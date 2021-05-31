# == Schema Information
#
# Table name: codicitabelle
#
#  codtab      :integer          not null, primary key
#  nometabella :string(45)
#

class Codicetabella < ApplicationCoreRecord
  self.table_name = 'codicitabelle'
  self.primary_key = 'codtab'

  alias_attribute :id, "codtab"
  alias_attribute :name, "nometabella"

  def self.last_id
    order(codtab: :desc).select(:codtab).first.codtab
  end

end
