# 001 · CV-Style Portfolio with Social & Project Links — Plan

## Approach

Implement a CV-styled UI layout integrating a PDF reader or viewer component to consume CV data from `public/docs/cv.pdf` or `docs/cv.pdf`.

Build reusable UI components for the header (personal info, contact, GitHub/LinkedIn links), experience, education, and skills sections, alongside a prominent "Projects" action button.

## Implementation

1. **Folder Setup & PDF Support:**
   - Create the `/docs` (or `/public/docs`) folder and place `cv.pdf` inside.
   - Configure a PDF processing/rendering library suitable for the project stack (e.g., `pdfjs-dist`, `react-pdf`, or an equivalent viewer).

2. **CV & Social Link Components:**
   - Modify the main page component to display the CV layout.
   - Build navigation/action buttons for LinkedIn, GitHub, and the "Projects" redirect.

3. **Projects Link (Phase 1):**
   - Point the "Projects" section button directly to the user's GitHub profile repository page.

4. **Styling & Responsiveness:**
   - Apply clean typography, structured layout columns, and ensure mobile responsiveness.

## Decisions

- **Temporary Projects Redirection to GitHub:** — Chosen to deliver immediate value without inflating the initial scope.
- **Static Asset Placement:** — Storing the PDF in a `/docs` directory to keep source documents organized.

## Risks

- **PDF Parsing/Rendering Artifacts:** — Rendering text directly from PDFs can cause formatting issues depending on the library used.
  - *Mitigation:* Use a reliable PDF canvas renderer or a structured JSON fallback if native HTML rendering is required.