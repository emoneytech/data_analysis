# == Schema Information
#
# Table name: base_riskinesses
#
#  id                  :integer          not null, primary key
#  base_evaluable_type :string(255)
#  base_factory        :float(24)
#  base_score          :float(24)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  base_evaluable_id   :integer
#
# Indexes
#
#  base_evaluable_index                  (base_evaluable_id,base_evaluable_type)
#  index_base_riskinesses_on_base_score  (base_score)
#

class BaseRiskiness < RiskRecord
  belongs_to :base_evaluable, polymorphic: true
end
