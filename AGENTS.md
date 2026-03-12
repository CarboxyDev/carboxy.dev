# AGENTS.md

## Cursor Cloud specific instructions

This is an Astro + React static portfolio site. No backend, no database, no external services needed.

- **Dev server**: `pnpm run dev` (port 4321). Add `--host` to expose on all interfaces.
- **Build**: `pnpm run build` (outputs to `dist/`)
- **Preview prod build**: `pnpm run preview`
- See `CLAUDE.md` for architecture details and component patterns.
- No linter or test runner is configured in this project. `pnpm run build` is the primary correctness check (Astro + Vite will fail on type/import errors).
- pnpm may warn about ignored build scripts for `esbuild` and `sharp`. The project builds and runs correctly without them in this environment.
