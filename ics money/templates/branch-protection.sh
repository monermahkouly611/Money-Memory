#!/usr/bin/env bash
# Usage: ./branch-protection.sh OWNER/REPO   (requires gh auth with admin rights)
set -euo pipefail
REPO="$1"
for BR in develop staging main; do
  gh api -X PUT "repos/$REPO/branches/$BR/protection" --input - <<JSON
{
  "required_status_checks": { "strict": true, "contexts": ["lint","typecheck","unit","build","security"] },
  "enforce_admins": true,
  "required_pull_request_reviews": { "required_approving_review_count": 1, "dismiss_stale_reviews": true },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_conversation_resolution": true
}
JSON
done
echo "Add e2e/perf/a11y checks to develop, staging, main after ci-full.yml exists."
