import type { Metadata } from "next";
import SectionPage from "../section-page";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
  description:
    "Software engineer and systems builder in Stockholm — 13+ years across regulated banking, media streaming, distributed systems, and applied AI.",
};

const STATS = [
  { n: "13+", k: "Years shipping" },
  { n: String(projects.length).padStart(2, "0"), k: "Systems in this index" },
  { n: "1 of 3", k: "Hack for Good winners" },
];

export default function AboutPage() {
  return (
    <SectionPage n="01" title="About">
      <p className="lede">
        I build anti-financial-crime systems at Swedbank and independently explore{" "}
        <strong>governed agentic AI, distributed systems, and AI infrastructure</strong>.
      </p>

      <p className="prose muted" style={{ marginTop: "1.5rem" }}>
        My focus is on systems that remain explainable, observable, auditable, and operationally
        robust under real constraints. Across 13+ years in backend engineering, I have worked on
        regulated banking, media streaming, and distributed platforms.
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
