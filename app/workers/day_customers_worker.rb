class DayCustomersWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    # CustomerEvaluation.where(eval_year: Date.today.year, eval_month: Date.today.month).where.not('eval_days ?| array[:keys]', keys: ["#{Date.today - 1.day}"]).count
    Anagrafica.alive.select(:IdUtente).find_in_batches(batch_size: 500) do |customers|
      customers.each do |customer|
        DayCustomerWorker.perform_async(customer.IdUtente)
      end
    end
  end

end

