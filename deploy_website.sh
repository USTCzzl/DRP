#!/bin/bash

# Quick deployment script for GitHub Pages

echo "🚀 Deploying DRP Experimental Results Website"
echo "=============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    echo "✓ Git repository initialized"
else
    echo "✓ Git repository already exists"
fi

# Check current branch
BRANCH=$(git branch --show-current)
if [ -z "$BRANCH" ]; then
    echo "📝 Creating main branch..."
    git checkout -b main
fi

# Add docs folder
echo "📦 Adding docs folder..."
git add docs/

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit
    echo "💾 Committing changes..."
    git commit -m "Add experimental results website

- Experiment 1: 10 DRP performance scenarios
- Comparative evaluation: 12 scenarios comparing 3 methods
- Interactive web interface with animations and charts"
    echo "✓ Changes committed"
fi

# Instructions for pushing
echo ""
echo "=============================================="
echo "📋 Next Steps:"
echo "=============================================="
echo ""
echo "1. Add your GitHub remote (if not already added):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to: https://github.com/YOUR_USERNAME/YOUR_REPO/settings/pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: /docs"
echo "   - Click 'Save'"
echo ""
echo "4. Your site will be live at:"
echo "   https://YOUR_USERNAME.github.io/YOUR_REPO/"
echo ""
echo "=============================================="
echo "✨ Deployment preparation complete!"
echo "=============================================="
