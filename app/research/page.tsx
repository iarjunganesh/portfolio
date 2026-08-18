import type { Metadata } from "next";
import SectionPage from "../section-page";
import { research, technicalNotebooks } from "../data";

export const metadata: Metadata = {
  title: "Research",
  alternates: { canonical: "/research" },
  description:
    "Measured investigations into quantum simulation, GPU acceleration, and LLM inference, with questions, methods, results, and reproducible artifacts.",
};

export default function ResearchPage() {
  return (
    <SectionPage
      n="04"
      title="Research"
      lede="Measured investigations with explicit questions, methods, current results, and unresolved work."
    >
      <div className="research-list">
        {research.map((item, index) => (
          <article key={item.key} className="research-item">
            <div className="research-head">
              <span className="index">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="research-title">
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name} <span aria-hidden="true">↗</span>
                </a>
              </h2>
              <span className="research-status">{item.status}</span>
            </div>
            <div className="research-body">
              <div>
                <span className="label">Question</span>
                <p>{item.question}</p>
              </div>
              <div>
                <span className="label">Method</span>
                <p>{item.method}</p>
              </div>
              <div>
                <span className="label label-signal">Current result</span>
                <p>{item.result}</p>
              </div>
              <div>
                <span className="label">Next</span>
                <p>{item.next}</p>
              </div>
            </div>
            <div className="research-meta">
              <div className="chips">
                {item.stack.map((technology) => (
                  <span key={technology} className="chip">
                    {technology}
                  </span>
                ))}
              </div>
              {item.artifacts && (
                <div className="research-artifacts">
                  {item.artifacts.map((artifact) => (
                    <a
                      key={artifact.label}
                      href={artifact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-ghost link-out"
                    >
                      <span className="arrow" aria-hidden="true">↗</span>
                      {artifact.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="notebooks-section" aria-labelledby="technical-notebooks">
        <span className="label">Learning</span>
        <h2 id="technical-notebooks" className="row-title">Technical notebooks</h2>
        {technicalNotebooks.map((notebook) => (
          <a key={notebook.name} href={notebook.href} target="_blank" rel="noreferrer" className="row">
            <span className="label">Microsoft IQ</span>
            <span>
              <strong>{notebook.name} ↗</strong>
              <span className="muted notebook-description">{notebook.desc}</span>
            </span>
          </a>
        ))}
      </section>
    </SectionPage>
  );
}
