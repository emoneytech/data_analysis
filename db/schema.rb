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

ActiveRecord::Schema.define(version: 2021_06_11_085954) do

  create_table "active_admin_comments", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_id", null: false
    t.string "resource_type", null: false
    t.integer "author_id"
    t.string "author_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "anagrafica_time_lapse_factors", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "anagrafica_id", null: false
    t.float "time_lapse_factor", default: 0.98, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["anagrafica_id"], name: "index_anagrafica_time_lapse_factors_on_anagrafica_id"
  end

  create_table "base_riskinesses", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "base_evaluable_id"
    t.string "base_evaluable_type"
    t.float "base_factory"
    t.float "base_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["base_evaluable_id", "base_evaluable_type"], name: "base_evaluable_index"
    t.index ["base_score"], name: "index_base_riskinesses_on_base_score"
  end

  create_table "configurables", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.string "name"
    t.string "value"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "index_configurables_on_name"
  end

  create_table "eval_riskinesses", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "eval_evaluable_id"
    t.string "eval_evaluable_type"
    t.float "eval_factory"
    t.float "eval_score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "eval_month"
    t.integer "number_of_movements", default: 0, null: false
    t.text "details_operations", size: :long
    t.string "trend", limit: 12
    t.index ["eval_evaluable_id", "eval_evaluable_type"], name: "eval_evaluable_index"
    t.index ["eval_month"], name: "index_eval_riskinesses_on_eval_month"
    t.index ["eval_score"], name: "index_eval_riskinesses_on_eval_score"
    t.index ["number_of_movements"], name: "index_eval_riskinesses_on_number_of_movements"
    t.index ["trend"], name: "index_eval_riskinesses_on_trend"
  end

  create_table "evaluated_movements", charset: "latin1", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.string "customer_full_name"
    t.integer "service_id", null: false
    t.string "service_status"
    t.datetime "service_updated_at"
    t.integer "movement_id", null: false
    t.datetime "movement_created_at", null: false
    t.integer "product_net_id"
    t.integer "product_id"
    t.string "product_name"
    t.float "product_base_risk"
    t.string "beneficiary"
    t.string "beneficiary_iban"
    t.string "beneficiary_other"
    t.float "risk_factor"
    t.string "risk_description"
    t.integer "amount_cents", default: 0, null: false
    t.string "amount_currency", default: "EUR", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "recursion"
    t.datetime "service_created_at"
    t.index ["customer_id"], name: "index_evaluated_movements_on_customer_id"
    t.index ["movement_created_at"], name: "movement_created_at"
    t.index ["movement_id"], name: "index_evaluated_movements_on_movement_id"
    t.index ["service_created_at"], name: "index_evaluated_movements_on_service_created_at"
    t.index ["service_id"], name: "index_evaluated_movements_on_service_id"
    t.index ["service_updated_at"], name: "service_updated_at"
  end

  create_table "evaluated_risks", charset: "latin1", force: :cascade do |t|
    t.integer "anagrafica_id", null: false
    t.integer "eval_year", null: false
    t.integer "eval_month", limit: 2, null: false
    t.integer "nr_movements", default: 0, null: false
    t.text "eval_days"
    t.float "last_evaluated_risk"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anagrafica_id", "eval_year", "eval_month"], name: "evaluated_risk_for_month_index", unique: true
    t.index ["anagrafica_id"], name: "index_evaluated_risks_on_anagrafica_id"
    t.index ["last_evaluated_risk"], name: "index_evaluated_risks_on_last_evaluated_risk"
  end

  create_table "log_imports", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.text "operation"
    t.text "result"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "user_id"
    t.integer "customer_id", null: false
    t.string "subject", null: false
    t.text "body"
    t.datetime "deleted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_notes_on_customer_id"
    t.index ["deleted_at"], name: "index_notes_on_deleted_at"
    t.index ["user_id"], name: "index_notes_on_user_id"
  end

  create_table "roles", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "presentation"
    t.string "description"
    t.integer "policy", limit: 2, default: 99, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true, null: false
    t.index ["active"], name: "index_roles_on_active"
    t.index ["name"], name: "index_roles_on_name", unique: true
    t.index ["policy"], name: "index_roles_on_policy", unique: true
  end

  create_table "time_lapse_factor_audits", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.integer "anagrafica_time_lapse_factor_id"
    t.integer "user_id"
    t.float "old_value"
    t.float "old_evaluate_risk_value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["anagrafica_time_lapse_factor_id"], name: "index_time_lapse"
    t.index ["user_id"], name: "index_time_lapse_factor_audits_on_user_id"
  end

  create_table "users", id: :integer, charset: "utf8", collation: "utf8_unicode_ci", force: :cascade do |t|
    t.string "nickname"
    t.integer "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.string "last_name"
    t.string "first_name"
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_users_on_deleted_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["nickname"], name: "index_users_on_nickname"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["role_id"], name: "index_users_on_role_id"
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  create_table "worker_errors", charset: "latin1", force: :cascade do |t|
    t.string "name"
    t.string "error"
    t.string "params"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "notes", "users"
  add_foreign_key "time_lapse_factor_audits", "anagrafica_time_lapse_factors"
  add_foreign_key "time_lapse_factor_audits", "users"
  add_foreign_key "users", "roles"
end
