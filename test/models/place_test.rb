# == Schema Information
#
# Table name: places
#
#  id                :bigint           not null, primary key
#  positionable_type :string           not null
#  positionable_id   :bigint           not null
#  name              :string
#  address           :string
#  city              :string
#  region            :string
#  country           :string
#  lonlat            :geography        point, 4326
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require "test_helper"

class PlaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
