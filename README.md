# heyaaronhelp

Aaron Steinberg - Personal Coaching. Marketing site built with React, Tailwind CSS v4 and Vite.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then outputs to dist/
npm run preview  # serve the production build
```

## Structure

- `src/main.tsx` — entry point (React Router `BrowserRouter`)
- `src/App.tsx` — route table
- `src/pages/` — one component per page (`Home.tsx`, `NotFound.tsx`)
- `src/components/` — `Layout`, `Header`, `Footer`, `ButtonLink`
- `src/index.css` — Tailwind import, theme tokens (colors, fonts, breakpoints), `container` utility
- `public/images/` — assets exported from Figma

Breakpoints are custom Tailwind variants: mobile 390–767px (unprefixed), `tablet:` 768px+,
`desktop:` 1100px+. Tailwind's default `sm`/`md`/`lg`/`xl` breakpoints are disabled.

## Deploying

This is a single-page app with client-side routing, so the host must rewrite unknown paths to
`index.html` (e.g. Netlify `_redirects`, Vercel rewrites).

## Fonts

Headings use **Recoleta** (commercial). Add licensed `Recoleta-Regular.woff2` to `public/fonts/`;
until then the site falls back to Fraunces from Google Fonts. Body text is DM Sans.
