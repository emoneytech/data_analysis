class CreateReportXlsxWorker
  require 'axlsx'

  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  include ApplicationHelper

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # report_id = 30

  def perform(report_id)
    report = Report.find(report_id) rescue nil
    return unless report
    
    file_name = "#{report.user_id}-#{report.name}.xlsx"
    file_path = "#{Rails.root}/tmp/#{file_name}"
    the_klass = eval(report.opts["dataSource"])
    attributes = the_klass.export_attributes
    items = the_klass.filter(report.opts["filter"])

    p = Axlsx::Package.new
    wb = p.workbook
    wb.add_worksheet(name: 'Basic Worksheet') do |sheet|
      sheet.add_row attributes
      items.each do |item|
        sheet.add_row attributes.map{|attr| "#{item.send(attr)}"}
      end
    end
    stream = p.to_stream
    File.open(file_path, 'w') { |f| f.write(stream.read) }
    report.xls_file.attach(io: File.open(file_path), filename: file_name, content_type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    File.delete(file_path)
    # NotifyPrivateChannelWorker.perform_async(report.user_id, report.data_notification)
    Message.create(report.data_message)
  end

end
