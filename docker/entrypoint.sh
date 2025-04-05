#!/bin/sh

set -e

# Wait for MySQL to be ready
if [ -n "$DB_HOST" ]; then
  echo "Waiting for MySQL to be ready..."
  while ! mysqladmin ping -h"$DB_HOST" -P"${DB_PORT:-3306}" --silent; do
    sleep 1
  done
  echo "MySQL is ready!"
fi

# Run migrations
php artisan migrate --force --seed

# Clear caches
php artisan cache:clear
php artisan view:clear
php artisan config:clear

# Start the application
exec "$@"