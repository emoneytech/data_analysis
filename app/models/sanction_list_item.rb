# == Schema Information
#
# Table name: sanction_list_items
#
#  id                                              :bigint           not null, primary key
#  sanction_list_id                                :bigint           not null
#  file_generation_date                            :string
#  entity_logical_id                               :string
#  entity_eu_reference_number                      :string
#  entity_united_nation_id                         :string
#  entity_designation_date                         :string
#  entity_designation_details                      :string
#  entity_remark                                   :string
#  entity_subject_type                             :string
#  entity_subject_type_classification_code         :string
#  entity_regulation_type                          :string
#  entity_regulation_organisation_type             :string
#  entity_regulation_publication_date              :string
#  entity_regulation_entry_into_force_date         :string
#  entity_regulation_number_title                  :string
#  entity_regulation_programme                     :string
#  entity_regulation_publication_url               :string
#  name_alias_last_name                            :string
#  name_alias_first_name                           :string
#  name_alias_middle_name                          :string
#  name_alias_whole_name                           :string
#  name_alias_name_language                        :string
#  name_alias_gender                               :string
#  name_alias_title                                :string
#  name_alias_function                             :string
#  name_alias_logical_id                           :string
#  name_alias_regulation_language                  :string
#  name_alias_remark                               :string
#  name_alias_regulation_type                      :string
#  name_alias_regulation_organisation_type         :string
#  name_alias_regulation_publication_date          :string
#  name_alias_regulation_entry_into_force_date     :string
#  name_alias_regulation_number_title              :string
#  name_alias_regulation_programme                 :string
#  name_alias_regulation_publication_url           :string
#  address_city                                    :string
#  address_street                                  :string
#  address_po_box                                  :string
#  address_zip_code                                :string
#  address_region                                  :string
#  address_place                                   :string
#  address_as_at_listing_time                      :string
#  address_contact_info                            :string
#  address_country_iso2_code                       :string
#  address_country_description                     :string
#  address_logical_id                              :string
#  address_regulation_language                     :string
#  address_remark                                  :string
#  address_regulation_type                         :string
#  address_regulation_organisation_type            :string
#  address_regulation_publication_date             :string
#  address_regulation_entry_into_force_date        :string
#  address_regulation_number_title                 :string
#  address_regulation_programme                    :string
#  address_regulation_publication_url              :string
#  birth_date_birth_date                           :string
#  birth_date_day                                  :string
#  birth_date_month                                :string
#  birth_date_year                                 :string
#  birth_date_year_range_from                      :string
#  birth_date_year_range_to                        :string
#  birth_date_circa                                :string
#  birth_date_calendar_type                        :string
#  birth_date_zip_code                             :string
#  birth_date_region                               :string
#  birth_date_place                                :string
#  birth_date_city                                 :string
#  birth_date_country_iso2_code                    :string
#  birth_date_country_description                  :string
#  birth_date_logical_id                           :string
#  birth_date_regulation_language                  :string
#  birth_date_remark                               :string
#  birth_date_regulation_type                      :string
#  birth_date_regulation_organisation_type         :string
#  birth_date_regulation_publication_date          :string
#  birth_date_regulation_entry_into_force_date     :string
#  birth_date_regulation_number_title              :string
#  birth_date_regulation_programme                 :string
#  birth_date_regulation_publication_url           :string
#  identification_number                           :string
#  identification_diplomatic                       :string
#  identification_known_expired                    :string
#  identification_known_false                      :string
#  identification_reported_lost                    :string
#  identification_revoked_by_issuer                :string
#  identification_issued_by                        :string
#  identification_issued_date                      :string
#  identification_valid_from                       :string
#  identification_valid_to                         :string
#  identification_latin_number                     :string
#  identification_name_on_document                 :string
#  identification_type_code                        :string
#  identification_type_description                 :string
#  identification_region                           :string
#  identification_country_iso2_code                :string
#  identification_country_description              :string
#  identification_logical_id                       :string
#  identification_regulation_language              :string
#  identification_remark                           :string
#  identification_regulation_type                  :string
#  identification_regulation_organisation_type     :string
#  identification_regulation_publication_date      :string
#  identification_regulation_entry_into_force_date :string
#  identification_regulation_number_title          :string
#  identification_regulation_programme             :string
#  identification_regulation_publication_url       :string
#  citizenship_region                              :string
#  citizenship_country_iso2_code                   :string
#  citizenship_country_description                 :string
#  citizenship_logical_id                          :string
#  citizenship_regulation_language                 :string
#  citizenship_remark                              :string
#  citizenship_regulation_type                     :string
#  citizenship_regulation_organisation_type        :string
#  citizenship_regulation_publication_date         :string
#  citizenship_regulation_entry_into_force_date    :string
#  citizenship_regulation_number_title             :string
#  citizenship_regulation_programme                :string
#  citizenship_regulation_publication_url          :string
#  created_at                                      :datetime         not null
#  updated_at                                      :datetime         not null
#

class SanctionListItem < CorePgRecord
  belongs_to :sanction_list, :counter_cache => true
  
  scope :name_similar, ->(name) { 
    where("name_alias_last_name % :name
      OR name_alias_first_name % :name
      OR name_alias_middle_name % :name
      OR name_alias_whole_name % :name", name: name)
  }
end