---
name: Francisco Jiménez — Portfolio
description: Backend-engineer portfolio built on the Midnight Engineer's Desk: indigo signal on an ink-black canvas.
colors:
  primary: "#6366f1"
  primary-bright: "#818cf8"
  primary-soft: "#a5b4fc"
  canvas: "#09090b"
  text-primary: "#f4f4f5"
  text-body: "#d4d4d8"
  text-muted: "#a1a1aa"
  emphasis: "#a1a3b2"
  border-subtle: "#27272a"
  border-strong: "#3f3f46"
  border-depressed: "#52525b"
  border-hover: "#71717a"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
  label-medium:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1
rounded:
  lg: "8px"
  full: "9999px"
spacing:
  gutter: "1.5rem"
  section: "6rem"
  block: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-bright}"
  button-outline:
    textColor: "{colors.text-body}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-action:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.label-medium}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-action-outline:
    textColor: "{colors.text-body}"
    typography: "{typography.label-medium}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  nav-link:
    textColor: "{colors.text-muted}"
    typography: "{typography.body-small}"
---

# Design System: Francisco Jiménez — Portfolio

## Overview

**Creative North Star: "The Midnight Engineer's Desk"**

This is a quiet work surface after hours: a near-black canvas, one indigo signal, and a serif that speaks in a low, certain voice. The system is calm, precise, and understated. Nothing shouts, nothing is decorated for its own sake — depth and credibility come from typographic contrast and from the engineering record the content carries, never from ornament.

The identity lives in a deliberate split. Newsreader, a literary serif, carries everything that has a voice: the hero line, section titles, the brand mark, the avatar initials, and italicized emphasis. Inter, a neutral grotesque, carries everything functional: navigation, buttons, metadata, and body copy. The two never swap roles, which is what keeps the page feeling like a considered document rather than a template.

Structurally the page is a single editorial column over a flat, ink-black field. Large surfaces are not carded; they are separated by full-width hairlines. Color is nearly monochrome — zinc for nearly everything — with a single indigo reserved for action and emphasis. Depth is a response to state, not an ambient quality: at rest, everything is flat, with one deliberate exception — a soft indigo aura that rises behind the hero and nowhere else.

**Key Characteristics:**
- Ink-black canvas with a one-color indigo signal used on ≤10% of any screen.
- Serif-for-voice, grotesque-for-function; the two never trade places.
- Flat by default; the only shadow is an indigo glow under a hovered primary CTA.
- One ambient indigo aura, hero-only, bleeding up from the top edge.
- Flat, uncarded sections separated by full-width hairlines, not boxes.
- Binary radius language: fully round pills or a barely-rounded 8px, little in between.

## Colors

A near-monochrome zinc system interrupted by exactly one chromatic accent: Signal Indigo. Values come from Tailwind's default zinc and indigo scales; the canvas is re-declared explicitly (`--color-zinc-950: #09090b`).

### Primary
- **Signal Indigo** (#6366f1): The system's only chromatic color. Filled primary CTAs, the brand mark's trailing dot, and the avatar/focus family. Used sparingly so its appearance reads as a signal, not a theme.
- **Signal Indigo (Bright)** (#818cf8): Hover state for indigo fills, the global focus-visible outline (`2px`, offset `2px`), and the brand dot. The activation tone of the accent.
- **Signal Indigo (Soft)** (#a5b4fc): Reserved for inline emphasis inside prose — `strong` runs in this tone (`prose-strong:text-indigo-300`).

### Neutral
- **Ink Black** (#09090b): The page canvas — body background and the fixed navbar at 80% opacity with backdrop blur.
- **Ash** (#f4f4f5): Primary text — headings, brand mark, and hero display. The loudest neutral, and the inherited color for all unstyled copy.
- **Stone** (#d4d4d8): Secondary text — CV subtitle and outlined-button labels.
- **Fog** (#a1a1aa): Muted text — navigation links, metadata, captions, and hero lead.
- **Emphasis Mist** (#a1a3b2): The italicized `em` tone inside CV prose; a faintly cooler step below Fog.
- **Hairline** (#27272a): Section dividers and the navbar border, applied at 50–70% opacity rather than full strength.
- **Edge** (#3f3f46): Outlined-pill button borders at rest.
- **Edge Depressed** (#52525b): Compact outlined-button borders at rest.
- **Edge Bright** (#71717a): Hover borders and the avatar ring (at 60% opacity).

### Named Rules
**The One Signal Rule.** Indigo is the only chromatic color in the system and should occupy no more than ~10% of any given screen. Its rarity is the point — if indigo is everywhere, nothing is signaled.

**The Selection Rule.** Text selection is the one other place indigo is allowed to appear: a 30%-opacity Signal Indigo wash (`selection:bg-indigo-500/30`). It never becomes a background fill.

## Typography

**Display Font:** Newsreader (with Georgia, 'Times New Roman', serif)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif)
**Label/Mono Font:** None distinct — labels use Inter.

**Character:** A literary serif paired with a neutral grotesque. Newsreader gives the page a human, editorial voice; Inter keeps the functional layer legible and unremarkable. The pairing is the identity. Both are loaded from Google Fonts and exposed as `--font-display` and `--font-sans`.

### Hierarchy
- **Display** (500, clamp(3rem, 7vw, 4.5rem), 1.05, tracking -0.025em): The hero headline only. Sans-free, tight, and large enough to own the first viewport.
- **Headline** (500, 2.25rem, tracking -0.025em): Section titles — the name block and top-level CV section headings.
- **Title** (500, 1.5rem, tracking -0.01em): Subsection headings inside the CV prose (rendered at 1.4rem in situ).
- **Body** (400, 1.125rem lead / 0.875rem in prose, line-height 1.65–1.7): Lead paragraphs and CV copy.
- **Body Small** (400, 0.875rem): Navigation links and metadata. Navigation is deliberately regular weight, not label weight.
- **Label** (600, 0.875rem): Pill-button text.
- **Label Medium** (500, 0.875rem): Compact action-button text — the in-page CV buttons sit one step lighter than the hero pills.

### Named Rules
**The Serif-For-Voice Rule.** Newsreader appears only where identity and voice live — hero, section titles, brand mark, initials, and italicized prose. Every functional element is Inter. Never set a button, a nav link, or a label in the serif.

## Layout

A single-column editorial flow, centered, with generous vertical air.

- **Containers:** navbar `max-w-6xl` (72rem); CV content `max-w-5xl` (64rem); hero copy `max-w-3xl` (48rem). All sit on a shared `px-6` (1.5rem) gutter.
- **Vertical rhythm:** top-level sections breathe at `py-24` (6rem); stacked CV blocks are separated by `space-y-20` (5rem) and each block opens under a full-width hairline with `pt-10` (2.5rem).
- **Viewport:** the hero is `min-h-screen` and vertically centered; the CV section is the long scroll after it.
- **Columns:** effectively one. The only multi-column moment is the CV header, where the avatar and text sit side by side from the `sm` breakpoint (640px) up.
- **Breakpoints in use:** `sm` 640px and `md` 768px are the working thresholds (navbar collapse, CV header switch); the hero type ladder steps up through `sm`/`md`.

## Elevation & Depth

This system is flat by default. There are no resting shadows and no ambient lift on any surface. Depth is conveyed four ways instead: tonal contrast (Ink Black canvas against Hairline borders), backdrop blur on the fixed navbar (`bg-zinc-950/80 backdrop-blur-xl`), a single indigo glow that appears under the primary CTA on hover, and one hero-only indigo aura. Elevation is a response to interaction, never a baseline.

### Shadow Vocabulary
- **CTA hover glow** (`0 10px 15px -3px rgb(99 102 241 / 0.25), 0 4px 6px -4px rgb(99 102 241 / 0.25)`): the hover treatment of primary pill buttons only — an indigo-tinted `shadow-lg`.

### Gradient Vocabulary
- **Hero Aura** (`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)`): a single, soft indigo wash bleeding down from the top edge behind the hero. It is the only gradient in the system and appears exactly once per page.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow in the system is the indigo glow beneath a hovered primary CTA — no cards, panels, or navigation receive a resting shadow.

**The Hero Aura Rule.** One ambient indigo glow, hero section only, low-opacity (15%) and edge-anchored. It never migrates to other sections and never becomes a second gradient.

## Shapes

The radius language is deliberately binary. Interactive pills — hero CTAs and the avatar — are fully round (`9999px`). Compact action buttons take a barely-there `rounded-lg` (8px). Everything else is a 1px hairline on a squared surface. Large content surfaces are never carded or rounded; they are separated by full-width hairline rules instead, which keeps the page reading as a document rather than a dashboard of boxes.

## Components

Components are precise and confident: crisp indigo fills or thin, quiet outlines, tight tracking, and hover states that shift color rather than announce themselves.

### Buttons
- **Shape:** hero CTAs are fully round pills (`9999px`); compact in-page actions are barely rounded (`rounded-lg`, 8px).
- **Primary:** Signal Indigo fill, white label, Inter; `font-semibold` (600) at `12px 32px` for pills and `font-medium` (500) at `10px 20px` for compact actions.
- **Hover / Focus:** primary fills lighten to Signal Indigo Bright (#818cf8); the pill CTA also gains an indigo glow (`shadow-lg shadow-indigo-500/25`). All buttons share the global focus ring: `2px solid #818cf8` with `2px` offset.
- **Outline / Ghost:** transparent fill with a 1px Edge border and Stone text (`border-zinc-700` for pills, `border-zinc-600` = Edge Depressed for compact). Hover brightens the border and text (`border-zinc-500` / `border-zinc-400`, text → Ash) with no fill.
- **Transition:** color-only, `transition-colors`/`transition-all` at Tailwind's 150ms default.

### Cards / Containers
- **Corner Style:** none — content is never carded; large surfaces are squared.
- **Background:** Ink Black throughout; separation comes from Hairline top borders (`border-t border-zinc-800/70`), not from fills or shadows.
- **Shadow Strategy:** none at rest (see Elevation & Depth).
- **Internal Padding:** block-level `pt-10` under each hairline; no box padding.

### Prose Body
CV sections are rendered from Markdown into a `.prose` container. With `@tailwindcss/typography` installed (registered via `@plugin` in `global.css`), the `prose-*` modifiers are active: `prose-invert` maps the plugin's base palette to the dark canvas, and per-element modifiers set the tones — paragraphs and list items in Fog (`prose-p:text-zinc-400`, `prose-li:text-zinc-400`), `strong` in Signal Indigo Soft (`prose-strong:text-indigo-300`), and `h3` in Ash (`prose-h3:text-zinc-100`). A small set of hand-written rules (higher specificity than the plugin's `:where()` selectors) then overrides the defaults.
- **Lists:** disc markers, nested lists switch to circle, left padding `1.5rem`.
- **Paragraphs:** line-height `1.7`.
- **Italic emphasis (`em`):** Newsreader, italic, `1.05em`, in Emphasis Mist (#a1a3b2).
- **Sub-headings (`h3`):** Newsreader, `1.4rem`, weight 500, tracking `-0.01em`, top margin `1.75rem` (none when first).

### Inputs / Fields
None exist yet. If added, follow the outline-button language: Ink Black fill, 1px Edge border, `rounded-lg`, and the shared indigo focus ring — never a resting shadow.

### Navigation
- **Style:** a fixed full-width bar — Ink Black at 80% opacity with `backdrop-blur-xl`, closed by a 1px Hairline bottom border (`border-zinc-800/50`).
- **Contents:** the serif brand mark left ("Francisco" in Ash with an indigo trailing dot), Inter links right at `text-sm font-normal` (Body Small), Fog by default, brightening to Ash on hover. External links carry a small inline arrow icon.
- **Mobile:** links collapse into a hamburger (three Ash bars) that reveals a stacked panel below the bar; the trigger toggles to an X via rotation and sets `aria-expanded`.

### Avatar / Identity Badge
A fully round, 7rem initials badge with a 60%-opacity Edge Bright ring (`border-zinc-500/60`) and Newsreader initials in Ash. The one place a serif is allowed to act as a graphic element.

## Do's and Don'ts

### Do:
- **Do** keep Signal Indigo to ≤10% of a screen — CTAs, the brand dot, selection wash, focus rings, the hero aura, and one hover glow.
- **Do** set all identity and voice in Newsreader (hero, section titles, brand, initials, italic prose) and everything functional in Inter.
- **Do** separate content with full-width Hairline borders rather than cards, boxes, or resting shadows.
- **Do** apply the shared focus ring everywhere interactive: `outline: 2px solid #818cf8; outline-offset: 2px`.
- **Do** keep the radius binary — fully round pills, 8px compact actions; avoid intermediate radii.
- **Do** confine the hero aura to the hero, at 15% opacity, edge-anchored.

### Don't:
- **Don't** introduce a second chromatic color, and don't add any gradient beyond the single hero aura — no gradient buttons, chips, text, or section fills.
- **Don't** add resting shadows to cards, panels, or the navbar; the only shadow is the primary-CTA hover glow.
- **Don't** card or heavily round large content surfaces — keep them squared and hairline-separated.
- **Don't** set buttons, nav links, or labels in the serif, and don't run body copy in Newsreader.
- **Don't** reuse Signal Indigo as a large fill for backgrounds or banners; it stays an accent.
