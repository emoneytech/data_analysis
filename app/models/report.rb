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
  include ActiveModel::Validations

  belongs_to :user
  has_one_attached :xls_file

  validates :name, presence: true
  validate :opts, :validate_opts

  after_create :generate_xlsx

  scope :latest, -> { order(created_at: :desc).limit(10) }

  def self.icon
    'file-excel'
  end

  def validate_opts
    errors.add(:opts, "must be a valid hash & json") unless self.opts.is_a?(Hash)
  end

  def check_json_array(value)
     value.each do |item|
       return false unless item.is_a?(Hash)
     end
     true
  end

  def generate_xlsx
    CreateReportXlsxWorker.perform_async(self.id)
  end
  
  
  def data_message
    {
      user_id: self.user_id,
      widget_type: 'info',
      icon: 'file-excel',
      title: 'Process progress',
      content: "<p>Il report è stato creato ed è pronto per il download.<br><a href=\"/users/#{self.user_id}/reports/#{self.id.to_s}/download\" class=\"btn btn-block btn-xs btn-success\">Download</a></p>",
      subtitle: 'Ready'
    }
  end
end
