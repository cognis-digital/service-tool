#!/bin/bash

# Build the frontend
echo "Building the frontend..."
npm run build

# Create a temporary branch for deployment
echo "Creating temporary branch for deployment..."
git checkout -b gh-pages-deploy

# Move the dist directory contents to the root
echo "Moving build files..."
cp -r dist/* .

# Create a .nojekyll file to prevent Jekyll processing
touch .nojekyll

# Ensure index.html has correct asset paths
echo "Fixing asset paths..."
sed -i '' 's|src="/service-tool/|src="|g' index.html
sed -i '' 's|href="/service-tool/|href="|g' index.html

# Add all files
echo "Adding files to git..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages with fixed asset paths"

# Push to the gh-pages branch
echo "Pushing to gh-pages branch..."
git push -f origin gh-pages-deploy:gh-pages

# Go back to the previous branch
echo "Cleaning up..."
git checkout -
git branch -D gh-pages-deploy

echo "Deployment complete! Your site should be available at https://cognis-digital.github.io/service-tool/"
