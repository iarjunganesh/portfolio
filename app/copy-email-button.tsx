"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 2200);
  }

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const label = status === "copied" ? "Copied ✓" : status === "failed" ? "Copy failed" : "Copy email";

  return (
    <button type="button" className="btn" onClick={copyEmail}>
      {label}
      <span className="sr-only" aria-live="polite">
        {status === "copied" ? "Email address copied" : status === "failed" ? "Could not copy email address" : ""}
      </span>
    </button>
  );
}
