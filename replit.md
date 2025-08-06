# Aptivon Solutions - Company Website

## Overview
This project is a modern, responsive company website for Aptivon Solutions Pvt. Ltd., an IT services and consulting firm. It serves as a comprehensive platform showcasing the company's capabilities, services, and expertise in IT consulting. The website aims to provide a seamless user experience, facilitate client interaction through contact forms, and highlight Aptivon Solutions' vision in the IT market.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **UI/UX Decisions**: Features Apple.com-style minimalist navigation with translucent background, professional monochrome design with slate colors, Lucide React icons, and smooth momentum-based scrolling (Lenis). All heavy animations and blur effects have been removed for performance.

### Backend
- **Runtime**: Vercel Serverless Functions (@vercel/node)
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (using Neon Database)
- **API Routes**: Serverless functions in `/api` folder for contact form submissions, data retrieval, and various application functionalities (e.g., job applications, newsletter, resources).
- **Architecture Decisions**: Serverless architecture optimized for Vercel deployment. Data is primarily served statically for performance and reliability, with dynamic content (like contact form submissions) managed via serverless functions and PostgreSQL.

### Key Features & Design Patterns
- **Contact Form System**: Validated contact form on the frontend, processed and stored by backend serverless functions.
- **Advanced Portfolio System**: Generates comprehensive HTML documents for project case studies.
- **Blog System**: Features posts, comments, subscriptions, and search/filtering capabilities.
- **Legal Pages**: Comprehensive Privacy Policy, Terms of Service, Cookie Policy, and Security pages.
- **SEO Optimization**: Extensive meta tags, structured data (JSON-LD), optimized robots.txt, sitemap.xml, and performance optimizations for search engine visibility and AI accessibility.
- **Realistic Metrics**: All company metrics (clients, team size, projects) scaled to reflect realistic startup figures.

## External Dependencies
### Frontend
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod
- **Scrolling**: Lenis

### Backend
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter

### Build & Development
- **Bundler**: Vite (frontend), esbuild (backend)
- **CSS Processing**: PostCSS with Tailwind CSS
```