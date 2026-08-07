import { LIFE_ACHIEVEMENTS } from '../data/lifeAchievements.js'

function LifeAchievementsPage() {
  const timelineItems = LIFE_ACHIEVEMENTS.map(item => ({
    ...item,
    dateValue: new Date(item.date),
  })).sort((a, b) => a.dateValue - b.dateValue)

  const formatDate = value => new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(value)

  const earliestDate = timelineItems[0]?.dateValue
  const latestDate = timelineItems[timelineItems.length - 1]?.dateValue

  const getPosition = currentDate => {
    if (!earliestDate || !latestDate || currentDate < earliestDate || currentDate > latestDate) {
      return 0
    }

    const totalSpan = latestDate - earliestDate
    const currentOffset = currentDate - earliestDate
    return (currentOffset / totalSpan) * 100
  }

  return (
    <section className="life-achievements-page">
      <div className="page-header">
        <p className="section-label">Life Achievements</p>
        <h1>My Life Timeline (Page Development in Progress)</h1>
        <p className="page-description">
          A timeline of important milestones from birth to today.
        </p>
      </div>

      <div className="timeline-line">
        <div className="timeline-track" />
        {timelineItems.map(({ date, title, description, dateValue }) => {
          const position = getPosition(dateValue)

          return (
            <div
              key={date + title}
              className="timeline-point"
              style={{ left: `${position}%` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">{formatDate(dateValue)}</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default LifeAchievementsPage
