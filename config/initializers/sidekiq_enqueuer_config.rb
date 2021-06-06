# config/initializers/sidekiq_enqueuer_config.rb
require 'sidekiq/enqueuer'

Sidekiq::Enqueuer.configure do |config|
  config.jobs = [CreateEvaluatedPerYearWorker, SetInitRecursionWorker]
end
