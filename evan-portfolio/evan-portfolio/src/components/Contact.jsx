import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './About'

const LINKS = [
  {
    label: 'Email',
    value: 'is.evan.simons@gmail.com',
    href:  'mailto:is.evan.simons@gmail.com',
    icon:  <EmailIcon />,
    cta:   'Send a message',
  },
  {
    label: 'Phone',
    value: '479.340.2100',
    href:  'tel:4793402100',
    icon:  <PhoneIcon />,
    cta:   'Give me a call',
  },
  {
    label: 'GitHub',
    value: 'github.com/evansimons',
    href:  'https://github.com/evansimons',
    icon:  <GitHubIcon />,
    cta:   'View my code',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('is.evan.simons@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-32 px-6 pb-20" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      {/* Bottom glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(191,67,66,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="04 — Contact" title="Let's Connect" visible={visible} />

        {/* Intro copy */}
        <p
          className={`mt-8 font-body text-lg text-text-muted max-w-xl leading-relaxed transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          Whether you have a project in mind, an internship opportunity, or just want
          to chat about technology — my inbox is always open.
        </p>

        {/* Contact cards */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.35s' }}
        >
          {LINKS.map(({ label, value, href, icon, cta }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card-glow group border border-surface/15 rounded-2xl p-6 bg-surface-dim/20 flex flex-col gap-4 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                {icon}
              </div>
              <div>
                <p className="font-body text-xs text-surface tracking-widest uppercase mb-1">{label}</p>
                <p className="font-body text-sm text-text font-medium break-all">{value}</p>
              </div>
              <p className="font-body text-xs text-accent/70 group-hover:text-accent transition-colors mt-auto flex items-center gap-1">
                {cta}
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
            </a>
          ))}
        </div>

        {/* Copy email shortcut */}
        <div
          className={`mt-6 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 font-body text-xs text-text-muted hover:text-text border border-surface/15 hover:border-surface/30 rounded-full px-4 py-2 transition-all duration-200"
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" />
                Copy email to clipboard
              </>
            )}
          </button>
        </div>

        {/* Footer rule */}
        <div className="mt-20 pt-8 border-t border-surface/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-surface/50">
            © {new Date().getFullYear()} Evan Simons — Built with React + Tailwind
          </p>
          <div className="flex items-center gap-1 font-body text-xs text-surface/30">
            <span>Designed &amp; developed with</span>
            <span className="text-accent">♥</span>
          </div>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-body text-xs text-surface/50 hover:text-accent flex items-center gap-1.5 transition-colors duration-200"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ── */
function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function CopyIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
