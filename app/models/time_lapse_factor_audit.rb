# == Schema Information
#
# Table name: time_lapse_factor_audits
#
#  id                              :integer          not null, primary key
#  old_evaluate_risk_value         :float(24)
#  old_value                       :float(24)
#  created_at                      :datetime         not null
#  updated_at                      :datetime         not null
#  anagrafica_time_lapse_factor_id :integer
#  user_id                         :integer
#
# Indexes
#
#  index_time_lapse                           (anagrafica_time_lapse_factor_id)
#  index_time_lapse_factor_audits_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (anagrafica_time_lapse_factor_id => anagrafica_time_lapse_factors.id)
#  fk_rails_...  (user_id => users.id)
#

class TimeLapseFactorAudit < RiskRecord
  
  belongs_to :anagrafica_time_lapse_factor, class_name: "TimeLapseFactor"
  belongs_to :user
end
