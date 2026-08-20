# Makerweb

Next.js and shadcn site for [Makerweb](https://gray-support-420405.framer.app/) — a product studio website in the shape of a SaaS product (Cursor-like chrome, Metalab-like substance).

Live structure:

| URL | What you see |
| --- | --- |
| `/` | Homepage |
| `/work` | Selected programmes |
| `/services` | Capabilities |
| `/process` | How a programme runs |
| `/studio` | Studio |
| `/journal` | Notes |
| `/contact` | Start a programme |
| `/design-system` | Tokens, type, texture, components |

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

GitHub Pages is a static export (`output: "export"`). Local `next dev` has no `basePath`; the Pages build sets `GITHUB_PAGES=true` so assets resolve under `/makerweb`.

## Design tokens

Warm paper canvas, ink, and maker orange as the only accent — mapped onto shadcn semantic tokens in [`app/globals.css`](app/globals.css):

| Primitive | Token | shadcn mapping |
| --- | --- | --- |
| Maker orange `#d94b1a` | `--maker` | `--primary` |
| Pressed orange `#9a2f0c` | `--maker-dark` | hover mix |
| Paper `#f3f2ee` | `--paper` | `--background` |
| Ink `#161615` | `--ink` | `--foreground` |
| Haze `#ebe9e3` | `--haze` | `--muted` |
| Grain | `.grain-layer` | dusk / ember / ink banners |

Type is Geist via `next/font`. Grain is an SVG turbulence overlay; gradients are reserved for banners and work covers.

## Stack

- [`components/ui`](components/ui) — shadcn primitives
- [`components/site`](components/site) — header, footer, homepage, design system
- [`content/site.ts`](content/site.ts) — typed copy (CMS-shaped)

Button variants `maker` and `makerOutline` invert fill on hover.
