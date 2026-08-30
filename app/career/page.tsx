import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ExperienceYears from "../experience-years";
import SectionPage from "../section-page";
import { career } from "../data";

export const metadata: Metadata = {
  title: "Career",
  alternates: { canonical: "/career" },
  description:
    "Swedbank, Viaplay Group, Expleo Technology Nordic and IBM — engineering production systems since 2012 across regulated banking, streaming, and anti-financial crime.",
};

const CAREER_LOCATIONS = [
  { key: "pune", city: "Pune", country: "India", longitude: 73.8567, latitude: 18.5204, current: false },
  { key: "sydney", city: "Sydney", country: "Australia", longitude: 151.2093, latitude: -33.8688, current: false },
  { key: "gothenburg", city: "Gothenburg", country: "Sweden", longitude: 11.9746, latitude: 57.7089, current: false },
  { key: "stockholm", city: "Stockholm", country: "Sweden", longitude: 18.0686, latitude: 59.3293, current: true },
] as const;

function locationStyle(longitude: number, latitude: number) {
  return {
    "--map-x": `${((longitude + 180) / 360) * 100}%`,
    "--map-y": `${((90 - latitude) / 180) * 100}%`,
  } as CSSProperties;
}

export default function CareerPage() {
  return (
    <SectionPage
      n="07"
      title="Career"
      lede="Production engineering across regulated banking, streaming, and distributed platforms — with the roles first and the geography in support."
    >
      <section className="career-summary" aria-label="Career summary">
        <div>
          <strong><ExperienceYears /></strong>
          <span>Years shipping since 30 August 2012</span>
        </div>
        <p>Swedbank · Viaplay Group · Expleo Technology Nordic · IBM</p>
      </section>

      <section className="career-timeline" aria-labelledby="career-timeline-title">
        <span className="label label-signal">Experience</span>
        <h2 className="row-title" id="career-timeline-title">Roles and outcomes</h2>
        <div>
          {career.map((role) => (
            <article key={`${role.company}-${role.period}`} className="career-row">
              <span className="label">{role.period}</span>
              <div>
                <h3>{role.title}</h3>
                <p className="career-company">{role.company} <span>· {role.location}</span></p>
                <p className="muted">{role.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <figure className="career-map" aria-labelledby="career-map-caption">
        <div className="career-map-plane">
          {CAREER_LOCATIONS.map((location) => (
            <div
              key={location.key}
              className={`career-marker career-marker-${location.key}`}
              style={locationStyle(location.longitude, location.latitude)}
            >
              <span className="career-marker-point" aria-hidden="true" />
              <span className="career-marker-label" aria-hidden="true">
                {location.key !== "gothenburg" && <strong>{location.country}</strong>}
                <span>{location.city}</span>
              </span>
            </div>
          ))}
        </div>
        <figcaption id="career-map-caption">
          Career locations across Pune, Sydney, Gothenburg, and Stockholm.
        </figcaption>
      </figure>
    </SectionPage>
  );
}
