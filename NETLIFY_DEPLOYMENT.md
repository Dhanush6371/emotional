# Netlify Deployment Guide

## Changes Made

1. **Created `netlify.toml`** - Netlify configuration file that:
   - Sets the build command to `npm run build`
   - Configures the publish directory to `.output/public`
   - Sets up serverless functions from `.output/server`
   - Redirects all routes to the server function for SSR

2. **Updated `vite.config.ts`** - Added Netlify preset for Nitro:
   ```typescript
   nitro: {
     preset: "netlify",
   }
   ```

3. **Created `.node-version`** - Ensures Netlify uses Node.js 20

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify should auto-detect the settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

## Build Settings (Auto-configured via netlify.toml)

- **Build command:** `npm run build`
- **Publish directory:** `.output/public`
- **Functions directory:** `.output/server`
- **Node version:** 20

## Environment Variables

If your app uses environment variables, add them in:
- Netlify UI: Site settings → Environment variables
- Or via CLI: `netlify env:set KEY value`

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json` (not just devDependencies)
- Verify Node.js version compatibility

### 404 Errors
- The `netlify.toml` redirects should handle all routes
- Check that the redirect rule is present: `from = "/*"` to `/.netlify/functions/server`

### Server Errors
- Check Netlify function logs in the dashboard
- Verify environment variables are set correctly
- Check that the Nitro preset is set to "netlify" in `vite.config.ts`

### Blank Page
- Open browser console to check for JavaScript errors
- Verify the build completed successfully
- Check that static assets are loading from `.output/public`

## Testing Locally

Before deploying, test the production build locally:

```bash
# Build the app
npm run build

# Preview the build (uses Vite preview)
npm run preview
```

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [TanStack Start Documentation](https://tanstack.com/start)
- [Nitro Netlify Preset](https://nitro.unjs.io/deploy/providers/netlify)
