import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "../section-page";
import ProjectCard from "../project-card";
import { featuredProjects, otherProjects, PROJECT_STATUS, RESOURCE_ORDER } from "../data";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
  description:
    "ARGUS, Bastion, and DRIFT — in-depth systems case studies with explicit constraints, architecture decisions, and evidence.",
};

export default function WorkPage() {
  return (
    <SectionPage
      n="02"
      title="Selected systems"
      lede="Three in-depth engineering stories. Each one starts with a failure mode, makes the constraints explicit, and ends with inspectable evidence."
    >
      <div className="project-grid project-grid-work">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.key} project={project} index={index} />
        ))}
      </div>

      <section className="other-work" aria-labelledby="other-work-title">
        <div className="home-section-head">
          <div>
            <span className="label">Archive</span>
            <h2 id="other-work-title">Additional builds</h2>
          </div>
          <p className="muted">
            Hosting retired. The source, recordings and submissions remain — and where a
            build has a case study, it stays readable.
          </p>
        </div>
        <div>
          {otherProjects.map((project) => {
            const status = PROJECT_STATUS[project.status];
            // Same fixed vocabulary and order as the case studies: a reader
            // should not have to open the repo to find the live app or the
            // recorded demo.
            const resources = RESOURCE_ORDER.flatMap(
              (label) => project.links?.filter((link) => link.label === label) ?? [],
            );

            return (
              <article className="other-project-row" key={project.key}>
                <div>
                  <span className="project-status" data-tone={status.tone}>
                    <span className="status-dot" aria-hidden="true" />
                    {status.label}
                  </span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.tagline}</p>
                <p className="muted">{project.impact ?? project.solution}</p>
                <ul className="other-project-links" aria-label={`${project.name} resources`}>
                  {project.caseStudy && (
                    <li>
                      <Link href={`/work/${project.key}`} className="link link-out">
                        <span className="arrow" aria-hidden="true">→</span>
                        Case study
                      </Link>
                    </li>
                  )}
                  {resources.map((resource) => (
                    <li key={resource.label}>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link link-out"
                      >
                        <span className="arrow" aria-hidden="true">↗</span>
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="work-contact" aria-labelledby="work-contact-title">
        <span className="label label-signal">The next constraint</span>
        <h2 id="work-contact-title">Have a system that needs to remain explainable under pressure?</h2>
        <Link className="btn btn-solid" href="/contact">Start a conversation →</Link>
      </section>
    </SectionPage>
  );
}
