class MultiDimension < CorePgRecord
  belongs_to :parent, class_name: 'AlgorithmCalculator'
  belongs_to :dimension, class_name: 'AlgorithmCalculator'

  validates :dimension_id, presence: true, uniqueness: {scope: :parent_id}

end

# == Schema Information
#
# Table name: multi_dimensions
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  dimension_id :bigint           not null
#  parent_id    :bigint           not null
#
# Indexes
#
#  algorithm_dimension_index  (dimension_id,parent_id) UNIQUE
#
