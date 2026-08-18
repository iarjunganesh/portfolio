import type { Metadata } from "next";
import SectionPage from "../section-page";
import { CONTACT } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Contact Arjun Ganesh by email or LinkedIn, view GitHub, or download the CV.",
};

export default function ContactPage() {
  return (
    <SectionPage n="09" title="Let's build something auditable">
      <div>
        <span className="label">Primary</span>
        <div className="contact-links contact-actions">
          <a href={`mailto:${CONTACT.email}`} className="btn btn-solid">
            Email
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn">
            LinkedIn ↗
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="btn">
            GitHub ↗
          </a>
          <a href={CONTACT.cv} download className="btn">
            CV — PDF ↓
          </a>
        </div>
      </div>

      <div className="contact-section">
        <span className="label">Secondary</span>
        <div className="contact-links contact-actions">
          <a href={CONTACT.cvDocx} download className="btn">
            CV — DOCX ↓
          </a>
          <a href={CONTACT.discord} target="_blank" rel="noreferrer" className="btn">
            Discord ↗
          </a>
        </div>
      </div>
    </SectionPage>
  );
}
