import Image from 'next/image'
import Experience from './Experience'

export default function ExperienceSection() {
  return (
    <section aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <div className="timeline">
        <Experience
          company={
            <div
              style={{
                alignItems: 'left'
              }}
            >
              <Image
                className="company-logo"
                src="/images/basf.png"
                alt="BASF"
                width={1182}
                height={591}
                sizes="112px"
              />
              <p style={{ marginTop: 15 }}>BASF Agricultural Solutions</p>
            </div>
          }
          period="2024 — Present"
          role="Software Engineer"
        >
          <dl className="metrics">
            <div>
              <dt>Data managed by Resource Registry</dt>
              <dd>
                Petabyte <span>scale</span>
              </dd>
            </div>
          </dl>
          <p className="experience-description">
            Developing research applications for{' '}
            <strong>computational biology</strong>. Previously built{' '}
            <strong>Resource Registry</strong> for data abstraction and
            replication across on-premises storage and AWS S3.
          </p>
        </Experience>

        <Experience
          company={
            <a
              className="company-link"
              href="https://your-tickets.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="company-logo"
                src="/images/your-tickets.png"
                alt="Your-Tickets.be"
                width={1184}
                height={324}
                sizes="(max-width: 760px) 160px, 210px"
              />
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 3h6v6m0-6-10 10M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
              </svg>
            </a>
          }
          period="2021 — Present"
          role="Technical Lead & Co-owner"
        >
          <dl className="metrics">
            <div>
              <dt>tickets sold</dt>
              <dd>1M+</dd>
            </div>
            <div>
              <dt>event organizers</dt>
              <dd>1,000+</dd>
            </div>
          </dl>
          <p className="experience-description">
            <strong>Software architecture</strong>, full-stack development, and
            AWS infrastructure for an event ticketing platform, including{' '}
            <strong>payment processing</strong> and{' '}
            <strong>offline ticket validation</strong>.
          </p>
        </Experience>

        <Experience
          company="IQGeo / Comsof"
          period="2021 — 2024"
          role="Software Engineer · Consultant via Axxes"
        >
          <p className="experience-description">
            Developed features for <strong>Comsof Fiber</strong>, an automated
            fiber-optic network planning platform, including{' '}
            <strong>algorithm optimization</strong> and{' '}
            <strong>client-specific extensions</strong>.
          </p>
          <Image
            className="product-image"
            src="/images/comsof-fiber.png"
            alt="Comsof Fiber network planning interface displayed on a laptop"
            width={492}
            height={328}
            sizes="(max-width: 760px) 80vw, 360px"
          />
          <p className="clients">
            <strong>Clients</strong>
            Deutsche Telekom · AT&T · Proximus · Telekom Malaysia
          </p>
        </Experience>
      </div>
    </section>
  )
}
