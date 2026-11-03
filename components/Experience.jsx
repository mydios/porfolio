export default function Experience({ company, period, role, children }) {
  return (
    <div className="timeline-item">
      <article className="experience">
        <div className="entry-heading">
          <h3>{company}</h3>
          <span className="date">{period}</span>
        </div>
        <p className="experience-role">{role}</p>
        {children}
      </article>
    </div>
  )
}
