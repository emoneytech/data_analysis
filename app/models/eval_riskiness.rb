# == Schema Information
#
# Table name: eval_riskinesses
#
#  id                  :integer          not null, primary key
#  details_operations  :text(4294967295)
#  eval_evaluable_type :string(255)
#  eval_factory        :float(24)
#  eval_month          :string(255)
#  eval_score          :float(24)
#  number_of_movements :integer          default(0), not null
#  trend               :string(12)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  eval_evaluable_id   :integer
#
# Indexes
#
#  eval_evaluable_index                           (eval_evaluable_id,eval_evaluable_type)
#  index_eval_riskinesses_on_eval_month           (eval_month)
#  index_eval_riskinesses_on_eval_score           (eval_score)
#  index_eval_riskinesses_on_number_of_movements  (number_of_movements)
#  index_eval_riskinesses_on_trend                (trend)
#

class EvalRiskiness < RiskRecord

  belongs_to :eval_evaluable, polymorphic: true

  scope :for_type, -> (type) { where(eval_evaluable_type: type) }
  scope :for_month, -> (tuple) { includes({eval_evaluable: [:tipo, :conti]}).where(eval_month: "#{tuple}").first }
  scope :all_for_month, -> (tuple) { where(eval_month: "#{tuple}") }
  scope :for_year, -> (year) { where("eval_riskinesses.eval_month LIKE ?", "[#{year},%") }
  scope :latest_month, ->(count=12) { where(eval_month: count.times.map{|i| "#{[(Date.today - (i).month).year,(Date.today - (i).month).month]}"})}

end

