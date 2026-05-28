# Netlify Deployment Guide

## Changes Made

1. **Created `netlify.toml`** - Netlify configuration file that:
   - Sets the build command to `npm run build`
   - Configures the publish directory to `.output/public`
   - Uses Netlify Edge Functions for SSR (faster than serverless functions)
   - Redirects all routes to the edge function for SSR
   - Sets Node.js version to 22.12.0

2. **Updated `vite.config.ts`** - Added Netlify Edge preset for Nitro:
   ```typescript
   nitro: {
     preset: "netlify-edge",
   }
   ```

3. **Created `.node-version` and `.nvmrc`** - Ensures Netlify uses Node.js 22 (required by Vite 7 and TanStack Start)

## Important: Node.js Version

This project requires **Node.js 22.12.0 or higher** because:
- Vite 7 requires Node.js 20.19+ or 22.12+
- TanStack Start requires Node.js 22.12+
- Your local machine has Node.js 20.18.1, which is too old

### To upgrade Node.js locally (optional):
- **Using nvm (recommended):**
  ```bash
  nvm install 22
  nvm use 22
  ```
- **Or download from:** https://nodejs.org/

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. Push your code to GitHub (already done ✅)
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository: **Dhanush6371/emotional**
5. Netlify should auto-detect the settings from `netlify.toml`
6. Click "Deploy site"
7. Wait for the build to complete (may take 3-5 minutes)

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
- **Node version:** 22.12.0
- **Deployment:** Netlify Edge Functions (global CDN, faster than serverless)

## Environment Variables

If your app uses environment variables, add them in:
- Netlify UI: Site settings → Environment variables
- Or via CLI: `netlify env:set KEY value`

## Troubleshooting

### Build Fails with "Node.js version" error
- The `.node-version` file should force Netlify to use Node 22
- If it still fails, manually set `NODE_VERSION = "22.12.0"` in Netlify UI under Site settings → Environment variables

### Build Fails with ".output/public does not exist"
- This means the build command failed before creating output
- Check the full build logs in Netlify dashboard
- Look for errors related to dependencies or TypeScript

### 404 Errors
- The `netlify.toml` redirects should handle all routes
- Check that the edge function is deployed in Netlify dashboard

### Server Errors
- Check Netlify edge function logs in the dashboard
- Verify environment variables are set correctly
- Check that the Nitro preset is set to "netlify-edge" in `vite.config.ts`

### Blank Page
- Open browser console to check for JavaScript errors
- Verify the build completed successfully
- Check that static assets are loading from `.output/public`

### ES Module Errors
- Ensure Node.js 22+ is being used (check build logs)
- The `netlify-edge` preset should handle module compatibility

## Testing Locally

**Note:** You need Node.js 22+ to build locally. Your current version (20.18.1) is too old.

After upgrading Node.js:

```bash
# Build the app
npm run build

# Preview the build (uses Vite preview)
npm run preview
```

## What's Different from Standard Netlify Deploys?

This is a **TanStack Start** app with:
- ✅ Server-Side Rendering (SSR)
- ✅ Edge Functions (runs on Netlify's global CDN)
- ✅ Dynamic routing
- ✅ API routes support

It's NOT a static site, so it needs special configuration.

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/)
- [TanStack Start Documentation](https://tanstack.com/start)
- [Nitro Netlify Preset](https://nitro.unjs.io/deploy/providers/netlify)
