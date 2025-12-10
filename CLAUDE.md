# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for CarboxyDev built with Astro 5.16.4 and React 19.2.1. The site is a single-page application showcasing projects, skills, and contact information with sophisticated animations and interactive elements.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Hybrid Astro/React Approach

The project uses a hybrid architecture combining Astro's static site generation with React's interactivity:

- **Astro components** (`.astro`): Used for static content and layout structures. These are compiled at build time and ship no JavaScript by default.
- **React components** (`.tsx`): Used for interactive elements requiring client-side JavaScript. Must be explicitly hydrated using Astro's client directives (`client:load`, `client:visible`, etc.).

### Key Architectural Patterns

1. **Client Directives**: React components in Astro files must specify when to hydrate:
   - `client:load` - Hydrates immediately on page load (e.g., `Toaster`)
   - `client:visible` - Hydrates when component enters viewport (e.g., `Skills`)

2. **Path Aliases**: Use `@/*` to import from `src/*`:
   ```typescript
   import { cn } from '@/lib/utils';
   import Hero from '@/components/sections/Hero.astro';
   ```

3. **Configuration as Data**: Project info and external links are centralized in `/src/lib/config/`:
   - `projects.ts` - Project definitions with metadata, tech stack, and images
   - `links.ts` - Social and external links

4. **Component Organization**:
   - `/src/components/sections/` - Main page sections (Hero, Projects, About, Skills, Contact)
   - `/src/components/react/` - Interactive React components requiring client-side hydration
   - `/src/components/ui/` - Reusable UI primitives based on Radix UI (Button, Tooltip, Toaster)
   - `/src/components/icons/` - SVG icon components separated by type (brand-icons.tsx, social-icons.tsx)

5. **Layout System**: `BaseLayout.astro` provides the HTML shell with:
   - SEO meta tags (Open Graph, Twitter Cards)
   - Global styles import
   - Toast notification system

### Animation Strategy

The site uses two animation libraries with distinct purposes:

- **Framer Motion**: Layout animations, scroll-based reveals, interactive hover/tap effects. Used in Skills.tsx and most interactive components.
- **React Spring**: Physics-based spring animations for smooth transitions. Used sparingly for specific effects.

CSS animations are used for initial page load fade-ins (see `index.astro` sections with `animate-fade-in-up` and staggered delays).

### Styling Approach

- TailwindCSS 4.1.17 via Vite plugin for utility-first styling
- Custom utilities: `cn()` helper in `/src/lib/utils.ts` merges Tailwind classes safely
- Design tokens defined in global.css for consistent gradients, shadows, and animations
- Dark theme with zinc-based color palette (zinc-900 backgrounds, zinc-700 borders, etc.)

## Component Patterns


### Icon System

Icons are organized by category in separate files:
- `brand-icons.tsx` - Technology logos (React, TypeScript, Next.js, etc.)
- `social-icons.tsx` - Social platform icons
- `types.ts` - Shared icon prop types

All icons accept `className` prop for styling and sizing.

### Interactive Components

When adding new React components that need client-side interactivity:
1. Place in `/src/components/react/`
2. Use in Astro files with appropriate `client:*` directive
3. Prefer `client:visible` for below-the-fold content to optimize initial page load

## TypeScript Configuration

The project uses Astro's strict TypeScript configuration with:
- React JSX transform
- Path aliases configured in `tsconfig.json`
- Type checking enforced in Astro frontmatter and React components

## Deployment Considerations

- Site URL: `https://carboxy.dev` (hardcoded in BaseLayout.astro)
- Static assets must be in `/public/` to be accessible
- Build output goes to `/dist/`
- Preview images for SEO are served from root (e.g., `/logo.png`)
