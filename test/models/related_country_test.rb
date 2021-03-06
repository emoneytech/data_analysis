# == Schema Information
#
# Table name: related_countries
#
#  id                         :bigint           not null, primary key
#  alpha2                     :string           not null
#  alpha3                     :string           not null
#  attention_factor           :float
#  basel_score                :float
#  continent                  :string
#  corruption_perception      :float
#  eval_basel_score           :float
#  eval_corruption_perception :float
#  eval_kyc_score             :float
#  gec                        :string
#  gray_or_black_list         :integer
#  in_eea                     :boolean
#  in_esm                     :boolean
#  in_eu                      :boolean
#  iso_numeric                :integer
#  kyc_score                  :float
#  name                       :string
#  region                     :string
#  subregion                  :string
#  unofficial_names           :text             default([]), is an Array
#  world_region               :string
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#
# Indexes
#
#  index_related_countries_on_alpha2                 (alpha2) UNIQUE
#  index_related_countries_on_alpha3                 (alpha3) UNIQUE
#  index_related_countries_on_attention_factor       (attention_factor)
#  index_related_countries_on_basel_score            (basel_score)
#  index_related_countries_on_continent              (continent)
#  index_related_countries_on_corruption_perception  (corruption_perception)
#  index_related_countries_on_gec                    (gec)
#  index_related_countries_on_gray_or_black_list     (gray_or_black_list)
#  index_related_countries_on_in_eea                 (in_eea)
#  index_related_countries_on_in_esm                 (in_esm)
#  index_related_countries_on_in_eu                  (in_eu)
#  index_related_countries_on_iso_numeric            (iso_numeric)
#  index_related_countries_on_kyc_score              (kyc_score)
#  index_related_countries_on_name                   (name)
#  index_related_countries_on_region                 (region)
#  index_related_countries_on_subregion              (subregion)
#  index_related_countries_on_unofficial_names       (unofficial_names)
#  index_related_countries_on_world_region           (world_region)
#
require "test_helper"

class RelatedCountryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
