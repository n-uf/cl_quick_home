# cl_quick_home

The home site of cl_quick, a floating Claude chat for the Mac (live host to be: **https://cl-quick.n-uf.com**).
**Local only for now**: no remote, no Vercel project, no DNS. Nothing goes public before cl_quick's first release.
Facts on the site come only from cl_quick's `README.md` and `CHANGELOG.md`; there is no download or release link anywhere.

| Page | Address | What it shows |
| --- | --- | --- |
| Home | `/` | the product working: a Mac desktop with another app open, and cl_quick opening over it (bar, typed bar, chat window, full-week notice, ended chat), one step per scroll; then a sheet of what it is |
| Install | `/install/` | requirements, "the first release isn't out yet", how it works with Claude Code |
| FAQ | `/faq/` | questions and answers from the README (also as FAQPage data) |
| Use cases, Blog | `/use-cases/`, `/blog/` | collections, empty for now: neither the pages nor the menu bar links exist until a first live entry does |

Built with [Astro](https://astro.build), copied in machinery (not content) from cl_audit_home: the zod content schema, the draft
rule (production hides drafts, dev and Vercel previews show them), `{{live:/path/}}…{{/live}}` blocks, the Reader layout,
JSON-LD with the shared n-uf Organization node, per-page share images, `llms.txt`, a sitemap whose `lastmod` is a real change
date (`src/data/dates.mjs` for the fixed pages, `updated` in front matter for the collections), and `scripts/check-links.mjs`.
Left out: cl_audit's own pages and data, its scheduled-publishing workflow (`publish-due.mjs`, `.github`) and its demo pages.
Until a publish workflow is added, a draft's `draft: true` is flipped by hand on its day.

The look is cl_audit's (a dark hi-fi front panel on a Mac desktop); the chat itself, in the pictures, is in Claude's colours.

```bash
npm install
npm run dev      # http://localhost:5191
npm run build    # static site in dist/, then scripts/check-links.mjs
npm test         # {{live:}} blocks and the link checker
```

## Pictures

- **App pictures** (`public/img/qc-*.webp`, `settings-*.webp`) are rendered by cl_quick itself with sample data and cropped:
  `scripts/render-app-images.sh [path/to/cl_quick]` (build the app first with `./build.sh --no-install` in the app repo; needs
  macOS, Pillow and `cwebp`). Each is under 100 KB. Check every picture for real addresses, names and ids before shipping.
- **Icons:** `public/favicon.svg` is the one vector mark (a chat bar); `scripts/render-favicons.py` draws the ICO, 96 and 192 px
  PNGs and the 180 px touch icon from it (needs `rsvg-convert` and Pillow).
- **Share images:** `scripts/render-og.py --font <Inter variable ttf>` (home, Install, FAQ) and `render-og-pages.py` (use cases and
  articles, once there are any). The font stays out of the repo.

## Checks

From `/opt/projects/claude/seo`: `python3 -I scripts/check_build.py <dist> --host cl-quick.n-uf.com`, and
`python3 -I scripts/serp_check.py cl-quick.n-uf.com=http://localhost:<port>` against a served build.
