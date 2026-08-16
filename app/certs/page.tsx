import type { Metadata } from "next";
import SectionPage from "../section-page";
import { certifications } from "../data";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "NVIDIA Certified Professional: Agentic AI, Linux Foundation Kubernetes Administration, IBM Machine Learning Essentials and more.",
};

export default function CertsPage() {
  return (
    <SectionPage n="08" title="Credentials" lede="Every certificate links to its issuing authority.">
      {certifications.map((c) => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          className="row"
          style={{ display: "grid" }}
        >
          <span className="label" style={{ paddingTop: "0.35rem" }}>
            {c.issuer}
          </span>
          <span className="link link-ghost link-out" style={{ fontSize: "1rem" }}>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
            {c.name}
          </span>
        </a>
      ))}
    </SectionPage>
  );
}
