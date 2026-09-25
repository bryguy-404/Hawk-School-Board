# Hawkins for Schools verification

Checked September 25, 2026 against the production build.

## Passed

- **Source fidelity:** Read all non-empty paragraphs in the original Word document, including checking for headers, footers, notes, or comments. Compared its title, section headings, all three complete belief statements, and all eight priorities to `dist/index.html`. Wording, punctuation, and order match after whitespace normalization.
- **Astro and TypeScript:** `npm run check` completed with zero errors, warnings, or hints.
- **Production build:** `npm run build` completed successfully and produced one static page in `dist`.
- **Cloudflare preparation:** `npm run deploy:check` completed successfully with `--dry-run`. Local Wrangler served the static page with HTTP 200 and `X-Robots-Tag: noindex, nofollow`. No deployment was performed.
- **Responsive layout:** Inspected browser screenshots and checked layout at 320, 390, 768, 1024, and 1440 CSS-pixel viewport widths. No horizontal page or element overflow. Priorities remain in source order, switching from two columns to one on phones.
- **Text enlargement:** Checked 200% root text size at 390, 768, and 1440 pixels. Fixed the priorities heading and list sizing so content reflows without horizontal overflow.
- **Navigation:** Clicked all seven non-skip navigation links; every fragment resolved and scrolled to the intended section or top.
- **Keyboard:** Tab reveals the skip link; Enter moves focus to the main content. Header links have visible 3px focus outlines and Enter moves focus to the correct section. Controls use native links with no JavaScript dependency.
- **Reduced motion:** With the browser's reduced-motion preference enabled, smooth scrolling is disabled and CSS transitions are removed.
- **Contrast:** All text color/background combinations meet at least 4.5:1. The lowest checked ratio is 5.64:1, including the button hover state.
- **Browser health:** No console errors, page errors, failed requests, or external resource requests during the final browser check. Self-hosted fonts load successfully.
- **Output:** No client-side script tags. No client questions, draft email, README, or source Word document in the public build. Font license files are included.
- **Preview metadata:** Supported title and description, viewport, language, favicon, and Open Graph title/description present. No invented domain. HTML noindex metadata, Cloudflare noindex response header, and robots.txt crawl restriction present.

## Testing limits

- Layout and keyboard checks used desktop Chromium with emulated viewport sizes, not physical phones or tablets.
- Safari, Firefox, VoiceOver, and other assistive technologies were not tested. The checks above are not a complete accessibility audit.
- Actual Cloudflare publication, production DNS, HTTPS, and search-engine behavior were intentionally not tested because publication and domain connection are not authorized yet.

## Review status

The draft is ready for content and design review. Public name, role/district/seat, website purpose, contact preferences, domain, deadline, final approver, and any required footer wording still need client confirmation. See `CLIENT-QUESTIONS.md`. The email in `CLIENT-EMAIL.md` is saved for review and has not been sent.
