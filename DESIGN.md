# Design System Specification: The Lucid Scholar

## 1. Overview & Creative North Star
This design system is built to transform the traditional research experience into a high-end editorial journey. Moving away from the "dashboard fatigue" common in AI tools, this system adopts a Creative North Star we call **"The Analytical Lens."**

The objective is to convey intelligence not through complexity, but through atmospheric clarity. We achieve this by breaking the rigid, boxed-in grid of standard SaaS products. Instead, we use intentional asymmetry, generous whitespace, and a "layered paper" philosophy. The interface should feel like a bespoke digital workspace where information isn't just displayed—it is curated.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, authoritative blues and balanced by a sophisticated teal accent that signals AI-driven "growth" and "precision."

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through tonal shifts or background color transitions.
- Use `surface` (#f8f9fb) for the primary canvas.
- Use `surface-container-low` (#f2f4f6) for sidebar or utility regions.
- Use `surface-container-lowest` (#ffffff) for the most prominent content cards to create a "lift" effect.

### Glass & Signature Textures
- **Glassmorphism:** Floating elements (like navigation bars or hovering action menus) should use semi-transparent `surface` colors with a 20px-32px backdrop-blur. This integrates the UI rather than siloing it.
- **The Intelligence Gradient:** For primary CTAs and hero headers, utilize a subtle linear gradient: `primary` (#003178) to `primary_container` (#0d47a1) at a 135-degree angle. This adds "soul" and depth to the deep blues.

### Token Map Highlights
- **Primary Focus:** `primary` (#003178) for authority; `on_primary` (#ffffff) for clarity.
- **The Accent:** `tertiary` (#003d36) and `tertiary_fixed_dim` (#70d8c8) should be used sparingly for "AI Insight" moments—pill tags, success states, or active research threads.
- **Neutrality:** `secondary` (#48626e) handles metadata and non-critical UI elements to keep the focus on core research data.

---

## 3. Typography: The Editorial Scale
We use a dual-typeface system to balance high-tech efficiency with academic trustworthiness.

- **Display & Headline (Manrope):** Chosen for its modern, geometric structure. Use `display-lg` through `headline-sm` for major section headers. For an editorial feel, set headlines with a slightly tighter letter-spacing (-0.02em).
- **Body & Labels (Inter):** The workhorse of the system. `body-lg` (1rem) is the standard for research text to ensure maximum readability.
- **Visual Hierarchy:** Labels (`label-md`) should be set in all-caps with increased letter-spacing (+0.05em) when used for metadata tags, creating a "spec-sheet" aesthetic that feels professional and intentional.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. In this system, depth is achieved primarily through **Tonal Layering.**

- **The Layering Principle:** Place a `surface-container-lowest` card atop a `surface-container-low` background. The contrast in lightness creates a natural, soft elevation without visual noise.
- **Ambient Shadows:** When a physical "float" is required (e.g., a modal), use a shadow with a large blur (32px-64px) and very low opacity (4%-8%). The shadow color must be a tinted version of `on_surface` (#191c1e), never pure black.
- **The Ghost Border:** If a container must sit on an identical color background, use a 1px border of `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Interactive Primitives
- **Buttons:** 
    - **Primary:** Pill-shaped (`rounded-full`), utilizing the Intelligence Gradient. Transitions should be 300ms ease-out on the background-position or opacity.
    - **Secondary:** Transparent background with a `ghost-border` and `primary` text.
- **Input Fields:** Use `surface-container` for the field body. Instead of a full border, use a 2px bottom-accent of `primary` that animates from the center outward upon focus.
- **Pill Tags:** Use `secondary_container` (#cbe7f5) for metadata. For AI-generated tags, use a subtle `tertiary_container` (#00564d) background to distinguish "intelligent" data from static data.

### Research-Specific Components
- **The Insight Card:** Use `surface-container-lowest` with a `xl` (1.5rem) corner radius. **Strictly no dividers.** Use 24px-32px of vertical padding to separate header, body, and footer sections.
- **Floating Research Bar:** A centralized, glassmorphic input field anchored to the bottom of the viewport, using `surface` at 80% opacity and a `lg` (1rem) shadow for a "hovering" effect.
- **Source Lists:** Use `surface-container-low` for list items. On hover, transition to `surface-container-high` and apply a slight 2px horizontal shift to signify interactivity.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use whitespace as a structural element. If a design feels cluttered, increase the padding before adding a line.
- **Do** use `tertiary` (Teal) to highlight AI-derived insights or completed tasks.
- **Do** use `rounded-xl` and `rounded-full` to soften the "high-tech" edge, making it feel approachable.

### Don’t:
- **Don’t** use pure black (#000000) for text; always use `on_surface` (#191c1e) to maintain the premium, soft-contrast look.
- **Don’t** use standard "Material" shadows. If a shadow looks like a shadow, it’s too dark.
- **Don’t** use dividers to separate list items. Use the spacing scale or subtle background-color shifts.
- **Don’t** crowd the typography. This is a research agent; let the information breathe like a well-set academic journal.