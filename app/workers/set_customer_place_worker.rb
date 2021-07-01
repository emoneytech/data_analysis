class SetCustomerPlaceWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(customer_id) 
    customer = Anagrafica.find customer_id
    p = customer.current_place || customer.build_current_place
    p.name = customer.full_name
    result = Geocoder.search(customer.Citta, params: {country: NormalizeCountry(customer.NazioneResidenza, address: customer.Indirizzo)}).first
    if result
      p.country = result.country
      p.city = result.city
      p.address = result.address
      p.region = result.state
      p.lonlat = "POINT(#{result.longitude} #{result.latitude})"
    end
    p.save
  end

end

