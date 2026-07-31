#!/usr/bin/env bash
set -euo pipefail
: "${EASYPANEL_URL:?}"
: "${EASYPANEL_API_KEY:?}"
: "${EASYPANEL_PROJECT:?}"
: "${EASYPANEL_SERVICE:?}"
BASE_URL="${EASYPANEL_URL%/}"
payload=$(ruby -rjson -e 'puts JSON.dump({json:{projectName: ENV.fetch("EASYPANEL_PROJECT"), serviceName: ENV.fetch("EASYPANEL_SERVICE"), forceRebuild: false}})')
curl -fsS -H "Authorization: Bearer ${EASYPANEL_API_KEY}" -H 'Content-Type: application/json' \
  -X POST "${BASE_URL}/api/trpc/services.app.deployService" --data "$payload" >/dev/null
echo "Deploy triggered for ${EASYPANEL_PROJECT}/${EASYPANEL_SERVICE}"
