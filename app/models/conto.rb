# == Schema Information
#
# Table name: conti
#
#  idConti             :integer          not null
#  IdUtente            :bigint           not null
#  idpoint             :bigint           default(0), not null
#  Pan                 :string(46)       not null, primary key
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
  self.primary_key = 'Pan'

  alias_attribute :amount, "saldo"
  alias_attribute :product_type, "ProductType"
  
  belongs_to :bank_user, primary_key: "IdUtente", foreign_key: "IdUtente", class_name: "Anagrafica"

  belongs_to :tipo_conto, primary_key: "tipoprodotto", foreign_key: "ProductType", class_name: "Bintype"
  belongs_to :stato, primary_key: "idstato", foreign_key: "ProductState", class_name: "Stato"

  delegate :product_name, to: :tipo_conto
  has_many :movimenticonti, primary_key: "Pan", foreign_key: "numeroconto", class_name: 'Movimentoconto'

  scope :alive, -> { where(ProductState: 1) }
  def self.last_id
    order(idconti: :desc).select(:idconti).first.idconti
  end

  def self.last_update
    order(lastMovimento: :desc).select(:lastMovimento).first.lastMovimento
  end

  def first_movement_date
    movimenticonti.order(dataMovimento: :asc).first.try(:dataMovimento)
  end

  def average_stock(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.any? ? movimenticonti.select('AVG(SaldoProg) AS average_stock').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_stock : 'nu'
  end

  def average_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('AVG(Avere) AS average_movement_amount_in').where('Avere > 0').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_movement_amount_in || 'nu'
  end

  def average_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('AVG(Dare) AS average_movement_amount_out').where('Dare > 0').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").first.average_movement_amount_out || 'nu'
  end

  def min_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Avere as min_movement_amount_in').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").where('Avere > 0').order(Avere: :asc).first.try(:min_movement_amount_in) || 'nu'
  end

  def min_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Dare as min_movement_amount_out').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").where('Dare > 0').order(Dare: :asc).first.try(:min_movement_amount_out) || 'nu'
  end

  def max_movement_amount_in(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Avere as max_movement_amount_in').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").order(Avere: :desc).first.try(:max_movement_amount_in) || 'nu'
  end

  def max_movement_amount_out(start_time=self.first_movement_date,end_time=Time.now)
    movimenticonti.select('Dare as max_movement_amount_out').where("dataMovimento BETWEEN '#{start_time}' AND '#{end_time}'").order(Dare: :desc).first.try(:max_movement_amount_out) || 'nu'
  end

  def nr_of_movement
    movimenticonti.count
  end
end
