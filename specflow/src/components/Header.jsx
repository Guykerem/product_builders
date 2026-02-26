export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="border-b border-surface bg-deep/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-sm font-bold text-white">
            S
          </div>
          <div>
            <h1 className="text-lg font-semibold text-bright">SpecFlow</h1>
            <p className="text-xs text-muted">Product Requirements Document</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted">v0.1.0</span>
          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
            Draft
          </span>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-midnight/50 border border-surface text-xs text-soft hover:bg-midnight/70 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
          >
            <span
              className="h-4 w-8 rounded-full bg-surface relative flex items-center"
              aria-hidden="true"
            >
              <span
                className={`h-3 w-3 rounded-full bg-accent-bright shadow-sm transform transition-transform ${
                  theme === 'dark' ? 'translate-x-4' : 'translate-x-1'
                }`}
              />
            </span>
            <span className="font-medium">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
