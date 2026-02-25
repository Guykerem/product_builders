const stats = [
  { label: 'Requirements', value: '12', status: 'green' },
  { label: 'Open Questions', value: '3', status: 'amber' },
  { label: 'Decisions Made', value: '7', status: 'accent' },
  { label: 'Completion', value: '68%', status: 'cyan' },
]

const statusColors = {
  green: 'bg-green/20 text-green',
  amber: 'bg-amber/20 text-amber',
  accent: 'bg-accent/20 text-accent-bright',
  cyan: 'bg-cyan/20 text-cyan',
}

export default function StatusBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-deep rounded-xl p-4 border border-surface hover:border-surface transition-colors shadow-sm"
        >
          <p className="text-xs text-muted uppercase tracking-wide mb-1">{stat.label}</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[stat.status]}`}>
              {stat.status === 'green' ? 'On track' : stat.status === 'amber' ? 'Needs input' : stat.status === 'accent' ? 'Locked' : 'In progress'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
