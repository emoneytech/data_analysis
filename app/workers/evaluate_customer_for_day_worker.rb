class EvaluateCustomersForDayWorker
  include Sidekiq::Worker
  include Sidekiq::Status::Worker

  sidekiq_options queue: 'massive', retry: true, backtrace: true
  
  # PARAMS
  # evaluated_movement_id = 2098745
  # day = "2021/12/20"

  def perform(customer_id, day)
    begin
      customer = Anagrafica.find customer_id
      customer.evaluate_for_day(day.to_date)
    rescue Exception => e
      raise e 
    end
  end

end

