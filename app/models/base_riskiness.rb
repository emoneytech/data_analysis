# == Schema Information
#
# Table name: base_riskinesses
#
#  id                  :integer          not null, primary key
#  base_evaluable_id   :integer
#  base_evaluable_type :string(255)
#  base_factory        :float(24)
#  base_score          :float(24)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class BaseRiskiness < ApplicationRecord
  belongs_to :base_evaluable, polymorphic: true
end
