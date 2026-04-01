import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'

export default function App() {
  return (
    <div className="grain min-h-screen bg-background text-text font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
