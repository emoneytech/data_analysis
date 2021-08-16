class ExportXlsWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  include ApplicationHelper


  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true
  
  # PARAMS
  # vendor_id = 254000
  # start_date = Date.today.to_date.at_beginning_of_year
  # end_date = Date.today.to_date
  # time_lapse = [start_date, end_date]

  def perform(vendor_id, time_lapse = [Date.today.to_date.at_beginning_of_year, Date.today.to_date])
    vendor = Vendor.find vendor_id
    services = vendor.servizi.where( 
      status: [3, 5, 8, 10]
    ).where(
      "DATE_FORMAT(lastupdate , '%Y-%m-%d') between ? and ?", time_lapse[0].strftime('%Y-%m-%d'), time_lapse[1].strftime('%Y-%m-%d')
    ).select(
      "COUNT(idservizio) AS nr_of_services",
      "SUM(importo) AS total_amount",
      "SUM(commissioni) AS fees",
      "DATE_FORMAT(lastupdate , '%Y-%m') AS month_group",
      "prodotto AS product_id"
    ).group(
      "prodotto", "month_group ASC"
    ).order(
      "month_group ASC"
    ).group_by(&:month_group)
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
          "#{Prodotto.find_by_idprodotto(item.product_id).nome}"
        )
      end
    end
    book.write "#{Rails.root}/private/spreadsheets/vendor_#{vendor_id}_#{time_lapse[0].strftime('%Y')}.xls"
  end

end
