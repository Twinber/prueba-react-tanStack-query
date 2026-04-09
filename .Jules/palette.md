## 2024-05-18 - Language Switcher Accessibility Update
**Learning:** Using `<span>` tags with `onClick` handlers for language switchers prevents proper keyboard navigation and lacks screen reader support for the active state. Visual separators like `/` should be hidden from screen readers.
**Action:** Replaced `<span>` with semantic `<button>` tags, added focus-visible styles, grouped options with `role="group"` and `aria-label`, added `aria-pressed` to indicate active language based on `i18n.resolvedLanguage || i18n.language`, and used `aria-hidden="true"` on the separator.
