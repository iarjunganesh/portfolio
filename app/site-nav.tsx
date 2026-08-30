"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT, PRIMARY_NAV } from "./site-config";
import ThemeToggle from "./theme-toggle";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    // Anchored during view transitions (see globals.css) so only the content
    // below it crossfades — the masthead stays put as a spatial reference.
    <header className="masthead" style={{ viewTransitionName: "site-header" }}>
      <div className="masthead-inner shell">
        <Link href="/" className="mark" aria-label="Arjun Ganesh — home">
          <span className="mark-name">Arjun Ganesh</span>
          <span className="mark-role">Governed AI · Distributed systems</span>
        </Link>

        <nav className="masthead-nav" aria-label="Primary">
          {PRIMARY_NAV.map((l) => {
            const exact = pathname === l.href;
            // /work stays visually lit on /work/argus, but aria-current="page"
            // would then name an ancestor as the current page. Only the exact
            // match gets it.
            const within = exact || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={within}
                aria-current={exact ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="masthead-actions">
          <ThemeToggle />
          <a href={CONTACT.cv} download className="masthead-cv">
            CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}
