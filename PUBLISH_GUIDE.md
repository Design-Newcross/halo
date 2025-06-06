# Publishing to GitHub Packages Guide

## Overview
This guide will help you publish the `@design-newcross/halo` package to GitHub Packages.

## Prerequisites

1. **GitHub Personal Access Token**
   - Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Create a new token with these scopes:
     - `write:packages` (to publish packages)
     - `read:packages` (to download packages)
     - `repo` (if the repository is private)

## Publishing Methods

### Method 1: Manual Publishing (Quick)

1. **Set up authentication locally:**
   ```bash
   export NODE_AUTH_TOKEN=your_github_token_here
   ```

2. **Build and publish:**
   ```bash
   npm run build
   npm publish
   ```

### Method 2: GitHub Actions (Automated)

The repository is already configured with a GitHub Actions workflow that will:
- Automatically publish when you create a new release
- Allow manual publishing via workflow dispatch

#### To create a release and publish:

1. **Create a new release on GitHub:**
   - Go to your repository: https://github.com/Design-Newcross/halo
   - Click "Releases" > "Create a new release"
   - Choose a tag (e.g., `v1.0.0`)
   - Fill in release notes
   - Click "Publish release"

2. **The GitHub Action will automatically:**
   - Build the package
   - Publish to GitHub Packages

#### To manually trigger publishing:

1. Go to Actions tab in your GitHub repository
2. Select "Publish Package" workflow
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## Using the Published Package

### Installation
```bash
# Create/update your .npmrc file first
echo "@design-newcross:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Install the package
npm install @design-newcross/halo
```

### Usage
```tsx
import { YourComponent } from '@design-newcross/halo';

function App() {
  return <YourComponent />;
}
```

## Files Structure

The following files have been configured for GitHub Packages:

- `package.json` - Updated with GitHub Packages configuration
- `.npmrc` - Authentication configuration
- `.github/workflows/publish.yml` - Automated publishing workflow
- `vite.config.ts` - Library build configuration

## Package Configuration

- **Name:** `@design-newcross/halo`
- **Version:** `1.0.0`
- **Registry:** `https://npm.pkg.github.com`
- **Repository:** `https://github.com/Design-Newcross/halo`

## Troubleshooting

### Authentication Issues
- Make sure your GitHub token has the correct permissions
- Verify the token is properly set in your environment

### Build Issues
- Run `npm run build` to test locally
- Check that all dependencies are installed with `npm install`

### Publishing Issues
- Ensure you're authenticated with the correct registry
- Verify the package name follows the @username/package-name format
- Check that the repository exists and you have write access

## Next Steps

1. Test the build: `npm run build`
2. Set up your GitHub token
3. Create your first release or publish manually
4. Update your package consumers to install from GitHub Packages

## Notes

- The package is configured as a library build, not a web application
- TypeScript declarations are automatically generated
- The package externals React and React-DOM (they won't be bundled)
- CSS/Tailwind styles are included in the build 