import { ImageResponse } from "next/og";
import { caseStudyProjects, PROJECT_STATUS } from "../../data";

// One card per case study, generated from the slug. `alt` has to be a static
// export, so it stays project-agnostic — generateImageMetadata would allow a
// per-project alt, but it receives no parent params at collection time.
export const alt = "Arjun Ganesh — systems engineering case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The metadata route is its own route module, so it needs the slug list too —
// it does not pick up the one exported from page.tsx alongside it.
export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.key }));
}

function getProject(slug: string) {
  return caseStudyProjects.find((project) => project.key === slug);
}

export default async function CaseStudyImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const status = project ? PROJECT_STATUS[project.status].label : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f6f5f1",
          color: "#17170f",
          fontFamily: "monospace",
          borderTop: "14px solid #c2410c",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span>ARJUNGANESH.DEV / CASE STUDY</span>
          <span style={{ color: "#6a6558" }}>{status.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 700, lineHeight: 1 }}>
            {project?.name ?? "CASE STUDY"}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#c2410c" }}>
            {project?.tagline ?? ""}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#6a6558" }}>
          ARJUN GANESH · SYSTEMS ENGINEER, APPLIED AI · STOCKHOLM, SE
        </div>
      </div>
    ),
    size,
  );
}
