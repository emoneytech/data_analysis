# == Schema Information
#
# Table name: prodotti
#
#  id                 :integer          not null, primary key
#  Action             :string(25)
#  Commissioni        :decimal(10, 2)
#  Costo              :decimal(10, 2)
#  OfferCode          :string(20)
#  Operatore          :string(12)
#  Spese              :decimal(10, 2)
#  TipoCommissioni    :integer          default(0)
#  TipoOpCog          :string(5)
#  TipoRevAg          :integer          default(0)
#  TipoRevAgEur       :integer          default(0)
#  TipoRevAgMast      :integer          default(0)
#  TipoRevAgNaz       :integer          default(0)
#  TipoRevAgReg       :integer          default(0)
#  TipoRevPoint       :integer          default(0)
#  TipoSpese          :integer          default(0)
#  acquisto           :decimal(10, 3)
#  attivo             :string(5)
#  base_risk          :decimal(10, 2)   default(1.01)
#  codtabella         :integer          default(0)
#  create             :date             default(NULL)
#  dataupdate         :date             default(NULL)
#  fornitore          :string(5)
#  gruppo             :integer          not null
#  idlastupdate       :bigint           default(0)
#  idprodotto         :integer          not null
#  iplastupdate       :string(45)       default("0")
#  modifica           :bigint           default(0)
#  nome               :string(250)
#  notifica           :string(5)
#  prezzo             :decimal(10, 2)
#  prodottoapi        :string(12)
#  prodottolistino    :integer          not null
#  provider           :string(5)
#  revenueagenti      :decimal(18, 8)
#  revenueageuropa    :decimal(18, 8)
#  revenueagmaster    :decimal(18, 8)
#  revenueagnazionale :decimal(18, 8)
#  revenueagregionale :decimal(18, 8)
#  revenuepoint       :decimal(10, 2)
#  scontrino          :integer          default(0), not null
#  srv                :string(25)
#  srvid              :string(25)
#  srvidCO            :string(9)
#  srvidEU            :string(25)
#  stampa             :string(5)
#  visualizza         :integer
#  xmltype            :string(12)
#
# Indexes
#
#  Costo_idx            (Costo)
#  gruppo_idx           (gruppo)
#  idprodotto_idx       (idprodotto) UNIQUE
#  prodottolistino_idx  (prodottolistino)
#  scontrino_idx        (scontrino)
#  visualizza_idx       (visualizza)
#

class Prodotto < ApplicationCoreRecord

  self.table_name = 'prodotti'

  belongs_to :gruppi, foreign_key: "gruppo", class_name: "Gruppo"
  has_many :servizi, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Servizio"
  has_many :active_servizi, -> { where('servizi.importo > 0').where(status: [Servizio.status_active]) }, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Servizio"

  has_many :evaluated_movements, foreign_key: :product_id, primary_key: "idprodotto"

  belongs_to :codicetabella, foreign_key: :codtabella, class_name: "Codicetabella"
  # delegate :nometabella, to: :codicetabella

  alias_attribute :name, "nome"

  def self.icon
    'box'
  end

  def to_s
    "#{name}"
  end

  def self.da_escludere
    ary = ['Standard IBAN', 'Sms', 'Token', 'Incoming Funds Fee']
  end

  def  self.da_escludere_per_prodottoid
    # quando prodotto finisce per 241 la colonna per l'importo diventa commissioni
    # "SUBSTRING(prodotto, -3, 3) IN (?)", ExcludedProduct.all.pluck(:last_3_numbers)
    # 241 Incoming funds fees
    # 911 Abilita carta
    # 912 Disabilita carta
    # 702 Canone Carte
    # 907 Sms
    # 908 Token
    # 717 Iban Standard
    # 719 Iban Vanity
    ary = ExcludedProduct.all.pluck(:last_3_numbers)
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
