require 'sidekiq/web'
Sidekiq::Web.app_url = "/data_analysis/dashboard"

sidekiq_config = { url: ENV['JOB_WORKER_URL'] }

Sidekiq.configure_server do |config|
  config.redis = sidekiq_config
  config.failures_max_count = 5000
  config.death_handlers << ->(job, ex) do
    JobWorkerErrors.new("#{job['class']} #{job["jid"]}", "#{ex.message}", "#{job["args"]}")
  end
end

Sidekiq.configure_client do |config|
  config.redis = sidekiq_config
end