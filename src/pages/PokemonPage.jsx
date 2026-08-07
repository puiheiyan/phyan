import { SOCIAL_LINKS } from '../data/socials.js'
import { CARD_SHOWS } from '../data/cardShows.js'
import { CARD_NEEDS } from '../data/cardNeeds.js'
import logo from '../assets/pretty_cardboard.PNG'

function PokemonPage() {
  const socialLinks = SOCIAL_LINKS.filter(({ label }) => label === 'Pretty Cardboard Instagram' || label === 'Colletr')

  const today = new Date()
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  const parseShowDate = showDate => new Date(showDate)

  const isPastShow = show => {
    const showDate = parseShowDate(show.date)
    return showDate < todayStart
  }

  const pastShows = CARD_SHOWS.filter(isPastShow)
  const upcomingShows = CARD_SHOWS.filter(show => !isPastShow(show))
  const sectionOrder = ['upcoming', 'past']

  return (
    <section className="pokemon-page">
      <div className="page-header">
        <div className="page-title-group">
          <img src={logo} alt="Pretty Cardboard logo" className="page-logo" />
          <div className="page-title-copy">
            <p className="section-label">Pokemon</p>
            <h1>Pretty Cardboard</h1>
            <h2>Pokémon TCG Vendor & Collector</h2>
          </div>
        </div>
        <p className="page-description">
          Welcome to Pretty Cardboard! I'm a Pokémon TCG vendor and collector based in Ontario, Canada. I trade, buy, sell, and collect Pokémon cards. Browse my collection, explore cards currently available for sale, or reach out if you're looking for something specific.
        </p>
      </div>

      <div className="social-links-section">
        <h2>Find me online</h2>
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

      <div className="show-section">
        {sectionOrder.map(section => (
          <div key={section} className="show-list">
            <h2>{section === 'past' ? 'Card Shows I Vended At' : 'Upcoming Shows'}</h2>
            <ul>
              {(section === 'past' ? pastShows : upcomingShows).map(({ name, date, location }) => (
                <li key={name}>
                  <strong>{name}</strong> — {date} · {location}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cards-needed-section">
        <h2>Cards I am Looking for</h2>
        <h3>Mostly buying at around 80% of Collectr. However, please let me know if the prices has gone up.</h3>
        <div className="cards-needed-grid">
          {CARD_NEEDS.map(card => (
            <div key={card.name} className="card-flip-card">
              <div className="card-flip-inner">
                <div className="card-flip-front">
                  <p className="card-flip-label">Card Wanted</p>
                  <h3>{card.name}</h3>
                  <p className="card-flip-set">{card.set}</p>
                  <p className="card-flip-number">{card.setNumber}</p>
                </div>
                <div className="card-flip-back">
                  <p className="card-flip-label">Details</p>
                  <h3>{card.name}</h3>
                  <p><strong>Set:</strong> {card.set}</p>
                  <p><strong>Set Number:</strong> {card.setNumber}</p>
                  <p><strong>Price:</strong> {card.buyPrice}</p>
                  <p><strong>Amount:</strong> {card.amount ?? '1'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PokemonPage
