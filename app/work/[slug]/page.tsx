import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudyProjects, PROJECT_STATUS, RESOURCE_ORDER } from "../../data";
import SystemVisual from "../../system-visual";

type Props = { params: Promise<{ slug: string }> };

function getProject(slug: string) {
  return caseStudyProjects.find((project) => project.key === slug);
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.key }));
}

// Every valid slug is known at build time, so anything else is a 404 rather
// than an on-demand render of a project that does not exist.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.name} case study`;
  // Open Graph and Twitter do not inherit field-by-field from the root layout:
  // without their own values a shared /work/<slug> link previews as the
  // homepage, down to og:url.
  const description = `${project.tagline}. ${project.impact ?? project.caseStudy.outcome}`;
  const url = `/work/${project.key}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description,
      url,
      siteName: "Arjun Ganesh",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline}`,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const study = project.caseStudy;
  const status = PROJECT_STATUS[project.status];
  const resources = RESOURCE_ORDER.flatMap((label) =>
    project.links?.filter((link) => link.label === label) ?? [],
  );

  return (
    <main className="case-study shell" id="main">
      <Link href="/work" className="case-back">
        ← All selected work
      </Link>

      <header className="case-hero">
        <div className="case-kicker">
          <span className="index">Case study</span>
          <span className="project-status" data-tone={status.tone}>
            <span className="status-dot" aria-hidden="true" />
            {status.label}
          </span>
        </div>
        <h1 className="case-title">{project.name}</h1>
        <p className="case-tagline">{project.tagline}</p>
        <p className="case-premise">{study.premise}</p>
        <div className="case-hero-actions">
          {resources.slice(0, 3).map((resource, index) => (
            <a
              key={resource.label}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className={`btn${index === 0 ? " btn-solid" : ""}`}
            >
              {resource.label} ↗
            </a>
          ))}
        </div>
      </header>

      <SystemVisual project={project} />

      <section className="case-overview" aria-label="Case overview">
        <div>
          <span className="label">Scope</span>
          <p>{study.scope}</p>
        </div>
        <div>
          <span className="label label-signal">Outcome</span>
          <p>{study.outcome}</p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="problem-title">
        <span className="case-section-index">01</span>
        <div className="case-section-content">
          <h2 id="problem-title">Failure mode</h2>
          <p className="case-lede">{project.problem}</p>
        </div>
      </section>

      <section className="case-section" aria-labelledby="constraints-title">
        <span className="case-section-index">02</span>
        <div className="case-section-content">
          <h2 id="constraints-title">Non-negotiable constraints</h2>
          <ul className="constraint-grid">
            {study.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-section" aria-labelledby="decisions-title">
        <span className="case-section-index">03</span>
        <div className="case-section-content">
          <h2 id="decisions-title">Architecture decisions</h2>
          <div className="decision-list">
            {study.decisions.map((decision, index) => (
              <article key={decision.title} className="decision-item">
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <aside className="case-finding" aria-labelledby="finding-title">
        <span className="label label-signal">{study.finding.label}</span>
        <h2 id="finding-title">{study.finding.title}</h2>
        <p>{study.finding.description}</p>
        {study.finding.href && (
          <a className="link link-out" href={study.finding.href} target="_blank" rel="noreferrer">
            <span className="arrow" aria-hidden="true">↗</span>
            Inspect the evidence
          </a>
        )}
      </aside>

      <section className="case-section" aria-labelledby="evidence-title">
        <span className="case-section-index">04</span>
        <div className="case-section-content">
          <h2 id="evidence-title">Evidence, not adjectives</h2>
          <div className="case-evidence-grid">
            <div>
              <span className="label">Verified evidence</span>
              <ul className="evidence-list evidence-list-signal">
                {project.evidence?.map((evidence) => (
                  <li key={evidence.claim}>
                    {evidence.href ? (
                      <a
                        className="link link-out"
                        href={evidence.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="arrow" aria-hidden="true">↗</span>
                        {evidence.claim}
                      </a>
                    ) : (
                      evidence.claim
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label">Guarantees</span>
              <ul className="evidence-list">
                {project.guarantees?.map((guarantee) => <li key={guarantee}>{guarantee}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="limits-title">
        <span className="case-section-index">05</span>
        <div className="case-section-content">
          <h2 id="limits-title">What remains bounded</h2>
          <p className="case-lede muted">{study.limitation}</p>
          <div className="chips" aria-label={`${project.name} technology stack`}>
            {project.stack.map((technology) => (
              <span className="chip" key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-cta" aria-labelledby="case-cta-title">
        <span className="label label-signal">Discuss the decisions</span>
        <h2 id="case-cta-title">Building a system with an audit boundary?</h2>
        <p>I’m always interested in the constraints that make an architecture worth explaining.</p>
        <div className="case-hero-actions">
          <Link href="/contact" className="btn btn-solid">Start a conversation →</Link>
          <Link href="/work" className="btn">Explore another system</Link>
        </div>
      </section>
    </main>
  );
}
