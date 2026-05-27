# StudyPlanner — Marketing Site

B2B landing site for the [StudyPlanner](https://ae-planner-proxy.vercel.app) — aimed at university administrators and MSc programme coordinators.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Import the repo into Vercel as a new project. Framework is auto-detected (Next.js, App Router). Add a custom domain in the Vercel dashboard.

## Structure

- `app/page.tsx` — composes all landing sections.
- `components/` — one file per section (Hero, Problem, HowItWorks, Features, ForUniversities, CTAFooter).
- CTAs point to the live planner and a `mailto:` for university outreach.
