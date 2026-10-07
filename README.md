# Hawkins for Schools

A single-page, static campaign website built with Astro, TypeScript, and Tailwind CSS 4 through the official `@tailwindcss/vite` integration. The initial copy came from **2026_Sep_Hawkins for Schools webpage content.docx**. Kevin's October 6 revisions, **2026_Oct_HFS Website What I believe.docx** and **2026_Oct_HFS Website Priorities.docx**, now supply all three beliefs and eight priorities. Both revisions were read in full; wording, headings, and order are preserved, with repeated whitespace normalized. School assignments now precede transportation, as in the revised list. Kevin requested review of these changes on the site before final launch. His September 25, 2026 email supplies the candidate details, portrait, campaign artwork, and foundation-link request.

The site has no first-party client-side application JavaScript, React, CMS, authentication, database, form, analytics, or external font requests. Fonts are self-hosted from Fontsource packages. It identifies Kevin Hawkins as a candidate for South Bend Community School Corporation School Board Member representing District 1, not as a current board member or official district spokesperson.

The WSBT-TV interview provided on October 6 is embedded between the introduction and beliefs, with a header navigation link and a direct YouTube fallback link. The responsive iframe uses YouTube's privacy-enhanced domain, lazy loading, native player controls, fullscreen support, and no autoplay. YouTube loads its own scripts and network resources inside the iframe. The embed's referrer policy sends the referring site's origin in the `Referer` header required by YouTube. Update the video ID, verified title, and publisher in `src/data/site.ts`.

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
- `src/components/Wordmark.astro`: campaign logo extracted from the client's PDF and served as a responsive image.
- `src/assets/kevin-hawkins.jpg`: original client-supplied Barbershop Selfie; Astro generates responsive WebP versions without retouching.
- `src/assets/hawkins-campaign-logo.png`: original transparent logo embedded in the supplied yard-sign PDF, extracted without redrawing it.
- `public/favicon.svg`: provisional typographic H favicon.
- `public/_headers` and `public/robots.txt`: preview indexing controls.

The palette follows the supplied campaign artwork's blue and red, with a light neutral background; Newsreader and Manrope retain the original draft's typography. Shared design tokens make later adjustments straightforward. Font licenses are retained in `public/fonts` and included in the build.

The yard-sign PDF includes the campaign logo, District 1, and a sign slogan. The website uses the extracted logo and confirmed district. It does not present the full print layout as a web logo or add the sign slogan to the original belief statements. The email's ballot spelling is inconsistent, so only “Kevin Hawkins” is shown pending clarification. No private email address or phone number from the correspondence is included.

## Cloudflare Workers Static Assets deployment

**Final launch pending. Do not connect the proposed domain or enable indexing until final approval.** Bryan has shared a Cloudflare preview at `https://hawk-school-board.pages.dev/`. The repository retains the requested Workers Static Assets configuration; no hosting migration or custom-domain setup is performed by the campaign-content revision.

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

These Markdown files and the source Word documents are not in `public` or the built website output. Only `dist` is served or deployed.

The preview is marked `noindex, nofollow` in HTML and Cloudflare response headers, with crawling disallowed in `robots.txt`. These controls discourage indexing; they are not access control. `hawkinsforschools.org` was proposed by the client but still needs ownership/access confirmation with Kyle. No production domain or canonical URL has been configured. Future use after the election is recorded in `CLIENT-QUESTIONS.md`, not activated on a timer.
