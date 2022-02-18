# == Schema Information
#
# Table name: algorithm_calculators
#
#  id                   :bigint           not null, primary key
#  abscissa             :string           not null
#  abscissa_intervall   :float            not null
#  abscissa_max         :float            not null
#  abscissa_min         :float            not null
#  multidimension       :boolean          default(FALSE), not null
#  name                 :string           not null
#  presentation         :string           not null
#  result_type          :string           not null
#  value                :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  customer_category_id :bigint           not null
#
# Indexes
#
#  index_algorithm_calculators_on_customer_category_id  (customer_category_id)
#  index_algorithm_calculators_on_name                  (name) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (customer_category_id => customer_categories.id)
#
require "test_helper"

class AlgorithmCalculatorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
