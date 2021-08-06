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

ActiveRecord::Schema.define(version: 2021_08_06_084946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "customer_settings", force: :cascade do |t|
    t.boolean "active", default: true, null: false
    t.integer "customer_id", null: false
    t.integer "product_id", default: 0, null: false
    t.float "attention_factor", default: 1.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["active"], name: "index_customer_settings_on_active"
    t.index ["customer_id"], name: "index_customer_settings_on_customer_id"
    t.index ["product_id"], name: "index_customer_settings_on_product_id", unique: true
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

  create_table "eval_movements", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.string "customer_full_name"
    t.integer "service_id", null: false
    t.string "service_status"
    t.datetime "service_updated_at"
    t.datetime "service_created_at"
    t.integer "movement_id", null: false
    t.datetime "movement_created_at", null: false
    t.integer "product_net_id"
    t.integer "product_id"
    t.integer "product_table_code"
    t.string "product_name"
    t.float "product_base_risk"
    t.string "beneficiary"
    t.string "beneficiary_iban"
    t.string "beneficiary_other"
    t.float "risk_factor"
    t.string "risk_description"
    t.integer "amount_cents", default: 0, null: false
    t.string "amount_currency", default: "EUR", null: false
    t.geography "destination_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "beneficiary_card", limit: 50
    t.integer "lock_version", default: 0, null: false
    t.string "origin_country"
    t.string "destination_country"
    t.boolean "internal", default: false, null: false
    t.integer "recursion_all_7"
    t.integer "recursion_all_30"
    t.integer "recursion_customer_7"
    t.integer "recursion_customer_30"
    t.index ["amount_cents"], name: "index_eval_movements_on_amount_cents"
    t.index ["beneficiary_card"], name: "index_eval_movements_on_beneficiary_card"
    t.index ["beneficiary_iban"], name: "index_eval_movements_on_beneficiary_iban"
    t.index ["customer_id"], name: "index_eval_movements_on_customer_id"
    t.index ["destination_country"], name: "index_eval_movements_on_destination_country"
    t.index ["destination_lonlat"], name: "index_eval_movements_on_destination_lonlat", using: :gist
    t.index ["internal"], name: "index_eval_movements_on_internal"
    t.index ["lock_version"], name: "index_eval_movements_on_lock_version"
    t.index ["movement_created_at"], name: "index_eval_movements_on_movement_created_at"
    t.index ["movement_id"], name: "index_eval_movements_on_movement_id"
    t.index ["origin_country"], name: "index_eval_movements_on_origin_country"
    t.index ["product_name"], name: "index_eval_movements_on_product_name"
    t.index ["product_table_code"], name: "index_eval_movements_on_product_table_code"
    t.index ["recursion_all_30"], name: "index_eval_movements_on_recursion_all_30"
    t.index ["recursion_all_7"], name: "index_eval_movements_on_recursion_all_7"
    t.index ["recursion_customer_30"], name: "index_eval_movements_on_recursion_customer_30"
    t.index ["recursion_customer_7"], name: "index_eval_movements_on_recursion_customer_7"
    t.index ["service_created_at"], name: "index_eval_movements_on_service_created_at"
    t.index ["service_id"], name: "index_eval_movements_on_service_id"
    t.index ["service_id"], name: "service_unique_on_eval_movements", unique: true
    t.index ["service_updated_at"], name: "index_eval_movements_on_service_updated_at"
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
    t.float "score", default: 1.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["alpha2"], name: "index_related_countries_on_alpha2", unique: true
    t.index ["alpha3"], name: "index_related_countries_on_alpha3", unique: true
    t.index ["continent"], name: "index_related_countries_on_continent"
    t.index ["gec"], name: "index_related_countries_on_gec"
    t.index ["in_eea"], name: "index_related_countries_on_in_eea"
    t.index ["in_esm"], name: "index_related_countries_on_in_esm"
    t.index ["in_eu"], name: "index_related_countries_on_in_eu"
    t.index ["name"], name: "index_related_countries_on_name"
    t.index ["region"], name: "index_related_countries_on_region"
    t.index ["score"], name: "index_related_countries_on_score"
    t.index ["subregion"], name: "index_related_countries_on_subregion"
    t.index ["unofficial_names"], name: "index_related_countries_on_unofficial_names"
    t.index ["world_region"], name: "index_related_countries_on_world_region"
  end

end
