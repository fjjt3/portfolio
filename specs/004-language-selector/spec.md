# 004 · Multilingual Language Selector

**Status:** done

## What it does

Adds a language selector to the portfolio so visitors can view the site in Spanish, English, German, French, or Russian. Changing the language updates the visible interface and portfolio content, including the CV, section headings, labels, and accessibility text.

## Why

The portfolio is intended for recruiters and developers from different countries. Offering the same information in their preferred language makes the site easier to understand and more inclusive.

## Acceptance Criteria

- [x] The visitor can choose Spanish, English, German, French, or Russian from a clearly identified, keyboard-accessible language selector.
- [x] The selected language is applied consistently to all visible site text, including CV content, navigation, buttons, labels, and accessibility text.
- [x] English is used when no saved language preference is available.
- [x] The visitor's language choice is saved and restored on subsequent visits.
- [x] The document's `lang` attribute matches the active language.
- [x] Selecting a language does not break the responsive layout or the existing portfolio links and CV presentation.
- [x] Any text without a translation falls back to English rather than appearing blank.

## Out of Scope

- Machine-translating content at runtime or using a third-party translation service.
- Translating linked external sites or downloadable documents that are not part of the portfolio page.
- Adding right-to-left language support; all five requested languages use left-to-right text.
