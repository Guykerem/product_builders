import { useState } from 'react'

const decisions = [
  {
    id: 'DEC-001',
    date: '2026-02-24',
    title: 'Use React + Tailwind for the spec viewer',
    outcome: 'Approved',
    rationale: 'Hot module replacement means every prompt-driven change appears instantly. Also, we already npm installed it, so the decision was effectively made for us.',
    participants: ['PM Lead', 'The Dev Who Already Started Coding'],
  },
  {
    id: 'DEC-002',
    date: '2026-02-24',
    title: 'Make the PRD self-referential',
    outcome: 'Approved',
    rationale: 'Like Charlie Kaufman writing himself into Adaptation, we decided the best way to demo a spec tool is to have it spec itself. Unlike Adaptation, no one gets eaten by an alligator.',
    participants: ['Product', 'Engineering', 'The Concept of Irony'],
  },
  {
    id: 'DEC-003',
    date: '2026-02-25',
    title: 'Clean light mode as default',
    outcome: 'Approved',
    rationale: 'A bright, airy design signals professionalism and readability. Dark mode can always be added later — perhaps even live, during a demo, by someone watching.',
    participants: ['Design', 'The Laws of Contrast'],
  },
  {
    id: 'DEC-004',
    date: '2026-02-25',
    title: 'Include movie references throughout',
    outcome: 'Approved with reservations',
    rationale: 'Adds personality and memorability. Reservation: not everyone has seen Adaptation. Counter-argument: they should.',
    participants: ['Content', 'Vibes Committee'],
  },
  {
    id: 'DEC-005',
    date: '2026-02-26',
    title: 'Ship for demo day',
    outcome: 'Pending',
    rationale: 'The demo is tomorrow. This decision is therefore both inevitable and aspirational, much like most roadmap commitments.',
    participants: ['Everyone', 'The Clock'],
  },
]

const outcomeColors = {
  Approved: 'text-green',
  'Approved with reservations': 'text-amber',
  Rejected: 'text-rose',
  Pending: 'text-cyan',
}

export default function DecisionLog() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className="bg-deep rounded-xl border border-surface overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-surface">
        <h2 className="text-base font-semibold">Decision Log</h2>
        <p className="text-xs text-muted mt-1">
          Because "I think we discussed this?" is not documentation.
        </p>
      </div>
      <div className="divide-y divide-surface">
        {decisions.map((dec) => (
          <div
            key={dec.id}
            className="hover:bg-midnight transition-colors cursor-pointer"
            onClick={() => setExpandedId(expandedId === dec.id ? null : dec.id)}
          >
            <div className="px-6 py-3 flex items-center gap-4">
              <span className="text-xs text-muted font-mono w-16 shrink-0">{dec.id}</span>
              <span className="text-xs text-muted w-20 shrink-0">{dec.date}</span>
              <span className="flex-1 text-sm text-soft">{dec.title}</span>
              <span className={`text-xs font-medium ${outcomeColors[dec.outcome]}`}>
                {dec.outcome}
              </span>
              <span className="text-muted text-xs ml-2">{expandedId === dec.id ? '▾' : '▸'}</span>
            </div>
            {expandedId === dec.id && (
              <div className="px-6 pb-4 pl-22 space-y-2">
                <div className="bg-midnight rounded-lg p-3 space-y-2">
                  <p className="text-xs text-muted leading-relaxed">{dec.rationale}</p>
                  <div className="flex gap-2 flex-wrap">
                    {dec.participants.map((p, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-surface/50 text-muted">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
