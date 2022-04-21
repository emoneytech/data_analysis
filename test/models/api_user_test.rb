# == Schema Information
#
# Table name: api_users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  failed_attempts        :integer          default(0), not null
#  locked_at              :datetime
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  unlock_token           :string
#  username               :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_api_users_on_email                 (email) UNIQUE
#  index_api_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_api_users_on_unlock_token          (unlock_token) UNIQUE
#  index_api_users_on_username              (username) UNIQUE
#
require "test_helper"

class ApiUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
