class SetEvalMovementCardWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker
  # sidekiq_options queue: 'critical', retry: false, backtrace: true
  sidekiq_options queue: 'default', retry: false, backtrace: true
  
  # PARAMS
  # eval_movement_id

  def perform(eval_movement_id) 
    eval_movement = EvalMovement.find eval_movement_id
    eval_movement.beneficiary_card = eval_movement.beneficiary_iban
    eval_movement.beneficiary_iban = ''
    service = eval_movement.service
    customer = service.anagrafica
    if customer.conti.where(Pan: service.ricaricacarta.numerocarta).count > 0
      if customer.IdTipo == 3
        city, country, address = customer.ComunePoint, NormalizeCountry(customer.NazionePoint), customer.IndirizzoPoint
      else
        city, country, address = customer.Citta, NormalizeCountry(customer.NazioneResidenza), customer.Indirizzo
      end
      result = Geocoder.search(city, params: {country: country, address: address}).first
      eval_movement.beneficiary_other = "#{address} - #{city}, #{country}"
      eval_movement.destination_lonlat = "POINT(#{result.longitude} #{result.latitude})"
      eval_movement.save
    end
  end
end

