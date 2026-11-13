#!/usr/bin/env bash
# shellcheck gate for Anti-Laborer-Skills.
# Scans every bash/shell surface, then filters findings through
# .shellcheck-allowlist (entries are "path:SCxxxx", each with a documented
# reason). Any residual finding fails the check.
#
# Shell surfaces (python carriers are not shell):
#   .githooks/pre-commit
#   .githooks/pre-push
#   vendor/einfacht/reflect-hooks/einfacht-env.sh
#   vendor/einfacht/reflect-hooks/pre-commit
#   vendor/einfacht/reflect-hooks/pre-push
#   vendor/einfacht/gates-selftest.sh

set -e

FILES=(
  .githooks/pre-commit
  .githooks/pre-push
  vendor/einfacht/reflect-hooks/einfacht-env.sh
  vendor/einfacht/reflect-hooks/pre-commit
  vendor/einfacht/reflect-hooks/pre-push
  vendor/einfacht/gates-selftest.sh
)

ALLOWLIST=.shellcheck-allowlist
fail=0
checked=0
allowed=0

for f in "${FILES[@]}"; do
  if [ ! -f "$f" ]; then
    echo "shellcheck-gate: missing shell surface: $f" >&2
    fail=1
    continue
  fi
  checked=$((checked + 1))
  out=$(shellcheck -f gcc -S style "$f" 2>&1) || true
  [ -z "$out" ] && continue
  while IFS= read -r l; do
    [ -z "$l" ] && continue
    code=$(printf '%s' "$l" | grep -o 'SC[0-9]\+' | head -1)
    [ -z "$code" ] && continue
    esc=$(printf '%s' "$f" | sed 's/[.[\*^$]/\\&/g')
    if grep -qE "^${esc}:${code}$" "$ALLOWLIST"; then
      allowed=$((allowed + 1))
      continue
    fi
    echo "RESIDUAL in $f: $l" >&2
    fail=1
  done <<< "$out"
done

echo "shellcheck-gate: files=$checked allowed-findings=$allowed residual=$fail"
exit $fail
