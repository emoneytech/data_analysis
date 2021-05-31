# == Schema Information
#
# Table name: prodotti
#
#  id                 :integer          not null, primary key
#  idprodotto         :integer          not null
#  prodottolistino    :integer          not null
#  gruppo             :integer          not null
#  codtabella         :integer          default(0)
#  nome               :string(250)
#  provider           :string(5)
#  scontrino          :integer          default(0), not null
#  srv                :string(25)
#  srvidCO            :string(9)
#  srvid              :string(25)
#  srvidEU            :string(25)
#  OfferCode          :string(20)
#  Action             :string(25)
#  Operatore          :string(12)
#  prodottoapi        :string(12)
#  fornitore          :string(5)
#  xmltype            :string(12)
#  TipoOpCog          :string(5)
#  stampa             :string(5)
#  attivo             :string(5)
#  Costo              :decimal(10, 2)
#  TipoSpese          :integer          default(0)
#  Spese              :decimal(10, 2)
#  TipoCommissioni    :integer          default(0)
#  Commissioni        :decimal(10, 2)
#  prezzo             :decimal(10, 2)
#  acquisto           :decimal(10, 3)
#  TipoRevPoint       :integer          default(0)
#  revenuepoint       :decimal(10, 2)
#  TipoRevAg          :integer          default(0)
#  revenueagenti      :decimal(18, 8)
#  TipoRevAgReg       :integer          default(0)
#  revenueagregionale :decimal(18, 8)
#  TipoRevAgNaz       :integer          default(0)
#  revenueagnazionale :decimal(18, 8)
#  TipoRevAgEur       :integer          default(0)
#  revenueageuropa    :decimal(18, 8)
#  TipoRevAgMast      :integer          default(0)
#  revenueagmaster    :decimal(18, 8)
#  visualizza         :integer
#  create             :date             default(NULL)
#  notifica           :string(5)
#  modifica           :bigint           default(0)
#  idlastupdate       :bigint           default(0)
#  iplastupdate       :string(45)       default("0")
#  dataupdate         :date             default(NULL)
#  base_risk          :decimal(10, 2)   default(1.01)
#

class Prodotto < ApplicationCoreRecord

  self.table_name = 'prodotti'

  belongs_to :gruppi, foreign_key: "gruppo", class_name: "Gruppo"
  has_many :servizi, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Servizio"
  has_many :active_servizi, -> { where('servizi.importo > 0').where(status: [Servizio.status_active]) }, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Servizio"

  belongs_to :codicetabella, foreign_key: :codtabella, class_name: "Codicetabella"
  # delegate :nometabella, to: :codicetabella

  alias_attribute :name, "nome"

  def to_s
    "#{name}"
  end

  def nometabella
    self.codicetabella.try(:nometabella) || 'No reference to `codicetabella`'
  end

  def self.find_risk(prodottolistino)
    where(prodottolistino: prodottolistino).pluck(:base_risk).first || 1.01
  end

  def self.last_id
    order(idprodotto: :desc).select(:idprodotto).first.idprodotto
  end

end
