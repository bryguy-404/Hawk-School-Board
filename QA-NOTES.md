# Hawkins for Schools verification

## October 6, 2026 — interview embed

- Confirmed the supplied YouTube ID `0cZHzmhVvik`, title, and WSBT-TV publisher using YouTube's oEmbed response. Added the interview below the introduction, an Interview navigation link, and a direct Watch on YouTube link. The supplied beliefs and priorities are unchanged.
- `npm run check` passed with zero errors, warnings, or hints. `npm run build` passed and produced the static page.
- Chromium checks at 320, 390, 768, and 1440 CSS pixels found no page or element overflow. Repeated page-overflow checks at 200% root text size. Inspected phone, tablet, and desktop screenshots.
- Verified skip-link keyboard behavior, visible header-link focus, and Enter moving focus to the interview section. Beliefs and priorities navigation still works.
- Verified lazy loading, the privacy-enhanced embed URL, fullscreen permission, the player title, the referrer policy, and the direct YouTube link. Playback starts after clicking YouTube's Play video button; video time advanced beyond one second with `paused: false` and `readyState: 4`.
- The player remains at least 200 pixels high on narrow phones. The normal player is 16:9. No autoplay or first-party JavaScript was added; YouTube does load third-party scripts and resources inside its iframe.
- No page errors during layout checks. HTML noindex metadata remains present. No custom domain or indexing settings changed.
- Limits: tested desktop Chromium with emulated viewport sizes, not physical devices, Safari, Firefox, or assistive technologies. Playback was checked briefly, not through the full interview.

## September 25, 2026 — original campaign revision

Checked September 25, 2026 against the production build, then repeated the relevant checks after implementing Kevin's afternoon campaign-details email.

## Passed

- **Source fidelity:** Read all non-empty paragraphs in the original Word document, including checking for headers, footers, notes, or comments. Compared its title, section headings, all three complete belief statements, and all eight priorities to `dist/index.html`. Wording, punctuation, and order match after whitespace normalization.
- **Astro and TypeScript:** `npm run check` completed with zero errors, warnings, or hints.
- **Production build:** `npm run build` completed successfully and produced one static page in `dist`.
- **Cloudflare preparation:** `npm run deploy:check` completed successfully with `--dry-run`. Local Wrangler served the static page with HTTP 200 and `X-Robots-Tag: noindex, nofollow`. No deployment was performed.
- **Responsive layout:** Inspected browser screenshots and checked layout at 320, 390, 768, 1024, and 1440 CSS-pixel viewport widths. No horizontal page or element overflow. Priorities remain in source order, switching from two columns to one on phones.
- **Text enlargement:** Checked 200% root text size at 320, 390, 768, and 1440 pixels. Content reflows without horizontal overflow.
- **Navigation:** Clicked all seven non-skip section/top links; every fragment resolved and scrolled to the intended destination. Verified the additional foundation link's URL against its live homepage and About page identifying Kevin Hawkins.
- **Keyboard:** Tab reveals the skip link; Enter moves focus to the main content. Header links have visible 3px focus outlines and Enter moves focus to the correct section. Controls use native links with no JavaScript dependency.
- **Reduced motion:** With the browser's reduced-motion preference enabled, smooth scrolling is disabled and CSS transitions are removed.
- **Contrast:** All text color/background combinations in the revised red/blue palette meet at least 4.5:1. The lowest checked ratio is 5.31:1 (red on the light background); button hover is 7.19:1.
- **Browser health:** No console errors, page errors, failed requests, or external resource requests during the final browser check. Self-hosted fonts load successfully.
- **Supplied assets:** Extracted the existing transparent 2001 × 501 campaign logo from the one-page PDF. The original selfie is preserved; Astro creates responsive WebP variants. All three rendered images (two logo instances and one portrait) load and include alt text and intrinsic dimensions. Desktop, tablet, and phone screenshots were inspected.
- **Email scope:** Read Kevin's latest reply through the connected Gmail account and retrieved attachments from Spark's local cache. Implemented the confirmed name, candidate role, seat, image, artwork, and requested foundation link. Private contact details from quoted correspondence are absent from the website. No email was sent.
- **Output:** No client-side script tags. No client questions, draft email, README, or source Word document in the public build. Font license files are included.
- **Preview metadata:** Supported title and description, viewport, language, favicon, and Open Graph title/description present. No invented domain. HTML noindex metadata, Cloudflare noindex response header, and robots.txt crawl restriction present.

## Testing limits

- Layout and keyboard checks used desktop Chromium with emulated viewport sizes, not physical phones or tablets.
- Safari, Firefox, VoiceOver, and other assistive technologies were not tested. The checks above are not a complete accessibility audit.
- Actual Cloudflare publication, production DNS, HTTPS, and search-engine behavior were intentionally not tested because publication and domain connection are not authorized yet.

## Review status

The campaign revision is ready for review. Kevin's name, candidacy, district/seat, campaign purpose, logo, portrait, and ASAP timing are now supplied. His final wording review, domain ownership/access, final approver, and footer decision remain unresolved. A ballot-name spelling inconsistency is recorded for confirmation; the page uses “Kevin Hawkins” only. The biography and post-election purpose change are deferred. See `CLIENT-QUESTIONS.md`. The updated `CLIENT-EMAIL.md` is saved for review and has not been sent. No custom domain or indexing change is included.
