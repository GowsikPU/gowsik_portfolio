# Gowsik PU — Portfolio
React + Vite + TypeScript + Tailwind + Framer Motion.

## Run
    npm install
    npm run dev        # local dev
    npm run build      # type-check + production build to dist/
    npm run preview    # serve the build

## Before publishing
1. Add your resume at `public/assets/resume/gowsik-resume.pdf`, then set `resumeAvailable: true` in `src/data/site.ts`.
2. Contact form: create a form at formspree.io, copy `.env.example` to `.env`, set `VITE_FORM_ENDPOINT`. Until set, the site shows an email fallback and never fakes a send.
3. Verify the two experience entries in `src/data/experience.ts` (titles and descriptions may be swapped), then remove `needsVerification`.
4. Add certificate images for Python Programming (Infosys) and Programming in Java (NPTEL) in `src/data/certificates.ts`.

## Add content
Edit files in `src/data/`. Entries with `published: false` stay hidden. Add `github`, `demo` and `image` to a project to show those links and previews.

## Deploy
Vercel or Netlify: import the repo, build command `npm run build`, output `dist`. Add `VITE_FORM_ENDPOINT` as an environment variable.
