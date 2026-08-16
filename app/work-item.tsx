"use client";

import { useCallback, useRef } from "react";
import type { Project } from "./data";
import DeviceFrame from "./device-frame";
import Reveal from "./reveal";

export default function WorkItem({ p, n }: { p: Project; n: number }) {
  const ref = useRef<HTMLElement>(null);

  // Pointer spotlight: write coordinates straight to CSS custom properties so
  // the gradient follows the cursor without re-rendering React.
  const onMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--spot-y", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <article ref={ref} className="work-item" onPointerMove={onMove}>
      <Reveal>
        <div className="work-head">
          <span className="index">{String(n).padStart(2, "0")}</span>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="work-link"
            aria-label={`${p.name} — ${p.tagline}`}
          >
            <h3 className="work-name">
              {p.name}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </h3>
          </a>
        </div>

        <p className="lede muted" style={{ marginBottom: "1.75rem", maxWidth: "48ch" }}>
          {p.tagline}
        </p>

        {p.flag && (
          <p style={{ marginBottom: "1.75rem" }}>
            <span className="badge">★ {p.flag}</span>
          </p>
        )}

        <div className="work-body">
          <div className="qa">
            <div>
              <span className="label">Problem</span>
              <p>{p.problem}</p>
            </div>
            <div>
              <span className="label">Solution</span>
              <p>{p.solution}</p>
            </div>
            {p.impact && (
              <div>
                <span className="label label-signal">Impact</span>
                <p>{p.impact}</p>
              </div>
            )}
            {p.context && (
              <div>
                <span className="label">Context</span>
                <p>
                  {p.contextHref ? (
                    <a href={p.contextHref} target="_blank" rel="noreferrer" className="link">
                      {p.context}
                    </a>
                  ) : (
                    p.context
                  )}
                </p>
              </div>
            )}
          </div>

          <aside>
            <div>
              <span className="label">Status</span>
              <p
                style={{
                  marginTop: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "var(--t-small)",
                }}
              >
                <span className="status-dot" aria-hidden="true" />
                {p.status}
              </p>
            </div>

            <div style={{ marginTop: "1.75rem" }}>
              <span className="label">Stack</span>
              <div className="chips">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {p.links && p.links.length > 0 && (
              <div style={{ marginTop: "1.75rem" }}>
                <span className="label">Resources</span>
                <div className="res-list">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-ghost link-out"
                    >
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {p.preview && (
          <div style={{ marginTop: "2.5rem" }}>
            <DeviceFrame
              url={p.preview.url}
              embedUrl={p.preview.embedUrl}
              label={p.preview.label}
              height={320}
            />
          </div>
        )}
      </Reveal>
    </article>
  );
}
