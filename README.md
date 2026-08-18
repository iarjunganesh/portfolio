# arjunganesh.dev

Personal portfolio for Arjun Ganesh — software engineer and systems builder in Stockholm.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS v4, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
npm run typecheck
npm run check:links
npm run assets:generate  # regenerate Press and Career artwork (requires FFmpeg)
```

The generated recognition plates use a local monospace font. Set
`PORTFOLIO_ASSET_FONT` and `PORTFOLIO_ASSET_FONT_BOLD` when the platform
defaults are unavailable. The career map is derived from public-domain
[Natural Earth](https://www.naturalearthdata.com/) 1:110m land geometry.

## Structure

Each section is its own route, and navigating between them crossfades using
React's `<ViewTransition>`, supported directly by the Next.js App Router.

```
app/
  layout.tsx        root layout — masthead, view transition wrapper, footer
  page.tsx          landing view — the name, and Bhagavad Gita 11.32
  data.ts           all portfolio content: projects, career, certs, contact, verse
  site-nav.tsx      persistent masthead nav, active route via usePathname
  section-page.tsx  shared frame for every section route (title + pager)
  gita-verse.tsx    the verse, set in Tiro Devanagari Sanskrit
  work-item.tsx     server-rendered project case study
  device-frame.tsx  click-to-load inline preview of a live app
  reveal.tsx        scroll reveal wrapper (CSS scroll-driven, no JS)
  globals.css       design tokens, layout, motion
  about/ work/ press/ research/ focus/ stack/ career/ certs/ contact/
scripts/
  check-links.mjs              external evidence link validation
  generate-visual-assets.mjs   reproducible Press and Career artwork
```

Section indices (`01`–`09`) double as the position in `NAV`, which is what
drives the prev/next pager — so reordering `NAV` and the `n` props keeps them
in sync automatically.

## Conventions

- **Content lives in [`app/data.ts`](app/data.ts)**, not in markup. Every claim,
  link, and date there is verified — do not add metrics or credentials that
  cannot be sourced.
- **The Gita verse is quoted from the edition it cites.** `GITA` in `data.ts`
  takes its transliteration and translation from the self-hosted
  `public/Bhagavad-Gita-As-It-Is.pdf` (TEXT 32, PDF page 686), and the link
  deep-links to that page. If the PDF is ever swapped for a different edition,
  the transliteration and translation must be re-extracted from it — different
  editions romanize and translate differently. Note the PDF stores its roman
  and Devanagari text in a legacy Balaram font encoding, so extracted text
  needs decoding to Unicode.
- **Project resources use a fixed vocabulary**, defined as `RESOURCE_ORDER` in
  `data.ts` and enforced by the `ResourceLabel` type: `Code`, `Live app`,
  `API docs`, `Demo video`, `Devpost`, `Write-up` — always listed in that
  order. Omit a row rather than inventing one; not every project has every
  resource. Re-check the links before publishing.
- **Two accent hues only**: `--signal` (phosphor amber in dark, burnt orange in
  light) and `--live` for status. Everything else is ink on paper.
- **Motion degrades**: scroll reveals use `animation-timeline: view()` and
  content is visible by default, so nothing is hidden behind a script that has
  not run. All motion is disabled under `prefers-reduced-motion`.
