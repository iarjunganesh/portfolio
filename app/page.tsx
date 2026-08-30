import Link from "next/link";
import ExperienceYears from "./experience-years";
import GitaVerse from "./gita-verse";
import ProjectCard from "./project-card";
import { engineeringPrinciples, featuredProjects } from "./data";
import { CONTACT } from "./site-config";

export default function Home() {
  return (
    <main className="home shell" id="main">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="home-eyebrow">
          Stockholm · Engineering production systems since 2012
        </p>
        <h1 className="home-title" id="home-title">
          I build <span>auditable AI</span> and distributed systems.
        </h1>
        <p className="home-intro">
          Anti-financial-crime engineer at Swedbank, independently building governed agentic
          systems and AI infrastructure that remain explainable under real constraints.
        </p>
        <div className="home-actions">
          <Link className="btn btn-solid" href="/work">View selected work →</Link>
          <a className="btn" href={CONTACT.cv} download>Download CV ↓</a>
          <Link className="link link-ghost" href="/about">About me</Link>
        </div>
      </section>

      <section className="proof-strip" aria-label="Professional proof">
        <div className="proof-stat">
          <strong><ExperienceYears /></strong>
          <span>Years shipping</span>
        </div>
        <div className="proof-stat">
          <strong>1 of 3</strong>
          <span>Hack for Good winners</span>
        </div>
        <div className="proof-stat proof-stat-wide">
          <strong>Swedbank · Viaplay · IBM</strong>
          <span>Banking, streaming, and distributed platforms</span>
        </div>
      </section>

      <section className="home-section" aria-labelledby="featured-work-title">
        <div className="home-section-head">
          <div>
            <span className="label label-signal">Selected work</span>
            <h2 id="featured-work-title">Three systems. Three explicit trust boundaries.</h2>
          </div>
          <Link href="/work" className="link link-out">
            All systems <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} headingLevel={3} key={project.key} />
          ))}
        </div>
      </section>

      <section className="recognition-panel" aria-labelledby="recognition-title">
        <div>
          <span className="label label-signal">External validation</span>
          <p className="recognition-mark" aria-hidden="true">★</p>
        </div>
        <div>
          <h2 id="recognition-title">Microsoft Agents League · Hack for Good</h2>
          <p>
            ARGUS was selected as one of three Hack for Good winners, then featured through a
            Microsoft Tech Community guest post on explainable compliance infrastructure.
          </p>
          <Link href="/press" className="btn">Read the recognition →</Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="principles-title">
        <div className="home-section-head">
          <div>
            <span className="label">How I work</span>
            <h2 id="principles-title">The boundaries come before the model.</h2>
          </div>
          <Link href="/focus" className="link link-out">
            All principles <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="principle-grid">
          {engineeringPrinciples.slice(0, 3).map((principle, index) => (
            <article key={principle.name}>
              <span className="index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.name}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="career-snapshot" aria-labelledby="career-snapshot-title">
        <div>
          <span className="label label-signal">Career</span>
          <h2 id="career-snapshot-title"><ExperienceYears /> years across systems that cannot hand-wave failure.</h2>
        </div>
        <div>
          <p>
            Regulated banking at Swedbank and IBM. Streaming infrastructure at Viaplay.
            Independent investigations across governed AI, durable workflows, and GPU compute.
          </p>
          <Link href="/career" className="btn">View the career timeline →</Link>
        </div>
      </section>

      <section className="personal-note" aria-labelledby="personal-note-title">
        <div className="personal-note-intro">
          <span className="label">Personal note</span>
          <h2 id="personal-note-title">Time makes the constraint real.</h2>
          <p>
            Bhagavad-gītā 11.32 is the reminder behind this portfolio: systems, decisions, and
            reputations all meet time. Build what can still be explained when they do.
          </p>
        </div>
        <GitaVerse />
      </section>

      <section className="home-cta" aria-labelledby="home-cta-title">
        <span className="label label-signal">Contact</span>
        <h2 id="home-cta-title">Let’s build something auditable.</h2>
        <p>
          Open to senior engineering opportunities, governed-AI collaboration, and technical
          research conversations.
        </p>
        <div className="home-actions">
          <a className="btn btn-solid" href={`mailto:${CONTACT.email}`}>Email me →</a>
          <Link className="btn" href="/contact">All contact options</Link>
        </div>
      </section>
    </main>
  );
}
