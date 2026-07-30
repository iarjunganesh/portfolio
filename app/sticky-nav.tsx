"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#press", label: "Press" },
  { href: "#research", label: "Research" },
  { href: "#focus", label: "Focus" },
  { href: "#stack", label: "Stack" },
  { href: "#career", label: "Career" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <nav className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border bg-surface/85 px-2 py-1.5 shadow-lg backdrop-blur">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] font-medium text-muted transition hover:bg-surface-2 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
