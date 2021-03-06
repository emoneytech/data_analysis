# frozen_string_literal: true

if Rails.env.development? || Rails.env.production? 
  require "rack-mini-profiler"

  # initialization is skipped so trigger it
  Rack::MiniProfilerRails.initialize!(Rails.application)
  Rack::MiniProfiler.config.position = 'bottom-right'

end
