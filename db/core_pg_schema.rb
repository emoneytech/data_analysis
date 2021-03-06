# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_08_104927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_trgm"
  enable_extension "plpgsql"
  enable_extension "postgis"

  # These are custom enum types that must be created before they can be used in the schema definition
  create_enum "eval_movement_type", ["IN", "OUT"]

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activity_logs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "browser"
    t.string "ip_address"
    t.string "controller", null: false
    t.string "action", null: false
    t.string "params"
    t.string "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_activity_logs_on_deleted_at"
    t.index ["user_id"], name: "index_activity_logs_on_user_id"
  end

  create_table "audits", force: :cascade do |t|
    t.integer "auditable_id"
    t.string "auditable_type"
    t.integer "associated_id"
    t.string "associated_type"
    t.integer "user_id"
    t.string "user_type"
    t.string "username"
    t.string "action"
    t.jsonb "audited_changes"
    t.integer "version", default: 0
    t.string "comment"
    t.string "remote_address"
    t.string "request_uuid"
    t.datetime "created_at"
    t.index ["associated_type", "associated_id"], name: "associated_index"
    t.index ["auditable_type", "auditable_id", "version"], name: "auditable_index"
    t.index ["created_at"], name: "index_audits_on_created_at"
    t.index ["request_uuid"], name: "index_audits_on_request_uuid"
    t.index ["user_id", "user_type"], name: "user_index"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "related_country_id", null: false
    t.bigint "user_id", null: false
    t.string "subject", null: false
    t.text "body", null: false
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["deleted_at"], name: "index_comments_on_deleted_at"
    t.index ["related_country_id"], name: "index_comments_on_related_country_id"
    t.index ["subject"], name: "index_comments_on_subject"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "customer_evaluations", force: :cascade do |t|
    t.integer "anagrafica_id", null: false
    t.integer "eval_year", null: false
    t.integer "eval_month", limit: 2, null: false
    t.integer "nr_movements", default: 0, null: false
    t.float "last_attention_factor7"
    t.float "last_attention_factor30"
    t.jsonb "eval_days", default: "{}", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anagrafica_id", "eval_year", "eval_month"], name: "evaluated_attention_factor_for_month_index", unique: true
    t.index ["anagrafica_id"], name: "index_customer_evaluations_on_anagrafica_id"
    t.index ["eval_days"], name: "index_customer_evaluations_on_eval_days", using: :gin
    t.index ["eval_year", "eval_month"], name: "index_customer_evaluations_on_eval_year_and_eval_month"
    t.index ["last_attention_factor30"], name: "index_customer_evaluations_on_last_attention_factor30"
    t.index ["last_attention_factor7"], name: "index_customer_evaluations_on_last_attention_factor7"
  end

  create_table "customer_settings", force: :cascade do |t|
    t.boolean "active", default: true, null: false
    t.integer "customer_id", null: false
    t.integer "product_id", default: 0, null: false
    t.float "tollerance", default: 1.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["active"], name: "index_customer_settings_on_active"
    t.index ["customer_id"], name: "index_customer_settings_on_customer_id"
    t.index ["product_id", "customer_id"], name: "product_customer_index", unique: true
  end

  create_table "eval_customers", force: :cascade do |t|
    t.integer "anagrafica_id", null: false
    t.integer "eval_year", null: false
    t.integer "eval_month", limit: 2, null: false
    t.integer "nr_movements", default: 0, null: false
    t.float "last_attention_factor7"
    t.float "last_attention_factor30"
    t.jsonb "eval_days", default: "{}", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anagrafica_id", "eval_year", "eval_month"], name: "attention_factor_for_month_index", unique: true
    t.index ["anagrafica_id"], name: "index_eval_customers_on_anagrafica_id"
    t.index ["eval_days"], name: "index_eval_customers_on_eval_days", using: :gin
    t.index ["last_attention_factor30"], name: "index_eval_customers_on_last_attention_factor30"
    t.index ["last_attention_factor7"], name: "index_eval_customers_on_last_attention_factor7"
  end

  create_table "evaluated_movements", force: :cascade do |t|
    t.bigint "triggerable_id", null: false
    t.string "triggerable_type", null: false
    t.string "triggerable_status", null: false
    t.enum "in_out", default: "OUT", as: "eval_movement_type"
    t.boolean "internal", default: false, null: false
    t.integer "customer_id", null: false
    t.integer "movement_id", null: false
    t.datetime "movement_created_at", null: false
    t.integer "product_id"
    t.integer "product_net_id"
    t.integer "product_table_code"
    t.string "product_name"
    t.float "product_base_risk"
    t.string "payer"
    t.string "payer_iban", limit: 50
    t.string "payer_card", limit: 50
    t.string "payer_other"
    t.string "beneficiary"
    t.string "beneficiary_iban", limit: 50
    t.string "beneficiary_card", limit: 50
    t.string "beneficiary_other"
    t.float "risk_factor"
    t.string "risk_description"
    t.integer "recursion_customer_7"
    t.integer "recursion_customer_30"
    t.integer "recursion_all_7"
    t.integer "recursion_all_30"
    t.integer "amount_cents", default: 0, null: false
    t.string "amount_currency", default: "EUR", null: false
    t.geography "origin_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.geography "destination_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.string "origin_country", null: false
    t.string "destination_country", null: false
    t.integer "lock_version", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "evaluated_factor7"
    t.float "evaluated_factor30"
    t.text "reason"
    t.index ["amount_cents"], name: "index_evaluated_movements_on_amount_cents"
    t.index ["beneficiary"], name: "index_evaluated_movements_on_beneficiary"
    t.index ["beneficiary_card"], name: "index_evaluated_movements_on_beneficiary_card"
    t.index ["beneficiary_iban"], name: "index_evaluated_movements_on_beneficiary_iban"
    t.index ["customer_id", "triggerable_id", "triggerable_type"], name: "index_triggerable_on_customer", unique: true
    t.index ["customer_id"], name: "index_evaluated_movements_on_customer_id"
    t.index ["destination_country"], name: "index_evaluated_movements_on_destination_country"
    t.index ["destination_lonlat"], name: "index_evaluated_movements_on_destination_lonlat", using: :gist
    t.index ["evaluated_factor30"], name: "index_evaluated_movements_on_evaluated_factor30"
    t.index ["evaluated_factor7"], name: "index_evaluated_movements_on_evaluated_factor7"
    t.index ["in_out"], name: "index_evaluated_movements_on_in_out"
    t.index ["internal"], name: "index_evaluated_movements_on_internal"
    t.index ["lock_version"], name: "index_evaluated_movements_on_lock_version"
    t.index ["movement_created_at"], name: "index_evaluated_movements_on_movement_created_at"
    t.index ["origin_country"], name: "index_evaluated_movements_on_origin_country"
    t.index ["origin_lonlat"], name: "index_evaluated_movements_on_origin_lonlat", using: :gist
    t.index ["payer"], name: "index_evaluated_movements_on_payer"
    t.index ["payer_card"], name: "index_evaluated_movements_on_payer_card"
    t.index ["payer_iban"], name: "index_evaluated_movements_on_payer_iban"
    t.index ["product_id"], name: "index_evaluated_movements_on_product_id"
    t.index ["product_name"], name: "index_evaluated_movements_on_product_name"
    t.index ["product_table_code"], name: "index_evaluated_movements_on_product_table_code"
    t.index ["recursion_all_30"], name: "index_evaluated_movements_on_recursion_all_30"
    t.index ["recursion_all_7"], name: "index_evaluated_movements_on_recursion_all_7"
    t.index ["recursion_customer_30"], name: "index_evaluated_movements_on_recursion_customer_30"
    t.index ["recursion_customer_7"], name: "index_evaluated_movements_on_recursion_customer_7"
    t.index ["triggerable_type", "triggerable_id"], name: "index_triggerable_on_evaluated_movements"
  end

  create_table "messages", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.text "content", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.string "recipient_type", null: false
    t.bigint "recipient_id", null: false
    t.string "type", null: false
    t.json "params"
    t.datetime "read_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_notifications_on_deleted_at"
    t.index ["read_at"], name: "index_notifications_on_read_at"
    t.index ["recipient_type", "recipient_id"], name: "index_notifications_on_recipient"
  end

  create_table "observed_elements", force: :cascade do |t|
    t.string "category_element", null: false
    t.string "content", null: false
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_element"], name: "index_observed_elements_on_category_element"
    t.index ["content"], name: "index_observed_elements_on_content"
    t.index ["deleted_at"], name: "index_observed_elements_on_deleted_at"
  end

  create_table "places", force: :cascade do |t|
    t.string "positionable_type", null: false
    t.bigint "positionable_id", null: false
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "region"
    t.string "country"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lonlat"], name: "index_places_on_lonlat", using: :gist
    t.index ["positionable_type", "positionable_id"], name: "index_places_on_positionable"
    t.index ["positionable_type", "positionable_id"], name: "index_places_on_positionable_type_and_positionable_id"
    t.index ["positionable_type"], name: "index_places_on_positionable_type"
  end

  create_table "queue_customers", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.datetime "evaluated_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id", "evaluated_at"], name: "evaluated_at_index", unique: true
    t.index ["evaluated_at"], name: "index_queue_customers_on_evaluated_at"
  end

  create_table "related_countries", force: :cascade do |t|
    t.string "continent"
    t.string "region"
    t.string "subregion"
    t.string "name"
    t.text "unofficial_names", default: [], array: true
    t.string "gec"
    t.string "alpha2", null: false
    t.string "alpha3", null: false
    t.string "world_region"
    t.boolean "in_eu"
    t.boolean "in_eea"
    t.boolean "in_esm"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "kyc_score"
    t.float "eval_kyc_score"
    t.float "basel_score"
    t.float "eval_basel_score"
    t.float "corruption_perception"
    t.float "eval_corruption_perception"
    t.integer "gray_or_black_list"
    t.float "attention_factor"
    t.integer "iso_numeric"
    t.index ["alpha2"], name: "index_related_countries_on_alpha2", unique: true
    t.index ["alpha3"], name: "index_related_countries_on_alpha3", unique: true
    t.index ["attention_factor"], name: "index_related_countries_on_attention_factor"
    t.index ["basel_score"], name: "index_related_countries_on_basel_score"
    t.index ["continent"], name: "index_related_countries_on_continent"
    t.index ["corruption_perception"], name: "index_related_countries_on_corruption_perception"
    t.index ["gec"], name: "index_related_countries_on_gec"
    t.index ["gray_or_black_list"], name: "index_related_countries_on_gray_or_black_list"
    t.index ["in_eea"], name: "index_related_countries_on_in_eea"
    t.index ["in_esm"], name: "index_related_countries_on_in_esm"
    t.index ["in_eu"], name: "index_related_countries_on_in_eu"
    t.index ["iso_numeric"], name: "index_related_countries_on_iso_numeric"
    t.index ["kyc_score"], name: "index_related_countries_on_kyc_score"
    t.index ["name"], name: "index_related_countries_on_name"
    t.index ["region"], name: "index_related_countries_on_region"
    t.index ["subregion"], name: "index_related_countries_on_subregion"
    t.index ["unofficial_names"], name: "index_related_countries_on_unofficial_names"
    t.index ["world_region"], name: "index_related_countries_on_world_region"
  end

  create_table "reports", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name"
    t.jsonb "opts", default: "{}", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_reports_on_name"
    t.index ["opts"], name: "index_reports_on_opts", using: :gin
    t.index ["user_id"], name: "index_reports_on_user_id"
  end

  create_table "roles", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.string "presentation", limit: 255
    t.string "description", limit: 255
    t.integer "policy", limit: 2, default: 99, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "active", limit: 2, default: 1, null: false
    t.index ["active"], name: "public_roles_active2_idx"
    t.index ["name"], name: "public_roles_name0_idx", unique: true
    t.index ["policy"], name: "public_roles_policy1_idx", unique: true
  end

  create_table "row_counts", primary_key: "relname", id: :text, force: :cascade do |t|
    t.bigint "reltuples"
  end

  create_table "sanction_list_items", force: :cascade do |t|
    t.bigint "sanction_list_id", null: false
    t.string "file_generation_date"
    t.string "entity_logical_id"
    t.string "entity_eu_reference_number"
    t.string "entity_united_nation_id"
    t.string "entity_designation_date"
    t.string "entity_designation_details"
    t.string "entity_remark"
    t.string "entity_subject_type"
    t.string "entity_subject_type_classification_code"
    t.string "entity_regulation_type"
    t.string "entity_regulation_organisation_type"
    t.string "entity_regulation_publication_date"
    t.string "entity_regulation_entry_into_force_date"
    t.string "entity_regulation_number_title"
    t.string "entity_regulation_programme"
    t.string "entity_regulation_publication_url"
    t.string "name_alias_last_name"
    t.string "name_alias_first_name"
    t.string "name_alias_middle_name"
    t.string "name_alias_whole_name"
    t.string "name_alias_name_language"
    t.string "name_alias_gender"
    t.string "name_alias_title"
    t.string "name_alias_function"
    t.string "name_alias_logical_id"
    t.string "name_alias_regulation_language"
    t.string "name_alias_remark"
    t.string "name_alias_regulation_type"
    t.string "name_alias_regulation_organisation_type"
    t.string "name_alias_regulation_publication_date"
    t.string "name_alias_regulation_entry_into_force_date"
    t.string "name_alias_regulation_number_title"
    t.string "name_alias_regulation_programme"
    t.string "name_alias_regulation_publication_url"
    t.string "address_city"
    t.string "address_street"
    t.string "address_po_box"
    t.string "address_zip_code"
    t.string "address_region"
    t.string "address_place"
    t.string "address_as_at_listing_time"
    t.string "address_contact_info"
    t.string "address_country_iso2_code"
    t.string "address_country_description"
    t.string "address_logical_id"
    t.string "address_regulation_language"
    t.string "address_remark"
    t.string "address_regulation_type"
    t.string "address_regulation_organisation_type"
    t.string "address_regulation_publication_date"
    t.string "address_regulation_entry_into_force_date"
    t.string "address_regulation_number_title"
    t.string "address_regulation_programme"
    t.string "address_regulation_publication_url"
    t.string "birth_date_birth_date"
    t.string "birth_date_day"
    t.string "birth_date_month"
    t.string "birth_date_year"
    t.string "birth_date_year_range_from"
    t.string "birth_date_year_range_to"
    t.string "birth_date_circa"
    t.string "birth_date_calendar_type"
    t.string "birth_date_zip_code"
    t.string "birth_date_region"
    t.string "birth_date_place"
    t.string "birth_date_city"
    t.string "birth_date_country_iso2_code"
    t.string "birth_date_country_description"
    t.string "birth_date_logical_id"
    t.string "birth_date_regulation_language"
    t.string "birth_date_remark"
    t.string "birth_date_regulation_type"
    t.string "birth_date_regulation_organisation_type"
    t.string "birth_date_regulation_publication_date"
    t.string "birth_date_regulation_entry_into_force_date"
    t.string "birth_date_regulation_number_title"
    t.string "birth_date_regulation_programme"
    t.string "birth_date_regulation_publication_url"
    t.string "identification_number"
    t.string "identification_diplomatic"
    t.string "identification_known_expired"
    t.string "identification_known_false"
    t.string "identification_reported_lost"
    t.string "identification_revoked_by_issuer"
    t.string "identification_issued_by"
    t.string "identification_issued_date"
    t.string "identification_valid_from"
    t.string "identification_valid_to"
    t.string "identification_latin_number"
    t.string "identification_name_on_document"
    t.string "identification_type_code"
    t.string "identification_type_description"
    t.string "identification_region"
    t.string "identification_country_iso2_code"
    t.string "identification_country_description"
    t.string "identification_logical_id"
    t.string "identification_regulation_language"
    t.string "identification_remark"
    t.string "identification_regulation_type"
    t.string "identification_regulation_organisation_type"
    t.string "identification_regulation_publication_date"
    t.string "identification_regulation_entry_into_force_date"
    t.string "identification_regulation_number_title"
    t.string "identification_regulation_programme"
    t.string "identification_regulation_publication_url"
    t.string "citizenship_region"
    t.string "citizenship_country_iso2_code"
    t.string "citizenship_country_description"
    t.string "citizenship_logical_id"
    t.string "citizenship_regulation_language"
    t.string "citizenship_remark"
    t.string "citizenship_regulation_type"
    t.string "citizenship_regulation_organisation_type"
    t.string "citizenship_regulation_publication_date"
    t.string "citizenship_regulation_entry_into_force_date"
    t.string "citizenship_regulation_number_title"
    t.string "citizenship_regulation_programme"
    t.string "citizenship_regulation_publication_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name_alias_first_name"], name: "index_sanction_list_items_on_name_alias_first_name", opclass: :gin_trgm_ops, using: :gin
    t.index ["name_alias_last_name"], name: "index_sanction_list_items_on_name_alias_last_name", opclass: :gin_trgm_ops, using: :gin
    t.index ["name_alias_middle_name"], name: "index_sanction_list_items_on_name_alias_middle_name", opclass: :gin_trgm_ops, using: :gin
    t.index ["name_alias_whole_name"], name: "index_sanction_list_items_on_name_alias_whole_name", opclass: :gin_trgm_ops, using: :gin
    t.index ["sanction_list_id"], name: "index_sanction_list_items_on_sanction_list_id"
  end

  create_table "sanction_lists", force: :cascade do |t|
    t.string "name"
    t.integer "sanction_list_items_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "nickname", limit: 255
    t.integer "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", limit: 255, default: "", null: false
    t.string "encrypted_password", limit: 255, default: "", null: false
    t.string "reset_password_token", limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip", limit: 255
    t.string "last_sign_in_ip", limit: 255
    t.string "confirmation_token", limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email", limit: 255
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token", limit: 255
    t.datetime "locked_at"
    t.string "last_name", limit: 255
    t.string "first_name", limit: 255
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "public_users_deleted_at7_idx"
    t.index ["email"], name: "public_users_email0_idx", unique: true
    t.index ["first_name"], name: "public_users_first_name5_idx"
    t.index ["last_name"], name: "public_users_last_name4_idx"
    t.index ["nickname"], name: "public_users_nickname6_idx"
    t.index ["reset_password_token"], name: "public_users_reset_password_token1_idx", unique: true
    t.index ["role_id"], name: "public_users_role_id3_idx"
    t.index ["unlock_token"], name: "public_users_unlock_token2_idx", unique: true
  end

  create_table "webpush_subscriptions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "endpoint"
    t.string "auth_key"
    t.string "p256dh_key"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.jsonb "client", default: "{}", null: false
    t.index ["client"], name: "index_webpush_subscriptions_on_client", using: :gin
    t.index ["deleted_at"], name: "index_webpush_subscriptions_on_deleted_at"
    t.index ["user_id"], name: "index_webpush_subscriptions_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "activity_logs", "users"
  add_foreign_key "comments", "related_countries"
  add_foreign_key "comments", "users"
  add_foreign_key "sanction_list_items", "sanction_lists"
  add_foreign_key "users", "roles", name: "users_role_id_fkey", on_update: :restrict, on_delete: :restrict
  add_foreign_key "webpush_subscriptions", "users"
end
