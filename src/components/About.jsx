import { useEffect, useRef, useState } from 'react'

const TECH_STACK = [
  { name: 'Python',      category: 'language'  },
  { name: 'Java',        category: 'language'  },
  { name: 'JavaScript',  category: 'language'  },
  { name: 'Dart',        category: 'language'  },
  { name: 'Swift',       category: 'language'  },
  { name: 'Objective-C', category: 'language'  },
  { name: 'C++',         category: 'language'  },
  { name: 'C#',          category: 'language'  },
  { name: 'PHP',         category: 'language'  },
  { name: 'SQL',         category: 'database'  },
  { name: 'React',       category: 'framework' },
  { name: 'Flutter',     category: 'framework' },
  { name: 'Tailwind CSS',category: 'framework' },
  { name: 'CSS',         category: 'framework' },
]

const MONOGRAMS = {
  Python: 'PY', Java: 'JV', 'C++': 'C++', 'C#': 'C#',
  JavaScript: 'JS', PHP: 'PHP', CSS: 'CSS',
  Dart: 'DT', Swift: 'SW', 'Objective-C': 'ObjC',
  Flutter: 'FL', 'Tailwind CSS': 'TW',
}

const CATEGORY_COLOR = {
  language:  'border-accent/30 text-text bg-accent/5',
  database:  'border-surface/40 text-text bg-surface/10',
  framework: 'border-teal-600/30 text-text bg-teal-900/10',
}

function ReactAtomIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6.5" rx="8" ry="2.5" />
      <path strokeLinecap="round" d="M4 6.5v4c0 1.38 3.582 2.5 8 2.5s8-1.12 8-2.5v-4" />
      <path strokeLinecap="round" d="M4 10.5v4c0 1.38 3.582 2.5 8 2.5s8-1.12 8-2.5v-4" />
    </svg>
  )
}

function TechIcon({ name }) {
  if (name === 'React') return <ReactAtomIcon />
  if (name === 'SQL') return <DatabaseIcon />
  const mono = MONOGRAMS[name] || name.slice(0, 3).toUpperCase()
  return (
    <span className="font-mono font-bold tracking-tight text-sm leading-none">{mono}</span>
  )
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="01 — About" title="Who I Am" visible={visible} />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="space-y-6 font-body text-text-muted leading-loose text-[1.05rem]">
              <p>
                CS major at <span className="text-text font-medium">John Brown University</span>, with a minor in
                International Business. The combination sounds odd until it doesn't — a lot of real software
                problems are business problems in disguise.
              </p>
              <p>
                I've shipped code in Python, Java, C++, C#, JavaScript, and PHP across projects ranging
                from WordPress plugins to mobile apps to an independent film. I care about writing code
                that's <span className="text-text font-medium">readable six months later</span>, not just
                code that runs today.
              </p>
              <p>
                Outside class, I work at JBU's IT Help Desk — where I've learned more about how systems
                actually fail than any lecture has. I also handle finances for the AI Club and ASL Club,
                and sit on the CS Department's student leadership board.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'University', value: 'John Brown University' },
                { label: 'Degree',     value: 'Computer Science' },
                { label: 'Minor',      value: 'International Business' },
                { label: 'Status',     value: 'Open to Opportunities' },
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
                  <div className="h-7 flex items-center justify-center mb-2.5">
                    <TechIcon name={tech.name} />
                  </div>
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
