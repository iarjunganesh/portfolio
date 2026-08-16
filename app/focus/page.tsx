import type { Metadata } from "next";
import SectionPage from "../section-page";
import { focusAreas } from "../data";

export const metadata: Metadata = {
  title: "Focus",
  description:
    "Agentic AI, distributed systems, AI infrastructure and compute performance, reliability and platform engineering.",
};

export default function FocusPage() {
  return (
    <SectionPage n="05" title="Core focus">
      <div className="grid-auto">
        {focusAreas.map((a) => (
          <div key={a.name} className="card" style={{ height: "100%" }}>
            <h2 className="card-title" style={{ display: "block" }}>
              {a.name}
            </h2>
            <ul style={{ marginTop: "1rem", display: "grid", gap: "0.5rem" }}>
              {a.items.map((it) => (
                <li
                  key={it}
                  className="muted"
                  style={{ fontSize: "var(--t-small)", display: "flex", gap: "0.6rem" }}
                >
                  <span style={{ color: "var(--signal)" }} aria-hidden="true">
                    ▸
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
