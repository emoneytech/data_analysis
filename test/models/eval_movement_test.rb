# == Schema Information
#
# Table name: eval_movements
#
#  id                    :bigint           not null, primary key
#  amount_cents          :integer          default(0), not null
#  amount_currency       :string           default("EUR"), not null
#  beneficiary           :string
#  beneficiary_card      :string(50)
#  beneficiary_iban      :string
#  beneficiary_other     :string
#  customer_full_name    :string
#  destination_country   :string
#  destination_lonlat    :geography        point, 4326
#  in_out                :enum             default("OUT")
#  internal              :boolean          default(FALSE), not null
#  lock_version          :integer          default(0), not null
#  movement_created_at   :datetime         not null
#  origin_country        :string
#  product_base_risk     :float
#  product_name          :string
#  product_table_code    :integer
#  recursion_all_30      :integer
#  recursion_all_7       :integer
#  recursion_customer_30 :integer
#  recursion_customer_7  :integer
#  risk_description      :string
#  risk_factor           :float
#  service_created_at    :datetime
#  service_status        :string
#  service_updated_at    :datetime
#  triggerable_type      :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  customer_id           :integer          not null
#  movement_id           :integer          not null
#  product_id            :integer
#  product_net_id        :integer
#  service_id            :integer          not null
#  triggerable_id        :bigint
#
# Indexes
#
#  index_eval_movements_on_amount_cents                         (amount_cents)
#  index_eval_movements_on_beneficiary_card                     (beneficiary_card)
#  index_eval_movements_on_beneficiary_iban                     (beneficiary_iban)
#  index_eval_movements_on_customer_id                          (customer_id)
#  index_eval_movements_on_customer_id_and_service_id           (customer_id,service_id) UNIQUE
#  index_eval_movements_on_destination_country                  (destination_country)
#  index_eval_movements_on_destination_lonlat                   (destination_lonlat) USING gist
#  index_eval_movements_on_internal                             (internal)
#  index_eval_movements_on_lock_version                         (lock_version)
#  index_eval_movements_on_movement_created_at                  (movement_created_at)
#  index_eval_movements_on_movement_id                          (movement_id)
#  index_eval_movements_on_origin_country                       (origin_country)
#  index_eval_movements_on_product_name                         (product_name)
#  index_eval_movements_on_product_table_code                   (product_table_code)
#  index_eval_movements_on_recursion_all_30                     (recursion_all_30)
#  index_eval_movements_on_recursion_all_7                      (recursion_all_7)
#  index_eval_movements_on_recursion_customer_30                (recursion_customer_30)
#  index_eval_movements_on_recursion_customer_7                 (recursion_customer_7)
#  index_eval_movements_on_service_created_at                   (service_created_at)
#  index_eval_movements_on_service_id                           (service_id)
#  index_eval_movements_on_service_updated_at                   (service_updated_at)
#  index_eval_movements_on_triggerable_type_and_triggerable_id  (triggerable_type,triggerable_id)
#
require "test_helper"

class EvalMovementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
