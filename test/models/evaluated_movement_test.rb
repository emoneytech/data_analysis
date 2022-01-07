# == Schema Information
#
# Table name: evaluated_movements
#
#  id                    :bigint           not null, primary key
#  amount_cents          :integer          default(0), not null
#  amount_currency       :string           default("EUR"), not null
#  beneficiary           :string
#  beneficiary_card      :string(50)
#  beneficiary_iban      :string(50)
#  beneficiary_other     :string
#  destination_country   :string           not null
#  destination_lonlat    :geography        point, 4326
#  evaluated_factor30    :float
#  evaluated_factor7     :float
#  in_out                :enum             default("OUT")
#  internal              :boolean          default(FALSE), not null
#  lock_version          :integer          default(0), not null
#  movement_created_at   :datetime         not null
#  origin_country        :string           not null
#  origin_lonlat         :geography        point, 4326
#  payer                 :string
#  payer_card            :string(50)
#  payer_iban            :string(50)
#  payer_other           :string
#  product_base_risk     :float
#  product_name          :string
#  product_table_code    :integer
#  reason                :text
#  recursion_all_30      :integer
#  recursion_all_7       :integer
#  recursion_customer_30 :integer
#  recursion_customer_7  :integer
#  risk_description      :string
#  risk_factor           :float
#  triggerable_status    :string           not null
#  triggerable_type      :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  customer_id           :integer          not null
#  movement_id           :integer          not null
#  product_id            :integer
#  product_net_id        :integer
#  triggerable_id        :bigint           not null
#
# Indexes
#
#  index_evaluated_movements_on_amount_cents           (amount_cents)
#  index_evaluated_movements_on_beneficiary            (beneficiary)
#  index_evaluated_movements_on_beneficiary_card       (beneficiary_card)
#  index_evaluated_movements_on_beneficiary_iban       (beneficiary_iban)
#  index_evaluated_movements_on_customer_id            (customer_id)
#  index_evaluated_movements_on_destination_country    (destination_country)
#  index_evaluated_movements_on_destination_lonlat     (destination_lonlat) USING gist
#  index_evaluated_movements_on_evaluated_factor30     (evaluated_factor30)
#  index_evaluated_movements_on_evaluated_factor7      (evaluated_factor7)
#  index_evaluated_movements_on_in_out                 (in_out)
#  index_evaluated_movements_on_internal               (internal)
#  index_evaluated_movements_on_lock_version           (lock_version)
#  index_evaluated_movements_on_movement_created_at    (movement_created_at)
#  index_evaluated_movements_on_origin_country         (origin_country)
#  index_evaluated_movements_on_origin_lonlat          (origin_lonlat) USING gist
#  index_evaluated_movements_on_payer                  (payer)
#  index_evaluated_movements_on_payer_card             (payer_card)
#  index_evaluated_movements_on_payer_iban             (payer_iban)
#  index_evaluated_movements_on_product_id             (product_id)
#  index_evaluated_movements_on_product_name           (product_name)
#  index_evaluated_movements_on_product_table_code     (product_table_code)
#  index_evaluated_movements_on_recursion_all_30       (recursion_all_30)
#  index_evaluated_movements_on_recursion_all_7        (recursion_all_7)
#  index_evaluated_movements_on_recursion_customer_30  (recursion_customer_30)
#  index_evaluated_movements_on_recursion_customer_7   (recursion_customer_7)
#  index_triggerable_on_customer                       (customer_id,triggerable_id,triggerable_type) UNIQUE
#  index_triggerable_on_evaluated_movements            (triggerable_type,triggerable_id)
#
require "test_helper"

class EvaluatedMovementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
