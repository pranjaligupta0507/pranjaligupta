## Goals
Cut the desperation, make every section inline-editable, consolidate contact, beef up the case studies, and make Work the centerpiece of the homepage.

## 1. Editable everything (foundation)
Add a tiny client-side editing layer used across the site:
- `src/components/Editable.tsx` — wraps any text node. Shows a small pencil on hover (only when "Edit mode" is on). Click → contentEditable. Saves to `localStorage` keyed by an `id` prop. Falls back to the default children.
- `src/components/EditModeToggle.tsx` — a small floating button (bottom-right) toggling a global Zustand-free context (`EditModeProvider`). Persisted in localStorage.
- Wrap the app in `EditModeProvider` in `src/routes/__root.tsx`.

Every headline, paragraph, metric label, case-study field becomes `<Editable id="home.hero.title">…</Editable>`. Images already editable via `ProfilePhoto`; extend the same pattern for case-study covers (`EditableImage` saves a data URL to localStorage).

## 2. Homepage rewrite (`src/routes/index.tsx`)
- Trim hero. New copy:
  - Eyebrow: "Pranjali Gupta · Product Designer · Bangalore"
  - Headline: "I think in **products**, I design for *people*."
  - Lede: "9.5+ years designing the kind of products thousands of professionals rely on every day — across enterprise SaaS, fintech and B2B. Product thinking, grounded in research, tied to outcomes that move the business."
- Remove "Intuit, Deloitte, KPMG" name-drop in hero (keep it on About).
- **Work moves up**: right after hero, before impact strip. Section heading becomes humble: "Selected work" / "A couple of projects I've been close to." Sub: "Tap a tile for the short version. Open it for the full story."
- Keep impact strip but move below Work.
- Drop the bottom CTA's "complicated and human" bravado → "If something here resonates, say hi."

## 3. About page (`src/routes/about.tsx`)
- Delete the entire "Nine and a half years, four chapters" timeline (resume-y).
- Replace with one short narrative block + a compact "Where I've spent my time" line (Intuit · Deloitte · KPMG, no dates, no role ladder).
- Update the closing line: "Based in Bangalore. Curious about the next decade of B2B and fintech — where thoughtful design decides which parts of work humans get to keep."
- Keep Toolkit + Recognition (still useful, not desperate).
- Remove "Want the rest of the story over a 30-min call?" → simpler: "More on LinkedIn →" linking to the new URL.

## 4. Contact (`src/routes/contact.tsx`) — single, embedded
- One block, not three cards.
- Email: pranjaligupta0507@gmail.com
- Phone: +91 7058 512 267
- LinkedIn: `https://www.linkedin.com/in/pranjali-gupta-5a1234110/` (the user's own — replace the wrong handle in `SiteFooter.tsx` too)
- Embed LinkedIn via a styled card (LinkedIn does not allow iframe embed of profiles, so I'll render a rich preview card linking out — name, headline, "View on LinkedIn" button. I'll note this in chat.)
- Remove duplicate contact CTAs across the site (footer keeps only LinkedIn + email, no phone duplicated everywhere).

## 5. Case studies — senior-level rewrite
Both `src/routes/work.payroll-compliance.tsx` and `work.supply-demand.tsx` get restructured into a real storytelling spine:
1. **Context** — the business, the user, the stakes (numbers).
2. **The problem I was handed** — vs. the real problem I uncovered.
3. **Discovery** — what I did, who I talked to, what I learned (1–2 quotes).
4. **Framing & principles** — the bets I made and why.
5. **The design** — key flows with annotated callouts (image + caption).
6. **Trade-offs** — what I cut and why (signals seniority).
7. **Outcome** — measurable lift + qualitative shifts.
8. **Reflection** — what I'd do differently.

Add a top meta strip: Role · Team · Timeline · Tools · **Figma prototype** link (placeholder URL the user can edit inline, since I don't have it).

Pull the real DesignFolio narrative bullets into each section so it isn't generic.

## 6. Footer / nav cleanup
- Remove any "Open to work" / "Hiring" / "Looking for roles" copy anywhere it appears.
- Footer: name, one-line tagline, LinkedIn (correct URL), email. Nothing else.

## 7. Tone pass
Search & rewrite: "taming complexity", "complicated and human", "delight", "dread", "open to", "hiring", "transitioning". Replace with calm, specific, humble language.

## Technical notes
- Editable persistence is localStorage only (per-browser). I'll add a small "Export edits" button in the edit toggle so you can copy/paste the JSON back to me to bake into code permanently.
- LinkedIn iframe embed of a personal profile isn't supported by LinkedIn — I'll render a styled profile card that links out, which is the standard pattern.
- No backend changes; everything stays frontend.

## Out of scope
- Cloud/auth (not requested).
- Replacing case-study cover art (kept; editable via upload).
