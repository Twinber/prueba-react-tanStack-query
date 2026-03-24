## 2024-03-24 - Language Switcher Accessibility
**Learning:** Custom UI toggles (like Language Switchers) often start as simple text or `<span>` elements with `onClick` handlers, which fails both screen reader and keyboard accessibility standards. Additionally, simple active states often lack programmatic context.
**Action:** When implementing custom stateful switches/toggles:
1. Use semantic `<button>` elements.
2. Communicate active state reliably using `aria-pressed="true"` instead of just visual classes.
3. Ensure keyboard accessibility with explicit focus states (e.g., `focus-visible:ring-2`).
4. Wrap related toggle groups in an accessible container (`role="group"` and `aria-label`).
5. Hide decorative separators with `aria-hidden="true"`.
