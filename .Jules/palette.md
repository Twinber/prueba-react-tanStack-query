## 2024-05-14 - Semantic Language Switcher

**Learning:** When creating custom toggle switches for localization, like a Language Switcher using `react-i18next`, interactive `<span>` elements are generally inaccessible. Also, getting the current language correctly can be tricky; `i18n.resolvedLanguage || i18n.language` is more reliable than `i18n.language` alone, as it handles fallbacks and ensures accurate dynamic state (`aria-pressed`).

**Action:**
- Always convert interactive elements like `<span>` with `onClick` to semantic `<button type="button">` tags.
- Include proper `focus-visible` states, typically Tailwind classes like `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2`.
- Wrap the buttons in a `role="group"` with a descriptive `aria-label` to provide context.
- Use `aria-pressed="true"` on the currently active button.
- Make sure decorative elements between interactive elements (like `/`) are hidden from screen readers using `aria-hidden="true"`.