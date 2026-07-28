import { SOCIAL_LINKS } from '../data/socials.js'
import { CARD_SHOWS } from '../data/cardShows.js'

function PokemonPage() {
  const favorites = [
    { name: 'Pikachu', type: 'Electric' },
    { name: 'Eevee', type: 'Normal' },
    { name: 'Gengar', type: 'Ghost/Poison' },
  ]

  const socialLinks = SOCIAL_LINKS.filter(({ label }) => label === 'Pretty Cardboard Instagram' || label === 'Colletr')

  const today = new Date()
  const month = today.getMonth()
  const year = today.getFullYear()

  const parseShowDate = showDate => {
    const [monthName, yearString] = showDate.split(' ')
    const monthIndex = new Date(`${monthName} 1, ${yearString}`).getMonth()
    const showYear = Number(yearString)
    return { monthIndex, showYear }
  }

  const isPastShow = show => {
    const { monthIndex, showYear } = parseShowDate(show.date)
    return showYear < year || (showYear === year && monthIndex < month)
  }

  const pastShows = CARD_SHOWS.filter(isPastShow)
  const upcomingShows = CARD_SHOWS.filter(show => !isPastShow(show))

  const isWeekend = today.getDay() === 0 || today.getDay() === 6
  const sectionOrder = isWeekend ? ['upcoming', 'past'] : ['past', 'upcoming']

  return (
    <section className="pokemon-page">
      <div className="page-header">
        <p className="section-label">Pokemon</p>
        <h1>Pretty Cardboard</h1>
        <h2>Pokémon TCG Vendor & Collector</h2>
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
    </section>
  )
}

export default PokemonPage
