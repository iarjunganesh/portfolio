import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { IBM_Plex_Mono, Tiro_Devanagari_Sanskrit } from "next/font/google";
import SiteNav from "./site-nav";
import "./globals.css";

// latin-ext carries the Latin Extended Additional block (U+1E00–U+1E9F), which
// the IAST transliteration of the Gita verse needs for ṛ, ṣ, ṁ and ḥ.
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Cut specifically for Sanskrit typesetting — used only for the Gita verse.
// Its italic is designed for romanized transliteration of Indic text, and it
// carries the full IAST set (ṛ ṣ ṁ ḥ ṇ) that IBM Plex Mono lacks.
const tiroSanskrit = Tiro_Devanagari_Sanskrit({
  variable: "--font-sanskrit",
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arjun Ganesh — Systems Engineer, Applied AI",
    template: "%s — Arjun Ganesh",
  },
  description:
    "Software engineer in Stockholm with 13+ years across banking, streaming, and distributed systems; independently building governed applied AI and GPU research.",
  metadataBase: new URL("https://arjunganesh.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arjun Ganesh — Systems Engineer, Applied AI",
    description:
      "Systems engineer building trustworthy applied AI under real constraints.",
    url: "https://arjunganesh.dev",
    siteName: "Arjun Ganesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Ganesh — Systems Engineer, Applied AI",
    description: "Systems engineer building trustworthy applied AI under real constraints.",
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arjun Ganesh",
  url: "https://arjunganesh.dev",
  jobTitle: "Software Engineer",
  homeLocation: {
    "@type": "Place",
    name: "Stockholm, Sweden",
  },
  sameAs: ["https://github.com/iarjunganesh", "https://linkedin.com/in/iarjunganesh"],
  knowsAbout: [
    "Distributed systems",
    "Applied artificial intelligence",
    "Backend engineering",
    "GPU computing",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#050506" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${tiroSanskrit.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        {/* Route changes are React Transitions, so this crossfades the view
            while the masthead above stays anchored. */}
        <ViewTransition enter="view-enter" exit="view-exit">
          {children}
        </ViewTransition>
        <footer className="footer shell">
          <span>Stockholm, SE</span>
        </footer>
      </body>
    </html>
  );
}
