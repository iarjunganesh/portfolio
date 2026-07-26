"use client";

import { useState } from "react";

export default function DeviceFrame({
  url,
  embedUrl,
  label,
  height = 340,
}: {
  url: string;
  embedUrl?: string;
  label: string;
  height?: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="device-frame">
      <div className="device-frame__bar">
        <span className="device-frame__dot" />
        <span className="device-frame__dot" />
        <span className="device-frame__dot" />
        <span className="ml-2 truncate">{displayUrl}</span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="ml-auto shrink-0 text-accent-2 hover:underline"
        >
          open ↗
        </a>
      </div>
      <div className="relative bg-surface-2" style={{ height }}>
        {loaded ? (
          <iframe
            src={embedUrl ?? url}
            title={label}
            className="h-full w-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group flex h-full w-full flex-col items-center justify-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition group-hover:border-accent/50 group-hover:text-accent-2">
              ▶
            </span>
            Launch inline preview of {label}
          </button>
        )}
      </div>
    </div>
  );
}
