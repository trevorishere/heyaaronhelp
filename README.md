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
- `src/pages/` — one component per page (`Home`, `About`, `Press`, `Contact`, `NotFound`)
- `src/components/` — `Layout`, `Header`, `Footer`, `ButtonLink`
- `src/index.css` — Tailwind import, theme tokens (colors, fonts, breakpoints), `site-container` utility
- `public/images/` — assets exported from Figma

Breakpoints are custom Tailwind variants: mobile 390–767px (unprefixed), `tablet:` 768px+,
`desktop:` 1100px+. Tailwind's default `sm`/`md`/`lg`/`xl` breakpoints are disabled.

## Deploying

This is a single-page app with client-side routing, so the host must rewrite unknown paths to
`index.html` (e.g. Netlify `_redirects`, Vercel rewrites).

## Contact form

The contact form submits to [Formspree](https://formspree.io), which emails each submission.

1. Create a form in Formspree, sending to Aaron's email address, and copy its endpoint
   (`https://formspree.io/f/…`).
2. Copy `.env.example` to `.env` and set `VITE_CONTACT_ENDPOINT` to that endpoint.
3. Set the same variable in the host's environment settings, then redeploy.

Without it, submitting shows an error. Submissions use the subject "New contact form submission —
Hey Aaron Help", and replying to the email goes to the person who filled in the form.

## Fonts

Headings use **Recoleta** (commercial). Add licensed `Recoleta-Regular.woff2` to `public/fonts/`;
until then the site falls back to Fraunces from Google Fonts. Body text is DM Sans.
