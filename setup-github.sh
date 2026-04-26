#!/bin/bash

# AL IMTIAZ TRADING Website - GitHub Deployment Setup Script

echo "🚀 AL IMTIAZ TRADING Website - GitHub Deployment Setup"
echo "================================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "🔗 Setting up GitHub remote..."
    read -p "Enter your GitHub repository URL (e.g., https://github.com/punithmithra/punithmithra.github.io.git): " REPO_URL
    git remote add origin "$REPO_URL"
    echo "✅ Remote 'origin' added"
else
    echo "✅ Remote 'origin' already exists: $(git remote get-url origin)"
fi

# Create publish branch if it doesn't exist
echo ""
echo "🌿 Setting up publish branch..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")

if ! git show-ref --verify --quiet refs/heads/publish; then
    # Add and commit current changes if any
    if [ -n "$(git status --porcelain)" ]; then
        echo "📝 Committing current changes..."
        git add .
        git commit -m "Initial commit - AL IMTIAZ TRADING website"
        echo "✅ Changes committed"
    fi
    
    # Create publish branch
    git checkout -b publish
    echo "✅ Created and switched to 'publish' branch"
else
    echo "✅ 'publish' branch already exists"
    git checkout publish
fi

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
read -p "Push to GitHub now? (y/n): " PUSH_CONFIRM

if [ "$PUSH_CONFIRM" = "y" ] || [ "$PUSH_CONFIRM" = "Y" ]; then
    git push -u origin publish
    echo "✅ Pushed to GitHub"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your GitHub repository settings"
    echo "2. Navigate to Settings → Pages"
    echo "3. Under 'Build and deployment', select 'GitHub Actions'"
    echo "4. Your site will deploy automatically!"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://punithmithra.github.io/website/"
else
    echo ""
    echo "⏸️  Push skipped. Run 'git push -u origin publish' when ready."
fi

echo ""
echo "✨ All done! Check GITHUB_DEPLOYMENT.md for detailed instructions."
