import type { Metadata } from "next";
import SectionPage from "../section-page";
import { experiments } from "../data";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explorations into quantum optimization, GPU acceleration, and LLM quantization — q1729, llm-qlab, pythonic-algorithms-lab, iq-series.",
};

export default function ResearchPage() {
  return (
    <SectionPage
      n="04"
      title="Research & exploration"
      lede="Active investigations into quantum optimization, GPU acceleration, and LLM quantization."
    >
      <div className="grid-auto">
        {experiments.map((e) => (
          <a key={e.name} href={e.href} target="_blank" rel="noreferrer" className="card">
            <span className="card-title">
              {e.name}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </span>
            <p className="muted" style={{ marginTop: "0.75rem", fontSize: "var(--t-small)" }}>
              {e.desc}
            </p>
          </a>
        ))}
      </div>
    </SectionPage>
  );
}
