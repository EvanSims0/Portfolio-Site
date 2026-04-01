import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './About'

const EXPERIENCE = [
  {
    type:    'work',
    role:    'IT Help Desk Assistant',
    org:     'John Brown University',
    period:  '2023 — Present',
    bullets: [
      'Developed and documented internal IT Help Desk processes, reducing average ticket resolution time.',
      'Analyzed emerging technology trends and compiled quarterly reports for IT leadership.',
      'Provided technical guidance and troubleshooting support to faculty, staff, and students.',
      'Managed hardware inventory tracking using custom-built tooling.',
    ],
    icon: '💻',
  },
  {
    type:    'leadership',
    role:    'Treasurer',
    org:     'AI Club — John Brown University',
    period:  '2023 — Present',
    bullets: [
      'Manage club budget, coordinate fund allocation for events, speaker series, and resources.',
      'Co-organize workshops and demos exploring AI tools and applications for students.',
      'Help grow membership by creating accessible onboarding materials for non-CS majors.',
    ],
    icon: '🤖',
  },
  {
    type:    'leadership',
    role:    'Treasurer',
    org:     'American Sign Language Club — JBU',
    period:  '2023 — Present',
    bullets: [
      'Oversee financial operations and budget planning for a growing campus organization.',
      'Coordinate with Deaf community partners for club events and cultural presentations.',
      'Helped increase membership by 40% through targeted outreach and event programming.',
    ],
    icon: '🤟',
  },
  {
    type:    'leadership',
    role:    'Student Leadership Board Member',
    org:     'Computer Science Department — JBU',
    period:  '2024 — Present',
    bullets: [
      'Represent the CS student body in departmental meetings and curriculum feedback sessions.',
      'Collaborate with faculty to improve course offerings and student resources.',
      'Organize department-wide networking events and career development workshops.',
    ],
    icon: '🎓',
  },
]

const TYPE_STYLE = {
  work:       { border: 'border-accent/30',   dot: 'bg-accent',   label: 'Work Experience' },
  leadership: { border: 'border-surface/30',  dot: 'bg-surface',  label: 'Leadership'      },
}

export default function Experience() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      {/* Left-side glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-0 -z-10 w-[400px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(191,67,66,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="03 — Experience" title="Where I've Contributed" visible={visible} />

        {/* Type legend */}
        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {Object.entries(TYPE_STYLE).map(([type, { dot, label }]) => (
            <div key={type} className="flex items-center gap-2 font-body text-xs text-text-muted">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              {label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Vertical line */}
          <div
            className={`absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-surface/20 to-transparent transition-all duration-1000 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={item.role + item.org} item={item} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index, visible }) {
  const { type, role, org, period, bullets, icon } = item
  const { border, dot } = TYPE_STYLE[type]
  const [open, setOpen] = useState(true)

  return (
    <div
      className={`relative pl-12 transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
      style={{ transitionDelay: `${index * 0.12 + 0.2}s` }}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-[14px] top-6 w-2.5 h-2.5 rounded-full ring-2 ring-black ring-offset-0 ${dot}`}
        style={{ boxShadow: type === 'work' ? '0 0 8px rgba(191,67,66,0.5)' : undefined }}
      />

      {/* Card */}
      <div className={`border ${border} rounded-2xl bg-surface-dim/20 overflow-hidden card-glow`}>
        {/* Header — clickable toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-left px-6 py-5 flex items-start gap-4 group"
        >
          {/* Icon badge */}
          <span
            className="text-xl mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(93,115,126,0.12)' }}
          >
            {icon}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-heading text-lg text-text">{role}</h3>
                <p className="font-body text-sm text-accent mt-0.5">{org}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-body text-xs text-surface border border-surface/20 rounded-full px-3 py-1">
                  {period}
                </span>
                {/* Chevron */}
                <svg
                  className={`w-4 h-4 text-surface transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Expandable bullets */}
        <div
          className={`transition-all duration-400 overflow-hidden ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-5 pl-20">
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-sm text-text-muted">
                  <span className="text-accent mt-1.5 flex-shrink-0 text-[10px]">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
