import './App.css'
import { PROJECTS } from './data/projects.js'
import { EXPERIENCE } from './data/experience.js'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about" className="nav-name">Priscilla Yan</a>
      <ul className="nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>Priscilla Yan</h1>
        <p className="hero-tagline">QA Analyst · Pokemon Collector · Developer · Data Analyst</p>
        <p className="hero-bio">
          I'm a Math graduate at the University of Waterloo specializing in Mathematical
          Optimization with a Statistics &amp; Computing Minor. I enjoy building
          data-driven tools and web applications, with experience spanning QA, automation, machine learning
          front-end development, and data analysis.
        </p>
        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/priscilla-yan-629704162/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:phyan@uwaterloo.ca"
            className="btn btn-secondary"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-label">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map(({ title, description, tags, link }) => (
          <a
            key={title}
            href={link}
            className="project-card"
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="tags">
              {tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-label">Experience</h2>
      <div className="experience-list">
        {EXPERIENCE.map(({ role, company, period, description }) => (
          <div key={role + company} className="experience-item">
            <div className="experience-header">
              <div>
                <h3>{role}</h3>
                <p className="company">{company}</p>
              </div>
              <span className="period">{period}</span>
            </div>
            <p className="experience-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Priscilla Yan · phyan@uwaterloo.ca</p>
    </footer>
  )
}

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
