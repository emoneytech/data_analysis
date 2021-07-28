require 'sidekiq/web'
require 'sidekiq-status'
require 'sidekiq-status/web'
require 'sidekiq-limit_fetch'

Sidekiq::Web.app_url = "/data_analysis/dashboard"

sidekiq_config = { url: ENV['JOB_WORKER_URL'] }

Sidekiq.configure_server do |config|
  config.redis = sidekiq_config
  config.failures_max_count = 5000
  Sidekiq::Status.configure_server_middleware config, expiration: 30.minutes
end

Sidekiq.configure_client do |config|
  config.redis = sidekiq_config
  Sidekiq::Status.configure_client_middleware config, expiration: 30.minutes
end