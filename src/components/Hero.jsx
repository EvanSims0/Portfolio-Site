import { useEffect, useState } from 'react'

const ROLES = [
  'Software Engineer.',
  'CS Student @ JBU.',
  'Python Developer.',
  'Problem Solver.',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 max-w-6xl mx-auto"
    >
      {/* Grid background */}
      <div aria-hidden className="fixed inset-0 -z-20 grid-bg pointer-events-none" />

      {/* Red radial glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(191,67,66,0.10) 0%, transparent 65%)' }}
      />

      {/* Teal glow right */}
      <div
        aria-hidden
        className="absolute top-1/3 right-0 -z-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(93,115,126,0.08) 0%, transparent 70%)' }}
      />

      {/* Floating decorative bracket */}
      <div
        aria-hidden
        className="absolute right-8 top-1/2 -translate-y-1/2 text-surface/10 font-heading select-none pointer-events-none hidden lg:block animate-float"
        style={{ fontSize: 'clamp(120px, 18vw, 260px)', lineHeight: 1 }}
      >
        {'{'}
      </div>

      {/* Eyebrow label */}
      <p className="animate-fade-up font-body text-xs tracking-[0.3em] uppercase text-accent mb-5">
        Portfolio
      </p>

      {/* Main headline */}
      <h1 className="animate-fade-up delay-200 font-heading leading-tight mb-3">
        <span
          className="block text-text"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}
        >
          Hi, I'm
        </span>
        <span
          className="block text-accent"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}
        >
          Evan Simons
        </span>
      </h1>

      {/* Typewriter line */}
      <div
        className="animate-fade-up delay-400 font-heading text-text-muted mb-7"
        style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)', minHeight: '2.8rem' }}
      >
        {displayed}
        <span className="cursor-blink text-accent">|</span>
      </div>

      {/* Body copy */}
      <p className="animate-fade-up delay-600 font-body text-base sm:text-lg text-text-muted max-w-xl mb-12 leading-loose">
        CS student at John Brown University, minoring in International Business.
        I write <Chip>Python</Chip>, <Chip>Java</Chip>, and <Chip>C++</Chip> — and I care more
        about shipping something that actually works than sounding impressive about it.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up delay-800 flex flex-wrap gap-4">
        <a
          href="#projects"
          onClick={e => {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-body font-semibold text-sm px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:gap-3"
        >
          View My Work
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/Evan-Simons-2025-updated.pdf"
          download="Evan-Simons-Resume.pdf"
          className="inline-flex items-center gap-2 border border-surface/50 text-text-muted hover:border-accent hover:text-accent font-body font-semibold text-sm px-8 py-4 rounded transition-all duration-200"
        >
          Download Resume
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-6 hidden sm:flex items-center gap-3 opacity-30">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-surface" />
        <span className="font-body text-xs tracking-[0.25em] uppercase text-surface">Scroll</span>
      </div>

      {/* Stat pills */}
      <div className="animate-fade-up delay-700 flex flex-wrap gap-3 mt-12">
        {[
          { label: 'Languages',  value: '9+'             },
          { label: 'University', value: 'JBU'            },
          { label: 'Minor',      value: 'Int\'l Business' },
          { label: 'Degree',     value: 'Computer Sci - BA' },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center gap-2 border border-surface/20 rounded-full px-4 py-1.5 text-xs font-body text-text-muted bg-surface-dim/50"
          >
            <span className="text-accent font-semibold">{value}</span>
            <span className="text-surface/70">·</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-block font-mono text-sm bg-surface/15 border border-surface/25 text-text rounded px-1.5 py-0.5">
      {children}
    </span>
  )
}
