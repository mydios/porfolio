import Head from 'next/head'
import Profile from '../components/Profile'
import ExperienceSection from '../components/ExperienceSection'
import Technologies from '../components/Technologies'
import Eductation from '../components/Eductation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Van Parys — Software Engineer</title>
        <meta
          name="description"
          content="Dylan Van Parys, senior software engineer based in Belgium. Java, Spring Boot, AWS, and full-stack development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vpconsultancy.be" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dylan Van Parys — Software Engineer"
        />
        <meta
          property="og:description"
          content="Dylan Van Parys, senior software engineer based in Belgium. Java, Spring Boot, AWS, and full-stack development."
        />
        <meta property="og:url" content="https://vpconsultancy.be" />
        <meta
          property="og:image"
          content="https://vpconsultancy.be/og-image.png"
        />
        <meta
          property="og:image:alt"
          content="Dylan Van Parys — Senior Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="portfolio" id="home">
        <Profile />
        <ExperienceSection />
        <Technologies />
        <Eductation />
      </main>
    </>
  )
}
