import type { Metadata } from "next";
import SectionPage from "../section-page";
import { engineeringPrinciples } from "../data";

export const metadata: Metadata = {
  title: "Engineering Principles",
  alternates: { canonical: "/focus" },
  description:
    "Principles for governed AI and distributed systems: deterministic cores, durable state, minimized model exposure, and explicit human authority.",
};

export default function FocusPage() {
  return (
    <SectionPage
      n="05"
      title="Engineering principles"
      lede="The boundaries I use when designing governed AI and distributed workflows."
    >
      <div className="principles-list">
        {engineeringPrinciples.map((principle, index) => (
          <div key={principle.name} className="row principle-row">
            <span className="index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="row-title">{principle.name}</h2>
              <p className="muted principle-description">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
