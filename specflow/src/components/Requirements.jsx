import { useState } from 'react'

const requirements = [
  {
    id: 'REQ-001',
    title: 'Self-Aware Document Rendering',
    priority: 'P0',
    status: 'Done',
    description: 'The spec must be able to describe itself without triggering an existential crisis in the reader.',
  },
  {
    id: 'REQ-002',
    title: 'Real-Time Editability via Natural Language',
    priority: 'P0',
    status: 'In Progress',
    description: 'PMs should be able to say "make the header blue" and watch it happen. Like magic, but with webpack.',
  },
  {
    id: 'REQ-003',
    title: 'Collapsible Sections',
    priority: 'P1',
    status: 'Done',
    description: 'Because not every stakeholder needs to see every detail. Some sections should collapse, like our sprint estimates.',
  },
  {
    id: 'REQ-004',
    title: 'Status Badges with Real Meaning',
    priority: 'P1',
    status: 'In Progress',
    description: 'Status indicators that reflect actual state, not aspirational state. Revolutionary concept in PM tooling.',
  },
  {
    id: 'REQ-005',
    title: 'Meta-Recursive Content Support',
    priority: 'P2',
    status: 'Done',
    description: 'The product must be able to spec itself speccing itself. Like Adaptation, but with fewer orchids and more JSON.',
  },
  {
    id: 'REQ-006',
    title: 'Decision Log with Timestamps',
    priority: 'P0',
    status: 'In Progress',
    description: 'Every decision recorded, because "I thought we agreed on this" is not a valid source of truth.',
  },
  {
    id: 'REQ-007',
    title: 'Timeline Visualization',
    priority: 'P1',
    status: 'Done',
    description: 'A visual timeline that shows milestones. Unlike a Gantt chart, people will actually look at this one.',
  },
  {
    id: 'REQ-008',
    title: 'Infinite Scroll Prevention',
    priority: 'P2',
    status: 'Blocked',
    description: 'The spec must not become so long that reading it takes longer than building the product. We may have already failed.',
  },
]

const priorityColors = {
  P0: 'bg-rose/20 text-rose',
  P1: 'bg-amber/20 text-amber',
  P2: 'bg-muted/20 text-muted',
}

const statusColors = {
  Done: 'text-green',
  'In Progress': 'text-cyan',
  Blocked: 'text-rose',
}

const statusIcons = {
  Done: '✓',
  'In Progress': '◐',
  Blocked: '✕',
}

export default function Requirements() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className="bg-deep rounded-xl border border-surface overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-surface">
        <h2 className="text-base font-semibold">Requirements</h2>
        <p className="text-xs text-muted mt-1">Click any row to expand. Like an accordion, but less musical.</p>
      </div>
      <div className="divide-y divide-surface">
        {requirements.map((req) => (
          <div
            key={req.id}
            className="hover:bg-midnight transition-colors cursor-pointer"
            onClick={() => setExpandedId(expandedId === req.id ? null : req.id)}
          >
            <div className="px-6 py-3 flex items-center gap-4">
              <span className="text-xs text-muted font-mono w-16 shrink-0">{req.id}</span>
              <span className="flex-1 text-sm text-soft">{req.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[req.priority]}`}>
                {req.priority}
              </span>
              <span className={`text-xs font-medium w-20 text-right ${statusColors[req.status]}`}>
                {statusIcons[req.status]} {req.status}
              </span>
              <span className="text-muted text-xs ml-2">{expandedId === req.id ? '▾' : '▸'}</span>
            </div>
            {expandedId === req.id && (
              <div className="px-6 pb-4 pl-22">
                <p className="text-xs text-muted leading-relaxed bg-midnight rounded-lg p-3">
                  {req.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
