#!/bin/bash
set -e

cd /Users/chandu/Desktop/CreateyouWallpapers/website

# Kill any other git processes
pkill -9 -f "git" 2>/dev/null || true
sleep 1

# Remove lock file
rm -f .git/index.lock

# Disable VS Code git extension interference
export GIT_TERMINAL_PROMPT=0

# Stage files in smaller batches to avoid lock contention
echo "=== Staging source files ==="
rm -f .git/index.lock
git add src/ 2>/dev/null && echo "src/ staged"

rm -f .git/index.lock
git add package.json package-lock.json vite.config.js index.html vercel.json README.md .gitignore .oxlintrc.json 2>/dev/null && echo "config files staged"

rm -f .git/index.lock
git add public/ 2>/dev/null && echo "public/ staged"

echo "=== All files staged ==="
git status --short | head -5
echo "..."
git status --short | wc -l | xargs echo "Total files:"

echo "=== Committing ==="
rm -f .git/index.lock
git commit -m "feat: CreateYou Wallpapers - complete website with hero slider, consultation form, and all pages" && echo "Commit done"

echo "=== Pushing to origin main ==="
git push -u origin main --force && echo "Push done"

echo "=== SUCCESS ==="
