# == Schema Information
#
# Table name: sanction_lists
#
#  id         :bigint           not null, primary key
#  name       :string
#  remote_url :string
#  state      :string           default("new"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_sanction_lists_on_state  (state)
#
require 'csv'
class SanctionList < CorePgRecord

  has_one_attached :main_csv
  validates :main_csv, presence: true
  validate :acceptable_csv

  has_many :sanction_list_items, dependent: :nullify_then_purge
  accepts_nested_attributes_for :sanction_list_items, allow_destroy: true

  after_create :start_import_worker

  def self.fieldnames
    %w[fileGenerationDate Entity_LogicalId Entity_EU_ReferenceNumber Entity_UnitedNationId Entity_DesignationDate Entity_DesignationDetails Entity_Remark Entity_SubjectType Entity_SubjectType_ClassificationCode Entity_Regulation_Type Entity_Regulation_OrganisationType Entity_Regulation_PublicationDate Entity_Regulation_EntryIntoForceDate Entity_Regulation_NumberTitle Entity_Regulation_Programme Entity_Regulation_PublicationUrl NameAlias_LastName NameAlias_FirstName NameAlias_MiddleName NameAlias_WholeName NameAlias_NameLanguage NameAlias_Gender NameAlias_Title NameAlias_Function NameAlias_LogicalId NameAlias_RegulationLanguage NameAlias_Remark NameAlias_Regulation_Type NameAlias_Regulation_OrganisationType NameAlias_Regulation_PublicationDate NameAlias_Regulation_EntryIntoForceDate NameAlias_Regulation_NumberTitle NameAlias_Regulation_Programme NameAlias_Regulation_PublicationUrl Address_City Address_Street Address_PoBox Address_ZipCode Address_Region Address_Place Address_AsAtListingTime Address_ContactInfo Address_CountryIso2Code Address_CountryDescription Address_LogicalId Address_RegulationLanguage Address_Remark Address_Regulation_Type Address_Regulation_OrganisationType Address_Regulation_PublicationDate Address_Regulation_EntryIntoForceDate Address_Regulation_NumberTitle Address_Regulation_Programme Address_Regulation_PublicationUrl BirthDate_BirthDate BirthDate_Day BirthDate_Month BirthDate_Year BirthDate_YearRangeFrom BirthDate_YearRangeTo BirthDate_Circa BirthDate_CalendarType BirthDate_ZipCode BirthDate_Region BirthDate_Place BirthDate_City BirthDate_CountryIso2Code BirthDate_CountryDescription BirthDate_LogicalId BirthDate_RegulationLanguage BirthDate_Remark BirthDate_Regulation_Type BirthDate_Regulation_OrganisationType BirthDate_Regulation_PublicationDate BirthDate_Regulation_EntryIntoForceDate BirthDate_Regulation_NumberTitle BirthDate_Regulation_Programme BirthDate_Regulation_PublicationUrl Identification_Number Identification_Diplomatic Identification_KnownExpired Identification_KnownFalse Identification_ReportedLost Identification_RevokedByIssuer Identification_IssuedBy Identification_IssuedDate Identification_ValidFrom Identification_ValidTo Identification_LatinNumber Identification_NameOnDocument Identification_TypeCode Identification_TypeDescription Identification_Region Identification_CountryIso2Code Identification_CountryDescription Identification_LogicalId Identification_RegulationLanguage Identification_Remark Identification_Regulation_Type Identification_Regulation_OrganisationType Identification_Regulation_PublicationDate Identification_Regulation_EntryIntoForceDate Identification_Regulation_NumberTitle Identification_Regulation_Programme Identification_Regulation_PublicationUrl Citizenship_Region Citizenship_CountryIso2Code Citizenship_CountryDescription Citizenship_LogicalId Citizenship_RegulationLanguage Citizenship_Remark Citizenship_Regulation_Type Citizenship_Regulation_OrganisationType Citizenship_Regulation_PublicationDate Citizenship_Regulation_EntryIntoForceDate Citizenship_Regulation_NumberTitle Citizenship_Regulation_Programme Citizenship_Regulation_PublicationUrl]
  end

  def self.underscore_fieldnames
    return self.fieldnames.map{|name| name.underscore}
  end

  def self.sym_fieldnames
    return self.underscore_fieldnames.map{|name| name.to_sym}
  end

  def sanction_list_items_count
    self.sanction_list_items.count
  end

  def import
    self.sanction_list_items.destroy_all
    self.main_csv.open do |file|
      CSV.foreach(file, headers: true, col_sep: ";") do |row|
        i = self.sanction_list_items.build()
        SanctionList.fieldnames.each do |field|
          i[field.underscore] = row["#{field}"]
        end 
        i.save
      end
    end
  end

  def csv_smarter
    self.main_csv.open do |file|
      headers = CSV.open(file, encoding: 'bom|utf-8', &:readline)
      ary = headers[0].split(";")
      opts = {}
      ary.each do |h|
        opts[h.downcase.to_sym] = h.underscore.to_sym
      end
      n = SmarterCSV.process(file.path, {chunk_size: 2000, key_mapping: opts, file_encoding: 'bom|utf-8', col_sep: ";"}) do |chunk|
        self.sanction_list_items.build( chunk )
        self.save
      end
    end
    return n
  end

  def acceptable_csv
    return unless main_csv.attached?

    unless main_csv.byte_size <= 50.megabyte
      errors.add(:main_csv, "is too big")
    end

    acceptable_types = ["text/csv"]
    unless acceptable_types.include?(main_csv.content_type)
      errors.add(:main_csv, "must be a CSV File")
    end
  end

  def start_import_worker
    ImportCsvSanctionListWorker.perform_async(self.id) #if self.new_record? || self.main_csv.changed?
  end


end
