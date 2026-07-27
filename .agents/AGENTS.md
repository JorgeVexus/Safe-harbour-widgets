# Project Behavioral Rules

<RULE[user_commit_recommendation]>
COMMIT RECOMMENDATION RULE:
Whenever requesting authorization from the USER for a commit, ALWAYS include the exact recommended commit message formatted according to Conventional Commits:

`git commit -m "<type>: <short description>"`

Provide this message clearly in the chat response so the user can review and approve it.
</RULE[user_commit_recommendation]>

<RULE[tabs_slider_style]>
TABS SLIDER CONSISTENCY RULE:
When implementing card sliders within tab widgets (e.g. "What Includes" or "How it Works" panels), always follow the interactive desktop/mobile slider style established in `ai-workflow-precision-tabs.js`:
1. Use an interactive track (`data-slider`) with left (`.atb-prev` / `&lsaquo;`) and right (`.atb-next` / `&rsaquo;`) circular navigation buttons and pagination dots (`data-dots`).
2. Cards display an image container on top (`atb-slide-image`), a title header with a green bottom accent border (`#2EC8A1`) and check icon (`atb-slide-title`), and a bulleted list body (`ul` with `disc`).
3. Viewport layout calculation: 3 cards visible on desktop (>1180px), 2 cards on tablet (721px-1180px), and 1 card on mobile (<=720px).
4. Dynamic slider calculation with `maxIndex = cards.length - getVisibleCount()`, smooth CSS `transform` transitions, and responsive window resize handling.
</RULE[tabs_slider_style]>

