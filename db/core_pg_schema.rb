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

ActiveRecord::Schema.define(version: 2021_07_11_091223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

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
    t.jsonb "recursion", default: "{}", null: false
    t.integer "amount_cents", default: 0, null: false
    t.string "amount_currency", default: "EUR", null: false
    t.geography "destination_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "beneficiary_card", limit: 50
    t.index ["amount_cents"], name: "index_eval_movements_on_amount_cents"
    t.index ["beneficiary_card"], name: "index_eval_movements_on_beneficiary_card"
    t.index ["beneficiary_iban"], name: "index_eval_movements_on_beneficiary_iban"
    t.index ["customer_id"], name: "index_eval_movements_on_customer_id"
    t.index ["destination_lonlat"], name: "index_eval_movements_on_destination_lonlat", using: :gist
    t.index ["movement_created_at"], name: "index_eval_movements_on_movement_created_at"
    t.index ["movement_id"], name: "index_eval_movements_on_movement_id"
    t.index ["product_name"], name: "index_eval_movements_on_product_name"
    t.index ["product_table_code"], name: "index_eval_movements_on_product_table_code"
    t.index ["recursion"], name: "index_eval_movements_on_recursion", using: :gin
    t.index ["service_created_at"], name: "index_eval_movements_on_service_created_at"
    t.index ["service_id"], name: "index_eval_movements_on_service_id"
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

end
