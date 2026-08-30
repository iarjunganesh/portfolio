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
  layout.tsx           root layout — masthead, view transition wrapper, footer
  page.tsx             home — positioning, proof, featured work, principles, contact
  data.ts              all portfolio content: projects, career, certs, contact, verse
  site-config.ts       contact links, primary nav, career start date
  site-nav.tsx         persistent masthead nav, active route via usePathname
  section-page.tsx     shared frame for every section route (title + pager)
  project-card.tsx     featured project card — schematic, proof, case-study link
  system-visual.tsx    the three-stage schematic drawn on each featured project
  experience-years.tsx years-shipping counter, recomputed after hydration
  gita-verse.tsx       the verse, set in Tiro Devanagari Sanskrit
  globals.css          design tokens, layout, motion
  work/                the work index
  work/[slug]/         one statically generated case study per featured project
  about/ press/ research/ focus/ stack/ career/ certs/ contact/
scripts/
  check-links.mjs              external evidence link validation
  generate-visual-assets.mjs   reproducible Press and Career artwork
```

Section indices (`01`–`09`) double as the position in `NAV`, which is what
drives the prev/next pager — so reordering `NAV` and the `n` props keeps them
in sync automatically.

The three featured projects (`featured: true` plus a `caseStudy` block in
`data.ts`) get their own route under `/work/[slug]`, generated at build time
from `generateStaticParams`; `dynamicParams = false`, so any other slug is a
404. Everything else in `projects` renders as a compact row on `/work`.

## Conventions

- **Content lives in [`app/data.ts`](app/data.ts)**, not in markup. Every claim,
  link, and date there is verified — do not add metrics or credentials that
  cannot be sourced. Narrative copy is written for the site, but it may not
  introduce a fact that is not backed by the data underneath it.
- **Evidence is a link, not an adjective.** `Project.evidence` is
  `{ claim, href? }`; `href` points at the artifact that shows the claim.
  Omit `href` rather than pointing at something that merely mentions it — an
  unlinked claim renders as plain text and reads as the weaker evidence it is.
- **`status` is lifecycle, not hosting** — see the vocabulary comment above
  `ProjectStatus` in `data.ts`. Where hosting differs (BASTION runs privately,
  DRIFT's services were retired), the case study's `limitation` says so.
- **The years-shipping counter is derived, never typed.** `CAREER_START_DATE`
  is Arjun's confirmed first day (30 August 2012); `ExperienceYears` computes
  the number from it in Europe/Stockholm, so no page hard-codes "13+" or "14+".
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
- **Motion degrades**: content is visible by default, so nothing is hidden
  behind a script that has not run. All motion is disabled under
  `prefers-reduced-motion`.
