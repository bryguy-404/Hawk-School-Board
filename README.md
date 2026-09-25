# Hawkins for Schools

A single-page, static first draft built with Astro, TypeScript, and Tailwind CSS 4 through the official `@tailwindcss/vite` integration. Content comes from **2026_Sep_Hawkins for Schools webpage content.docx**, read in full before implementation. All three beliefs and all eight priorities retain their original wording and order. The lead sentence of each belief is styled as a heading without changing the text.

The site has no client-side application JavaScript, React, CMS, authentication, database, form, tracking, or external font requests. Fonts are self-hosted from Fontsource packages. The site's purpose and Hawkins's exact role remain unconfirmed; the visual identity does not imply district affiliation.

## Requirements

- Node.js **24 LTS** recommended (`.nvmrc`); minimum 22.12.
- npm and the checked-in `package-lock.json`.

## Local development

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Astro selects an available port. If using nvm, run `nvm use` first. Development does not require a Cloudflare account or credentials.

## Checks, build, and production preview

```sh
npm run check
npm run build
npm run preview
```

`check` runs Astro diagnostics and TypeScript checking. The production build command is **`npm run build`** and the static output directory is **`dist`**. Open the URL printed by the preview command. Astro 7 starts preview in the background; use `npx astro preview status`, `npx astro preview logs`, or `npx astro preview stop` to manage it.

For Cloudflare's local static asset handling, after building:

```sh
npm run preview:cloudflare
```

Open Wrangler's printed local URL, normally `http://localhost:8787`. This also lets you verify Cloudflare `_headers` handling; Astro's preview server does not apply those response headers.

To validate deployment preparation without publishing:

```sh
npm run deploy:check
```

This invokes `wrangler deploy --dry-run` against the existing `dist` directory. Run a fresh build first if the source changed.

## Updating content and design

- `src/data/site.ts`: approved copy, headings, and metadata. Keep the supplied order and wording unless the client approves revisions.
- `src/pages/index.astro`: semantic page structure and noindex metadata.
- `src/styles/global.css`: shared color and font tokens in `@theme`, typography, responsive layout, focus states, reduced-motion and print styles.
- `src/components/Wordmark.astro`: simple text wordmark.
- `public/favicon.svg`: provisional typographic H favicon.
- `public/_headers` and `public/robots.txt`: preview indexing controls.

The palette is forest green, warm white, and a restrained light green accent; Newsreader and Manrope provide display and body typography. These choices are provisional and easy to replace. Font licenses are retained in `public/fonts` and included in the build.

## Cloudflare Workers Static Assets deployment

**Prepared only. Do not run the publishing command or connect a domain until the client approves launch.**

`wrangler.jsonc` serves `./dist` through Workers Static Assets. It intentionally contains no `main` entry point, runtime Worker script, SSR, Cloudflare Astro adapter, routes, or domain. The proposed Worker name is `hawkins-for-schools`; confirm its availability in the intended account before publishing.

After approval:

1. Resolve the launch items in `CLIENT-QUESTIONS.md` and obtain final content, design, and publication approval.
2. To allow indexing, remove the robots meta tag in `src/pages/index.astro`, remove only the `X-Robots-Tag` line in `public/_headers`, and change `public/robots.txt` to `User-agent: *` followed by `Allow: /`.
3. Once the real domain is confirmed, configure Astro's `site` URL and add matching canonical and Open Graph URL metadata. No production URL is currently invented.
4. Confirm the Cloudflare account and Worker name, then authenticate with `npx wrangler login`.
5. Run `npm run check`, `npm run build`, and `npm run deploy:check`.
6. Publish with `npm run deploy`. This reruns checks and builds before `wrangler deploy` uploads the static assets.
7. Connect the approved custom domain in Cloudflare only after authorization. Verify HTTPS, the final page, local assets, links, indexing headers, and metadata on the real URL.

For an approved Cloudflare build pipeline, use `npm run build` as the build command, `dist` as the static output, and `npx wrangler deploy` as the deployment command. Do not configure a server or an SSR adapter.

Official setup references: [Tailwind's Astro guide](https://tailwindcss.com/docs/installation/framework-guides/astro) and [Cloudflare's Astro static assets guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/).

## Review and handoff

- `CLIENT-QUESTIONS.md`: launch decisions and separate optional requests.
- `CLIENT-EMAIL.md`: short draft email for review; not sent.
- `QA-NOTES.md`: checks performed and testing limitations.

These Markdown files and the original source document are not in `public` or the built website output. Only `dist` is served or deployed.

The preview is marked `noindex, nofollow` in HTML and Cloudflare response headers, with crawling disallowed in `robots.txt`. These controls discourage indexing; they are not access control. No production site or domain has been published by this task.
