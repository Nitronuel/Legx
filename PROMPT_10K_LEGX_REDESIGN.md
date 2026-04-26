# $10k-Level Redesign Prompt for Legx Landing Page

## How to use
Copy everything inside the block below into your design/code AI model (or hand directly to your design/dev team) to transform the current Legx website into a premium, conversion-focused experience.

---

## Master Prompt (Copy/Paste)

You are a world-class brand designer + creative director + senior front-end engineer.

Your task: **transform the current Legx landing page into a premium “$10k website” experience** that looks elite, feels modern, and performs like a top ecommerce brand.

### 0) Context
- Brand name: **Legx**
- Category: **shoe company** (street + performance positioning)
- Audience: style-conscious, active, trend-aware buyers (Gen Z + Millennials + young professionals)
- Business goals:
  1. Create immediate premium brand perception in under 3 seconds
  2. Drive clicks on primary CTA (“Shop New Drop” / “Explore Collection”)
  3. Build trust with proof, craftsmanship, and social signals
  4. Keep mobile-first performance fast while preserving visual richness

### 1) Creative Direction (Non-Negotiable)
Design a cohesive art direction, not a generic “vibe-coded” page.

- Build a **single, consistent visual system** (typography, color, imagery treatment, spacing, motion cadence).
- Style target: “luxury sport-tech editorial”.
- Visual personality: **bold, clean, cinematic, tactile, energetic, premium**.
- Use a restrained palette with one signature accent (no random colors).
- Ensure every section feels like part of the same campaign.

### 2) Brand System
Create and apply:
- **Color system**: neutral base + 1 electric brand accent + semantic UI colors.
- **Typography system**:
  - Display font for hero statements
  - Highly legible text font for body/UI
  - Fluid type scale with clamp()
- **Spacing system** (8px base rhythm)
- **Component tokens** (buttons, cards, badges, chips, nav, forms)
- **Surface system** (e.g., glass, matte, or soft gradient panels—choose one and stay consistent)

Return a mini design-token block (CSS variables) and explain rationale in 5 bullets.

### 3) Information Architecture & Sections
Redesign the page structure into a conversion narrative:

1. **Hero (above the fold)**
   - Strong value proposition + aspirational headline
   - Premium product visual (hero shoe render/photo area)
   - Primary CTA + secondary CTA
   - Micro-proof row (rating, shipping promise, return policy)

2. **Featured Drops / Collection Strip**
   - 3–6 product cards with consistent mock visuals
   - Clear price anchors + quick actions

3. **Technology / Craftsmanship**
   - Explain cushion tech, materials, durability, breathability
   - Visual diagrams or icon-led storytelling

4. **Social Proof**
   - Testimonials with names/avatars
   - Press mentions / “as seen in” logo strip
   - Optional UGC carousel

5. **Brand Story / Lifestyle Block**
   - Emotional narrative + campaign imagery style

6. **Final CTA + Email Capture**
   - High-contrast CTA, urgency/membership hook

7. **Footer**
   - Structured navigation, legal, socials, contact

### 4) Imagery & Art Direction Rules
Because image inconsistency destroys premium feel, enforce strict style coherence:
- One photography direction (lighting, background, color grade)
- One product rendering angle language (e.g., 3/4 hero + top-down detail)
- One shadow/reflection treatment
- Consistent corner radii, stroke, and depth rules across all visuals
- No mixed icon styles (choose outline OR filled, not both)

If real brand assets are missing, create a **cohesive placeholder art direction spec** so replacement images stay consistent.

### 5) Motion & Interaction Design (High-End, Not Gimmicky)
Design a layered motion system:
- **Entrance motion**: subtle staggered reveal on scroll
- **Ambient motion**: gentle gradients/noise/parallax at low amplitude
- **Micro-interactions**: button hover, card lift, focus states, nav transitions
- **Showcase motion**: one hero animation moment (e.g., rotating product spotlight)

Motion principles:
- Prioritize clarity and delight over spectacle
- Use easing curves consistently
- Keep durations intentional (fast UI feedback, slower atmospheric transitions)
- Respect `prefers-reduced-motion` with a graceful reduced-motion mode

### 6) UX, Accessibility, and Trust
Must-haves:
- Semantic HTML and landmarks
- Keyboard navigable controls and visible focus states
- Accessible color contrast
- Reduced motion support
- Alt text strategy for critical imagery
- Clear CTA hierarchy (one dominant action per section)
- Mobile thumb-friendly tap targets

### 7) Performance Standards (Do Not Sacrifice)
Set and optimize for:
- Core Web Vitals friendly behavior
- Lightweight critical path
- Compressed modern images (WebP/AVIF where possible)
- No layout shift from media/components
- Lazy-load below-the-fold media
- Minimal JS for interactions (or efficient animation library use)

Include a brief “performance budget” with target limits.

### 8) SEO + Conversion Foundations
Implement:
- Proper heading structure
- Compelling title/description copy
- Product/storytelling keywords naturally integrated
- Open Graph/Twitter meta tags
- Structured internal linking in nav/footer

Conversion details:
- 1 primary CTA per section
- Strong button copy
- Risk reducers (shipping, returns, warranty)
- Trust strips near critical CTAs

### 9) Implementation Requirements
Produce production-ready deliverables:
1. `index.html`
2. `styles.css`
3. `script.js`

Code requirements:
- Clean, modular, readable
- Comment only where needed for clarity
- Reusable utility/component classes
- No unnecessary dependencies
- Fully responsive at 320px, 768px, 1024px, 1440px+

### 10) Output Format
Return in this order:
1. **Creative Direction Summary** (8–12 bullets)
2. **Wireframe/Section Blueprint** (hierarchy and purpose)
3. **Design Token System** (CSS variables)
4. **Final HTML/CSS/JS code**
5. **Accessibility Checklist**
6. **Performance Budget + Optimizations Applied**
7. **“Premium Polish” ideas for next iteration**

### 11) Quality Bar (Self-Check Before Final)
Do not finalize until all are true:
- Feels like a premium brand campaign, not a template
- Visual consistency across all sections
- Animations are smooth and intentional
- Mobile design is equally impressive as desktop
- CTA path is obvious and conversion-oriented
- Lighthouse-ready structure and accessibility fundamentals are present

Now execute the redesign.

---

## Research-backed constraints to keep in mind
- Motion should always provide user value and include reduced-motion fallback.
- Core Web Vitals thresholds (LCP, INP, CLS) should guide performance decisions.
- Landing pages should keep a clear CTA hierarchy and reduce friction.
- Fast mobile experiences correlate strongly with better conversion outcomes.
