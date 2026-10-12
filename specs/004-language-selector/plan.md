# 004 · Multilingual Language Selector — Plan

_How the feature described in `spec.md` is implemented, obeying project architecture._

## Approach

Add lightweight, typed locale data for Spanish (`es`), English (`en`), German (`de`), French (`fr`), and Russian (`ru`). Keep translations in the project and use the existing Astro and TypeScript stack without adding a UI library or translation service.

Provide a visible language selector in the shared page layout. Apply the selected locale to all interface and CV content, and update the document's `lang` attribute. English is the default locale, as specified in `spec.md`. Persist explicit visitor selections in browser storage, while ensuring the page still renders in English when browser storage is unavailable or a saved locale is invalid.

## Implementation

1. Identify all user-visible text in the current page, reusable components, and CV data.
2. Define typed locale identifiers and corresponding translation data for all five languages, including the CV content and accessible labels.
3. Replace hard-coded user-facing text with lookups from the active locale, using English as the fallback for missing translations.
4. Add an accessible, keyboard-operable language selector with each language named in its own language.
5. Restore and persist the visitor's language preference; keep the server-rendered page usable in English and handle browser storage failures without breaking language selection.
6. Set the document's `lang` attribute from the active locale.
7. Check all five languages at mobile and desktop widths, and verify existing links and CV layout remain intact.

## Decisions

- **English as the default and fallback** — Follows the feature acceptance criteria and provides a consistent fallback for untranslated content.
- **Local translation data** — Avoids external services, runtime network requests, and unnecessary dependencies.
- **Persist explicit selections** — Uses browser storage so the visitor's choice carries across visits, with an English fallback if storage is unavailable or contains an unsupported value.

## Risks

- **Translations drift from the Spanish source** — Keep equivalent locale entries together and review all five versions when CV or interface copy changes.
- **Browser storage is unavailable** — Treat persistence as best-effort; the page must still work in English or with the current in-memory selection.
- **Longer translated text affects layout** — Verify translated content at mobile and desktop widths and allow labels and CV text to wrap naturally.
