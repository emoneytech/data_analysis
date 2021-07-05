class SetCustomerPlaceWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(customer_id) 
    customer = customer.find customer_id
    p = customer.current_place || customer.build_current_place
    p.name = customer.full_name
    if customer.IdTipo == 3
      city, state, address = customer.ComunePoint, NormalizeCountry(customer.NazionePoint), customer.IndirizzoPoint
    else
      city, state, address = customer.Citta, NormalizeCountry(customer.NazioneResidenza), customer.Indirizzo
    end

    result = Geocoder.search(city, params: {country: state, address: address}).first
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

