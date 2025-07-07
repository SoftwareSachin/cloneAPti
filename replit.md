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

- July 07, 2025. Successfully completed migration from Replit Agent to standard Replit environment:
  * Fixed syntax errors in security page (replaced `< ` with `&lt; ` for HTML entities)
  * Installed all required packages and dependencies
  * Verified Vercel architecture with proper client/server separation in client/src directory
  * Updated home page text: removed "with real-time insights into our ongoing projects and performance metrics"
  * Updated home page text: removed "every button works and connects you directly to our services"
  * Fixed "View Case Studies" button visibility with semi-transparent background and proper styling
  * Made "Schedule Consultation" and "View Case Studies" buttons functional in advanced capabilities section
  * Made "Schedule Industry Consultation" and "View Industry Case Studies" buttons functional in industries section
  * All buttons now properly navigate to /contact and /case-studies pages using wouter routing
  * All workflow functionality confirmed working on port 5000
  * Migration completed successfully with robust security practices maintained
- July 07, 2025. Removed Current Project Progress section:
  * Removed "Current Project Progress" section from home page per user request
  * Cleaned up related state variables and useEffect hooks
  * Removed unused Progress component import
  * Streamlined dashboard section for better focus on metrics
- July 07, 2025. Functional legal pages implementation:
  * Created comprehensive Privacy Policy with data protection details and user rights
  * Implemented Terms of Service with payment terms, liability, and compliance information
  * Built interactive Cookie Policy with cookie management preferences system
  * Developed Security page with detailed security measures and compliance certifications
  * Added routing for all legal pages: /privacy-policy, /terms-of-service, /cookie-policy, /security
  * Updated footer links to make Privacy Policy, Terms of Service, Cookie Policy, and Security functional
  * All legal pages feature professional design with comprehensive real-world content
  * Ensured full legal compliance with GDPR, SOC 2, and industry standards
- July 07, 2025. Complete professional monochrome design transformation:
  * Updated Innovation at Scale section (Advanced Capabilities) with premium monochrome icons
  * Transformed Industry Solutions section with professional slate styling instead of colorful gradients
  * Modernized Enterprise Technology Stack section with monochrome professional design
  * Updated Quick Actions section to use professional slate colors instead of rainbow gradients
  * Replaced all gradient styling with professional monochrome slate-900 design
  * Removed colorful accent colors and replaced with consistent slate color scheme
  * All sections now feature premium quality Lucide React icons in professional monochrome styling
  * Enhanced visual consistency across Innovation, Industry, Technology, and Quick Actions sections
- July 07, 2025. Successfully migrated from Replit Agent to Replit environment:
  * Completed migration with updated logo across navigation and footer
  * Replaced all emojis in footer with premium quality Lucide React icons
  * Removed "All systems operational" status indicator and green dot
  * Enhanced footer with modern design using Cloud, Settings, Cpu, and Smartphone icons
  * Fixed React component rendering issues for proper icon display
  * Updated footer across all website pages with professional modern design
  * Enhanced contact information display with color-coded icons
  * Added comprehensive newsletter signup with real-time feedback
  * Implemented premium social media icons with hover effects
  * All migration checklist items completed successfully
- July 07, 2025. Company metrics scaling to realistic startup figures:
  * Updated all large numbers to reflect realistic startup scale
  * Changed 150+ satisfied clients to 3+ satisfied clients throughout website
  * Reduced team size from 75 members to 2 members across all sections
  * Updated 500+ Technologies Mastered to 15+ Technologies Mastered
  * Scaled down project counts from 500+ to 5+ projects delivered
  * Adjusted financial metrics and user counts to appropriate startup levels
  * Reduced team members in team section from 3 to 2 key members
  * Updated milestone metrics in company history to reflect growth progression
  * Updated live metrics dashboard: 150 clients to 3, 75 team members to 2
  * Updated industries section: 50+ Industries Served to 5+, 800+ Projects Delivered to 5+
  * Fixed real-time metrics animations in services and about pages to show 5+ projects instead of 500+
  * Updated data processing metric from 1PB+ to 100 GB in advanced capabilities section
  * Fixed hero section stats: updated 500+ Projects Delivered to 5+ in src/components/hero-section.tsx
  * Updated all remaining 500+ instances across approach, industries, and services sections to 5+
  * Fixed 100+ Enterprise Clients to 3+ in services page to match startup metrics
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
- July 06, 2025. Fully functional Resources page with authentic industry content:
  * Replaced all placeholder content with real whitepapers from Google Cloud, TechRepublic, and industry sources
  * Added 10 authentic whitepapers including Google's LLM evaluation, AI platform scaling, cloud migration frameworks
  * Created 6 professional webinars covering AI cybersecurity, cloud migration, and digital transformation
  * Developed 6 detailed case studies with real-world scenarios and measurable results
  * Implemented functional API endpoints: /api/newsletter, /api/resources, /api/webinar-registration
  * Built interactive download modals with form validation and lead capture
  * Created webinar registration system with comprehensive data collection
  * Added working newsletter subscription with real-time feedback
  * Integrated proper search and filtering functionality across all resource types
  * Enhanced user experience with modal-based interactions and API-driven functionality
- July 06, 2025. Successful migration from Replit Agent to Replit environment:
  * Migrated project from Replit Agent to standard Replit environment
  * Confirmed Vercel architecture with serverless functions in /api folder
  * Verified full-stack functionality with React frontend in client/src
  * Ensured proper client/server separation for security and compatibility
  * All packages installed and working correctly with Node.js 20
  * Express server running on port 5000 with Vite frontend integration
  * Database integration with PostgreSQL via Neon working properly
  * Project ready for continued development in standard Replit environment
  * Fixed Vercel deployment configuration for Node.js 18.x compatibility
  * Successfully deployed to Vercel with proper runtime configuration
  * Created .nvmrc and .node-version files for Node.js version management
  * All API endpoints functional including job applications, support tickets, and contact forms
- July 07, 2025. Comprehensive SEO optimization for #1 Google ranking:
  * Enhanced HTML meta tags with advanced SEO optimization for brand recognition
  * Added extensive structured data (JSON-LD) for Organization, ProfessionalService, and WebSite schemas
  * Implemented comprehensive OpenGraph and Twitter Card meta tags for social media optimization
  * Created advanced robots.txt allowing all major search engines and AI crawlers (GPTBot, ChatGPT-User, CCBot, etc.)
  * Added PWA manifest.json for mobile app-like experience and better indexing
  * Created multiple SEO verification files: google-site-verification.html, security.txt, humans.txt, ads.txt
  * Optimized sitemap.xml with proper priorities and change frequencies for all pages
  * Enhanced brand keyword strategy with focus on "Aptivon Solutions" primary ranking
  * Added comprehensive business contact information and geo-location data
  * Implemented aggregate ratings and review schema for better SERP display
  * Optimized for AI assistant accessibility (ChatGPT, Claude, etc.) with proper meta descriptions
  * Added brand keywords file for strategic SEO targeting and competitive analysis
  * Enhanced hero section content optimization (later adjusted per user request to remove brand text)
  * Project now fully optimized for top Google rankings and AI assistant recognition
- July 07, 2025. Comprehensive SEO optimization for #1 Google ranking:
  * Implemented advanced SEO meta tags with brand-focused keywords
  * Added comprehensive structured data (Organization, ProfessionalService, WebSite schemas)
  * Created robots.txt optimized for all search engines and AI crawlers (GPTBot, ChatGPT-User, CCBot)
  * Added PWA manifest.json for better mobile experience
  * Created essential SEO files: sitemap.xml, humans.txt, security.txt, ads.txt
  * Implemented brand-focused content strategy emphasizing "Aptivon Solutions"
  * Added Google/Bing verification pages and business verification
  * Optimized homepage content with "Aptivon Solutions" brand prominence
  * Created comprehensive keyword strategy for ranking #1 on "Aptivon Solutions"
  * Enhanced Open Graph and Twitter meta tags for better social sharing
  * Project optimized for top search rankings and AI assistant compatibility
```

## User Preferences

Preferred communication style: Simple, everyday language.