class UpdateCustomerPlacesWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id, day, default_risk, divisor_amount_for_factor, factor_for_amount, max_base_risk

  def perform()
    Place.where(positionable_type: 'Anagrafica', lonlat: nil,).find_in_batches(batch_size: 500) do |places|
      places.each do |place|
        SetCustomerPlaceWorker.perform_async(place.positionable_id)
      end
    end
  end

end
