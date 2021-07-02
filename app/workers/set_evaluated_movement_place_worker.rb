class SetEvaluatedMovementPlaceWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(evaluated_movement_id) 
    evaluated_movement = EvaluatedMovement.includes(:service, :customer).find evaluated_movement_id
    p = evaluated_movement.destination || evaluated_movement.build_destination
    p.name = "Service #{evaluated_movement.service_id}"
    result = Geocoder.search(evaluated_movement.service.bonifico.dloc, params: {country: NormalizeCountry(evaluated_movement.service.bonifico.Paese, address: evaluated_movement.service.bonifico.dindirizzo)}).first
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

