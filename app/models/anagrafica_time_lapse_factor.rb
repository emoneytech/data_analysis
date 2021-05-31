# == Schema Information
#
# Table name: anagrafica_time_lapse_factors
#
#  id                :integer          not null, primary key
#  anagrafica_id     :integer          not null
#  time_lapse_factor :float(24)        default(0.98), not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class AnagraficaTimeLapseFactor < ApplicationRecord

  belongs_to :anagrafica

  validates :anagrafica_id, presence: true, uniqueness: true
  has_many :time_lapse_factor_audits, -> {order(created_at: :asc)}

end
