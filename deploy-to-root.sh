#!/bin/bash

# Deploy to punith-mithra.github.io (Root Domain)

echo "🚀 Deploying to https://punith-mithra.github.io/"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project directory?"
    exit 1
fi

echo "📝 Current git remote:"
git remote -v
echo ""

read -p "Do you want to update the remote to punith-mithra.github.io? (y/n): " UPDATE_REMOTE

if [ "$UPDATE_REMOTE" = "y" ] || [ "$UPDATE_REMOTE" = "Y" ]; then
    echo ""
    echo "🔗 Updating git remote..."
    git remote set-url origin https://github.com/Punith-Mithra/punith-mithra.github.io.git
    echo "✅ Remote updated to: https://github.com/Punith-Mithra/punith-mithra.github.io.git"
    echo ""
    echo "📝 New remote:"
    git remote -v
fi

echo ""
echo "🔍 Checking current branch..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "publish" ]; then
    echo ""
    read -p "You're on '$CURRENT_BRANCH'. Switch to 'publish' branch? (y/n): " SWITCH_BRANCH
    if [ "$SWITCH_BRANCH" = "y" ] || [ "$SWITCH_BRANCH" = "Y" ]; then
        git checkout publish || git checkout -b publish
        echo "✅ Switched to publish branch"
    fi
fi

echo ""
echo "📦 Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Uncommitted changes found"
    git status --short
    echo ""
    read -p "Commit these changes? (y/n): " COMMIT_CHANGES
    
    if [ "$COMMIT_CHANGES" = "y" ] || [ "$COMMIT_CHANGES" = "Y" ]; then
        git add .
        read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
        if [ -z "$COMMIT_MSG" ]; then
            COMMIT_MSG="Deploy to punith-mithra.github.io"
        fi
        git commit -m "$COMMIT_MSG"
        echo "✅ Changes committed"
    fi
else
    echo "✅ No uncommitted changes"
fi

echo ""
read -p "Push to GitHub and trigger deployment? (y/n): " PUSH_NOW

if [ "$PUSH_NOW" = "y" ] || [ "$PUSH_NOW" = "Y" ]; then
    echo ""
    echo "📤 Pushing to GitHub..."
    git push -u origin publish
    echo ""
    echo "✅ Pushed successfully!"
    echo ""
    echo "🎉 Deployment triggered!"
    echo ""
    echo "📊 Monitor deployment:"
    echo "   https://github.com/Punith-Mithra/punith-mithra.github.io/actions"
    echo ""
    echo "🌐 Your site will be live at:"
    echo "   https://punith-mithra.github.io/"
    echo ""
    echo "⏱️  Wait 1-2 minutes for deployment to complete."
else
    echo ""
    echo "⏸️  Deployment skipped. When ready, run:"
    echo "   git push -u origin publish"
fi

echo ""
echo "📋 Important Reminders:"
echo "1. Repository must be named: punith-mithra.github.io"
echo "2. GitHub Pages must be set to 'GitHub Actions' source"
echo "3. Repository must be Public for free GitHub Pages"
echo ""
echo "✨ Done!"
