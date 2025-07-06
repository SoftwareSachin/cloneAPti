# Deployment Instructions

## Current Issue with Vercel Deployment

The current live site at https://aptivon-solutions.vercel.app/ is showing server code instead of the React frontend. Here's how to fix this:

### Fix for Vercel Deployment

1. **Update vercel.json** (already done):
   ```json
   {
     "functions": {
       "api/**/*.ts": {
         "runtime": "nodejs18.x"
       }
     },
     "rewrites": [
       {
         "source": "/api/(.*)",
         "destination": "/api/$1"
       },
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

2. **Ensure proper build setup**:
   - The `index.html` file should be in the root directory (✓ already done)
   - The `src/` directory should contain all React components (✓ already done)
   - The `api/` directory should contain Vercel serverless functions (✓ already done)

3. **Deploy to Vercel**:
   - Push your changes to GitHub
   - In Vercel dashboard, go to your project settings
   - Under "Build & Development Settings":
     - Framework Preset: `Vite`
     - Build Command: `vite build`
     - Output Directory: `dist`
   - Redeploy the project

### Alternative: Use Replit Deployment

If Vercel continues to have issues, you can deploy directly from Replit:

1. Click the "Deploy" button in the Replit interface
2. Choose "Autoscale" deployment
3. Set environment variables if needed
4. Deploy

### Database Setup for Production

For production deployment, you'll need to:

1. Set up a PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
2. Set the `DATABASE_URL` environment variable
3. Run database migrations: `npm run db:push`

### Current Status

- ✅ React frontend is working locally
- ✅ API endpoints are configured for Vercel
- ✅ Project structure is optimized for deployment
- ⚠️ Vercel deployment needs to be updated with proper build settings

The project is ready for deployment once the build configuration is updated in Vercel dashboard.