# == Schema Information
#
# Table name: time_lapse_factor_audits
#
#  id                              :integer          not null, primary key
#  anagrafica_time_lapse_factor_id :integer
#  user_id                         :integer
#  old_value                       :float(24)
#  old_evaluate_risk_value         :float(24)
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#

class TimeLapseFactorAudit < RiskRecord
  
  belongs_to :anagrafica_time_lapse_factor, class_name: "TimeLapseFactor"
  belongs_to :user
end
