export default function Technologies() {
  return (
    <section aria-labelledby="technologies-title">
      <h2 id="technologies-title">Technologies</h2>
      <div className="technologies">
        <div>
          <h3>Languages</h3>
          <ul className="tags" aria-label="Languages">
            <li>Java</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul className="tags" aria-label="Backend">
            <li>Spring Boot</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>Apache ActiveMQ Artemis</li>
          </ul>
        </div>
        <div>
          <h3>Cloud & DevOps</h3>
          <ul className="tags" aria-label="Cloud and DevOps">
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>GitHub Actions</li>
            <li>Bamboo</li>
          </ul>
        </div>
        <div>
          <h3>Frontend & Mobile</h3>
          <ul className="tags" aria-label="Frontend and Mobile">
            <li>React</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>Expo</li>
            <li>Angular</li>
          </ul>
        </div>
        <div>
          <h3>Databases</h3>
          <ul className="tags" aria-label="Databases">
            <li>Oracle</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3>Testing & Practices</h3>
          <ul className="tags" aria-label="Testing and Practices">
            <li>JUnit</li>
            <li>Jest</li>
            <li>Scrum</li>
            <li>TDD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
