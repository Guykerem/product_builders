export default function Header() {
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
        </div>
      </div>
    </header>
  )
}
