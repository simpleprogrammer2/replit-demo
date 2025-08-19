# Overview

This is a full-stack web application built with React frontend and Express.js backend, designed as a portfolio website for Archana Sevak, a Senior Software Engineer and Tech Lead. The application showcases 10+ years of professional experience in scalable cloud solutions, microservices architectures, skills, projects, and contact information through a modern, responsive interface. The architecture follows a monorepo structure with separate client and server directories, utilizing TypeScript throughout for type safety.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool and development server
- **UI Framework**: shadcn/ui components built on top of Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **Components**: Modular component structure with reusable UI components in `/components/ui/` directory

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot reloading with custom Vite integration for development mode
- **API Structure**: RESTful API design with route registration system in `/server/routes.ts`
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM with type-safe schema definitions
- **ORM**: Drizzle ORM for database operations with Zod integration for runtime validation
- **Schema**: User management schema with username/password authentication structure
- **Migrations**: Database migrations managed through Drizzle Kit with PostgreSQL dialect

## Build and Development
- **Monorepo Structure**: Single repository with client, server, and shared directories
- **TypeScript Configuration**: Unified TypeScript setup with path mapping for clean imports
- **Build Process**: Vite for frontend bundling, ESBuild for server compilation
- **Development Tools**: Custom Vite plugins for Replit integration and error overlays

## Deployment Configuration
- **Production Build**: Separate build processes for client (static assets) and server (Node.js bundle)
- **Static Assets**: Client builds to `dist/public` for static file serving
- **Server Bundle**: ESBuild creates production-ready server bundle in `dist/` directory
- **Environment**: NODE_ENV-based configuration switching between development and production modes

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL database service via `@neondatabase/serverless` for serverless deployments
- **Connection Pooling**: PostgreSQL connection management through connect-pg-simple for session storage

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration and theme variables
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **Embla Carousel**: Lightweight carousel library for image/content sliders

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **ESBuild**: JavaScript/TypeScript bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **TSX**: TypeScript execution environment for development server running

## Form and Data Management
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation
- **Zod**: Runtime type validation integrated with Drizzle ORM schemas
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe CSS class composition for component variants

## Replit Integration
- **Replit Plugins**: Custom Vite plugins for development environment integration
- **Runtime Error Modal**: Development error overlay for better debugging experience
- **Cartographer**: Code mapping and navigation tools for Replit environment