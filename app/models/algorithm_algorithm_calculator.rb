class AlgorithmAlgorithmCalculator < CorePgRecord
  belongs_to :algorithm
  belongs_to :algorithm_calculator

  validates :algorithm_calculator_id, uniqueness: {scope: :algorithm_id }
  # validates :abscissa, uniqueness: {scope: :algorithm_id }, if: :abscissa

  scope :default_abscissa, -> { where(abscissa: true) }
end

# == Schema Information
#
# Table name: algorithm_algorithm_calculators
#
#  id                      :bigint           not null, primary key
#  abscissa                :boolean          default(FALSE), not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  algorithm_calculator_id :bigint           not null
#  algorithm_id            :bigint           not null
#
# Indexes
#
#  algorithm_calc_references_index                    (algorithm_calculator_id)
#  algorithm_references_index                         (algorithm_id)
#  calculator_algorithm_unique_index                  (algorithm_id,algorithm_calculator_id) UNIQUE
#  index_algorithm_algorithm_calculators_on_abscissa  (abscissa)
#
# Foreign Keys
#
#  fk_rails_...  (algorithm_calculator_id => algorithm_calculators.id)
#  fk_rails_...  (algorithm_id => algorithms.id)
#
