import { ImageResponse } from "next/og";

export const alt = "Arjun Ganesh — auditable AI and distributed systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
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
        <span>ARJUNGANESH.DEV</span>
        <span style={{ color: "#6a6558" }}>STOCKHOLM, SE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, lineHeight: 0.92 }}
        >
          <span>AUDITABLE AI.</span>
          <span>DISTRIBUTED SYSTEMS.</span>
        </div>
        <div style={{ marginTop: 30, fontSize: 34, color: "#c2410c" }}>
          ARJUN GANESH · SYSTEMS ENGINEER
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#6a6558" }}>
        Engineering production systems since 2012 · Stockholm, Sweden
      </div>
    </div>,
    size,
  );
}
