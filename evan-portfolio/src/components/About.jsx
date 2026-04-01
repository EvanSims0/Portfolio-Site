import { useEffect, useRef, useState } from 'react'

const TECH_STACK = [
  { name: 'Python',     category: 'language', icon: '🐍' },
  { name: 'Java',       category: 'language', icon: '☕' },
  { name: 'C++',        category: 'language', icon: '⚙️' },
  { name: 'C#',         category: 'language', icon: '🔷' },
  { name: 'JavaScript', category: 'language', icon: '⚡' },
  { name: 'PHP',        category: 'language', icon: '🐘' },
  { name: 'SQL',        category: 'database', icon: '🗄️' },
  { name: 'React',      category: 'framework', icon: '⚛️' },
  { name: 'CSS',        category: 'framework', icon: '🎨' },
]

const CATEGORY_COLOR = {
  language:  'border-accent/30 text-text bg-accent/5',
  database:  'border-surface/40 text-text bg-surface/10',
  framework: 'border-teal-600/30 text-text bg-teal-900/10',
}

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <SectionHeader label="01 — About" title="Who I Am" visible={visible} />

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="space-y-5 font-body text-text-muted leading-relaxed text-[1.05rem]">
              <p>
                I'm a <span className="text-text font-medium">Computer Science student at John Brown University</span> with
                a minor in International Business — a combination that lets me build technically
                sound solutions while understanding the broader business context they operate in.
              </p>
              <p>
                My core strength lies in writing clean, maintainable code across multiple paradigms.
                Whether it's a Python data pipeline, a Java backend system, or a low-level C++ algorithm,
                I care deeply about <span className="text-text font-medium">correctness, performance, and readability</span>.
              </p>
              <p>
                Outside the classroom I've applied that mindset professionally — from rebuilding IT workflows
                at JBU's Help Desk to leading student organizations focused on AI and community.
                I'm driven by the idea that the best software is invisible: it just works.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'University',    value: 'John Brown University' },
                { label: 'Degree',        value: 'Computer Science' },
                { label: 'Minor',         value: 'International Business' },
                { label: 'Status',        value: 'Open to Opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-surface/15 rounded-lg p-4 bg-surface-dim/30">
                  <p className="font-body text-xs text-surface tracking-widest uppercase mb-1">{label}</p>
                  <p className="font-body text-sm text-text font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tech stack grid */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '0.35s' }}
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-surface mb-6">Core Technologies</p>
            <div className="grid grid-cols-3 gap-3">
              {TECH_STACK.map((tech, i) => (
                <div
                  key={tech.name}
                  className={`card-glow border rounded-xl p-4 text-center cursor-default select-none ${CATEGORY_COLOR[tech.category]}`}
                  style={{
                    transitionDelay: `${i * 0.04}s`,
                    animation: visible ? `fadeUp 0.5s ${i * 0.06 + 0.4}s ease forwards` : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <p className="font-body text-xs font-semibold tracking-wide">{tech.name}</p>
                  <p className="font-body text-[10px] text-surface/70 mt-0.5 capitalize">{tech.category}</p>
                </div>
              ))}
            </div>

            {/* Category legend */}
            <div className="mt-5 flex flex-wrap gap-3">
              {Object.entries(CATEGORY_COLOR).map(([cat, cls]) => (
                <span key={cat} className={`font-body text-xs border rounded-full px-3 py-1 capitalize ${cls}`}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title, visible }) {
  return (
    <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">{label}</p>
      <div className="flex items-end gap-6">
        <h2 className="font-heading text-4xl sm:text-5xl text-text">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent mb-2" />
      </div>
    </div>
  )
}
