@AGENTS.md

# 4IDM — أربعة أفكار للدعاية والإعلان

Arabic RTL marketing website for Four Ideas Advertising built with Next.js 16 App Router.

## Stack

- **Next.js** 16.3.4 (App Router, all pages statically prerendered)
- **React** 19
- **Tailwind CSS** v4 (no config file — inline utilities only via PostCSS)
- **Font** — Noto Sans Arabic (Google Fonts, weights 400 & 700)
- **Language** — Arabic only, `dir="rtl"` set on `<html>`

## Routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Hero + values + services teaser + CTA banner |
| `/services` | `src/app/services/page.tsx` | Full 5-service card grid |
| `/about` | `src/app/about/page.tsx` | Company story, values, contact |

## Shared Components

- `src/app/components/Navbar.tsx` — **Client Component** (needs `useState` + `usePathname`). Fixed top, navy bg, white logo circle, gold company name. Mobile hamburger menu.
- `src/app/components/Footer.tsx` — Server Component. Navy bg, 4 value badges, email link.
- `src/app/layout.tsx` — Wraps every page with `<Navbar />` + `<main className="pt-16">` + `<Footer />`.

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#1a2a6c` | Primary — navbar, headings, buttons |
| Navy dark | `#0d1540` | Gradients, hover states |
| Gold | `#f0c040` | Accent — underlines, badges, CTA |
| Orange | `#e07b00` | Service card (التصنيع), tagline text |
| Green | `#3a7d44` | Service card (التصميم) |
| Blue | `#1a4f8a` | Service card (الطباعة) |
| Amber | `#c49a00` | Service card (الهدايا) |

## Logo

- **Active file**: `public/icon-4idm.png` — transparent PNG, 970×960px, extracted from `four_ideas_icon.png`
- In Navbar: wrapped in `w-12 h-12 rounded-full bg-white` circle to contrast against navy bg
- In Hero / About: rendered directly (white page bg shows through transparency)
- Unused legacy files in `public/`: `logo.jpg`, `logo-icon.png`, `logo-4idm.png` (safe to delete)

## Services Data

Five services used across `page.tsx` (teaser) and `services/page.tsx` (full):

| # | Arabic title | Color | Icon |
|---|-------------|-------|------|
| 1 | التصميم | `#3a7d44` | ✏️ |
| 2 | الطباعة وأنواعها | `#1a4f8a` | 🖨️ |
| 3 | التصنيع | `#e07b00` | ⚙️ |
| 4 | الهدايا والترويج | `#c49a00` | 🎁 |
| 5 | التسويق | `#1a2a6c` | 📢 |

## Development

```bash
npm run dev    # start dev server (localhost:3000)
npm run build  # production build — all routes must prerender cleanly
```

After replacing any file in `public/`, clear the Next.js image cache:
```bash
rm -rf .next/cache/images
```
Then restart the dev server and hard-refresh the browser (Ctrl+Shift+R).

## RTL Notes

- `dir="rtl"` on `<html>` — Tailwind flex/grid flows right-to-left automatically
- Logo sits on the **right** in the navbar (RTL start = right)
- Nav links sit on the **left** (RTL end = left)
- Use `border-r-4` for visual left-accent cards (renders on the visual right in RTL)
