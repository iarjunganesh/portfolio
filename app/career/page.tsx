import type { Metadata } from "next";
import SectionPage from "../section-page";
import { career } from "../data";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Swedbank, Viaplay Group, Expleo Technology Nordic and IBM — 13+ years across regulated banking, media streaming and anti-financial crime.",
};

export default function CareerPage() {
  return (
    <SectionPage n="07" title="Career">
      {career.map((r) => (
        <div key={`${r.company}-${r.period}`} className="row">
          <span className="label" style={{ paddingTop: "0.35rem" }}>
            {r.period}
          </span>
          <div>
            <h2 className="row-title">{r.title}</h2>
            <p style={{ marginTop: "0.35rem", fontSize: "var(--t-small)" }}>
              <span style={{ color: "var(--signal)" }}>{r.company}</span>
              <span className="muted"> · {r.location}</span>
            </p>
            <p className="muted" style={{ marginTop: "0.5rem", fontSize: "var(--t-small)" }}>
              {r.note}
            </p>
          </div>
        </div>
      ))}
    </SectionPage>
  );
}
