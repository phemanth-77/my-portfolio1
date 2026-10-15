# Unique Portfolio Redesign Plan

## Objective

Transform the current portfolio from a polished but familiar personal-site template into a recognizable, recruiter-focused personal brand built around Hemanth’s specific advantage: connecting human needs, business value, and digital systems.

The redesign will use a **“strategy dossier”** direction by default because the user did not select another option. It should feel like a premium strategy casebook rather than a generic developer portfolio: editorial, analytical, confident, and personal without becoming flashy or difficult to scan.

## Success Criteria

- A visitor can understand within the first viewport who Hemanth is, what roles he is pursuing, and what makes his perspective different.
- The site has one memorable visual and conceptual signature: the **HVD Method** (Human insight × Value × Digital systems).
- Project work reads as evidence of thinking, not just a gallery of screenshots and technology tags.
- The visual system feels cohesive and custom across every section instead of accumulating one-off style overrides.
- Recruiters can quickly scan education, interests, strengths, selected work, LinkedIn, GitHub, and the printable profile.
- Desktop, tablet, and mobile layouts remain fully usable; interactions work with keyboard input and reduced-motion preferences.
- The app builds and type-checks successfully with the existing toolchain.

## Product Direction

### Primary audience

Recruiters and hiring managers considering Hemanth for internships or early-career roles in:

- Business analysis
- Product or project management
- Strategy and operations
- Technology management
- Entrepreneurship-oriented teams

Clients and collaborators remain a secondary audience through project links and the contact section.

### Brand positioning

Use this core idea throughout the site:

> Hemanth turns ambiguity into direction by connecting people, business, and technology.

Keep claims grounded in the current content. Do not invent employers, quantified results, testimonials, awards, dates, or professional titles.

### Visual direction

- **Format:** premium strategy dossier / editorial casebook
- **Palette:** deep ink green, warm paper, aged brass, charcoal text, muted sage
- **Typography:** Source Serif 4 for high-level editorial headlines; DM Sans for body and controls; DM Mono for labels, numbers, and dossier metadata
- **Geometry:** fine rules, registration marks, circles, coordinates, numbered case-file labels, and the existing HVD orbit motif
- **Motion:** restrained reveals, line sweeps, and diagram motion only; no custom cursor, large parallax, or gimmicky effects
- **Imagery:** retain the supplied portrait and Ludo Zone screenshot; keep the existing custom-generated project artwork for projects without supplied screenshots

## Information Architecture

Keep the site as a single-page React application with anchored navigation. Use the following order:

1. **Dossier cover / hero**
2. **Profile / about**
3. **HVD Method**
4. **Selected case files**
5. **Operating principles / approach**
6. **Career direction and education**
7. **Contact**
8. **Printable profile and footer**

Remove the standalone generic “three pillars” section if its content duplicates the HVD Method. Fold its best content into the HVD Method and operating principles so the page is shorter and more distinctive.

## Detailed Experience

### 1. Dossier cover / hero

Replace the generic hero composition with a strategy-cover layout.

- Keep the compact wordmark and navigation.
- Add a left margin rail with dossier metadata such as `PORTFOLIO / 2026`, `CSBS`, and `INDIA`.
- Use the main headline: **“Turning ambiguity into direction.”**
- Supporting copy should identify Hemanth as a Computer Science and Business Systems student interested in management, strategy, product, leadership, and technology.
- Preserve the “open to internships and collaboration” status without implying employment.
- Make the primary CTA “View selected work” and secondary CTA “Read my approach.”
- Replace the current generic strategy/people/technology hero diagram with a compact HVD seal that previews the signature framework below.
- Add a factual proof strip using only existing facts: `5 selected projects`, `B.Tech CSBS`, and `Business × Technology`.

### 2. Profile / about

Create a two-column editorial profile spread.

- Use the supplied portrait at `public/images/hemanth-portrait.png` with the current tasteful crop and subdued color treatment.
- Include the full name, current education, and concise personal introduction.
- Add marginal annotations for `CURRENTLY PURSUING`, `FOCUS`, and `BASED IN INDIA`.
- Keep the existing perspective statement, but present it as a pull quote rather than a generic footer block.
- Avoid inflated personal claims; use clear, direct language.

### 3. HVD Method

Make this the primary unique brand device rather than an extra decorative section.

- Define the framework explicitly:
  - **H — Human insight:** understand the people and the real need.
  - **V — Viable value:** connect the idea to business value and practical constraints.
  - **D — Digital systems:** use technology purposefully to make the solution work.
- Retain a geometric H/V/D compass, but simplify it into a professional dossier diagram with crisp labels and no decorative animation that competes with reading.
- Include the three working principles already introduced: start with why, connect the dots, make it useful.
- Add a short line explaining that this is a personal working framework, not a formal proprietary methodology.
- Use the section as the target of “Read my approach” from the hero.

### 4. Selected case files

Turn the project grid into an indexed case-file system.

- Keep the `projects` data array as the single source of truth.
- Keep all five projects:
  1. Future Me
  2. Cultural Hotel
  3. PDFToolkit
  4. Restaurant Management System Pro
  5. Ludo Zone
- Present one featured case file first, followed by a structured two-column index for the remaining work.
- The featured project should default to **Future Me**, because it best supports product and management positioning.
- Each preview should show category, concise problem statement, relevant tags, and available live/GitHub links.
- Ludo Zone must continue using `public/images/ludo-zone.png`.
- Clicking a project opens the existing accessible dialog, revised into a dossier sheet with:
  - Challenge
  - Thinking / approach
  - Intended value
  - Links, when available
- Do not add outcomes or metrics unless the repository contains evidence for them.
- Remove decorative project year labels that imply an unverified timeline; use `CASE FILE 01`, etc.

### 5. Operating principles / approach

Combine the current generic approach and strengths into one compact section.

- Use a horizontal or stepped sequence: **Understand → Frame → Align → Build → Learn**.
- Each step gets one sentence tied to how Hemanth works.
- Add a concise strengths index beneath it: strategic thinking, communication, problem solving, team collaboration, project planning, and adaptability.
- Do not repeat the HVD definitions.

### 6. Career direction and education

Refine the current journey section into a recruiter-readable “next chapter” page.

- State the current B.Tech in Computer Science and Business Systems.
- List career interests as interests, not current job titles.
- Group them into three lanes:
  - Product and projects
  - Strategy and operations
  - Business and technology analysis
- Retain the disclaimer that these are career interests.
- Keep a direct GitHub link for technical evidence.

### 7. Contact

- Keep LinkedIn as the primary CTA and GitHub as secondary.
- Use the closing line **“Let’s turn a useful idea into meaningful work.”**
- Do not add a contact form because there is no verified recipient email.
- Retain the open-to-internships status.

### 8. Printable profile and footer

- Keep the current `window.print()` workflow.
- Update the hidden print profile so it reflects the HVD positioning and all five selected projects.
- Ensure the new HVD and dossier sections are hidden in print while the concise profile remains printable.
- Keep current LinkedIn and GitHub URLs.

## Interaction and State

- Continue using local React state for mobile navigation and the active project dialog.
- Preserve Escape-to-close and backdrop-click behavior for project dialogs.
- Add focus placement to the dialog close button when opened and restore focus to the triggering project button when closed.
- Lock background scrolling while the dialog is open, as currently implemented.
- Add visible focus styles matching the brass accent.
- Use CSS-only hover treatments for cards and navigation.
- Any scrolling text or decorative movement must pause under `prefers-reduced-motion: reduce`; avoid required information inside animated-only elements.

## Responsive Behavior

### Desktop (over 1100px)

- Use a 12-column editorial grid and visible dossier side rail.
- Featured project spans more width than the index cards.
- HVD diagram and explanation sit side by side.

### Tablet (761–1100px)

- Reduce side margins and hide the persistent dossier rail.
- Preserve two-column project cards where space permits.
- Stack the HVD explanation above the diagram if labels become crowded.

### Mobile (560px and below)

- Use a single-column reading flow.
- Keep the existing collapsible navigation.
- Place portrait after the profile heading and before long body copy.
- Convert project previews to full-width cards.
- Simplify the HVD compass so labels remain readable without overlap.
- Keep primary actions at least 44px high.

## Technical Implementation

### `src/App.tsx`

- Refactor repeated inline arrays into named data structures for navigation, projects, HVD principles, work steps, and career lanes.
- Split large page sections into local components within the same file unless the file becomes difficult to navigate; if splitting is needed, use a small `src/components/` set for `Header`, `ProjectCard`, `ProjectDialog`, and `HvdDiagram` only.
- Keep the project type, but rename `problem`, `approach`, and `value` labels in the UI to the dossier terminology.
- Add refs and focus restoration for the project dialog.
- Preserve all verified external URLs and supplied assets.
- Remove the redundant expertise section after its content is merged.

### `src/index.css`

- Replace the current additive override structure with a coherent stylesheet organized in this order:
  1. Imports and tokens
  2. Reset and base type
  3. Shared layout and controls
  4. Header and hero
  5. Page sections in DOM order
  6. Dialog
  7. Responsive rules
  8. Reduced motion
  9. Print
- Define reusable CSS custom properties for colors, spacing, rules, typefaces, and content width.
- Remove superseded green/lime declarations and duplicate media-query overrides instead of layering more rules on top.
- Preserve the Google Fonts imports for Source Serif 4, DM Sans, and DM Mono.
- Keep CSS artwork where it adds identity, but simplify complex art that distracts from project content.

### `index.html`

- Keep the existing metadata and dark theme color, updating the description only if the final positioning copy changes materially.

### Assets

- Reuse:
  - `public/images/hemanth-portrait.png`
  - `public/images/ludo-zone.png`
- Do not add stock photography.
- Do not alter original uploads destructively; any visual treatment should remain CSS-based.

## Accessibility and Quality Requirements

- Maintain one page-level `h1` and sequential section heading structure.
- All images require meaningful `alt` text; decorative geometry should be hidden from assistive technology.
- Project dialog needs `role="dialog"`, `aria-modal`, an accessible title, focus placement, focus restoration, and keyboard closure.
- Mobile menu must preserve `aria-expanded` and `aria-controls`.
- Ensure warm brass text meets contrast requirements on both paper and dark backgrounds; use brass mainly for accents, not small body text when contrast is insufficient.
- Keep links distinguishable without relying on color alone.
- Avoid horizontal overflow at 320px width.

## Verification

Run only after the redesign is implemented:

1. `pnpm exec tsc --noEmit`
2. `pnpm build`
3. Inspect the existing Figma Make preview at desktop, tablet, and mobile widths without starting another dev server.
4. Verify:
   - Every navigation anchor lands on the intended section.
   - Mobile navigation opens, closes, and closes after selecting a link.
   - All five project dialogs open and close via button, backdrop, and Escape.
   - Focus returns to the project trigger after closing a dialog.
   - LinkedIn, GitHub, PDFToolkit, Future Me, Restaurant Management System Pro, and Ludo Zone links are unchanged and valid in markup.
   - Portrait and Ludo image load without stretching.
   - Reduced-motion mode disables nonessential animation.
   - Print preview contains the concise profile and does not print the full interactive site.

## Non-Goals

- No backend, CMS, analytics, contact-form service, authentication, or database.
- No invented work history, project metrics, testimonials, or achievements.
- No additional package dependency unless an implementation blocker makes one necessary.
- No stock imagery, custom cursor, audio, 3D rendering, or motion-heavy landing sequence.
- No deployment, commit, or push unless separately requested.
