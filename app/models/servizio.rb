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
  self.primary_key = 'idservizio'

  alias_attribute :servizio_id, :idservizio
  alias_attribute :gruppo_id, :gruppo

  belongs_to :gruppi, foreign_key: "gruppo", class_name: "Gruppo"
  belongs_to :product, foreign_key: "prodotto", primary_key: "idprodotto", class_name: "Prodotto"
  belongs_to :anagrafica, foreign_key: "point", primary_key: "idutente", class_name: "Anagrafica"
  has_many :movimenticonti, foreign_key: "idtransazione", class_name: "Movimentoconto"
  
  has_one :ricaricacarta, foreign_key: "idservizio", class_name: "Ricaricacarta"
  has_one :bonifico, foreign_key: "idservizio", class_name: "Bonifico"
  has_one :assegnovirtuale, foreign_key: "Idservizio", class_name: "Assegnovirtuale"
  has_one :incassoassegno, foreign_key: "idservizio", class_name: "IncassoAssegno"


  has_one :evaluated_movement, foreign_key: :service_id, primary_key: 'idservizio'

  scope :with_movements, -> { joins(:movimenticonti).uniq }
  scope :active_status, -> { where(status: ['5','6','7','8'])}
  scope :with_amount, -> { where('servizi.importo > ?', 0)}
  scope :for_evaluation, -> { order(datainserimento: :asc).active_status.with_amount}
  scope :with_all_for_day, ->(days_begin, point) {
    with_amount.active_status.joins(:product, :anagrafica)
    .preload( :product, {anagrafica: :conti}, :movimenticonti,
              :ricaricacarta, :bonifico, :assegnovirtuale, :incassoassegno )
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
                  :ricaricacarta,
                  :bonifico,
                  :assegnovirtuale,
                  :incassoassegno)}

  def self.status_active
    ['5','6','7','8']
  end

  def self.last_id
    order(idservizio: :desc).select(:idservizio).first.idservizio
  end

  def self.titles
    ary = [ "As of Date",
            "Fiscal Year",
            "Region",
            "Borrower Country",
            "Borrower Country Code",
            "Project ID",
            "Project Name",
            "Procurement Type",
            "Procurement Category",
            "Procurement Method",
            "Product line",
            "WB Contract Number",
            "Major Sector",
            "Contract Description",
            "Contract Signing Date",
            "Supplier",
            "Supplier Country",
            "Supplier Country Code",
            "Total Contract Amount (USD)",
            "Borrower Contract Reference Number"
        ]
  end

  def to_csv
    ary = [
      "2012-12-18T00:00:00",
      "2012",
      "SOUTH ASIA",
      "Afghanistan",
      "AF",
      "P121755",
      "Afghanistan ICT Sector Development Proje",
      "Equipment, Transportation",
      "Goods",
      "SHOP",
      "IBRD/IDA",
      "1319218",
      "Information and communications",
      "Vehicle for PMO",
      "2011-12-01T00:00:00",
      "HAMID SHOUIB SAFI",
      "Afghanistan",
      "AF",
      "56200",
      "G4.3 VEHICLE FOR PMO"
    ]
  end

  def self.metas
    ary = {
      "meta": {
        "view": {
          "id": "kdui-wcs3",
          "name": "Major Contract Awards",
          "attribution": "World Bank",
          "averageRating": 0,
          "category": "Procurement",
          "createdAt": 1336026781,
          "description": "This set of contract awards includes data on commitments against contracts that were reviewed by the Bank before they were awarded (prior-reviewed Bank-funded contracts) under IDA/IBRD investment projects and related Trust Funds. This dataset does not list all contracts awarded by the Bank, and should be viewed only as a guide to determine the distribution of major contract commitments among the Bank's member countries. \"Supplier Country\" represents place of supplier registration, which may or not be the supplier's actual country of origin. Information does not include awards to subcontractors nor account for cofinancing. The Procurement Policy and Services Group does not guarantee the data included in this publication and accepts no responsibility whatsoever for any consequences of its use.  The World Bank complies with all sanctions applicable to World Bank transactions.",
          "displayType": "table",
          "downloadCount": 853,
          "licenseId": "CC_30_BY",
          "numberOfComments": 2,
          "oid": 2068446,
          "publicationAppendEnabled": false,
          "publicationDate": 1355942556,
          "publicationGroup": 332766,
          "publicationStage": "published",
          "rowClass": "",
          "rowsUpdatedAt": 1355942513,
          "rowsUpdatedBy": "tap8-m577",
          "signed": false,
          "tableId": 565909,
          "totalTimesRated": 0,
          "viewCount": 5189,
          "viewLastModified": 1363881252,
          "viewType": "tabular",
          "columns": [
            {
              "name": "As of Date",
              "description": "Represents the date when this snapshot was taken.",
              "fieldName": "as_of_date"
            },
            {
              "name": "Fiscal Year",
              "description": "The fiscal year begins on July 1st of the previous year and runs through June 30th of the designated year.",
              "fieldName": "fiscal_year"
            },
            {
              "name": "Region",
              "fieldName": "region"
            },
            {
              "name": "Borrower Country",
              "description": "Country to which loan or credit has been issued. Loans to the IFC are included under the country “World”.",
              "fieldName": "borrower_country"
            },
            {
              "name": "Borrower Country Code",
              "description": "Country Code according to the World Bank country list. Might be different from the ISO country code.",
              "fieldName": "borrower_country_code"
            },
            {
              "name": "Project ID",
              "description": "A Bank project is referenced by a project ID (Pxxxxxxx).  More than one loan, credit, or grant may be associated with one Project ID. ",
              "fieldName": "project_id"
            },
            {
              "name": "Project Name",
              "description": "Short descriptive project name.",
              "fieldName": "project_name"
            },
            {
              "name": "Procurement Type",
              "description": "The overall purpose of the work or services performed under the contract, or the broad categorization of goods acquired.   The type depends upon the Procurement Category.",
              "fieldName": "procurement_type"
            },
            {
              "name": "Procurement Category",
              "description": "Describes procurement category.",
              "fieldName": "procurement_category"
            },
            {
              "name": "Procurement Method",
              "description": "The method used for selecting a contractor, supplier or consultant.  The method used depends upon the Procurement Category. ",
              "fieldName": "procurement_method"
            },
            {
              "name": "Product line",
              "fieldName": "product_line"
            },
            {
              "name": "WB Contract Number",
              "description": "Internal World Bank Contract number.",
              "fieldName": "wb_contract_number"
            },
            {
              "name": "Major Sector",
              "description": "Indicates major sector for specific contract.",
              "fieldName": "major_sector"
            },
            {
              "name": "Contract Description",
              "description": "Contract description as it appears in the signed agreement.",
              "fieldName": "contract_description"
            },
            {
              "name": "Contract Signing Date",
              "description": "Date when the contract was signed.",
              "fieldName": "contract_signing_date"
            },
            {
              "name": "Supplier",
              "description": "The name of the contractor, supplier or consultant who submitted the winning bid or proposal. The name of the manufacturer, Joint Venture partners, sub-contractor, and/or sub-consultants may not appear.",
              "fieldName": "supplier"
            },
            {
              "name": "Supplier Country",
              "description": "The nationality of awarded firms is based on place of registration, which may or may not be the same as the country of origin.   For the country where the work is being performed, or the goods are being delivered, use Borrower Country.",
              "fieldName": "supplier_country"
            },
            {
              "name": "Supplier Country Code",
              "fieldName": "supplier_country_code"
            },
            {
              "name": "Total Contract Amount (USD)",
              "description": "All contract values reflect committed (not disbursed) amounts, and are in US dollars, based on the US Treasury's rate of exchange at the time of the Bank's no objection to the contract award.\n ",
              "fieldName": "supplier_contract_amount_usd"
            },
            {
              "name": "Borrower Contract Reference Number",
              "description": "Contract reference number used by Borrower.",
              "fieldName": "borrower_contract_reference_number"
            }
          ]
        }
      },
      "data": [
        [
          "2012-12-18T00:00:00",
          "2012",
          "SOUTH ASIA",
          "Afghanistan",
          "AF",
          "P121755",
          "Afghanistan ICT Sector Development Proje",
          "Equipment, Transportation",
          "Goods",
          "SHOP",
          "IBRD/IDA",
          "1319218",
          "Information and communications",
          "Vehicle for PMO",
          "2011-12-01T00:00:00",
          "HAMID SHOUIB SAFI",
          "Afghanistan",
          "AF",
          "56200",
          "G4.3 VEHICLE FOR PMO"
        ],
        [
          "2012-12-18T00:00:00",
          "2012",
          "SOUTH ASIA",
          "Afghanistan",
          "AF",
          "P101502",
          "AF: HIV/AIDS Prevention Project",
          "Health Services",
          "Consultant Services",
          "Individual",
          "IBRD/IDA",
          "1324222",
          "Health and other social services",
          "Finance Consultant",
          "2011-09-06T00:00:00",
          "MR.MUSTAFA AFTAB",
          "Afghanistan",
          "AF",
          "58314",
          "HIV CON 18"
        ]
      ]
    }
  end

  def self.create_evaluated_movements(year = 2016)
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
        Servizio.select(
          :idservizio, :point
        ).where(
          "servizi.datainserimento BETWEEN '#{days_begin.beginning_of_day}'
          AND '#{days_begin.end_of_day}'"
        ).order(
          datainserimento: :asc
        ).each_slice(100) do |services|
          services.each do |s|
            worker_id = CreateEvaluatedMovementWorker.perform_async(
              s.idservizio,
              s.point
            )
          end
        end
        days_begin = days_begin.advance(days: 1)
      end
      puts "- #{days_begin.to_s}"
      date_begin = date_begin.advance(months: 1)
    end
  end

  def self.update_evaluated_movements(year = 2016)
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
        Servizio.select(
          :idservizio, :point
        ).where(
          "servizi.datainserimento BETWEEN '#{days_begin.beginning_of_day}'
          AND '#{days_begin.end_of_day}'"
        ).order(
          datainserimento: :asc
        ).each_slice(100) do |services|
          services.each do |s|
            worker_id = UpdateEvaluatedMovementWorker.perform_async(
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

end
