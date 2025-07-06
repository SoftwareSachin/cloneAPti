# Aptivon Solutions - IT Services & Consulting

A modern, responsive website for Aptivon Solutions, a premium IT services and consulting company.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Contact Form**: Integrated contact form with backend API
- **Service Showcase**: Detailed presentation of IT services
- **Technology Stack**: React, TypeScript, Tailwind CSS, Express.js

## Deployment Options

### Vercel Deployment (Recommended)

1. **Connect to Vercel:**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect the configuration

2. **Environment Variables:**
   - Set `DATABASE_URL` in Vercel dashboard (required for API endpoints)
   - Set `NODE_ENV=production`

3. **Build Settings:**
   - Build Command: `vite build` (configured in vercel.json)
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Known Issues:**
   - If you see raw server code on Vercel, redeploy after pushing latest changes
   - The build may take longer due to Lucide React icons - this is normal

### Replit Deployment

The project is already configured to run on Replit:
- Development: `npm run dev`
- Production: `npm run build && npm start`

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── contact.ts         # Contact form API
│   └── contacts.ts        # Get contacts API
├── src/                   # React frontend source
│   ├── components/        # UI components
│   ├── pages/            # Application pages
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── server/               # Express server (for Replit)
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database storage
├── shared/               # Shared schemas and types
└── vercel.json          # Vercel configuration
```

## Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Database Setup

The project uses PostgreSQL with Drizzle ORM. For production deployment:

1. Set up a PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
2. Update the `DATABASE_URL` environment variable
3. Run migrations: `npm run db:push`

## Contact Form

The contact form collects:
- Name (First & Last)
- Email
- Company
- Service Interest
- Message

All submissions are stored in the database and can be accessed via the admin endpoint.