"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./data";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    // Anchored during view transitions (see globals.css) so only the content
    // below it crossfades — the masthead stays put as a spatial reference.
    <header className="masthead" style={{ viewTransitionName: "site-header" }}>
      <div className="masthead-inner shell">
        <Link href="/" className="mark" aria-label="Arjun Ganesh — home">
          <span className="mark-name">Arjun Ganesh</span>
          <span className="mark-role">Agentic AI · Distributed systems</span>
        </Link>

        <nav className="masthead-nav" aria-label="Primary">
          {NAV.map((l) => {
            const on = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={on}
                aria-current={on ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
