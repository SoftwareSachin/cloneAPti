# Aptivon Solutions - Company Website

## Overview

This is a modern, responsive company website for Aptivon Solutions Pvt. Ltd., an IT services and consulting firm. The application is built as a full-stack web application using React with TypeScript on the frontend and Express.js on the backend, featuring a contact form system and comprehensive information about the company's services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Vercel Serverless Functions (@vercel/node)
- **Language**: TypeScript with ES modules  
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Routes**: Serverless functions in `/api` folder
- **Development**: Static frontend with Vite dev server

## Key Components

### Frontend Components
1. **Navigation** - Sticky navigation bar with smooth scrolling
2. **HeroSection** - Landing section with company introduction
3. **ServicesSection** - Core services showcase
4. **TechnologySection** - Technology stack display
5. **IndustriesSection** - Target industries presentation
6. **AdvancedCapabilities** - Advanced service offerings
7. **ApproachSection** - Company methodology
8. **ContactSection** - Contact form with validation
9. **Footer** - Company information and links

### Backend Components
1. **Contact API** - Serverless function at `/api/contact.ts` for form submissions
2. **Contacts API** - Serverless function at `/api/contacts.ts` for data retrieval  
3. **Database Schema** - Contact form data structure in `/shared/schema.ts`
4. **Database Integration** - Direct Neon PostgreSQL connection via Drizzle ORM

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schema
   - Data sent to `/api/contact` endpoint
   - Backend validates and stores contact information
   - Success/error response returned to frontend
   - Toast notification displayed to user

2. **Admin Contact Retrieval**:
   - Admin can access `/api/contacts` to view all submissions
   - Data retrieved from storage layer
   - Contacts sorted by creation date (newest first)

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion
- **HTTP Client**: Native fetch API with TanStack Query
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Build & Development
- **Bundler**: Vite for frontend, esbuild for backend
- **Development Tools**: Replit integration plugins
- **CSS Processing**: PostCSS with Tailwind CSS

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- API functions tested locally or deployed to Vercel
- Database migrations handled by Drizzle Kit
- Development scripts configured for Vercel architecture

### Production Build (Vercel)
- Frontend built with Vite to static assets in `/dist`
- API functions deployed as serverless functions to Vercel
- Static files served by Vercel CDN
- Database connection via Neon PostgreSQL with environment variables

### Database Management
- Schema defined in `shared/schema.ts`
- Migrations generated and applied via Drizzle Kit
- Connection pooling handled by Neon Database
- Environment-based configuration

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 06, 2025. Modern design implementation:
  * Updated color scheme with vibrant gradients
  * Added glass-morphism effects and modern blur elements
  * Enhanced typography with better spacing and hierarchy
  * Modern card designs with subtle shadows and rounded corners
  * Gradient backgrounds and professional elements
  * Improved mobile responsiveness and visual polish
- July 06, 2025. Animation removal and Vercel deployment preparation:
  * Completely removed all animations for professional appearance
  * Migrated to Vercel-compatible serverless architecture
  * Set up PostgreSQL database with Neon
  * Configured API routes for serverless functions
  * Applied database schema and tested contact form
  * Project ready for Vercel deployment
- July 06, 2025. Replit migration and enhancements:
  * Successfully migrated project from Replit Agent to standard Replit environment
  * Enhanced Vercel configuration with proper routing and function setup
  * Added custom favicon using provided company logo
  * Created comprehensive team section featuring:
    - Sarah Chen (Technical Lead) - Full-Stack Development, Cloud Architecture, DevOps
    - Marcus Rodriguez (Product Manager) - Product Strategy, Market Analysis, Agile
    - Priya Sharma (Product Manager) - UX Strategy, Data Analytics, Customer Success
  * Improved SEO and meta tags across all HTML files
  * Project fully optimized for both Replit development and Vercel deployment
- July 06, 2025. Complete professional website modernization:
  * Transformed all components to purely professional and modern design
  * Removed all animations and decorative effects for clean appearance
  * Updated navigation and footer with company logo gif preservation
  * Modernized hero section with clean white background and structured layout
  * Redesigned services section with professional cards and metrics
  * Updated contact form with modern styling and proper validation
  * Fixed Technology Stack section with visible icons and professional styling
  * Maintained Vercel serverless architecture throughout modernization
  * Added comprehensive IT company pages: About, Services, Portfolio, Careers, Blog, Contact
  * Implemented full navigation routing system with professional page structure
  * Created detailed content for enterprise IT service offerings and company information
- July 06, 2025. Comprehensive IT website expansion and enhancement:
  * Added essential enterprise IT pages: Solutions, Industries, Case Studies, Resources, Support
  * Created detailed Solutions page with 6 comprehensive technology solutions including Cloud Migration, Cybersecurity, Data Analytics, Mobile Development, AI/ML, and Digital Transformation
  * Built Industries page covering 8 key sectors: Healthcare, Financial Services, Retail, Manufacturing, Education, Logistics, Real Estate, and Entertainment/Media
  * Developed Case Studies page with 4 detailed success stories showing measurable ROI and business outcomes
  * Implemented Resources page with whitepapers, webinars, tools, and knowledge base content
  * Created comprehensive Support page with multiple contact channels, FAQ sections, and SLA commitments
  * Updated navigation system to accommodate all new pages with responsive design
  * Enhanced footer with complete site map and improved organization
  * Added missing UI components (Input, Textarea) for form functionality
  * Maintained consistent professional design language across all new pages
  * Ensured all pages follow enterprise IT industry standards and best practices
- July 06, 2025. Job application system and fresher-friendly careers update:
  * Successfully migrated project from Replit Agent to standard Replit environment
  * Added comprehensive job application email system sending to singhal3.sachin7@gmail.com
  * Created new API endpoint `/api/job-application` for handling job submissions
  * Updated all job positions to be fresher-friendly with "Freshers Welcome" experience level
  * Added new technology positions: Junior Software Developer, QA Testing Associate
  * Transformed experience requirements to focus on education and willingness to learn
  * Updated application form to make experience field optional
  * Integrated real-time job application submission with email notifications
  * Enhanced careers page with professional entry-level opportunities
```

## User Preferences

Preferred communication style: Simple, everyday language.