/**
 * Scroll reveal — CSS only, no JavaScript.
 *
 * The animation is driven by `animation-timeline: view()` (see globals.css).
 * Browsers without scroll-driven animation support simply render the content
 * in its final state, so nothing is ever hidden behind a script that hasn't
 * run yet.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
