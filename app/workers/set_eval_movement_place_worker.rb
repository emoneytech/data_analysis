class SetEvalMovementPlaceWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # customer_id

  def perform(eval_movement_id) 
    eval_movement = EvalMovement.includes(:service, :customer).find eval_movement_id
    p = eval_movement.destination || eval_movement.build_destination
    p.name = "Service #{eval_movement.service_id}"
    result = Geocoder.search(eval_movement.service.bonifico.dloc, params: {country: NormalizeCountry(eval_movement.service.bonifico.Paese, address: eval_movement.service.bonifico.dindirizzo)}).first
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

