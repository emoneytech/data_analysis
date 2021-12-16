# == Schema Information
#
# Table name: comments
#
#  id                 :bigint           not null, primary key
#  body               :text             not null
#  deleted_at         :datetime
#  subject            :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  related_country_id :bigint           not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_comments_on_deleted_at          (deleted_at)
#  index_comments_on_related_country_id  (related_country_id)
#  index_comments_on_subject             (subject)
#  index_comments_on_user_id             (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (related_country_id => related_countries.id)
#  fk_rails_...  (user_id => users.id)
#
require "test_helper"

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
