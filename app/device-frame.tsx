"use client";

import { useState } from "react";

export default function DeviceFrame({
  url,
  embedUrl,
  label,
  height = 320,
}: {
  url: string;
  embedUrl?: string;
  label: string;
  height?: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dot" aria-hidden="true" />
        <span className="frame-dot" aria-hidden="true" />
        <span className="frame-dot" aria-hidden="true" />
        <span
          style={{
            marginLeft: "0.35rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {displayUrl}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="link link-ghost"
          style={{ marginLeft: "auto", flex: "none", color: "var(--signal)" }}
        >
          open ↗
        </a>
      </div>

      <div className="frame-stage" style={{ height }}>
        {loaded ? (
          <iframe
            src={embedUrl ?? url}
            title={label}
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <button type="button" onClick={() => setLoaded(true)} className="frame-launch">
            <span className="play" aria-hidden="true">
              ▶
            </span>
            Launch inline preview — {label}
          </button>
        )}
      </div>
    </div>
  );
}
