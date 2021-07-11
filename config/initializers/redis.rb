Redis.exists_returns_integer = true

redis_url = ENV.fetch("JOB_WORKER_URL")
REDIS = Redis.new(url: redis_url)