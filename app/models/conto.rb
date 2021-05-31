# == Schema Information
#
# Table name: conti
#
#  idConti             :integer          not null
#  IdUtente            :bigint           not null
#  idpoint             :bigint           default(0), not null
#  Pan                 :string(46)       not null
#  IPan                :string(16)       default("0000000000000000"), not null
#  alias               :string(50)
#  Saldo               :decimal(12, 2)   default(0.0), not null
#  nazione             :string(3)        default("ND")
#  BinType             :string(8)
#  ProductState        :integer          default(1), not null
#  ProductType         :integer          not null
#  family              :integer          default(4), not null
#  subtypeprod         :integer
#  Valuta              :string(6)        default("EUR"), not null
#  Inserimento         :datetime         not null
#  Attivazione         :datetime
#  Webpin              :string(6)        default("999999"), not null
#  scadwebpin          :datetime         not null
#  lastMovimento       :datetime
#  datanumerica        :integer          unsigned
#  Hour                :time
#  ipDskUser           :string(45)       default("nd")
#  DeskUser            :string(10)       default("nd")
#  lastUpdateuser      :datetime
#  webpin2             :string(6)        default("000000")
#  scadenza_wp2        :date
#  Nota1               :string(255)      default("no note")
#  Nota2               :string(255)      default("no note")
#  fido                :boolean          default(FALSE)
#  limite              :decimal(10, 2)   default(0.0)
#  datascadenzaservizi :date
#  AccessoConto        :integer          default(0)
#  StatoKyc            :integer          default(0)
#  Scadenza            :date
#  Visualizza          :integer          default(0)
#  Preferito           :integer          default(0)
#

class Conto < ApplicationCoreRecord

  self.table_name = "conti"
  self.primary_key = 'pan'

  alias_attribute :amount, "saldo"
  alias_attribute :product_type, "producttype"

  belongs_to :bank_user, foreign_key: "idutente", class_name: "Anagrafica"

  belongs_to :tipo_conto, foreign_key: "producttype", primary_key: "tipoprodotto", class_name: "Bintype"

  delegate :descrizione, to: :tipo_conto
  has_many :movimenticonti, foreign_key: "numeroconto", class_name: 'Movimentoconto'

  def self.last_id
    order(idconti: :desc).select(:idconti).first.idconti
  end

end
