import type { Metadata } from "next";
import SectionPage from "../section-page";
import { CONTACT } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arjun Ganesh — email, LinkedIn, GitHub, Discord and CV.",
};

export default function ContactPage() {
  return (
    <SectionPage n="09" title="Let's build something auditable">
      <div>
        <span className="label">Email</span>
        <div className="contact-links" style={{ marginTop: "0.85rem" }}>
          {CONTACT.emails.map((e, i) => (
            <a
              key={e.label}
              href={e.href}
              className={i === 0 ? "btn btn-solid" : "btn"}
              title={e.href.replace("mailto:", "")}
            >
              {e.label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <span className="label">Elsewhere</span>
        <div className="contact-links" style={{ marginTop: "0.85rem" }}>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn">
            LinkedIn ↗
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="btn">
            GitHub ↗
          </a>
          <a href={CONTACT.discord} target="_blank" rel="noreferrer" className="btn">
            Discord ↗
          </a>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <span className="label">Résumé</span>
        <div className="contact-links" style={{ marginTop: "0.85rem" }}>
          <a href={CONTACT.cv} download className="btn">
            CV — PDF ↓
          </a>
          <a href={CONTACT.cvDocx} download className="btn">
            CV — DOCX ↓
          </a>
        </div>
      </div>
    </SectionPage>
  );
}
