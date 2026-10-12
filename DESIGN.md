---
name: Francisco Jiménez — Portfolio
description: Backend-engineer portfolio built on the Midnight Engineer's Desk: restrained retro-terminal details, indigo signal, and an ink-black canvas.
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
  terminal:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  terminal-display:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.06em"
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
    typography: "{typography.terminal}"
    rounded: "2px"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-bright}"
  button-outline:
    textColor: "{colors.text-body}"
    typography: "{typography.terminal}"
    rounded: "2px"
    padding: "12px 24px"
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

This is an engineer's workstation after hours: an ink-black canvas, one indigo signal, and a terminal window that makes the late-eighties reference immediately legible. The hero is framed like a compact console, with IBM Plex Mono, a `>` prompt, squared controls, and a low-contrast technical grid. The reference is clear but restrained: no arcade imagery, flashing effects, or added accent colors.

The identity lives in a deliberate split. IBM Plex Mono carries the terminal headline, prompt, and hero controls. Newsreader remains in the brand mark and CV identity; Inter carries navigation, supporting copy, and the CV body. This contrast gives the first viewport a distinct workstation character while keeping the long-form CV calm and readable.

Structurally the hero is a framed terminal window over a subtle indigo grid; the CV below remains a single editorial column with full-width hairlines. Color is nearly monochrome — zinc for nearly everything — with indigo reserved for the prompt, status signal, and actions. The grid and frame create the workstation silhouette without a second accent color or a full-site skin.

**Key Characteristics:**
- Ink-black canvas with a one-color indigo signal.
- A framed terminal hero, technical grid, monospace headline, and `>` prompt.
- Newsreader for the brand/CV identity; Inter for navigation and reading copy.
- CV remains flat and document-like, with full-width hairlines.
- Terminal typography leads in the hero; the CV body remains editorial and legible.

## Colors

A near-monochrome zinc system interrupted by exactly one chromatic accent: Signal Indigo. Values come from Tailwind's default zinc and indigo scales; the canvas is re-declared explicitly (`--color-zinc-950: #09090b`).

### Primary
- **Signal Indigo** (#6366f1): The system's only chromatic color. Filled primary CTAs, the brand mark's trailing dot, and the avatar/focus family. Used sparingly so its appearance reads as a signal, not a theme.
- **Signal Indigo (Bright)** (#818cf8): Hover state for indigo fills, the global focus-visible outline (`2px`, offset `2px`), and the brand dot. The activation tone of the accent.
- **Signal Indigo (Soft)** (#a5b4fc): Reserved for inline emphasis inside prose — `strong` runs in this tone (`prose-strong:text-indigo-300`).

### Neutral
- **Ink Black** (#09090b): The page canvas — body background and the fixed navbar at 80% opacity with backdrop blur.
- **Ash** (#f4f4f5): Primary text — headings, brand mark, and terminal headline. The loudest neutral, and the inherited color for all unstyled copy.
- **Stone** (#d4d4d8): Secondary text — CV subtitle and outlined-button labels.
- **Fog** (#a1a1aa): Muted text — navigation links, metadata, captions, and hero lead.
- **Emphasis Mist** (#a1a3b2): The italicized `em` tone inside CV prose; a faintly cooler step below Fog.
- **Hairline** (#27272a): Section dividers and the navbar border, applied at 50–70% opacity rather than full strength.
- **Edge** (#3f3f46): Terminal frame and outlined-button borders at rest.
- **Edge Depressed** (#52525b): Compact outlined-button borders at rest.
- **Edge Bright** (#71717a): Hover borders and the avatar ring (at 60% opacity).

### Named Rules
**The One Signal Rule.** Indigo is the only chromatic color in the system. Concentrate it in the terminal prompt, grid, and actions so its rarity continues to signal.

**The Selection Rule.** Text selection is the one other place indigo is allowed to appear: a 30%-opacity Signal Indigo wash (`selection:bg-indigo-500/30`). It never becomes a background fill.

## Typography

**Display Font:** Newsreader (with Georgia, 'Times New Roman', serif)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif)
**Terminal Font:** IBM Plex Mono (with SFMono-Regular, Consolas, monospace), used for the hero headline, controls, prompts, and short technical metadata.

**Character:** IBM Plex Mono gives the hero its unmistakable console voice; Newsreader gives the brand and CV identity an editorial counterpoint; Inter keeps navigation and reading copy legible. The fonts are exposed as `--font-display`, `--font-sans`, and `--font-mono`.

### Hierarchy
- **Display** (500, clamp(3rem, 7vw, 4.5rem), 1.05, tracking -0.025em): CV identity and section titles.
- **Headline** (500, 2.25rem, tracking -0.025em): Section titles — the name block and top-level CV section headings.
- **Title** (500, 1.5rem, tracking -0.01em): Subsection headings inside the CV prose (rendered at 1.4rem in situ).
- **Body** (400, 1.125rem lead / 0.875rem in prose, line-height 1.65–1.7): Lead paragraphs and CV copy.
- **Body Small** (400, 0.875rem): Navigation links and metadata. Navigation is deliberately regular weight, not label weight.
- **Terminal** (400, 0.875rem, IBM Plex Mono): Kicker and short technical metadata.
- **Terminal Display** (500, clamp(1.875rem, 5vw, 3.75rem), IBM Plex Mono): Translated hero headline.
- **Label** (600, 0.875rem): General action text.
- **Label Medium** (500, 0.875rem): Compact action-button text for the in-page CV links.

### Named Rules
**The Terminal-For-Hero Rule.** IBM Plex Mono leads the framed hero: headline, prompt, and actions. Inter handles supporting copy and navigation; Newsreader remains in the brand and CV identity.

## Layout

A framed terminal hero followed by a single-column editorial CV, with generous vertical air.

- **Containers:** navbar `max-w-6xl` (72rem); terminal window `max-w-5xl` (64rem); CV content `max-w-5xl` (64rem). All use a shared responsive gutter.
- **Vertical rhythm:** top-level sections breathe at `py-24` (6rem); stacked CV blocks are separated by `space-y-20` (5rem) and each block opens under a full-width hairline with `pt-10` (2.5rem).
- **Viewport:** the terminal window is vertically centered in a `min-h-screen` hero; the CV section is the long scroll after it.
- **Columns:** effectively one. The only multi-column moment is the CV header, where the avatar and text sit side by side from the `sm` breakpoint (640px) up.
- **Breakpoints in use:** `sm` 640px and `md` 768px are the working thresholds (navbar collapse, CV header switch); the hero type ladder steps up through `sm`/`md`.

## Elevation & Depth

The CV is flat by default. The hero terminal window has a thin Edge border and a quiet indigo grid behind it; the fixed navbar retains its backdrop blur. No resting shadows or motion are needed to create the workstation effect.

### Shadow Vocabulary
- **CTA hover glow:** none. The hero primary CTA changes to Signal Indigo Bright on hover.

### Background Vocabulary
- **Hero Grid:** a low-contrast 48px indigo line grid, masked at the top and bottom edges behind the terminal window.
- **Hero Aura** (`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent)`): a soft indigo wash behind the hero.

### Named Rules
**The Terminal Frame Rule.** The hero alone uses a bordered terminal window; the CV remains unboxed and document-like.

## Shapes

The hero terminal window and its controls use squared corners. CV action buttons retain their compact 8px radius; CV sections are separated by full-width hairline rules.

## Components

Hero controls are squared, monospaced, and keyboard-visible. CV actions keep the existing compact outline/fill treatment.

### Buttons
- **Shape:** hero CTAs are squared (`rounded-sm`); compact in-page actions retain `rounded-lg` (8px).
- **Primary:** Signal Indigo fill, white label, IBM Plex Mono; `font-medium` at `12px 24px`.
- **Hover / Focus:** primary fills lighten to Signal Indigo Bright (#818cf8). All buttons share the global focus ring: `2px solid #818cf8` with `2px` offset.
- **Outline / Ghost:** transparent fill with a 1px Edge border and Stone text; hero social links are squared and monospaced.
- **Transition:** color-only, `transition-colors`/`transition-all` at Tailwind's 150ms default.

### Cards / Containers
- **Corner Style:** only the hero terminal window is framed; it uses a 1px Edge border and square corners.
- **Background:** Ink Black throughout; the terminal window uses a near-opaque canvas fill. CV sections use Hairline top borders (`border-t border-zinc-800/70`).
- **Shadow Strategy:** none at rest (see Elevation & Depth).
- **Internal Padding:** terminal window has responsive inset padding; CV sections use block-level `pt-10` under each hairline.

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
- **Do** use indigo as the only chromatic signal, including the hero grid and prompt.
- **Do** use IBM Plex Mono for the hero headline, prompt, and hero controls; keep the CV body in Inter.
- **Do** separate content with full-width Hairline borders rather than cards, boxes, or resting shadows.
- **Do** apply the shared focus ring everywhere interactive: `outline: 2px solid #818cf8; outline-offset: 2px`.

### Don't:
- **Don't** introduce a second chromatic color, scanlines, or arcade decoration.
- **Don't** frame or card the CV; the terminal window is a hero-only treatment.
- **Don't** run supporting copy or CV prose in IBM Plex Mono.
- **Don't** reuse Signal Indigo as a large fill for backgrounds or banners; it stays an accent.
