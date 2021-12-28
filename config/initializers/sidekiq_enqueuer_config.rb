# config/initializers/sidekiq_enqueuer_config.rb
require 'sidekiq/enqueuer'

Sidekiq::Enqueuer.configure do |config|
  config.jobs = [
    EvaluateCustomersForDayWorker,
    EvaluateEvaluatedMovementsWorker,
    DailyWorker,
    InitCustomerEvaluationsWorker,
    TriggerCustomerWorker,
    TriggerInitWorker,
    RecalculatePositionsWorker,
    RecalculateRecursionsWorker
  ]
end

=begin

  CreateEvalMovementPerYearWorker,
  SetInitRecursionWorker,
  SyncEvalMovementsWorker,
  PurgeForExcludedProductsWorker,
  InitEvaluatedRiskWorker,
  InitCustomerPlacesWorker,
  UpdateCustomerPlacesWorker,
  UpdateCustomerBusinessWorker,
  UpdateEvalMovementsDestinationsWorker,
  UpdateEvalMovementsIbansWorker,
   
=end
