# Parqie Design System

> Live parking booking and management platform. Drivers find/book a spot in real time; partners (parking lot owners) manage availability and earnings from the other side.

This skill packages Parqie's brand and UI fundamentals — colors, typography, logos, button variants, and hi-fi UI kit recreations — for designing prototypes, marketing pages, decks, partner dashboards, and the driver app.

---

## Sources

- **Figma:** "Design System v2.fig" (mounted virtual filesystem), 1 page, 2 frames: `General` (logos + icon variants) and `Web` (buttons, nav, footer, type ladder).
- **Language:** Romanian (`Parcheaza`, `Devino partener`, `Contul meu`, `Ai nevoie de ajutor?`). Designs assume Romanian copy by default; English fallbacks are fine for mockups but should be flagged.
- **No codebase was attached** — the UI kits below are recreated against Figma only. Behavior is best-guess based on a parking-booking + partner-dashboard pattern.

---

## Index

| File | What it contains |
| --- | --- |
| `colors_and_type.css` | Brand + semantic CSS variables, typography utility classes |
| `assets/` | Logos (mark + wordmark SVG), Google Play / App Store badges |
| `preview/` | Per-token preview cards used by the Design System tab |
| `ui_kits/web/` | Marketing site hi-fi recreation (driver landing) |
| `ui_kits/driver-app/` | Mobile driver experience (search, book, navigate) |
| `ui_kits/partner/` | Partner dashboard for lot owners |
| `SKILL.md` | Cross-compatible skill header for Claude Code |

> **Substitutions flagged for the user:**
> 1. **Inter** is loaded from Google Fonts (Figma uses Inter directly — confirm no licensed/custom variant is intended).
> 2. **UI icons** — Figma ships only the brand `p` mark, no icon set. UI glyphs use **Lucide** (CDN) as the closest stylistic match. Please confirm or supply a custom icon library.
> 3. **Driver app + Partner dashboard** — Figma only contains the marketing-web frame. Both are pattern extensions of the established visual vocabulary; please review and direct iteration.

---

## Brand at a glance

**Parqie** is two products in one company: a **driver app** for finding and booking parking with live availability, and a **partner platform** for the people who own the lots. The visual identity is built around motion and certainty — find a spot, book it, drive in, no friction. The `p` mark is geometric, near-square, with negative-space quadrants suggesting a top-down view of parking bays.

**Tagline territory:** "Park in seconds." "Live availability, zero loops around the block."

---

## CONTENT FUNDAMENTALS

**Language.** Romanian first. Sentence case throughout, never ALL CAPS for body or headings. Verbs are imperative and direct: `Parcheaza`, `Descarca aplicatia`, `Devino partener`. No exclamation marks unless on a celebratory state ("Booking confirmed!"). No emoji.

**Voice.** Helpful, plainspoken, slightly utilitarian. We tell drivers exactly what to do and how long it will take. We don't oversell — "Available now" is more confidence-building than "Amazing parking near you!" Pronoun: prefer the implicit you-form via imperative verbs (`Parcheaza`) rather than `Tu` / `Dumneavoastra`. For partners, slightly more formal: `Devino partener`, `Contul meu`.

**Specific examples (from Figma):**
- Nav: `Parcheaza` / `Devino partener` / `Contul meu` / `Despre noi`
- Primary CTA: `Descarca aplicatia`
- Footer headers (Title Case, bold): `Despre noi`, `Legal`, `Descarca aplicatia`, `Ai nevoie de ajutor?`
- Footer links (Sentence case): `Cum lucreaza?`, `Ajutor`, `Contacteaza-ne`, `Job-uri`, `Termeni`, `Privacy`, `Locatii`, `Cookies`, `Sitemap`
- Type-ladder names use English in the docs (`H1 - Page titles. One per page, max.`) but UI copy is Romanian.

**Casing.** Page titles: Sentence case. Section headers: Sentence case. Buttons: Sentence case (`Descarca aplicatia`, never `Descarca Aplicatia`). Status badges: Sentence case ("Available," "Full"). Hyperlinks in footer: Sentence case.

**Numbers, prices, time.** RON suffix (e.g. `12 RON/h`). 24-hour time. `min` for minutes. Dates `DD.MM.YYYY`.

**No emoji. No hand-drawn doodles. No exclamatory tone.** Confidence and clarity over enthusiasm.

---

## VISUAL FOUNDATIONS

**Palette.** Two-tone driven: Dark Green `#053333` and Lime `#ACFF78`. The lime is the brand's signature — it's reserved for primary CTAs, the brand glyph, and active/positive states. Off-white `#F9F9F9` is the ambient page surface; pure `#FFFFFF` cards sit on it. Near-black `#191919` is for body text. Red `#FF2B3A` is destructive only. Grey `#D3D4D8` is disabled state and hairline borders. **Avoid gradients, blurs, and translucent fills** — the brand reads as flat, confident, color-blocked.

**Typography.** Inter throughout — Regular / Medium / Semibold / Bold. Tight scale: 48 (Display), 32 (H1, Bold), 24 (H2, Semibold), 18 (H3, Semibold), 16 (Body, Regular), 14 (Body Small / Nav / Buttons), 12 (Caption, Medium). Buttons are 14px Bold. Body small is 14/20. No serif, no condensed, no display alternates.

**Backgrounds.** Solid color blocks. Hero/nav/footer use Dark Green as a full-bleed band. Body content sits on off-white. **No imagery as background, no gradients, no patterns, no textures, no grain.** When the background changes, it's a hard edge, not a fade.

**Animation.** Restrained. Use 200ms ease-out for hover/state transitions; 320ms cubic-bezier(.2,.9,.1,1) for entrances. No bounces, no spring overshoots, no parallax. The lime's vibrancy carries the energy — motion stays utilitarian. Map pin drops can use a single bounce. Loading: a thin lime progress bar, no spinners with personality.

**Hover states.** Solid buttons darken ~6% (lime → slightly desaturated lime; dark green → black). Stroke buttons fill with their stroke color. Nav links shift to lime on hover — never underline. Cards lift via shadow `0 12px 32px rgba(5,51,51,0.12)` and translate up 2px.

**Press states.** Scale 0.98, no color change. 80ms duration.

**Focus states.** 2px lime ring with 2px white offset on light bg; 2px lime ring with 2px dark-green offset on dark bg. Always visible, never `outline:none`.

**Borders.** 2px solid for buttons (it's part of the silhouette), 1px hairline (`--pq-grey`) for cards/inputs/dividers. Never dashed in production (the dashed purple boxes in Figma are designer guides).

**Shadows / elevation.** Three-step system. `--shadow-sm` is barely-there for resting cards. `--shadow-md` for hovered cards and dropdowns. `--shadow-lg` for modals and popovers. Lime shadow `--shadow-lime` only for the primary CTA on hover, sparingly. **No inner shadows. No glow.**

**Capsules vs gradients for CTAs.** Capsule wins. Every primary action is a 20px-radius pill with bold 14px label. We never wrap CTAs in a gradient frame. Protection gradients (the dark-to-transparent overlay you see on imagery) are not used — we either show an image full-bleed, or we don't.

**Layout rules.** 1366px reference width for web. Nav and footer are full-bleed (1366) with content padded to ~116px left/right. Body content max-width ~1140px. Mobile reference is 390px (iPhone). Top-level vertical rhythm uses 64/48/32/24/16. Cards have 24px internal padding.

**Transparency / blur.** Almost none. The bottom-sheet on the driver app uses `backdrop-filter: blur(20px)` over the map only, otherwise opaque surfaces. No glassmorphism elsewhere.

**Imagery treatment.** Photographic imagery is rare. When used, it's full-bleed map tiles (street view), clean product photos of partner lots, or app-screen mockups. No filters, no warm/cool grading — show it as it is. **Never** AI-glossy 3D renders.

**Corner radii.** Buttons `15px` (stroke variants) or `20px` (filled). Inputs `15px`. Cards `12px`. Pills `999px`. Logo badge dot is a circle. Map pins use the brand `p` mark in a rounded-square (12px).

**Cards.** White surface, 12px radius, 1px `--pq-grey` border OR `--shadow-sm` (pick one, not both). 24px padding. Hover: shadow upgrades to `--shadow-md` and `translateY(-2px)`. Active card (selected location): 2px dark-green border, no shadow.

**Dividers.** 1px `--pq-grey`. No double rules. No dotted.

**Iconography line weight.** 1.5px stroke, rounded caps, 24×24 viewbox. See ICONOGRAPHY.

---

## ICONOGRAPHY

**Status of source icons:** the Figma file does **not** ship a complete icon set — it shows the brand `p` mark at multiple sizes/colors but no UI glyphs (search, location pin, clock, car, settings, etc).

**Substitution:** UI glyphs use **[Lucide](https://lucide.dev)** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) loaded from CDN — 1.5px stroke, rounded line caps, 24×24, which matches the Parqie geometric/clean feel better than Heroicons (sharper) or Material (filled). **This is a substitution; the user should confirm or supply a custom set.**

**Format:** SVG only. Inline SVG when you need to recolor via `currentColor`; `<img src>` is fine for the brand mark. **No icon font, no PNG icons, no emoji, no unicode glyphs as icons.**

**Sizes.** 16, 20, 24, 32. Inline-with-text uses 20. Buttons with leading icon use 20. Map pins use 32 inside a 48px rounded badge.

**Color rules.** Icons inherit `currentColor`. On dark surfaces they're `--fg-on-dark`; on light surfaces they're `--fg-2`. The lime is reserved for the brand mark and accent statuses ("Available now") — never decorative.

**Brand mark vs UI icons.** The `p` glyph (`assets/logo-mark.svg`) and wordmark (`assets/logo-wordmark.svg`) are brand assets, not part of the UI icon set. Use them for logos and map pins only.
