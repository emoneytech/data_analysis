class XlsxCreatorWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  include ApplicationHelper


  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # vendor_id = 254000
  # start_date = Date.today.to_date.at_beginning_of_year
  # end_date = Date.today.to_date
  # time_lapse = [Date.today.to_date.at_beginning_of_year, Date.today.to_date]

  def perform(current_user_id, filtering_params)
    current_user = User.find(current_user_id) rescue nil
    return unless current_user
    daterange = filtering_params[:daterange] != "" ? filtering_params[:daterange] : "#{(Date.today.at_beginning_of_month).strftime("%d/%m/%Y")} - #{Date.today.strftime("%d/%m/%Y")}"
    r = current_user.reports.create(name: "services_#{ActiveStorage::Filename.new(daterange).sanitized}", opts: filtering_params)
    
    services = Servizio.filter(filtering_params).grouped_by_month(format_daterange(daterange)).group_by(&:month_group)
    current_row = 0
    book = Spreadsheet::Workbook.new
    services.each do |service|
      sheet = book.create_worksheet name: "#{service[0]}"
      sheet.row(0).concat ["Nr of services", "Total Amount", "Fees", "Product"]
      service[1].each_with_index do |item, index|
        sheet.row(index + 1).push(
          "#{item.nr_of_services}",
          "#{ActionController::Base.helpers.humanized_money_with_symbol item.total_amount}",
          "#{ActionController::Base.helpers.humanized_money_with_symbol item.fees}",
          "#{item.product_id} - #{Prodotto.find_by_idprodotto(item.product_id).try(:nome)}"
        )
      end
    end
    file_name = "#{Rails.root}/private/spreadsheets/#{r.name}.xlsx"
    book.write_xlsx file_name
    r.xls_file.attach(file_name)
    r.xls_file.attach(io: File.open(file_name), filename: file_name, content_type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    File.delete(file_name)
  end

  private

  def format_daterange(daterange)
    start_date, end_date = daterange.split(' - ')
    return [start_date.to_date.strftime("%Y-%m-%d"), end_date.to_date.strftime("%Y-%m-%d")]
  end

end
