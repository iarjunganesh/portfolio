import type { Metadata } from "next";
import SectionPage from "../section-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior architect and backend systems engineer in Stockholm — 13+ years across regulated banking, media streaming, and agentic AI.",
};

const STATS = [
  { n: "13+", k: "Years shipping" },
  { n: "05", k: "Systems in this index" },
  { n: "1 of 3", k: "Hack for Good winners" },
];

export default function AboutPage() {
  return (
    <SectionPage n="01" title="About">
      <p className="lede">
        I build <strong>audit-trailed, citation-grounded agentic AI</strong> for regulated
        industries — anti-financial-crime at a Nordic bank in Stockholm by day,{" "}
        <strong>hackathon-winning agent systems</strong> by night.
      </p>

      <p className="prose muted" style={{ marginTop: "1.5rem" }}>
        Senior architect &amp; backend systems engineer. I care about AI that explains its
        reasoning, leaves an audit trail, and actually works in production — infrastructure that
        prioritises determinism, rigorous observability, and bulletproof runtime stability over
        aesthetic flair.
      </p>

      <div className="hero-stats">
        {STATS.map((s) => (
          <div key={s.k} className="hero-stat">
            <span className="n">{s.n}</span>
            <span className="k">{s.k}</span>
          </div>
        ))}
      </div>

      <div className="about-meta">
        <div className="row">
          <span className="label">Based in</span>
          <span>Stockholm, Sweden</span>
        </div>
        <div className="row">
          <span className="label">Currently</span>
          <span>Anti-financial crime engineering @ Swedbank</span>
        </div>
        <div className="row">
          <span className="label">Engine</span>
          <span>Java · Python · CUDA C++</span>
        </div>
        <div className="row">
          <span className="label">Specialty</span>
          <span>
            High-performance distributed backends · Agentic AI systems · AI infrastructure
          </span>
        </div>
      </div>
    </SectionPage>
  );
}
