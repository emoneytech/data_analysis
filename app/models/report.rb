# == Schema Information
#
# Table name: reports
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string
#  opts       :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Report < CorePgRecord
  belongs_to :user
  has_one_attached :csv_file
  has_one_attached :xls_file

end
