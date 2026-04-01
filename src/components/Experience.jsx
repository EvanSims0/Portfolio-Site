import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './About'

function MonitorIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}

function AcademicCapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  )
}

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
    icon: <MonitorIcon />,
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
    icon: <SparkleIcon />,
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
    icon: <UsersIcon />,
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
    icon: <AcademicCapIcon />,
  },
]

const TYPE_STYLE = {
  work:       { border: 'border-accent/30',  dot: 'bg-accent',  label: 'Work Experience' },
  leadership: { border: 'border-surface/30', dot: 'bg-surface', label: 'Leadership'      },
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
    <section id="experience" className="relative py-40 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      <div
        aria-hidden
        className="absolute top-1/2 left-0 -z-10 w-[400px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(191,67,66,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="03 — Experience" title="Where I've Contributed" visible={visible} />

        {/* Type legend */}
        <div
          className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {Object.entries(TYPE_STYLE).map(([type, { dot, label }]) => (
            <div key={type} className="flex items-center gap-2.5 font-body text-xs text-text-muted border border-surface/25 px-4 py-1.5 bg-surface-dim/40">
              <span className={`w-2 h-2 rounded-full ${dot}`} />
              {label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-14 relative">
          <div
            className={`absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-surface/20 to-transparent transition-all duration-1000 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div className="space-y-10">
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
      <div className={`border ${border} rounded-none bg-surface-dim/30 overflow-hidden card-glow`}>
        {/* Header — clickable toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full text-left px-6 py-5 flex items-start gap-4 group"
        >
          {/* Icon badge */}
          <span
            className="mt-0.5 w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 text-accent"
            style={{ background: 'rgba(191,67,66,0.10)' }}
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
                <span className="font-body text-xs text-text-muted border border-surface/30 rounded-full px-4 py-1.5 bg-surface/10">
                  {period}
                </span>
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
