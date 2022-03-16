class ImportCsvSanctionListWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'massive', retry: false, backtrace: true

  # PARAMS
  # sanction_list_id, file

  def perform(sanction_list_id)
    sanction_list = SanctionList.find(sanction_list_id) rescue nil
    return unless sanction_list
    n = sanction_list.csv_smarter
    sanction_list.update(state: "completed") if n.to_i > 0
  end
end
