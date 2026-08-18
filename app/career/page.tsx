import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SectionPage from "../section-page";
import { career } from "../data";

export const metadata: Metadata = {
  title: "Career",
  alternates: { canonical: "/career" },
  description:
    "Swedbank, Viaplay Group, Expleo Technology Nordic and IBM — 13+ years across regulated banking, media streaming and anti-financial crime.",
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
    <SectionPage n="07" title="Career">
      <figure className="career-map" aria-label="Career locations across India, Australia, and Sweden">
        <div className="career-map-plane">
          {CAREER_LOCATIONS.map((location) => (
            <div
              key={location.key}
              className={`career-marker career-marker-${location.key}`}
              style={locationStyle(location.longitude, location.latitude)}
              aria-label={`${location.city}, ${location.country}${location.current ? " — current location" : ""}`}
            >
              <span className="career-marker-point" aria-hidden="true" />
              <span className="career-marker-label" aria-hidden="true">
                {location.key !== "gothenburg" && <strong>{location.country}</strong>}
                <span>{location.city}</span>
              </span>
            </div>
          ))}
        </div>
      </figure>

      <div>
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
      </div>
    </SectionPage>
  );
}
