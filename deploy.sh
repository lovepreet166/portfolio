#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "→ Checking GitHub login..."
gh auth status || { echo "Run: gh auth login"; exit 1; }

echo "→ Creating repo (if needed)..."
gh repo view lovepreet166/portfolio >/dev/null 2>&1 || \
  gh repo create portfolio --public --description "Product portfolio — Lovepreet Singh"

echo "→ Pushing to GitHub..."
git remote set-url origin https://github.com/lovepreet166/portfolio.git
git push -u origin main

echo "→ Enabling GitHub Pages..."
gh api repos/lovepreet166/portfolio/pages -X POST --input - <<'EOF' 2>/dev/null || \
gh api repos/lovepreet166/portfolio/pages -X PUT --input - <<'EOF'
{"build_type":"legacy","source":{"branch":"main","path":"/"}}
EOF

echo ""
echo "✓ Done! Your site will be live at:"
echo "  https://lovepreet166.github.io/portfolio/"
echo "  (may take 1–2 minutes to appear)"
