"use client";

export default function ScrollTopLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages -- scroll-to-top control, not a route change
    <a
      href="/"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
    >
      {children}
    </a>
  );
}
