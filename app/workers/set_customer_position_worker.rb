class SetCustomerPositionWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(customer_id) 
    customer = Anagrafica.find customer_id
    p = customer.current_position || customer.build_current_position
    result = Geocoder.search(customer.Citta, params: {country: NormalizeCountry(customer.NazioneResidenza, address: customer.Indirizzo)}).first
    p.address = customer.full_address
    p.latitude = result.latitude
    p.longitude = result.latitude
    p.save
  end

end

