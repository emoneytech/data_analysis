class DayCustomersWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS

  def perform()
    # CustomerEvaluation.where(eval_year: Date.today.year, eval_month: Date.today.month).where.not('eval_days ?| array[:keys]', keys: ["#{Date.today - 1.day}"]).count
    CustomerEvaluation.select(:id, :anagrafica_id).where(eval_year: Date.today.year, eval_month: Date.today.month).where.not('eval_days ?| array[:keys]', keys: ["#{Date.today}"]).find_in_batches(batch_size: 500) do |evaluations|
      evaluations.each do |evaluation|
        DayCustomerWorker.perform_async(evaluation.anagrafica_id)
      end
    end
  end

end

