# == Schema Information
#
# Table name: evaluated_movements
#
#  id                    :bigint           not null, primary key
#  triggerable_id        :bigint           not null
#  triggerable_type      :string           not null
#  triggerable_status    :string           not null
#  in_out                :enum             default("OUT")
#  internal              :boolean          default(FALSE), not null
#  customer_id           :integer          not null
#  movement_id           :integer          not null
#  movement_created_at   :datetime         not null
#  product_id            :integer
#  product_net_id        :integer
#  product_table_code    :integer
#  product_name          :string
#  product_base_risk     :float
#  payer                 :string
#  payer_iban            :string(50)
#  payer_card            :string(50)
#  payer_other           :string
#  beneficiary           :string
#  beneficiary_iban      :string(50)
#  beneficiary_card      :string(50)
#  beneficiary_other     :string
#  risk_factor           :float
#  risk_description      :string
#  recursion_customer_7  :integer
#  recursion_customer_30 :integer
#  recursion_all_7       :integer
#  recursion_all_30      :integer
#  amount_cents          :integer          default(0), not null
#  amount_currency       :string           default("EUR"), not null
#  origin_lonlat         :geography        point, 4326
#  destination_lonlat    :geography        point, 4326
#  origin_country        :string           not null
#  destination_country   :string           not null
#  lock_version          :integer          default(0), not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
require "test_helper"

class EvaluatedMovementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
