class ApplicationCoreRecord < ApplicationRecord
  self.abstract_class = true
  connects_to database: { writing: :core, reading: :core }

  def readonly?
    true
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
end
