# == Schema Information
#
# Table name: servizi
#
#  idservizio      :bigint           not null, primary key
#  point           :bigint           default(0)
#  ccaddebito      :string(45)       default("0")
#  prodotto        :bigint           default(0)
#  gruppo          :integer          default(0)
#  nomeprodotto    :string(250)      default("0")
#  status          :integer          default(0)
#  importo         :decimal(10, 2)   default(0.0)
#  commissioni     :decimal(10, 2)   default(0.0)
#  spese           :decimal(10, 2)   default(0.0)
#  revenuepoint    :decimal(10, 2)
#  revAgenti       :decimal(10, 2)   default(0.0)
#  revRegionali    :decimal(10, 2)   default(0.0)
#  revNazionali    :decimal(10, 2)   default(0.0)
#  revMaster       :decimal(10, 2)   default(0.0)
#  validazione     :string(45)       default("\"\"")
#  note            :text(65535)
#  datainserimento :datetime
#  datanumerica    :string(45)
#  datapagamento   :datetime
#  lastupdate      :datetime
#  addebito        :decimal(10, )
#  saldooperazione :decimal(10, )
#  operatore       :bigint           default(0)
#  scaricata       :integer
#  confermata      :integer
#  optval          :string(45)       default("\"\"")
#  vendor          :bigint
#  url             :string(150)      default("\"\"")
#  provider        :string(45)       default("\"\"")
#  xmlin           :text(65535)
#  xmlout          :text(65535)
#  riscog          :string(45)       default("\"\"")
#  timestampcog    :string(30)
#  provenienza     :bigint
#  idcausale       :bigint
#  point_operator  :string(255)      default("\"\"")
#
class Servizio < ApplicationCoreRecord
  self.table_name = 'servizi'
  self.primary_key = :idservizio

  alias_attribute :servizio_id, :idservizio
  alias_attribute :gruppo_id, :gruppo

  belongs_to :statoservizio, foreign_key: "status", class_name: "Statoservizio"

  belongs_to :gruppi, foreign_key: "gruppo", class_name: "Gruppo"
  belongs_to :product, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Prodotto"
  belongs_to :anagrafica, foreign_key: "point", primary_key: "idutente", class_name: "Anagrafica"
  has_many :movimenticonti, foreign_key: "idtransazione", class_name: "Movimentoconto"
  
  has_one :ricaricacarta, foreign_key: "idservizio", class_name: "Ricaricacarta"
  has_one :bonifico, foreign_key: "idservizio", class_name: "Bonifico"
  has_one :assegnovirtuale, foreign_key: "Idservizio", class_name: "Assegnovirtuale"
  has_one :incassoassegno, foreign_key: "idservizio", class_name: "IncassoAssegno"
  has_one :ricarica, foreign_key: "idservizio", class_name: "Ricarica"


  has_many :eval_movements, foreign_key: :service_id, primary_key: 'idservizio'
  has_many :triggered, class_name: "EvalMovement", as: :triggerable, primary_key: :idservizio, inverse_of: :triggerable

  scope :with_movements, -> { joins(:movimenticonti).uniq }
  scope :active_status, -> { where(status: ['5','6','7','8'])}
  scope :with_amount, -> { where('servizi.importo > ?', 0)}
  scope :for_evaluation, -> { order(datainserimento: :asc).active_status.with_amount}
  scope :with_all_for_day, ->(days_begin, point) {
    with_amount.active_status.joins(:product, :anagrafica)
    .preload( :product, {anagrafica: :conti}, :movimenticonti,
              :ricarica, :ricaricacarta, :bonifico, :assegnovirtuale, :incassoassegno )
    .includes(:movimenticonti)
    .where('movimenticonti.Point = ?', point)
    .references(:movimenticonti)
    .where(point: point).where("servizi.datainserimento BETWEEN '#{days_begin.beginning_of_day}' 
    AND '#{days_begin.end_of_day}'").order(datainserimento: :asc).uniq
  }
  scope :with_all,
       -> { joins(:product, :anagrafica, :movimenticonti)
            .preload(
              :product, {anagrafica: :conti}, :movimenticonti,
                  :ricarica,
                  :ricaricacarta,
                  :bonifico,
                  :assegnovirtuale,
                  :incassoassegno)}
  # scope for reports
  scope :executed, -> {
    where( 
      status: [3, 5, 8, 10]
    )
  }
  scope :grouped_by_month, -> (time_lapse) {
    where(
      "DATE_FORMAT(servizi.lastupdate , '%Y-%m-%d') between ? and ?", time_lapse[0], time_lapse[1]
    ).select(
      "COUNT(servizi.idservizio) AS nr_of_services",
      "SUM(servizi.importo) AS total_amount",
      "SUM(servizi.commissioni) AS fees",
      "DATE_FORMAT(servizi.lastupdate , '%Y-%m') AS month_group",
      "servizi.prodotto AS product_id"
    ).group(
      "prodotto", "month_group ASC"
    ).order(
      "month_group ASC"
    )
  }
  include Filterable
  # scopes for filters
  scope :filter_by_idservizio, -> (id) { where("idservizio = ?", id)}
  scope :filter_by_status, -> (status) { where("status = ?", status)}
  scope :filter_by_min_amount, -> (amount) { where("importo >= ?", amount)}
  scope :filter_by_max_amount, -> (amount) { where("importo <= ?", amount)}
  scope :filter_by_customer_id, -> (customer_id) { where("point = ?", customer_id)}
  scope :filter_by_product_id, -> (product_id) { where("prodotto = ?", product_id)}
  scope :filter_by_product_name, -> (product_name) { where("nomeprodotto LIKE ?", "%#{product_name}%")}
  scope :filter_by_vendor, -> (vendor_id) { where("vendor = ?", vendor_id)}
  scope :filter_by_daterange, -> (daterange) { where(
    "DATE_FORMAT(servizi.lastupdate , '%Y-%m-%d') between ? and ?", daterange.split(' - ')[0].to_date.strftime('%Y-%m-%d'), daterange.split(' - ')[1].to_date.strftime('%Y-%m-%d')
  )}

  def self.status_active
    ['5','6','7','8']
  end

  def self.last_id
    order(idservizio: :desc).select(:idservizio).first.idservizio
  end

  def self.last_update
    order(lastupdate: :desc).select(:lastupdate).first.lastupdate
  end

  def self.create_eval_movements(year = 2014, default_product_base_risk = Configurable.default_product_base_risk.to_f)
    servizi = Servizio.for_evaluation
    if year.to_i == 2014
      date =  Servizio.select(:datainserimento).order(datainserimento: :asc).first.datainserimento.to_date
    else
      date = Date.new(year,1,1).to_date
    end
    date_begin = date.to_date.beginning_of_month
    stop = date.at_end_of_year.to_date
    while (date_begin <= stop)
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop = days_begin.at_end_of_month > stop ? stop : days_begin.at_end_of_month 
      while (days_begin <= days_stop)
        servizi.select(
          :idservizio, :point
        ).where.not(
          "SUBSTRING(prodotto, -3, 3) IN (?)", ExcludedProduct.all.pluck(:last_3_numbers)
        ).where(
          "servizi.datainserimento BETWEEN '#{days_begin.beginning_of_day}'
          AND '#{days_begin.end_of_day}'"
        ).order(
          datainserimento: :asc
        ).each_slice(100) do |services|
          services.each do |s|
            worker_id = CreateMassiveEvalMovementWorker.perform_async(
              s.idservizio,
              s.point,
              default_product_base_risk
            )
          end
        end
        days_begin = days_begin.advance(days: 1)
      end
      puts "- #{days_begin.to_s}"
      date_begin = date_begin.advance(months: 1)
    end
  end

  def self.update_eval_movements(year = 2016)
    servizi = Servizio.for_evaluation
    default_product_base_risk = Configurable.default_product_base_risk.to_f
    max_base_risk = Configurable.max_base_risk.to_f
    factor_for_amount = Configurable.factor_for_amount.to_f
    divisor_amount_for_factor = Configurable.divisor_amount_for_factor.to_f

    # date =  Servizio.select(:datainserimento).order(datainserimento: :asc).first.datainserimento.to_date
    date = Date.new(year,1,1).to_date
    date_begin = date.to_date.beginning_of_month
    #stop = (Date.today - 1.day).to_date
    stop = date.at_end_of_year.to_date
    while (date_begin <= stop)
      days_begin = date_begin.beginning_of_month < date ? date : date_begin.beginning_of_month
      days_stop = days_begin.at_end_of_month > stop ? stop : days_begin.at_end_of_month 
      while (days_begin <= days_stop)
        puts "- #{days_begin.to_s}"
        servizi.select(
          :idservizio, :point
        ).where(
          "servizi.datainserimento BETWEEN '#{days_begin.beginning_of_day}'
          AND '#{days_begin.end_of_day}'"
        ).order(
          datainserimento: :asc
        ).each_slice(100) do |services|
          services.each do |s|
            worker_id = UpdateEvalMovementWorker.perform_async(
              s.idservizio,
              s.point,
              default_product_base_risk,
              max_base_risk,
              factor_for_amount,
              divisor_amount_for_factor
            )
            puts "--- #{worker_id}"
          end
        end
        days_begin = days_begin.advance(days: 1)
      end
      puts date_begin.to_s
      date_begin = date_begin.advance(months: 1)
    end
  end
=begin
  def get_beneficiary
    beneficiary = {
      beneficiary: 'Beneficiary not identifiable',
      beneficiary_iban: '',
      beneficiary_other: ''
    }
    return unless self.product.try(:nometabella)
    case self.product.nometabella
    when 'Ricariche'
      if self.ricarica
        beneficiary[:beneficiary] = "#{self.ricarica.numerotelefono}"
        beneficiary[:beneficiary_iban] = ""
        beneficiary[:beneficiary_other] = "#{self.ricarica.action}"
      end
    when 'ricarichecarta'
      if self.anagrafica.conti.where(Pan: self.ricaricacarta.numerocarta).count > 0
        beneficiary[:beneficiary] = "#{self.anagrafica.full_name}"
        beneficiary[:beneficiary_iban] = "#{self.ricaricacarta.numerocrip}"
        beneficiary[:beneficiary_other] = "#{self.nomeprodotto}"
      else
        beneficiary[:beneficiary_other] =
          "check for #{self.prodotto}: #{self.nomeprodotto}"
      end
    when 'bonifici'
      if self.bonifico
        beneficiary[:beneficiary] = "#{self.bonifico.destinatario}"
        beneficiary[:beneficiary_iban] = "#{self.bonifico.ibandest}"
        beneficiary[:beneficiary_other] =
          "#{self.bonifico.dindirizzo}, #{self.bonifico.dloc}, #{self.bonifico.Paese}"
      end
    when 'assegnovirtuale'
      if self.prodotto.to_s == "1614" || self.prodotto.to_s == "1612"
        movement = self.movimenticonti.where(Point: self.anagrafica.id).where(contodiprovenienza: self.anagrafica.conti.pluck(:Pan)).first
        beneficiary[:beneficiary] = "#{movement.Causale}"
      elsif self.prodotto.to_s == "200618" || self.prodotto.to_s == "200619" || self.prodotto.to_s == "200620"
        beneficiary[:beneficiary] = "Beneficiary not identifiable"
      else
        beneficiary[:beneficiary] = "#{self.assegnovirtuale.beneficiary_name}"
      end
    when 'incassoAssegno'
      beneficiary[:beneficiary] = "#{self.incassoassegno.beneficiary_name}"
      beneficiary[:beneficiary_iban] = "#{self.incassoassegno.beneficiary_iban}"
      beneficiary[:beneficiary_other] = "#{self.incassoassegno.beneficiary_other}"
    else
      beneficiary[:beneficiary] = 'Beneficiary not identifiable'
    end
    return beneficiary
  end
=end
  def get_beneficiary
    beneficiary = {
      beneficiary: 'Beneficiary not identifiable',
      beneficiary_iban: '',
      beneficiary_card: '',
      beneficiary_other: '',
      internal: nil
    }

    return unless self.product.try(:nometabella)
    case self.product.nometabella
    when 'Ricariche'
      if self.ricarica
        beneficiary[:beneficiary] = "#{self.ricarica.numerotelefono}"
        beneficiary[:beneficiary_iban] = ""
        beneficiary[:beneficiary_other] = "#{self.ricarica.action}"
      end
    when 'ricarichecarta'
      if self.anagrafica.conti.where(Pan: self.ricaricacarta.numerocarta).count > 0
        beneficiary[:beneficiary] = "#{self.anagrafica.full_name}"
        beneficiary[:beneficiary_iban] = ''
        beneficiary[:beneficiary_card] = "#{self.ricaricacarta.numerocrip}"
        beneficiary[:beneficiary_other] = "#{self.anagrafica.full_address}"
      else
        destination_account = Conto.find_by_Pan(self.ricaricacarta.numerocarta).try(:bank_user)
        unless destination_account
          beneficiary[:beneficiary_other] = "check for #{self.prodotto}: #{self.nomeprodotto}"
        else
          beneficiary[:beneficiary] = "#{destination_account.full_name}"
          beneficiary[:beneficiary_iban] = ''
          beneficiary[:beneficiary_card] = "#{self.ricaricacarta.numerocrip}"
          beneficiary[:beneficiary_other] = "#{destination_account.full_address}"
          beneficiary[:internal] = destination_account.id
        end
      end
      self.destination_country = "MT"
    when 'bonifici'
      if self.bonifico
        beneficiary[:internal] = self.bonifico.internal_beneficiary.id if self.bonifico.internal?
        beneficiary[:beneficiary] = "#{self.bonifico.destinatario}"
        beneficiary[:beneficiary_iban] = "#{self.bonifico.ibandest}"
      end
    when 'assegnovirtuale'
      if self.prodotto.to_s == "1614" || self.prodotto.to_s == "1612"
        movement = self.movimenticonti.where(Point: self.anagrafica.id).where(contodiprovenienza: self.anagrafica.conti.pluck(:Pan)).first
        beneficiary[:beneficiary] = "#{movement.Causale}"
      elsif self.prodotto.to_s == "200618" || self.prodotto.to_s == "200619" || self.prodotto.to_s == "200620"
        beneficiary[:beneficiary] = "Beneficiary not identifiable"
      else
        beneficiary[:beneficiary] = "#{self.assegnovirtuale.beneficiary_name}"
      end
    when 'incassoAssegno'
      beneficiary[:beneficiary] = "#{self.incassoassegno.beneficiary_name}"
      beneficiary[:beneficiary_iban] = "#{self.incassoassegno.beneficiary_iban}"
      beneficiary[:beneficiary_other] = "#{self.incassoassegno.beneficiary_other}"
    else
      beneficiary[:beneficiary] = 'Beneficiary not identifiable'
    end
    return beneficiary
  end

  def beneficiary_internal
    self.get_beneficiary ? self.get_beneficiary[:internal] : nil
  end

  def get_principal_movement_in
    if beneficiary_internal
      self.movimenticonti.where(numeroconto: Anagrafica.find(beneficiary_internal).conti.pluck(:Pan)).first
    end
  end

  def get_principal_movement_out
    self.movimenticonti.where(Point: self.anagrafica.id)
      .where(numeroconto: self.anagrafica.conti.pluck(:Pan))
      .where.not("idCausale like ?", '%dcomm%')#.first
  end

end
