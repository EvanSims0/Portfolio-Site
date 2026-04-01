import { useEffect, useRef, useState } from 'react'
import { SectionHeader } from './About'

const PROJECTS = [
  {
    title:       'Ministry Map Plugin',
    description: 'A Minstry Map plugin that provides a visual interface for managing and tracking ministry activities across multiple locations.',
    tags:        ['CSS', 'JavaScript', 'Wordpress', 'PHP', 'MySQL', 'Leaflet.js'],
    github:      'https://github.com/EvanSims0',
    accent:      '#DB5729',
    placeholder: 'MMP',
  },
  {
    title:       'TAKT Smart Metronome',
    description: 'Mobile app and Metronome device that uses user presets and playlists to create dynamic practice sessions with tempo changes, rhythm variations, and progress tracking.',
    tags:        ['Dart', 'Swift', 'Objective-C', 'Flutter', 'Bluetooth'],
    github:      'https://github.com/EvanSims0',
    accent:      '#F26B4E',
    placeholder: 'TAKT',
  },
  {
    title:       'The Space in Between Movie',
    description: 'Interactive browser tool that animates classic data structures and sorting algorithms step-by-step for CS education purposes.',
    tags:        ['Movie', 'Audio Captureing', 'Gripping'],
    github:      'https://www.imdb.com/title/tt31923447/',
    accent:      '#AAA2B4',
    placeholder: 'TSIB',
  },
  {
    title:       'Illogical Legends Podcast',
    description: 'A Dungeons & Dragons actual play podcast that combines storytelling, character development, and immersive audio production to create an engaging narrative experience for listeners.',
    tags:        ['Podcast', 'Storytelling', 'Audio Production', 'Dungeons & Dragons'],
    github:      'https://www.instagram.com/illogicallegendspodcast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    accent:      '#476944',
    placeholder: 'ILP',
  },
  {
    title:       'This website that you are currently on',
    description: 'A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience in a clean and modern design.',
    tags:        ['React', 'Tailwind CSS', 'JavaScript', 'Web Development', 'UI/UX Design'],
    github:      'https://github.com/EvanSims0',
    accent:      '#5d737e',
    placeholder: 'PORTFOLIO',
  },
]

export default function Projects() {
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
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface/20 to-transparent" />

      {/* Background accent blob */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(93,115,126,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="02 — Projects" title="What I've Built" visible={visible} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <a
            href="https://github.com/EvanSims0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-accent border border-surface/20 hover:border-accent/40 rounded-full px-6 py-3 transition-all duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, visible }) {
  const { title, description, tags, github, accent, placeholder } = project

  return (
    <article
      className={`card-glow border border-surface/15 rounded-2xl overflow-hidden bg-surface-dim/20 flex flex-col transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1 + 0.15}s` }}
    >
      {/* Image placeholder */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}18, ${accent}08)` }}
      >
        {/* Geometric decoration */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, ${accent}30 0%, transparent 60%),
                              radial-gradient(circle at 80% 20%, rgba(93,115,126,0.3) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${accent}40, transparent)` }}
        />
        {/* Placeholder monogram */}
        <span
          className="font-heading text-4xl tracking-widest select-none relative z-10"
          style={{ color: `${accent}60` }}
        >
          {placeholder}
        </span>

        {/* GitHub icon top-right */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-text-muted hover:text-white hover:bg-accent/80 transition-all duration-200"
        >
          <GitHubIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-lg text-text mb-2">{title}</h3>
        <p className="font-body text-sm text-text-muted leading-relaxed flex-1 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="font-body text-[11px] font-medium border border-surface/20 text-surface rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}
