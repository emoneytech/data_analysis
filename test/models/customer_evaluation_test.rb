# == Schema Information
#
# Table name: customer_evaluations
#
#  id                      :bigint           not null, primary key
#  eval_days               :jsonb            not null
#  eval_month              :integer          not null
#  eval_year               :integer          not null
#  last_attention_factor30 :float
#  last_attention_factor7  :float
#  nr_movements            :integer          default(0), not null
#  sent                    :float
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  anagrafica_id           :integer          not null
#
# Indexes
#
#  evaluated_attention_factor_for_month_index              (anagrafica_id,eval_year,eval_month) UNIQUE
#  index_customer_evaluations_on_anagrafica_id             (anagrafica_id)
#  index_customer_evaluations_on_eval_days                 (eval_days) USING gin
#  index_customer_evaluations_on_eval_year_and_eval_month  (eval_year,eval_month)
#  index_customer_evaluations_on_last_attention_factor30   (last_attention_factor30)
#  index_customer_evaluations_on_last_attention_factor7    (last_attention_factor7)
#  index_customer_evaluations_on_sent                      (sent)
#
require "test_helper"

class CustomerEvaluationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
