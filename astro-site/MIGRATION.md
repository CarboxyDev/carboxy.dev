# Next.js to Astro Migration Plan

## Overview
Migrating single-page portfolio from Next.js 14 + React 19 to Astro 5.x with Tailwind CSS v4.

---

## Migration Progress

**Status: COMPLETE**

- Phase 1: ✅ Complete
- Phase 2: ✅ Complete
- Phase 3: ✅ Complete
- Phase 4: ✅ Complete
- Phase 5: ✅ Complete

---

## Files Created

```
astro-site/src/
├── lib/
│   ├── utils.ts
│   └── config/
│       ├── projects.ts
│       └── links.ts
├── components/
│   ├── icons/
│   │   ├── types.ts
│   │   ├── social-icons.tsx
│   │   └── brand-icons.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── tooltip.tsx
│   │   ├── toaster.tsx
│   │   └── primary-button.tsx
│   ├── react/
│   │   ├── RadialSpotlight.tsx
│   │   ├── SocialButton.tsx
│   │   ├── CTAButtons.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── AboutCard.tsx
│   │   ├── SkillsList.tsx
│   │   ├── JourneyTimeline.tsx
│   │   └── ImageLightbox.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

---

## Key Decisions Made

1. **TooltipProvider**: Each component using tooltips has its own TooltipProvider since Astro islands don't share React context
2. **Client Directives**:
   - `client:load` - Hero, Contact, Footer (need immediate interactivity)
   - `client:visible` - Projects, About, Skills (can defer until visible)
3. **Tailwind v4**: Using CSS-based configuration with @theme directive
4. **No ParticleEffect**: The original particle background was not in active use

---

## How to Run

```bash
cd astro-site
pnpm dev    # Development server at localhost:4321
pnpm build  # Production build
```
