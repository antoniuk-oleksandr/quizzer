#!/bin/sh
export NEXT_PUBLIC_API_BASE_URL="${NEXT_PUBLIC_API_BASE_URL}"
exec node_modules/.bin/next start -p 3000
