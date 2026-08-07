import { useEffect, useState } from 'react'
import './App.css'
import { PROJECTS } from './data/projects.js'
import favicon from './assets/pretty_cardboard.PNG'
import { EDUCATION, EXPERIENCE } from './data/experience.js'
import { SOCIAL_LINKS } from './data/socials.js'
import PokemonPage from './pages/PokemonPage.jsx'
import CatPage from './pages/CatPage.jsx'
import LifeAchievementsPage from './pages/LifeAchievementsPage.jsx'

const NAV_LINKS = [
  { label: 'Experience', href: '#education' },
  { label: 'Pokemon', href: '#pokemon' },
  { label: 'Life Achievements', href: '#life-achievements' },
  { label: 'My Cat', href: '#cats' },
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
        <p className="hero-greeting">This is a website for</p>
        <h1>Priscilla Yan</h1>
        <p className="hero-tagline">QA Analyst · Pokemon Collector · Cat Lover · Developer · Data Analyst</p>
        <p className="hero-bio">
          I'm a Math graduate at the University of Waterloo specializing in Mathematical
          Optimization with a Statistics &amp; Computing Minor. I enjoy building
          data-driven tools and web applications, with experience spanning QA, automation, machine learning,
          front-end development, and data analysis.
        </p>
        <div className="hero-links">
          {SOCIAL_LINKS.filter(({ label }) => ['Instagram', 'LinkedIn', 'GitHub', 'Email me'].includes(label)).map(({ label, href, variant }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
            >
              {label}
            </a>
          ))}
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
            target="_blank"
            rel="noopener noreferrer"
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

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-label">Education</h2>
      <div className="experience-list">
        {EDUCATION.map(({ role, company, period, description }) => (
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

function HomePage() {
  return (
    <main>
      <Hero />
      <Education />
      <Projects />
      <Experience />
    </main>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }

    if (window.location.hash === '#pokemon') {
      return 'pokemon'
    }

    if (window.location.hash === '#life-achievements') {
      return 'life-achievements'
    }

    if (window.location.hash === '#cats') {
      return 'cats'
    }

    return 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#pokemon') {
        setCurrentPage('pokemon')
      } else if (window.location.hash === '#life-achievements') {
        setCurrentPage('life-achievements')
      } else if (window.location.hash === '#cats') {
        setCurrentPage('cats')
      } else {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']")

    if (!link) {
      return
    }

    if (currentPage === 'pokemon') {
      link.href = favicon
    } else {
      link.href = '/favicon.png'
    }
  }, [currentPage])

  return (
    <div className="site">
      <Navbar />
      {currentPage === 'pokemon' ? (
        <main>
          <PokemonPage />
        </main>
      ) : currentPage === 'life-achievements' ? (
        <main>
          <LifeAchievementsPage />
        </main>
      ) : currentPage === 'cats' ? (
        <main>
          <CatPage />
        </main>
      ) : (
        <HomePage />
      )}
      <Footer />
    </div>
  )
}

export default App
