# heyaaronhelp

Aaron Steinberg - Personal Coaching. Marketing site built with [Astro](https://astro.build) as static HTML/CSS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Structure

- `src/layouts/Base.astro` — page shell (head, fonts, header, footer)
- `src/components/Header.astro`, `Footer.astro` — shared nav
- `src/pages/` — one file per page (`index.astro` = homepage)
- `src/styles/global.css` — tokens, breakpoints, buttons
- `public/images/` — assets exported from Figma

Breakpoints: mobile 390–767px (base), tablet `min-width: 768px`, desktop `min-width: 1100px`.

## Fonts

Headings use **Recoleta** (commercial). Add licensed `Recoleta-Regular.woff2` to `public/fonts/`;
until then the site falls back to Fraunces from Google Fonts. Body text is DM Sans.
