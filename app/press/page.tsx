import type { Metadata } from "next";
import SectionPage from "../section-page";
import { ARGUS_BLOG_URL } from "../data";
import recognitionQuoteLight from "../../public/argus-recognition-quote-light.png";
import recognitionQuoteDark from "../../public/argus-recognition-quote-dark.png";
import recognitionQuoteLightMobile from "../../public/argus-recognition-quote-light-mobile.png";
import recognitionQuoteDarkMobile from "../../public/argus-recognition-quote-dark-mobile.png";

export const metadata: Metadata = {
  title: "Press",
  alternates: { canonical: "/press" },
  description:
    "ARGUS won Hack for Good at the Microsoft Agents League 2026 and was featured on the Microsoft Tech Community blog.",
};

export default function PressPage() {
  return (
    <SectionPage n="03" title="Press & recognition">
      <div className="press">
        <span className="badge">★ Hack for Good — 1 of 3 winners</span>

        <p className="press-quote">
          “ARGUS — compliance infrastructure that believes financial access is a human right.”
        </p>

        <p className="muted" style={{ marginTop: "1rem", fontSize: "var(--t-small)" }}>
          Published on the Microsoft Tech Community blog. Studied Foundry IQ before building ARGUS,
          then competed in the Agents League Reasoning Agents track — and won Hack for Good.
        </p>

        <div style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <a href={ARGUS_BLOG_URL} target="_blank" rel="noreferrer" className="btn btn-solid">
            Read the write-up ↗
          </a>
          <a href="https://aka.ms/iq-series" target="_blank" rel="noreferrer" className="btn">
            Foundry IQ series ↗
          </a>
        </div>

        <div className="press-shot">
          <picture>
            <source
              media="(max-width: 600px) and (prefers-color-scheme: dark)"
              srcSet={recognitionQuoteDarkMobile.src}
            />
            <source
              media="(max-width: 600px)"
              srcSet={recognitionQuoteLightMobile.src}
            />
            <source media="(prefers-color-scheme: dark)" srcSet={recognitionQuoteDark.src} />
            <img
              src={recognitionQuoteLight.src}
              alt="Lee Stott of Microsoft congratulates Arjun Ganesh for ARGUS and its measurable social impact"
              width={recognitionQuoteLight.width}
              height={recognitionQuoteLight.height}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </picture>
        </div>
      </div>
    </SectionPage>
  );
}
