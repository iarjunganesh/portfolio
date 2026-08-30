import Link from "next/link";
import { PROJECT_STATUS, type Project } from "./data";
import SystemVisual from "./system-visual";

export default function ProjectCard({
  project,
  index,
  headingLevel = 2,
}: {
  project: Project;
  index: number;
  headingLevel?: 2 | 3;
}) {
  const status = PROJECT_STATUS[project.status];
  const proof = project.evidence?.[0];

  return (
    <article className="project-card">
      <SystemVisual project={project} compact />
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-status" data-tone={status.tone}>
            <span className="status-dot" aria-hidden="true" />
            {status.label}
          </span>
        </div>
        {headingLevel === 3 ? (
          <h3 className="project-card-title">{project.name}</h3>
        ) : (
          <h2 className="project-card-title">{project.name}</h2>
        )}
        <p className="project-card-tagline">{project.tagline}</p>
        {project.impact && <p className="project-card-impact">{project.impact}</p>}
        {proof ? (
          <p className="project-card-proof">
            <span className="label label-signal">Proof</span>
            {proof.href ? (
              <a className="link link-out" href={proof.href} target="_blank" rel="noreferrer">
                <span className="arrow" aria-hidden="true">↗</span>
                {proof.claim}
              </a>
            ) : (
              proof.claim
            )}
          </p>
        ) : null}
        <div className="chips" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 4).map((technology) => (
            <span className="chip" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-card-actions">
          <Link className="btn btn-solid" href={`/work/${project.key}`}>
            View case study →
          </Link>
          <a className="link link-ghost link-out" href={project.href} target="_blank" rel="noreferrer">
            <span className="arrow" aria-hidden="true">↗</span>
            Code
          </a>
        </div>
      </div>
    </article>
  );
}
