import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Ganesh — Senior Engineer, Agentic AI Systems",
  description:
    "13+ years in distributed systems. Building agentic AI on Azure AI Foundry, A2A, RAG, and MCP — ARGUS (Microsoft Agents League 2026 Hack for Good winner), DRIFT, Banker's Wrapped, and Continuum.",
  metadataBase: new URL("https://arjunganesh.dev"),
  openGraph: {
    title: "Arjun Ganesh — Senior Engineer, Agentic AI Systems",
    description:
      "13+ years in distributed systems. Building agentic AI on Azure AI Foundry, A2A, RAG, and MCP.",
    url: "https://arjunganesh.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
