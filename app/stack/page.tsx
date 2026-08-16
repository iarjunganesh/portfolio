import type { Metadata } from "next";
import SectionPage from "../section-page";
import { techStack } from "../data";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Java, Spring Boot, Python, FastAPI, Azure AI Foundry, Semantic Kernel, CUDA, pgvector, OpenTelemetry and more.",
};

// Two lanes of the stack, scrolling in opposite directions.
const lanes = [
  techStack.flatMap((g) => g.items).filter((_, i) => i % 2 === 0),
  techStack.flatMap((g) => g.items).filter((_, i) => i % 2 === 1),
];

export default function StackPage() {
  return (
    <SectionPage n="06" title="Stack">
      <div style={{ display: "grid", gap: "2rem" }}>
        {techStack.map((g) => (
          <div key={g.label}>
            <span className="label">{g.label}</span>
            <div className="chips">
              {g.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="marquee-set">
        {lanes.map((lane, i) => (
          <div key={i} className="marquee" data-dir={i % 2 ? "rev" : "fwd"} aria-hidden="true">
            <div className="marquee-track">
              {/* duplicated once so the -50% translate loops seamlessly */}
              {[0, 1].map((dup) => (
                <div key={dup} className="marquee-group">
                  {lane.map((it) => (
                    <span key={it} className="marquee-item">
                      {it}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
