export default function Overview() {
  return (
    <section className="bg-deep rounded-xl border border-surface overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-surface flex items-center justify-between">
        <h2 className="text-base font-semibold">Product Overview</h2>
        <span className="text-xs text-muted">Last edited: just now, by you, reading this</span>
      </div>
      <div className="px-6 py-5 space-y-4 text-soft text-sm leading-relaxed">
        <p>
          <strong className="text-bright">SpecFlow</strong> is an interactive product specification tool
          that transforms static PRDs into living, breathing documents. It is, notably, the product
          being specified by the very document you are currently reading.
        </p>
        <p className="text-muted italic">
          "We are what we pretend to be, so we must be careful about what we pretend to be."
          — Kurt Vonnegut
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-midnight/30 rounded-lg p-4">
            <h3 className="text-accent-bright font-medium text-sm mb-2">Problem</h3>
            <p className="text-xs text-muted">
              PRDs are written once, read never, and become archaeological artifacts within weeks.
              Much like this sentence, which is already slightly outdated.
            </p>
          </div>
          <div className="bg-midnight/30 rounded-lg p-4">
            <h3 className="text-green font-medium text-sm mb-2">Solution</h3>
            <p className="text-xs text-muted">
              A spec that lives alongside the code, editable through natural language, always current.
              You're looking at it. It's looking back at you.
            </p>
          </div>
          <div className="bg-midnight/30 rounded-lg p-4">
            <h3 className="text-cyan font-medium text-sm mb-2">Success Metric</h3>
            <p className="text-xs text-muted">
              If a PM reads a PRD and it's still accurate, a bell rings somewhere in product heaven.
              Current accuracy: 100% (decaying as you read).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
