# == Schema Information
#
# Table name: reports
#
#  id         :bigint           not null, primary key
#  name       :string
#  opts       :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_reports_on_name     (name)
#  index_reports_on_opts     (opts) USING gin
#  index_reports_on_user_id  (user_id)
#
class Report < CorePgRecord
  belongs_to :user
  has_one_attached :csv_file
  has_one_attached :xls_file

end
