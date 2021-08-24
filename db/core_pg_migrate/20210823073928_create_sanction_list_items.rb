class CreateSanctionListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :sanction_list_items do |t|
      t.references :sanction_list, null: false, foreign_key: true
      t.string :file_generation_date
      t.string :entity_logical_id 
      t.string :entity_eu_reference_number 
      t.string :entity_united_nation_id 
      t.string :entity_designation_date 
      t.string :entity_designation_details 
      t.string :entity_remark 
      t.string :entity_subject_type 
      t.string :entity_subject_type_classification_code 
      t.string :entity_regulation_type 
      t.string :entity_regulation_organisation_type 
      t.string :entity_regulation_publication_date 
      t.string :entity_regulation_entry_into_force_date 
      t.string :entity_regulation_number_title 
      t.string :entity_regulation_programme 
      t.string :entity_regulation_publication_url 
      t.string :name_alias_last_name 
      t.string :name_alias_first_name 
      t.string :name_alias_middle_name 
      t.string :name_alias_whole_name 
      t.string :name_alias_name_language 
      t.string :name_alias_gender 
      t.string :name_alias_title 
      t.string :name_alias_function 
      t.string :name_alias_logical_id 
      t.string :name_alias_regulation_language 
      t.string :name_alias_remark 
      t.string :name_alias_regulation_type 
      t.string :name_alias_regulation_organisation_type 
      t.string :name_alias_regulation_publication_date 
      t.string :name_alias_regulation_entry_into_force_date 
      t.string :name_alias_regulation_number_title 
      t.string :name_alias_regulation_programme 
      t.string :name_alias_regulation_publication_url 
      t.string :address_city 
      t.string :address_street 
      t.string :address_po_box 
      t.string :address_zip_code 
      t.string :address_region 
      t.string :address_place 
      t.string :address_as_at_listing_time 
      t.string :address_contact_info 
      t.string :address_country_iso2_code 
      t.string :address_country_description 
      t.string :address_logical_id 
      t.string :address_regulation_language 
      t.string :address_remark 
      t.string :address_regulation_type 
      t.string :address_regulation_organisation_type 
      t.string :address_regulation_publication_date 
      t.string :address_regulation_entry_into_force_date 
      t.string :address_regulation_number_title 
      t.string :address_regulation_programme 
      t.string :address_regulation_publication_url 
      t.string :birth_date_birth_date 
      t.string :birth_date_day 
      t.string :birth_date_month 
      t.string :birth_date_year 
      t.string :birth_date_year_range_from 
      t.string :birth_date_year_range_to 
      t.string :birth_date_circa 
      t.string :birth_date_calendar_type 
      t.string :birth_date_zip_code 
      t.string :birth_date_region 
      t.string :birth_date_place 
      t.string :birth_date_city 
      t.string :birth_date_country_iso2_code 
      t.string :birth_date_country_description 
      t.string :birth_date_logical_id 
      t.string :birth_date_regulation_language 
      t.string :birth_date_remark 
      t.string :birth_date_regulation_type 
      t.string :birth_date_regulation_organisation_type 
      t.string :birth_date_regulation_publication_date 
      t.string :birth_date_regulation_entry_into_force_date 
      t.string :birth_date_regulation_number_title 
      t.string :birth_date_regulation_programme 
      t.string :birth_date_regulation_publication_url 
      t.string :identification_number 
      t.string :identification_diplomatic 
      t.string :identification_known_expired 
      t.string :identification_known_false 
      t.string :identification_reported_lost 
      t.string :identification_revoked_by_issuer 
      t.string :identification_issued_by 
      t.string :identification_issued_date 
      t.string :identification_valid_from 
      t.string :identification_valid_to 
      t.string :identification_latin_number 
      t.string :identification_name_on_document 
      t.string :identification_type_code 
      t.string :identification_type_description 
      t.string :identification_region 
      t.string :identification_country_iso2_code 
      t.string :identification_country_description 
      t.string :identification_logical_id 
      t.string :identification_regulation_language 
      t.string :identification_remark 
      t.string :identification_regulation_type 
      t.string :identification_regulation_organisation_type 
      t.string :identification_regulation_publication_date 
      t.string :identification_regulation_entry_into_force_date 
      t.string :identification_regulation_number_title 
      t.string :identification_regulation_programme 
      t.string :identification_regulation_publication_url 
      t.string :citizenship_region 
      t.string :citizenship_country_iso2_code 
      t.string :citizenship_country_description 
      t.string :citizenship_logical_id 
      t.string :citizenship_regulation_language 
      t.string :citizenship_remark 
      t.string :citizenship_regulation_type 
      t.string :citizenship_regulation_organisation_type 
      t.string :citizenship_regulation_publication_date 
      t.string :citizenship_regulation_entry_into_force_date 
      t.string :citizenship_regulation_number_title 
      t.string :citizenship_regulation_programme 
      t.string :citizenship_regulation_publication_url
      
      t.timestamps
    end
  end
end
