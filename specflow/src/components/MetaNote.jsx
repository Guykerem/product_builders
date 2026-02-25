export default function MetaNote() {
  return (
    <section className="bg-gradient-to-r from-accent/5 to-cyan/5 rounded-xl border border-accent/20 overflow-hidden shadow-sm">
      <div className="px-6 py-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">∞</span>
          <h2 className="text-base font-semibold text-accent-bright">A Note on Self-Reference</h2>
        </div>
        <p className="text-sm text-soft leading-relaxed">
          You are reading a product spec for a tool that creates interactive product specs.
          This spec was built using the very workflow it describes — an AI coding assistant
          modifying a local UI in real-time based on natural language prompts.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          Charlie Kaufman was asked to adapt <em>The Orchid Thief</em> and wrote a movie about
          failing to adapt <em>The Orchid Thief</em>. We were asked to demo a code editor and
          built a product spec about building a product spec. The tradition continues.
        </p>
        <p className="text-xs text-muted/70 italic">
          "The snake that eats its own tail is not confused. It's just very committed to the bit."
        </p>
      </div>
    </section>
  )
}
