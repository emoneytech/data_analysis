# == Schema Information
#
# Table name: sanction_lists
#
#  id                        :bigint           not null, primary key
#  name                      :string
#  sanction_list_items_count :integer
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#
require 'csv'
class SanctionList < CorePgRecord

  has_many :sanction_list_items

  def self.fieldnames
    %w[fileGenerationDate Entity_LogicalId Entity_EU_ReferenceNumber Entity_UnitedNationId Entity_DesignationDate Entity_DesignationDetails Entity_Remark Entity_SubjectType Entity_SubjectType_ClassificationCode Entity_Regulation_Type Entity_Regulation_OrganisationType Entity_Regulation_PublicationDate Entity_Regulation_EntryIntoForceDate Entity_Regulation_NumberTitle Entity_Regulation_Programme Entity_Regulation_PublicationUrl NameAlias_LastName NameAlias_FirstName NameAlias_MiddleName NameAlias_WholeName NameAlias_NameLanguage NameAlias_Gender NameAlias_Title NameAlias_Function NameAlias_LogicalId NameAlias_RegulationLanguage NameAlias_Remark NameAlias_Regulation_Type NameAlias_Regulation_OrganisationType NameAlias_Regulation_PublicationDate NameAlias_Regulation_EntryIntoForceDate NameAlias_Regulation_NumberTitle NameAlias_Regulation_Programme NameAlias_Regulation_PublicationUrl Address_City Address_Street Address_PoBox Address_ZipCode Address_Region Address_Place Address_AsAtListingTime Address_ContactInfo Address_CountryIso2Code Address_CountryDescription Address_LogicalId Address_RegulationLanguage Address_Remark Address_Regulation_Type Address_Regulation_OrganisationType Address_Regulation_PublicationDate Address_Regulation_EntryIntoForceDate Address_Regulation_NumberTitle Address_Regulation_Programme Address_Regulation_PublicationUrl BirthDate_BirthDate BirthDate_Day BirthDate_Month BirthDate_Year BirthDate_YearRangeFrom BirthDate_YearRangeTo BirthDate_Circa BirthDate_CalendarType BirthDate_ZipCode BirthDate_Region BirthDate_Place BirthDate_City BirthDate_CountryIso2Code BirthDate_CountryDescription BirthDate_LogicalId BirthDate_RegulationLanguage BirthDate_Remark BirthDate_Regulation_Type BirthDate_Regulation_OrganisationType BirthDate_Regulation_PublicationDate BirthDate_Regulation_EntryIntoForceDate BirthDate_Regulation_NumberTitle BirthDate_Regulation_Programme BirthDate_Regulation_PublicationUrl Identification_Number Identification_Diplomatic Identification_KnownExpired Identification_KnownFalse Identification_ReportedLost Identification_RevokedByIssuer Identification_IssuedBy Identification_IssuedDate Identification_ValidFrom Identification_ValidTo Identification_LatinNumber Identification_NameOnDocument Identification_TypeCode Identification_TypeDescription Identification_Region Identification_CountryIso2Code Identification_CountryDescription Identification_LogicalId Identification_RegulationLanguage Identification_Remark Identification_Regulation_Type Identification_Regulation_OrganisationType Identification_Regulation_PublicationDate Identification_Regulation_EntryIntoForceDate Identification_Regulation_NumberTitle Identification_Regulation_Programme Identification_Regulation_PublicationUrl Citizenship_Region Citizenship_CountryIso2Code Citizenship_CountryDescription Citizenship_LogicalId Citizenship_RegulationLanguage Citizenship_Remark Citizenship_Regulation_Type Citizenship_Regulation_OrganisationType Citizenship_Regulation_PublicationDate Citizenship_Regulation_EntryIntoForceDate Citizenship_Regulation_NumberTitle Citizenship_Regulation_Programme Citizenship_Regulation_PublicationUrl]
  end

  def self.underscore_fieldnames
    return self.fieldnames.map{|name| name.underscore}
  end

  def self.sym_fieldnames
    return self.underscore_fieldnames.map{|name| name.to_sym}
  end

  def import(file)
    CSV.foreach(file.path, headers: true, col_sep: ";") do |row|
      i = self.sanction_list_items.build()
      SanctionList.fieldnames.each do |field|
        i[field.underscore] = row["#{field}"]
      end 
      i.save
    end
  end

end
