# 005 · Retro-Terminal Visual Identity — Plan

## Approach

Keep the ink-black and indigo palette, but let the workstation reference lead the
hero instead of relying on small decorative cues. Frame the introduction as a
terminal window, use IBM Plex Mono for the large translated headline and controls,
and add a low-contrast technical grid behind it. Keep the CV's content and editorial
reading hierarchy intact.

## Implementation

1. Keep IBM Plex Mono and the translated kicker already wired for all five locales.
2. Frame the hero copy and links in a squared terminal window with restrained
   workstation chrome.
3. Promote the hero headline to monospace and introduce a visible `>` prompt.
4. Make the hero actions squared and monospace to match the terminal treatment.
5. Add a subtle indigo grid behind the hero; preserve keyboard focus and reduced
   motion behavior.
6. Update `DESIGN.md`, `.impeccable/design.json`, and this feature's acceptance
   criteria to match the actual design.
7. Verify all five locales, desktop/mobile layout, and the production build.

## Design Decisions

- **Terminal window, not a full-site skin** — A clear, framed workstation makes the
  era legible in the first viewport while the CV remains easy to read.
- **Black and indigo only** — Keep the site's existing palette; use geometry and
  monospaced type, rather than neon or gradients, to signal the 1980s.
- **Strongest cue in the hero** — The frame, headline, and prompt are the memorable
  element; the grid and section markers remain supporting details.
- **Localized content stays real content** — Kicker and headline continue to follow
  the selected language; window chrome is decorative and hidden from assistive tech.

## Risks

- **Long translations wrap differently** — Check all five locales at mobile and
  desktop widths.
- **The stronger monospace treatment could reduce reading comfort** — Restrict it
  to the short hero content and controls; keep descriptions and CV prose in Inter.
