# 3novator - Digital Excellence

A modern, responsive website built with React, TypeScript, and Vite.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (if needed)

3. Run the app:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The project includes configuration files for various hosting platforms to fix SPA routing issues:

### Netlify
- The `public/_redirects` file is automatically used
- Deploy by connecting your repository or drag-and-drop the `dist` folder

### Vercel
- The `vercel.json` file is automatically used
- Deploy by connecting your repository or using Vercel CLI

### GitHub Pages
- The `public/404.html` file handles routing
- Set the base path in `vite.config.ts` if deploying to a subdirectory

### Apache Servers
- The `public/.htaccess` file handles routing
- Ensure mod_rewrite is enabled

### Other Platforms
- Configure your server to serve `index.html` for all routes (SPA fallback)
- All routes should redirect to `/index.html` with a 200 status code

## Important Notes

- All routes are handled client-side by React Router
- Direct navigation to routes like `/about` or `/services` requires server configuration
- The configuration files in `public/` are automatically included in the build
