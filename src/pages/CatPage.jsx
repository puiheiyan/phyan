import { SOCIAL_LINKS } from '../data/socials.js'

function CatPage() {

  const socialLinks = SOCIAL_LINKS.filter(({ label }) => label === 'Kitkat Instagram')

  return (
    <section className="pokemon-page">
      <div className="page-header">
        <p className="section-label">Kitkat</p>
        <h1>My Cat Kitkat</h1>
        <p className="page-description">
          Just like the chocolate bar, she is very sweet. This is a space to share all the cats photo I want. 
        </p>
      </div>

      <div className="story-section">
        <h2>Back Story</h2>
        <p>
          I adopted her in May 2024 from Kijiji when she was 9 months old. Her previous family called her Luna. She was super friendly with humans and had a lot of energy. Unfortunately, she did not get along when the resident cat there. After I adopted her, I called her different names and kitty cat is what she responded to the most. I later then shortened it to Kitkat.
        </p>
      </div>

      <div className="social-links-section">
        <h2>Follow along</h2>
        <div className="hero-links">
          {socialLinks.map(({ label, href, displayLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {displayLabel ?? label}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}

export default CatPage
