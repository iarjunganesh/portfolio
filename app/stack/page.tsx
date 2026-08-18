import type { Metadata } from "next";
import SectionPage from "../section-page";
import { capabilities } from "../data";

export const metadata: Metadata = {
  title: "Stack",
  alternates: { canonical: "/stack" },
  description:
    "Engineering capabilities backed by professional systems, deployed projects, and measured research.",
};

export default function StackPage() {
  return (
    <SectionPage
      n="06"
      title="Capabilities"
      lede="Tools change. These capabilities are backed by systems, roles, and measured work."
    >
      <div>
        {capabilities.map((capability) => (
          <div key={capability.label} className="row capability-row">
            <h2 className="row-title">{capability.label}</h2>
            <p className="muted">{capability.evidence}</p>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
