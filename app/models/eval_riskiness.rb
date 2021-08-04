# == Schema Information
#
# Table name: eval_riskinesses
#
#  id                  :integer          not null, primary key
#  eval_evaluable_id   :integer
#  eval_evaluable_type :string(255)
#  eval_factory        :float(24)
#  eval_score          :float(24)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  eval_month          :string(255)
#  number_of_movements :integer          default(0), not null
#  details_operations  :text(4294967295)
#  trend               :string(12)
#

class EvalRiskiness < RiskRecord

  belongs_to :eval_evaluable, polymorphic: true

  scope :for_type, -> (type) { where(eval_evaluable_type: type) }
  scope :for_month, -> (tuple) { includes({eval_evaluable: [:tipo, :conti]}).where(eval_month: "#{tuple}").first }
  scope :all_for_month, -> (tuple) { where(eval_month: "#{tuple}") }
  scope :for_year, -> (year) { where("eval_riskinesses.eval_month LIKE ?", "[#{year},%") }
  scope :latest_month, ->(count=12) { where(eval_month: count.times.map{|i| "#{[(Date.today - (i).month).year,(Date.today - (i).month).month]}"})}

end

