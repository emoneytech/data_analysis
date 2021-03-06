# == Schema Information
#
# Table name: vendor
#
#  id              :integer          not null, primary key
#  Listino         :integer
#  ragionesociale  :string(70)
#  ordine          :integer
#  email           :text(4294967295)
#  emailRetailCred :text(4294967295)
#  emailagenti     :text(4294967295)
#  link            :string(136)
#  AreaSviluppo    :string(142)
#  AreaProduzione  :string(139)
#  Wallet          :string(16)       default("0")
#  RespRete        :string(60)
#  Concession      :string(20)
#  HelpDesk        :integer          default(801)
#  ContoSkinMaster :string(16)
#  IdConto         :string(20)       default("0")
#  footer          :text(4294967295)
#  contoRid        :string(45)
#  Visualizza      :integer          default(1)
#  privacy         :text(4294967295)
#
class Vendor < ApplicationCoreRecord
  self.table_name = 'vendor'
  include Filterable
  has_many :anagrafiche, foreign_key: 'Vendor'
  has_many :servizi, foreign_key: 'vendor'

  has_many :products, -> { distinct }, through: :servizi, source: :product
  has_many :all_products, through: :servizi, source: :product
  
  scope :filter_by_ragione_sociale, -> (name) { where("ragionesociale LIKE ?", "%#{name}%")}

  def to_s
    "#{ragionesociale}"
  end

  def self.last_id
    order(id: :desc).select(:id).first.id
  end

end
