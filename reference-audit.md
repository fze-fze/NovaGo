# Reference Portfolio Audit

Reference: `https://yumengliu0302.wixsite.com/my-site-4`  
Reviewed: 2026-07-23

## High-level presentation patterns

### Page structure

- A single long-form case-study page rather than separate routes.
- Desktop header combines project identity, four anchor-like navigation items, and a prominent “Final Prototype” CTA.
- The story moves broadly from hero → team/overview → user research → ideation → prototyping → evaluation → final prototype → footer.
- The hero immediately pairs the project promise with a large phone mockup, one primary CTA, and three short capability cues.
- The final section closes the narrative with a demo/video area and a direct link to the interactive prototype.

### Visual hierarchy

- Very large project title and section headings establish clear wayfinding across a page that is over 20 desktop viewports long.
- A restrained blue/black/white palette ties the portfolio to the product UI.
- Product imagery and phone screens carry much of the visual weight; explanatory copy is secondary.
- Rounded outline buttons and simple icon-label pairs provide repeated visual anchors.
- Major sections are separated through generous vertical space and occasional background changes, not heavy borders.

### Navigation and interaction

- Navigation is deliberately shallow: a few major milestones rather than every subsection.
- The experience is primarily scroll-driven; interaction is limited to section navigation, CTA links, a video, the external prototype, and a chat widget.
- Repeated “Get Started”/prototype CTAs create a clear path from overview to final deliverable.
- The desktop navigation is not sticky, so orientation relies heavily on recurring section titles.

### Section rhythm and content density

- Strong rhythm at the macro level: oversized section opener, evidence or artifact, then explanation.
- Research is the densest portion, using interview profiles, survey findings, charts, and quotes.
- Ideation uses a repeatable “task → intended behavior → frustration addressed” pattern.
- Prototyping progresses from flow and scenarios to wireframes and high-fidelity screens.
- Evaluation shows findings beside concrete interface changes, making iteration visible.
- Some subsections are overly long and text-heavy; the strongest moments are where one insight is paired with one visual artifact.

## Recommendations for NovaGo

- Keep the same single-page case-study logic, but expose all six required milestones in navigation: Introduction, User Research, Ideation, Prototyping, Evaluation, Final Prototype.
- Add a compact project-summary strip near the hero with role, team, duration, methods, and outcome so assessors can scan context quickly.
- Turn each research subsection into concise evidence cards: method, sample, key insight, and design implication.
- Use a consistent “evidence → decision → artifact” mini-sequence throughout the page; this will make NovaGo feel more rigorous than a gallery of screenshots.
- Present ideation and evaluation as explicit cause-and-effect: user problem → design response, then test finding → revision.
- Limit body copy to short paragraphs and pull out metrics, quotes, and decisions as large editorial callouts.
- Finish with both an embedded/recorded walkthrough and a strong external prototype CTA, followed by a brief outcomes/reflection block.

## Mobile implications

- The reference site’s 390 × 844 view visibly clips the desktop header, hero title, body copy, capability row, and right-side phone mockup; it should not be copied literally.
- NovaGo should use a real mobile navigation pattern, such as a compact header with a menu or horizontally scrollable section index.
- Hero content should stack vertically, keep all text within the viewport, and place the phone mockup below the value proposition.
- Multi-column interview, task, and before/after layouts should collapse to single-column cards with a deliberate reading order.
- Wide flows and prototype boards need responsive wrappers, zoom affordances, or vertically segmented alternatives.
- Decorative chat/floating controls should be avoided or repositioned so they do not cover portfolio content on small screens.

## Overall takeaway

The useful reference pattern is a clear, scroll-led UX case-study narrative with strong milestone headings, plentiful process artifacts, and a prominent final prototype. NovaGo should retain that structure while improving scannability, evidence-to-decision storytelling, navigation coverage, and responsive behavior.
