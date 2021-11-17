
Logster.store = Logster::RedisStore.new(Redis.new(url: ENV['JOB_WORKER_URL']))