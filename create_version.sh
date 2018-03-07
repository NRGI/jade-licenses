#!/usr/bin/env bash

cat > licenses-test/version.txt << EOF
{
  "commit_sha": "$COMMIT",
  "image": "nrgi/jade-licenses:$BRANCH.$COMMIT"
}
EOF
