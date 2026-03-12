## 2025-02-17 - Preserve Semantic Structure with Button asChild
**Learning:** Wrapping `<a>` or TanStack Router `<Link>` directly inside a `<Button>` creates invalid HTML (`<button><a>...</a></button>` or similar) which degrades screen reader experiences.
**Action:** Use Radix UI's `<Button asChild>` to preserve both native semantic routing accessibility and design system button styling.
