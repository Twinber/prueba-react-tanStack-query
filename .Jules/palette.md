## 2024-05-19 - Semantic Buttons for Language Switchers
**Learning:** Custom interactive elements like a "Language Switcher" implemented using purely decorative spans (`<span onClick={...}>`) are completely invisible to screen readers and keyboard navigation (tabbing).
**Action:** When implementing custom stateful switches or toggles, always use semantic `<button>` tags, apply focus-visible styling (e.g. `focus-visible:ring-2`), and dynamically assign ARIA attributes like `aria-current="true"` to communicate the active state reliably to screen readers.
