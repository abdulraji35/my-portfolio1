# Abdulsamad Raji Portfolio

A premium personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

1. Install Node.js 18.17 or later.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Where to edit content

- Main portfolio content: `src/data/portfolio.ts`
- Global styles: `app/globals.css`
- Hero section layout: `src/components/sections/hero-section.tsx`
- Projects section: `src/components/sections/projects-section.tsx`
- Next.js config: `next.config.mjs`

## Important placeholders to replace

- Add real GitHub and live demo URLs in `src/data/portfolio.ts`
- Replace testimonial placeholder copy in `src/data/portfolio.ts`
- Add a real profile photo to `public/` and swap the placeholder in `src/components/sections/hero-section.tsx`
- Update `metadataBase` in `app/layout.tsx` when you have your final deployed domain

## Included resume file

The downloadable CV button points to:

- `public/abdulsamad-raji-cv.pdf`

## Notes

- The content was structured from the provided resume and rewritten for stronger recruiter-facing presentation while staying truthful to the source.
- Where the resume did not include direct links or testimonials, clearly labeled placeholders were added instead of invented claims.
