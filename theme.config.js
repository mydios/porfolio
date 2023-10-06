import Link from "next/link"

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Dylan Van Parys.
      <p>This portfolio is built with <b>Next.js</b> and a library called <Link href="https://nextra.vercel.app/">Nextra</Link>. It allows you to write Markdown and focus on the content of your portfolio.</p>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
