## 2024-05-18 - Language Switcher Accessibility
**Learning:** Custom toggles like Language Switchers must be built with proper `<button>` elements (not `<span>` with `onClick`) to ensure keyboard accessibility. They must use semantic grouping (`role="group"`) and ARIA states (`aria-pressed="true"`) to communicate the active state reliably to screen readers.
**Action:** Always use `<button>` with focus-visible styles for interactive elements, apply `aria-pressed` for toggles, and use `aria-hidden="true"` on decorative separators like slashes.
