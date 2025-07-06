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
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot reload with Vite integration in development

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
1. **Contact API** - Handles form submissions with validation
2. **Storage Layer** - Abstracted storage interface with in-memory fallback
3. **Database Schema** - Contact form data structure
4. **Middleware** - Request logging and error handling

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
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Development scripts configured for Replit environment

### Production Build
- Frontend built with Vite to static assets
- Backend compiled with esbuild for Node.js
- Static files served from Express server
- Database connection via environment variables

### Database Management
- Schema defined in `shared/schema.ts`
- Migrations generated and applied via Drizzle Kit
- Connection pooling handled by Neon Database
- Environment-based configuration

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.