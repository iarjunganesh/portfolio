/**
 * Inline so nothing here costs a request and everything inherits currentColor.
 * The two brand marks are filled paths at their official geometry; the rest are
 * stroked at the same 18-unit box so they optically match beside each other.
 */
type IconProps = { className?: string };

function Stroke({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 18 18"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Fill({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}

export const GitHubIcon = () => (
  <Fill path="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
);

export const LinkedInIcon = () => (
  <Fill path="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
);

export const MailIcon = () => (
  <Stroke>
    <rect x="1.9" y="3.6" width="14.2" height="10.8" rx="1.5" />
    <path d="m2.4 5 6.6 4.6L15.6 5" />
  </Stroke>
);

export const DocumentIcon = () => (
  <Stroke>
    <path d="M10.4 1.9H5a1.6 1.6 0 0 0-1.6 1.6v11a1.6 1.6 0 0 0 1.6 1.6h8a1.6 1.6 0 0 0 1.6-1.6V6.1Z" />
    <path d="M10.4 1.9v4.2h4.2" />
  </Stroke>
);

export const StarIcon = () => (
  <Stroke>
    <path d="m9 2 2.2 4.4 4.8.7-3.5 3.4.8 4.8L9 13l-4.3 2.3.8-4.8L2 7.1l4.8-.7Z" />
  </Stroke>
);

export const CompassIcon = () => (
  <Stroke>
    <circle cx="9" cy="9" r="7.1" />
    <path d="m11.9 6.1-1.6 4.2-4.2 1.6 1.6-4.2Z" />
  </Stroke>
);

export const LayersIcon = () => (
  <Stroke>
    <path d="M9 1.9 1.9 5.6 9 9.3l7.1-3.7Z" />
    <path d="m1.9 9.4 7.1 3.7 7.1-3.7" />
    <path d="m1.9 13.2 7.1 3.7 7.1-3.7" />
  </Stroke>
);

export const BadgeIcon = () => (
  <Stroke>
    <circle cx="9" cy="6.9" r="5" />
    <path d="m6.2 11.2-.9 5 3.7-1.8 3.7 1.8-.9-5" />
  </Stroke>
);

export type Icon = (props: IconProps) => React.ReactElement;
