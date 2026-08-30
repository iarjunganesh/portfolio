import type { Project } from "./data";

/**
 * A three-stage schematic, not a rendering of the real topology. The plane
 * draws exactly three nodes on one line, so the labels and captions describe
 * those three stages — input, the boundary that does the work, and what a
 * human receives — rather than claiming a fan-out the picture does not draw.
 * If a project ever needs its true graph shown, it needs its own figure.
 */
const VISUALS = {
  argus: {
    label:
      "ARGUS schematic: a KYC request enters, five specialist agents handle it behind one boundary, and a cited report comes back",
    caption: "One request in. Five specialists behind the boundary. A cited report out.",
    nodes: ["KYC request", "5 specialists", "Cited report"],
  },
  bastion: {
    label:
      "Bastion schematic: an IAM event enters, three agents share one durable investigation identity, and a human reviews the result",
    caption: "One durable identity carries the investigation. No IAM write path.",
    nodes: ["IAM event", "Durable ID", "Human review"],
  },
  continuum: {
    label:
      "Continuum schematic: an alert enters, every remediation step is committed to durable storage as it runs, and a cold process resumes the exact step that was interrupted",
    caption: "The step outlives the process that was running it.",
    nodes: ["Incident alert", "Durable step", "Cold resume"],
  },
  drift: {
    label:
      "DRIFT schematic: release feeds enter, verification and human review sit between, and only reviewed material reaches the briefing",
    caption: "Untrusted input crosses one explicit publication gate.",
    nodes: ["Release feeds", "Verify + review", "Briefing"],
  },
} as const;

export default function SystemVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const visual = VISUALS[project.key as keyof typeof VISUALS];

  if (!visual) return null;

  return (
    <figure className={`system-visual system-visual-${project.key}${compact ? " system-visual-compact" : ""}`}>
      <div className="system-visual-plane" role="img" aria-label={visual.label}>
        {visual.nodes.map((node, index) => (
          <div key={node} className={`system-node system-node-${index + 1}`}>
            <span className="system-node-index">0{index + 1}</span>
            <span>{node}</span>
          </div>
        ))}
        <span className="system-connection system-connection-a" aria-hidden="true" />
        <span className="system-connection system-connection-b" aria-hidden="true" />
        <span className="system-signal" aria-hidden="true" />
      </div>
      <figcaption>
        {!compact && <span className="label">Schematic</span>}
        {visual.caption}
      </figcaption>
    </figure>
  );
}
