require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AiRiskMonitor
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    config.log_level = :debug
    config.log_tags  = [:subdomain, :uuid]
    
    config.active_record.schema_format = :sql
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    # We want to set up a custom logger which logs to STDOUT.
    # Docker expects your application to log to STDOUT/STDERR and to be ran
    # in the foreground.
    # Since we're using Redis for Sidekiq, we might as well use Redis to back
    # our cache store. This keeps our application stateless as well.
    # config.cache_store = :redis_store, ENV['CACHE_URL'], { namespace: 'drkiq::cache' }
    config.hosts << "drkiq"
    config.hosts << "data-analysis.emoney.local"
    config.hosts << "data-analysis.emoney.tech"
    config.hosts << "data_analysis.local"
    config.hosts << "192.168.0.26"
    config.hosts << "213.165.162.51"
    # If you've never dealt with background workers before, this is the Rails
    # way to use them through Active Job. We just need to tell it to use Sidekiq.
    config.active_job.queue_adapter = :sidekiq
    config.time_zone = "Europe/Malta"
    config.active_record.default_timezone = :utc
    config.active_record.time_zone_aware_attributes = false
    config.i18n.available_locales = [:it, :en]
    config.i18n.default_locale = :it
    config.i18n.fallbacks = [:en, :it]
  end
end
