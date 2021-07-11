# config/initializers/sidekiq_enqueuer_config.rb
require 'sidekiq/enqueuer'

Sidekiq::Enqueuer.configure do |config|
  config.jobs = [
    CreateEvalMovementPerYearWorker,
    SetInitRecursionWorker,
    SyncEvalMovementsWorker,
    PurgeForExcludedProductsWorker,
    InitEvaluatedRiskWorker,
    InitCustomerPlacesWorker,
    UpdateCustomerPlacesWorker,
    UpdateCustomerBusinessWorker,
    UpdateEvalMovementsDestinationsWorker
  ]
end
