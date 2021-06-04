# == Schema Information
#
# Table name: evaluated_movements
#
#  id                  :bigint           not null, primary key
#  customer_id         :integer          not null
#  customer_full_name  :string(255)
#  service_id          :integer          not null
#  service_status      :string(255)
#  service_updated_at  :datetime
#  movement_id         :integer          not null
#  movement_created_at :datetime         not null
#  product_net_id      :integer
#  product_id          :integer
#  product_name        :string(255)
#  product_base_risk   :float(24)
#  beneficiary         :string(255)
#  beneficiary_iban    :string(255)
#  beneficiary_other   :string(255)
#  risk_factor         :float(24)
#  risk_description    :string(255)
#  amount_cents        :integer          default(0), not null
#  amount_currency     :string(255)      default("EUR"), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  recursion           :text(65535)
#
require "test_helper"

class EvaluatedMovementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
