# == Schema Information
#
# Table name: eval_customers
#
#  id                    :bigint           not null, primary key
#  anagrafica_id         :integer          not null
#  eval_year             :integer          not null
#  eval_month            :integer          not null
#  nr_movements          :integer          default(0), not null
#  last_evaluated_risk7  :float
#  last_evaluated_risk30 :float
#  eval_days             :jsonb            not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
require "test_helper"

class EvalCustomerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
