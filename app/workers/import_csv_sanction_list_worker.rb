class ImportCsvSanctionListWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: true, backtrace: true

  # PARAMS
  # sanction_list_id, file

  def perform(sanction_list_id)
    sanction_list = SanctionList.find(sanction_list_id) rescue nil
    return unless sanction_list
    sanction_list.main_csv.open do |file|
      headers = CSV.open(file, encoding: 'bom|utf-8', &:readline)
      ary = headers[0].split(";")
      opts = {}
      ary.each do |h|
        opts[h.downcase.to_sym] = h.underscore.to_sym
      end
      n = SmarterCSV.process(file.path, {chunk_size: 2000, key_mapping: opts, file_encoding: 'bom|utf-8', col_sep: ";"}) do |chunk|
        sanction_list.sanction_list_items.create( chunk )
      end
    end
    # NotifyRoomChannelWorker.perform_async(sanction_list.data_notification)
  end
end
