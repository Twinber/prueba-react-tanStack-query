## 2026-04-07 - Semantic Language Switchers
**Learning:** When creating custom language switchers or toggles, using non-interactive elements like `<span>` breaks keyboard navigation and screen reader support. Separators like '/' are read aloud and confuse context.
**Action:** Always use semantic `<button>` tags for language toggles. Wrap them in a `role="group"` container with an `aria-label`. Provide dynamic `aria-pressed="true"` using `i18n.resolvedLanguage || i18n.language` to announce the active state reliably. Hide visual separators using `aria-hidden="true"`.
