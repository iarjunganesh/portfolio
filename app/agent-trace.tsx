"use client";

import { useEffect, useState } from "react";

// Illustrative of how ARGUS / DRIFT / Continuum actually reason —
// not a live production feed. Grounded in what each system really does:
// cited compliance findings, sourced release notes, resumable incident state.
const TRACE_LINES: { agent: string; text: string; cited?: string }[] = [
  { agent: "ARGUS · KYC-Agent", text: "cross-referencing sanctions list", cited: "OFAC SDN List" },
  { agent: "ARGUS · Risk-Agent", text: "scoring transaction pattern", cited: "FATF Rec. 10" },
  { agent: "ARGUS · Compliance-Agent", text: "drafting audit entry", cited: "Foundry IQ" },
  { agent: "DRIFT · Watcher", text: "parsing CUDA changelog diff", cited: "NVIDIA release notes" },
  { agent: "DRIFT · Synthesizer", text: "bounding claim to source", cited: "PyTorch changelog" },
  { agent: "Continuum · Resume", text: "restoring execution from CockroachDB", cited: "last checkpoint" },
  { agent: "Continuum · Planner", text: "resuming after cold start", cited: "step 4/7" },
];

export default function AgentTrace() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduced = () => setReduced(mq.matches);
    syncReduced();
    mq.addEventListener("change", syncReduced);
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TRACE_LINES.length);
    }, 2400);
    return () => {
      mq.removeEventListener("change", syncReduced);
      clearInterval(id);
    };
  }, []);

  const visible = reduced
    ? TRACE_LINES.slice(0, 3)
    : [
        TRACE_LINES[index],
        TRACE_LINES[(index + 1) % TRACE_LINES.length],
        TRACE_LINES[(index + 2) % TRACE_LINES.length],
      ];

  return (
    <div
      className="device-frame w-full max-w-xl text-left"
      role="img"
      aria-label="Illustrative animated log of how ARGUS, DRIFT, and Continuum reason and cite their sources"
    >
      <div className="device-frame__bar">
        <span className="device-frame__dot" />
        <span className="device-frame__dot" />
        <span className="device-frame__dot" />
        <span className="ml-2">agent-trace — illustrative</span>
      </div>
      <div className="space-y-2 px-4 py-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
        {visible.map((line, i) => (
          <p key={`${line.agent}-${i}`} className="flex flex-wrap items-baseline gap-x-2 text-muted">
            <span className="text-accent-2">[{line.agent}]</span>
            <span className="text-foreground">{line.text}…</span>
            {line.cited && (
              <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                ✓ cited · {line.cited}
              </span>
            )}
          </p>
        ))}
        <p className="text-accent-2 blink-cursor">$</p>
      </div>
    </div>
  );
}
