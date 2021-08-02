# == Schema Information
#
# Table name: related_countries
#
#  id               :bigint           not null, primary key
#  continent        :string
#  region           :string
#  subregion        :string
#  name             :string
#  unofficial_names :text             default([]), is an Array
#  gec              :string
#  alpha2           :string           not null
#  alpha3           :string           not null
#  world_region     :string
#  in_eu            :boolean
#  in_eea           :boolean
#  in_esm           :boolean
#  score            :float            default(1.0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require "test_helper"

class RelatedCountryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
