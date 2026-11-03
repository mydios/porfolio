import Image from 'next/image'

export default function Eductation() {
  return (
    <section aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <div className="education">
        <Image
          className="university-logo"
          src="/ugent-logo.png"
          alt="Ghent University logo"
          width={347}
          height={300}
          sizes="80px"
        />
        <div>
          <div className="entry-heading">
            <h3>Ghent University</h3>
            <span className="date">2016 — 2021</span>
          </div>
          <p>MSc Computer Science Engineering, cum laude.</p>
        </div>
      </div>
    </section>
  )
}
