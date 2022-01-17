# frozen_string_literal: true

Redis.current = Redis.new(url:  ENV['JOB_WORKER_URL'])
Redis.exists_returns_integer = true
