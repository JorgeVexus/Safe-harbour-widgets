# Project Behavioral Rules

<RULE[user_commit_recommendation]>
COMMIT RECOMMENDATION RULE:
Whenever requesting authorization from the USER for a commit, ALWAYS include the exact recommended commit message formatted according to Conventional Commits:

`git commit -m "<type>: <short description>"`

Provide this message clearly in the chat response so the user can review and approve it.
</RULE[user_commit_recommendation]>

<RULE[tab_widget_layout_consistency]>
TAB WIDGET LAYOUT CONSISTENCY RULE:
When implementing or editing tab widgets across the project, use `ai-opportunity-assessment-tabs.js` as the base standard for layout dimensions and width stability across all tabs:
1. Container: `width: min(100%, 1400px) !important; margin: 0 auto !important; padding: 0 24px !important;`
2. Layout: `display: flex !important; align-items: flex-start !important; gap: clamp(40px, 4vw, 70px) !important; width: 100% !important;`
3. Rail: `flex: 0 0 25% !important; min-width: 260px !important; max-width: 356px !important;`
4. Content: `flex: 1 1 75% !important; min-width: 0 !important; width: 100% !important;`
5. Panels: `.panel { display: none !important; width: 100% !important; }` and `.panel.on { display: block !important; width: 100% !important; }`
6. Card text: `.info-card > p` must use `max-width: none !important;` (or span 100% of grid cell) so non-slider tab panels preserve the exact same 100% content area width as the "What Includes" slider panel without shrinking or shifting layout width when switching tabs.
7. Slider tab switch: `mountSlider` returns `{ buildDots, update }` and `update()` is triggered when switching tabs to ensure slider viewports immediately recalculate card widths.
</RULE[tab_widget_layout_consistency]>

<RULE[tabs_slider_style]>
TABS SLIDER CONSISTENCY RULE:
When implementing card sliders within tab widgets (e.g. "What Includes" or "How it Works" panels), always follow the interactive desktop/mobile slider style established in `ai-workflow-precision-tabs.js`:
1. Use an interactive track (`data-slider`) with left (`.atb-prev` / `&lsaquo;`) and right (`.atb-next` / `&rsaquo;`) circular navigation buttons and pagination dots (`data-dots`).
2. Cards display an image container on top (`atb-slide-image`), a title header with a green bottom accent border (`#2EC8A1`) and check icon (`atb-slide-title`), and a bulleted list body (`ul` with `disc`).
3. Viewport layout calculation: 3 cards visible on desktop (>1180px), 2 cards on tablet (721px-1180px), and 1 card on mobile (<=720px).
4. Dynamic slider calculation with `maxIndex = cards.length - getVisibleCount()`, smooth CSS `transform` transitions, and responsive window resize handling.
</RULE[tabs_slider_style]>

