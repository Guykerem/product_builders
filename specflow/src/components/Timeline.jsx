const milestones = [
  {
    date: 'Week 1',
    title: 'Inception',
    description: 'Realize that the spec IS the product. Have a brief existential moment.',
    status: 'done',
  },
  {
    date: 'Week 2',
    title: 'Core UI Shell',
    description: 'Build the interactive spec viewer. You are inside of it right now.',
    status: 'done',
  },
  {
    date: 'Week 3',
    title: 'Live Editing Demo',
    description: 'Demo to PM builders. They prompt changes. Changes appear. Minds are blown. Standing ovation (optional).',
    status: 'current',
  },
  {
    date: 'Week 4',
    title: 'Self-Awareness Module',
    description: 'The spec begins to anticipate your questions before you ask them. Skynet, but for product management.',
    status: 'upcoming',
  },
  {
    date: 'Week 5',
    title: 'Ship It',
    description: '"If you wait for perfect, you ship never." — Charlie Kaufman, probably.',
    status: 'upcoming',
  },
]

const statusStyles = {
  done: 'bg-green border-green',
  current: 'bg-cyan border-cyan animate-pulse',
  upcoming: 'bg-surface border-surface',
}

const lineStyles = {
  done: 'bg-green/40',
  current: 'bg-cyan/40',
  upcoming: 'bg-surface/40',
}

export default function Timeline() {
  return (
    <section className="bg-deep rounded-xl border border-surface overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-surface">
        <h2 className="text-base font-semibold">Timeline</h2>
        <p className="text-xs text-muted mt-1">
          "Time is a flat circle." — Rust Cohle. "Time is a vertical line with dots." — This component.
        </p>
      </div>
      <div className="px-6 py-6">
        <div className="relative">
          {milestones.map((milestone, i) => (
            <div key={i} className="flex gap-4 pb-8 last:pb-0">
              {/* Timeline rail */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 shrink-0 ${statusStyles[milestone.status]}`} />
                {i < milestones.length - 1 && (
                  <div className={`w-0.5 flex-1 mt-1 ${lineStyles[milestone.status]}`} />
                )}
              </div>
              {/* Content */}
              <div className="pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs text-muted font-mono">{milestone.date}</span>
                  <h3 className="text-sm font-medium text-bright">{milestone.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
