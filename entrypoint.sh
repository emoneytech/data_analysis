#!/bin/bash
set -e

rm -f /app/tmp/pids/server.pid

# bin/rails db:migrate --trace

# https://github.com/rails/webpacker/issues/2674
RAILS_ENV=production bin/rails webpacker:compile
RAILS_ENV=production bin/rails assets:precompile

exec "$@"