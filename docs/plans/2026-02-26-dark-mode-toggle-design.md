## Dark Mode Header Toggle - Design & Plan

**Goal:** Add a light/dark theme toggle in the `Header` that switches the entire SpecFlow UI between light and dark modes.

**Approach:**
- Use existing design tokens (`--color-midnight`, `--color-deep`, etc.) as the abstraction layer for theming.
- Keep the current light palette as-is, and define a dark palette by overriding these CSS custom properties under a `.dark` class on the root element.
- Manage theme state (`light` / `dark`) in `App` with React state, and apply/remove the `dark` class on `document.documentElement` via an effect.
- Add an accessible, compact toggle button in the `Header` that reflects the current theme and calls an `onToggleTheme` callback passed from `App`.

**Key UX Considerations:**
- Maintain at least 4.5:1 contrast for body text in both themes.
- Ensure borders (`border-surface`) remain visible in dark mode so cards and timeline rails are clearly separated from the background.
- Keep status badges, chips, and gradients legible in both modes without introducing neon-on-black anti-patterns.
- Provide clear hover and focus states for the theme toggle, including a visible focus ring for keyboard users.

**High-Level Tasks:**
1. Extend `index.css` with a dark theme palette:
   - Override the existing color custom properties under a `.dark` selector.
   - Set `color-scheme: light` on `:root` and `color-scheme: dark` on `.dark` for better native control rendering.
2. Add theme state and DOM class management in `App.jsx`:
   - Track `theme` (`'light' | 'dark'`) with `useState`.
   - Use `useEffect` to add/remove the `dark` class on `document.documentElement` whenever `theme` changes.
   - Pass `theme` and `onToggleTheme` into `Header`.
3. Update `Header.jsx` to render the toggle:
   - Accept `theme` and `onToggleTheme` props.
   - Place a small pill-style button to the right of the existing version/draft indicators.
   - Label the toggle textually (e.g., "Light" / "Dark") to avoid emoji icons, and wire up click + keyboard focus styles.
4. Visual QA in both themes:
   - Check `Overview`, `Requirements`, `Timeline`, `DecisionLog`, `StatusBar`, and `MetaNote` for contrast, border visibility, and overall polish.
   - Adjust any obviously low-contrast combinations if needed.

