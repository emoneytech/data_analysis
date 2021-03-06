class InitCustomerPlacesWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: true, backtrace: true

  # PARAMS
  # customer_id, day, default_risk, amount_d, amount_f, max_base_risk

  def perform()
    Anagrafica
      .alive
      .order(Created: :asc)
      .select(:IdUtente)
      .find_in_batches(batch_size: 500) do |customers|
        customers.each do |customer|
          SetCustomerPlaceWorker.perform_async(customer.IdUtente)
        end
      end
  end
end
