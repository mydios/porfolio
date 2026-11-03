import Image from 'next/image'
import portrait from '../public/me.png'

export default function Profile() {
  return (
    <header className="profile">
      <div>
        <h1>Dylan Van Parys</h1>
        <p className="profile-role">Senior Software Engineer</p>
        <p className="profile-intro">
          Software engineer based in Belgium, with 5+ years of experience in
          backend and full-stack development.
        </p>
        <nav
          className="contact-links"
          aria-label="Contact and curriculum vitae"
        >
          <a href="mailto:dylan@vpconsultancy.be">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Email
          </a>
          <a
            href="https://linkedin.com/in/dylan-van-parys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <circle cx="7" cy="7.5" r="1.4" fill="white" />
              <path
                fill="white"
                d="M5.8 10h2.4v8.2H5.8zm4.4 0h2.3v1.1c.6-.9 1.4-1.3 2.6-1.3 2.7 0 3.1 1.8 3.1 4.1v4.3h-2.4v-3.8c0-1.2 0-2.6-1.5-2.6s-1.7 1.3-1.7 2.5v3.9h-2.4z"
              />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/mydios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.4-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
            </svg>
            GitHub
          </a>
          <a href="/dylan_van_parys.pdf" download>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5" />
            </svg>
            Curriculum Vitae
          </a>
        </nav>
      </div>
      <div className="profile-photo">
        <Image
          src={portrait}
          alt="Dylan Van Parys"
          fill
          preload
          sizes="(max-width: 360px) calc(100vw - 40px), (max-width: 760px) 320px, 360px"
        />
      </div>
    </header>
  )
}
