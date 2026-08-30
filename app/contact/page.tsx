import type { Metadata } from "next";
import CopyEmailButton from "../copy-email-button";
import SectionPage from "../section-page";
import { CONTACT } from "../site-config";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Contact Arjun Ganesh by email or LinkedIn, view GitHub, or download the CV.",
};

export default function ContactPage() {
  return (
    <SectionPage
      n="09"
      title="Let's build something auditable"
      lede="Open to senior engineering opportunities, governed-AI collaboration, and technical research conversations."
    >
      <div className="contact-intro">
        <span className="label label-signal">Based in Stockholm</span>
        <p>
          The best starting point is email. Include the system, constraint, or question you want
          to discuss; I’ll bring the architecture questions.
        </p>
      </div>

      <div>
        <span className="label">Primary</span>
        <div className="contact-links contact-actions">
          <a href={`mailto:${CONTACT.email}`} className="btn btn-solid">
            Email
          </a>
          <CopyEmailButton email={CONTACT.email} />
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

      <details className="contact-more contact-section">
        <summary>More contact and document formats</summary>
        <div className="contact-links contact-actions">
          <a href={CONTACT.cvDocx} download className="btn">CV — DOCX ↓</a>
          <a href={CONTACT.discord} target="_blank" rel="noreferrer" className="btn">Discord ↗</a>
        </div>
      </details>
    </SectionPage>
  );
}
