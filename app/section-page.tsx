import Link from "next/link";
import { NAV } from "./data";

/**
 * Shared frame for every section route. Each view opens with its index and
 * title at display scale so a single section still reads as a whole page
 * rather than a fragment of a longer one.
 */
export default function SectionPage({
  n,
  title,
  lede,
  children,
}: {
  n: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  // The index doubles as the position in NAV ("01" -> Work), which keeps the
  // pager correct regardless of how the display title is worded.
  const i = Number(n) - 1;
  const prev = i > 0 ? NAV[i - 1] : null;
  const next = i >= 0 && i < NAV.length - 1 ? NAV[i + 1] : null;

  return (
    <main className="section-view shell" id="main">
      <div className="view-head">
        <span className="index">{n}</span>
        <h1 className="view-title">{title}</h1>
        {lede && <p className="lede muted view-lede">{lede}</p>}
      </div>

      <div className="view-body">{children}</div>

      <nav className="view-pager" aria-label="Section pagination">
        {prev ? (
          <Link href={prev.href} className="pager-link">
            <span className="label">Previous</span>
            <span className="pager-name">← {prev.label}</span>
          </Link>
        ) : (
          <Link href="/" className="pager-link">
            <span className="label">Back</span>
            <span className="pager-name">← Index</span>
          </Link>
        )}
        {next && (
          <Link href={next.href} className="pager-link pager-next">
            <span className="label">Next</span>
            <span className="pager-name">{next.label} →</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
