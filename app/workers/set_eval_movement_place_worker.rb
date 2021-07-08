class SetEvalMovementPlaceWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(eval_movement_id) 
    eval_movement = EvalMovement.find eval_movement_id
    iban = eval_movement.beneficiary_iban
    iban_info = IbanUtils.validate_iban(iban)
    bank_data_hash = iban_info["bank_data"]
    city = bank_data_hash["city"]
    country = bank_data_hash["country"]
    address = bank_data_hash["address"]
    result = Geocoder.search(city, params: {country: country, address: address}).first
    eval_movement.beneficiary_other = "#{address} - #{city}, #{country}"
    eval_movement.destination_lonlat = "POINT(#{result.longitude} #{result.latitude})"
    eval_movement.save
  end

end

