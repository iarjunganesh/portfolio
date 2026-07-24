import Link from "next/link";
import ContactMenus from "./contact-menus";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

type Badge = { label: string; tone?: "accent" | "gold" | "green" | "muted"; href?: string };

type Project = {
  key: string;
  emoji: string;
  name: string;
  href: string;
  tagline: string;
  context?: string;
  contextHref?: string;
  statusBadges: Badge[];
  description: string;
  liveLinks?: { label: string; href: string }[];
  stack: string[][];
  demoHref?: string;
  credentials?: { label: string; sub: string; href: string; img: string }[];
};

// Flagships first (ARGUS won, DRIFT shipped, q1729 active research),
// then the two in-flight hackathon builds.
const projects: Project[] = [
  {
    key: "argus",
    emoji: "🛡️",
    name: "ARGUS",
    href: "https://github.com/iarjunganesh/argus",
    tagline: "Multi-agent compliance intelligence on Azure AI Foundry",
    context: "Microsoft Agents League — AI Skills Fest 2026 · Reasoning Agents track",
    contextHref: "https://info.microsoft.com/Agents-League-Hackathon-Registration.html",
    statusBadges: [
      {
        label: "🏆 Winner · Hack for Good (1 of 3)",
        tone: "gold",
        href: "https://techcommunity.microsoft.com/blog/educatordeveloperblog/%F0%9F%8F%86-agents-league-celebrating-the-builders-who-made-agents-battle-for-glory/4538007",
      },
    ],
    description:
      "Five specialist AI agents, coordinated over the A2A protocol on Azure AI Foundry, run KYC, AML, and risk screening — every finding grounded in cited regulation via Foundry IQ, every decision backed by a full audit trail. Built solo; one of three Hack for Good winners.",
    demoHref: "https://youtu.be/yaTNCgCwX4s",
    stack: [
      ["Azure AI Foundry", "Azure OpenAI GPT-4o", "Foundry IQ", "Semantic Kernel", "A2A"],
      ["Azure AI Search", "Cosmos DB", "RAG hybrid search", "MCP", "Gradio"],
      ["Python 3.11"],
    ],
    credentials: [
      {
        label: "Foundry IQ",
        sub: "Learned before building",
        href: "https://globalai.community/badges/b35714f6-9372-4716-985f-ad2058722e76",
        img: "https://globalai.community/img/badge/shared/f1de85c1359e1380dcabb9901d210a3d00645ec975a640338021f91792d26ffd.png",
      },
      {
        label: "Reasoning Agents",
        sub: "Track participant",
        href: "https://globalai.community/badges/8261feac-a6a6-4ee9-bc77-4ebecbbf2ce8",
        img: "https://globalai.community/img/badge/shared/e7860f511b05fc9a1a85b9335618871286c3279b000350d76b049f6049f2aa51.png",
      },
    ],
  },
  {
    key: "drift",
    emoji: "🔎",
    name: "DRIFT",
    href: "https://github.com/iarjunganesh/drift",
    tagline: "Release intelligence for GPU & AI infrastructure",
    context: "OpenAI Build Week · Devpost",
    contextHref: "https://openai.devpost.com/",
    statusBadges: [{ label: "Live in production", tone: "green" }],
    description:
      "An agentic pipeline that turns noisy changelogs into cited, bounded, inspectable release briefings for GPU and AI-infrastructure teams — grounded and source-linked, never hand-wavy.",
    liveLinks: [
      { label: "Live app", href: "https://dr1ftless.vercel.app" },
      { label: "API docs", href: "https://drift-api-prod.up.railway.app/docs" },
      { label: "Devpost", href: "https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams" },
    ],
    demoHref: "https://youtu.be/6sbIz0ZR8Hw",
    stack: [
      ["Python 3.14", "FastAPI", "asyncio agents", "Pydantic 2.13"],
      ["Next.js 16", "React 19", "TypeScript"],
      ["PostgreSQL 17", "pgvector", "Vercel", "Railway"],
    ],
  },
  {
    key: "q1729",
    emoji: "🧮",
    name: "q1729 — the quantum taxicab",
    href: "https://github.com/iarjunganesh/q1729",
    tagline: "Ramanujan's mathematics meets the NVIDIA stack",
    context: "Independent research · math × GPU compute",
    statusBadges: [{ label: "Active research", tone: "accent" }],
    description:
      "How fast can a GPU compute π — classically, and as a quantum computer? An end-to-end study from consumer RTX to datacenter H100 (CUDA C++ and CUDA-Q/cuQuantum), with an AI layer that writes up what the numbers actually show.",
    stack: [
      ["CUDA C++", "CUDA-Q", "cuQuantum"],
      ["NVIDIA NIM", "Nemotron"],
      ["Python"],
    ],
  },
  {
    key: "continuum",
    emoji: "🧠",
    name: "Continuum",
    href: "https://github.com/iarjunganesh/continuum",
    tagline: "Durable incident memory for cold-started agents",
    context: "CockroachDB AI · Devpost",
    contextHref: "https://cockroachdb-ai.devpost.com/",
    statusBadges: [{ label: "In development", tone: "gold" }],
    description:
      "Agentic incident-response memory that survives the agent being killed mid-incident — execution state lives in CockroachDB, not process memory, so a cold-started agent resumes from the exact interrupted step.",
    liveLinks: [{ label: "HuggingFace Space", href: "https://huggingface.co/spaces/iarjunganesh/continuum" }],
    stack: [
      ["CockroachDB", "CockroachDB MCP", "Amazon Bedrock", "AWS Lambda"],
      ["Python", "FastAPI", "Gradio", "pytest"],
    ],
  },
  {
    key: "bankers-wrapped",
    emoji: "🎬",
    name: "Banker's Wrapped",
    href: "https://github.com/iarjunganesh/bankers-wrapped",
    tagline: "AI-powered financial storytelling",
    context: "Backblaze Generative Media · Devpost",
    contextHref: "https://backblaze-generative-media.devpost.com/",
    statusBadges: [{ label: "In development", tone: "gold" }],
    description:
      "Spotify Wrapped, but for your bank account — an agentic pipeline that turns a transaction CSV into a personalized 60-second narrated recap video.",
    liveLinks: [
      { label: "Live app", href: "https://bankers-wrapped.vercel.app" },
      { label: "API docs", href: "https://bankers-wrapped-api-production.up.railway.app/docs" },
    ],
    stack: [
      ["Backblaze B2", "Genblaze SDK", "GMI Cloud Seedream", "NVIDIA NIM", "OpenAI TTS-1", "FFmpeg"],
      ["Next.js", "React 19", "TypeScript"],
      ["Python", "FastAPI", "Plaid Sandbox", "Railway"],
    ],
  },
];

const experiments = [
  { name: "q1729", href: "https://github.com/iarjunganesh/q1729", desc: "Ramanujan × the NVIDIA stack — CUDA-Q/cuQuantum simulation with an AI analysis layer" },
  { name: "llm-qlab", href: "https://github.com/iarjunganesh/llm-qlab", desc: "LLM quantization benchmarks on consumer GPUs — speed, VRAM, and quality trade-offs" },
  { name: "pythonic-algorithms-lab", href: "https://github.com/iarjunganesh/pythonic-algorithms-lab", desc: "CPU vs GPU algorithm benchmarking with empirical Big-O profiling (CuPy + Numba CUDA)" },
  { name: "iq-series", href: "https://github.com/iarjunganesh/iq-series", desc: "Hands-on Microsoft IQ notebooks — Foundry IQ, Work IQ, Fabric IQ" },
];

const techGroups: { label: string; items: string[] }[] = [
  { label: "Languages & Frameworks", items: ["Java", "Spring Boot", "Quarkus", "Python", "FastAPI", "TypeScript", "React", "Next.js"] },
  { label: "Agentic AI & LLM", items: ["Azure AI Foundry", "Semantic Kernel", "RAG Hybrid Search", "A2A", "MCP", "NVIDIA NIM", "Amazon Bedrock"] },
  { label: "Cloud & Infrastructure", items: ["Microsoft Azure", "Amazon AWS", "OpenShift", "CockroachDB", "PostgreSQL", "Railway", "Vercel"] },
  { label: "AI Infra, GPU & Observability", items: ["CUDA C++", "CUDA-Q", "cuQuantum", "NVIDIA CUDA", "pgvector", "OpenTelemetry", "KQL"] },
];

const career = [
  { period: "2025 – Present", company: "Swedbank", location: "Stockholm, Sweden", role: "Software Engineer", note: "Anti-financial crime · AML platforms · 95%+ test coverage across a unified multi-module architecture" },
  { period: "2021 – 2025", company: "Viaplay Group", location: "Stockholm, Sweden", role: "Senior Java Developer", note: "Media & streaming platforms on AWS + Kubernetes · ~30% performance and ~40% delivery-speed gains" },
  { period: "Mar–Sep 2021", company: "Expleo Technology Nordic", location: "Gothenburg, Sweden", role: "Software Developer", note: "Domain-driven microservices · ~50% faster onboarding via documentation & workflow diagrams" },
  { period: "2012 – 2021", company: "IBM", location: "Sydney & Pune", role: "Senior Software Engineer · 8 yrs 6 mos", note: "Regulated banking APIs for Westpac · ~25% response-time gains · Jenkins/Bamboo delivery modernization" },
];

const certifications = [
  { name: "NVIDIA Certified Professional: Agentic AI (NCP-AAI)", issuer: "NVIDIA", href: "https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd" },
  { name: "Machine Learning and AI Foundations: Prediction, Causation, and Statistical Inference", issuer: "LinkedIn Learning Community", href: "https://www.linkedin.com/learning/certificates/762902fe70c1d3b8f90eea011889a6d505aaf3aeff11cc72c0fe3f69cb96830a" },
  { name: "IBM Machine Learning Essentials", issuer: "IBM", href: "https://www.credly.com/badges/fe045d02-8b3e-46b6-9d2b-c331627c6803?source=linked_in_profile" },
  { name: "Python for Data Science", issuer: "IBM", href: "https://www.credly.com/badges/fbef61ad-8c64-4c1a-a556-2da36664da8e" },
  { name: "Kubernetes Administration (LFS458)", issuer: "The Linux Foundation", href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9e8e7f08-3f88-45a0-b0be-694276f9d2c6-arjun-ganesh-ac140df6-e13a-4ab9-978e-a78345e96415-certificate.pdf" },
];

function toneClasses(tone?: Badge["tone"]) {
  switch (tone) {
    case "gold":
      return "border-gold/40 bg-gold/10 text-gold";
    case "green":
      return "border-green/40 bg-green/10 text-green";
    case "accent":
      return "border-accent/40 bg-accent/10 text-accent-2";
    default:
      return "border-border bg-surface-2 text-muted";
  }
}

function StatusBadge({ badge }: { badge: Badge }) {
  const className = `inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${toneClasses(badge.tone)}`;
  if (badge.href) {
    return (
      <a href={badge.href} target="_blank" rel="noreferrer" className={`${className} transition hover:brightness-110`}>
        {badge.label}
        <span aria-hidden="true" className="ml-1 opacity-70">↗</span>
      </a>
    );
  }
  return <span className={className}>{badge.label}</span>;
}

const STACK_LINKS: Record<string, string> = {
  "Python 3.14": "https://www.python.org/",
  "Python 3.11": "https://www.python.org/",
  Python: "https://www.python.org/",
  FastAPI: "https://fastapi.tiangolo.com/",
  "asyncio agents": "https://docs.python.org/3/library/asyncio.html",
  "Pydantic 2.13": "https://docs.pydantic.dev/",
  "Next.js 16": "https://nextjs.org/",
  "Next.js": "https://nextjs.org/",
  "React 19": "https://react.dev/",
  React: "https://react.dev/",
  TypeScript: "https://www.typescriptlang.org/",
  "PostgreSQL 17": "https://www.postgresql.org/",
  pgvector: "https://github.com/pgvector/pgvector",
  Vercel: "https://vercel.com",
  Railway: "https://railway.com",
  "Backblaze B2": "https://www.backblaze.com/cloud-storage",
  "Genblaze SDK": "https://github.com/backblaze-labs/genblaze",
  "GMI Cloud Seedream": "https://cloud.gmi.ai/",
  "NVIDIA NIM": "https://build.nvidia.com/",
  Nemotron: "https://build.nvidia.com/",
  "OpenAI TTS-1": "https://platform.openai.com/",
  FFmpeg: "https://ffmpeg.org/",
  "Plaid Sandbox": "https://plaid.com/",
  pytest: "https://docs.pytest.org/",
  CockroachDB: "https://www.cockroachlabs.com/",
  "CockroachDB MCP": "https://www.cockroachlabs.com/docs/",
  "Amazon Bedrock": "https://aws.amazon.com/bedrock/",
  "AWS Lambda": "https://aws.amazon.com/lambda/",
  Gradio: "https://gradio.app/",
  "Azure AI Foundry": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
  "Azure OpenAI GPT-4o": "https://azure.microsoft.com/en-us/products/ai-services/openai-service",
  "Foundry IQ": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
  "Semantic Kernel": "https://learn.microsoft.com/en-us/semantic-kernel/overview/",
  A2A: "https://a2a-protocol.org/",
  "Azure AI Search": "https://learn.microsoft.com/en-us/azure/search/",
  "Cosmos DB": "https://azure.microsoft.com/en-us/products/cosmos-db",
  "RAG hybrid search": "https://www.elastic.co/what-is/elasticsearch",
  "RAG Hybrid Search": "https://www.elastic.co/what-is/hybrid-search",
  MCP: "https://modelcontextprotocol.io/",
  Java: "https://dev.java/",
  "Spring Boot": "https://spring.io/projects/spring-boot",
  Quarkus: "https://quarkus.io/",
  "Microsoft Azure": "https://azure.microsoft.com/",
  "Amazon AWS": "https://aws.amazon.com/",
  OpenShift: "https://www.redhat.com/en/technologies/cloud-computing/openshift",
  OpenTelemetry: "https://opentelemetry.io/",
  KQL: "https://learn.microsoft.com/en-us/kusto/query/",
  "CUDA C++": "https://developer.nvidia.com/cuda-toolkit",
  "CUDA-Q": "https://nvidia.github.io/cuda-quantum/",
  cuQuantum: "https://developer.nvidia.com/cuquantum-sdk",
  "NVIDIA CUDA": "https://developer.nvidia.com/cuda-toolkit",
  PostgreSQL: "https://www.postgresql.org/",
};

function TechChip({ label }: { label: string }) {
  const href = STACK_LINKS[label];
  if (!href) {
    return <span className="chip">{label}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="chip transition hover:border-accent/50 hover:text-accent-2">
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1800px] flex-1 px-6 py-16 lg:flex lg:gap-16 lg:px-12 lg:py-0 2xl:gap-20 2xl:px-20">
      <ContactMenus />
      {/* Sidebar */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[36%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-20 xl:w-[32%] 2xl:w-[26%]">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div>
            <p className="section-label">Senior Engineer · Agentic AI · Anti-Financial-Crime</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                Arjun Ganesh
              </span>
            </h1>
          </div>
          <p className="max-w-md text-balance text-base text-muted">
            Senior engineer, 13+ years in distributed systems. I build{" "}
            <span className="text-foreground">anti-financial-crime systems at a Nordic bank</span> by day, and{" "}
            <span className="text-foreground">solo-ship agentic-AI products — and win hackathons</span> — by night.
          </p>
          <p className="max-w-md text-balance text-sm text-muted">
            I care about AI that explains its reasoning, leaves an audit trail, and actually works in production.
          </p>

          <nav aria-label="Section navigation" className="hidden pt-2 lg:block">
            <ul className="flex flex-col gap-1">
              {[
                { href: "#about", label: "About" },
                { href: "#work", label: "Selected Work" },
                { href: "#focus", label: "Focus Areas" },
                { href: "#stack", label: "Tech Stack" },
                { href: "#career", label: "Career Journey" },
                { href: "#certs", label: "Certifications" },
              ].map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="group inline-flex items-center gap-3 py-1.5">
                    <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-accent-2" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted transition group-hover:text-foreground">
                      {n.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 lg:mt-0 lg:items-start lg:pt-6">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://linkedin.com/in/iarjunganesh"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0077B5] text-white transition hover:brightness-110"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/iarjunganesh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent/50 hover:text-accent-2"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://discord.com/users/1468742414851248301"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              title="Discord"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent/50 hover:text-accent-2"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              popoverTarget="menu-resume"
              aria-label="Résumé — choose PDF or DOCX"
              title="Résumé"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent/50 hover:text-accent-2"
            >
              <DocumentIcon className="h-5 w-5" />
            </button>
            <div id="menu-resume" popover="auto" className="menu-popover">
              <div className="flex items-center gap-1 whitespace-nowrap rounded-full border border-border bg-surface px-1.5 py-1 shadow-lg">
                <span className="px-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">CV</span>
                <a href="/Arjun-Ganesh-CV.pdf" download className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-2 transition hover:bg-surface-2">
                  PDF
                </a>
                <span className="text-muted" aria-hidden="true">|</span>
                <a href="/Arjun-Ganesh-CV.docx" download className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-2 transition hover:bg-surface-2">
                  DOCX
                </a>
              </div>
            </div>
            <button
              type="button"
              popoverTarget="menu-email"
              aria-label="Email — choose Gmail, Outlook, or iCloud"
              title="Email"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent/50 hover:text-accent-2"
            >
              <MailIcon className="h-5 w-5" />
            </button>
            <div id="menu-email" popover="auto" className="menu-popover">
              <div className="flex items-center gap-1 whitespace-nowrap rounded-full border border-border bg-surface px-1.5 py-1 shadow-lg">
                <a href="mailto:iarjunganesh@gmail.com" className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-2 transition hover:bg-surface-2">
                  Gmail
                </a>
                <span className="text-muted" aria-hidden="true">|</span>
                <a href="mailto:iarjunganesh@outlook.com" className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-2 transition hover:bg-surface-2">
                  Outlook
                </a>
                <span className="text-muted" aria-hidden="true">|</span>
                <a href="mailto:iarjunganesh@icloud.com" className="rounded-full px-2.5 py-1 text-xs font-medium text-accent-2 transition hover:bg-surface-2">
                  iCloud
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mt-16 min-w-0 lg:mt-0 lg:flex-1 lg:py-20">
        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="https://techcommunity.microsoft.com/blog/educatordeveloperblog/%F0%9F%8F%86-agents-league-celebrating-the-builders-who-made-agents-battle-for-glory/4538007"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold"
          >
            🏆 Microsoft Agents League — AI Skills Fest 2026 · Hack for Good Winner (1 of 3)
          </a>
          <a
            href="https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd"
            target="_blank"
            rel="noreferrer"
            title="NVIDIA Certified Professional: Agentic AI (NCP-AAI)"
            className="flex items-center gap-2 rounded-full border border-border bg-surface py-1 pl-1 pr-4 text-xs font-semibold transition hover:border-accent/50 hover:text-accent-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.credly.com/size/220x220/images/9c5ac530-3a82-4970-ad25-d50fbe755ccb/blob"
              alt="NVIDIA Certified Professional: Agentic AI (NCP-AAI)"
              width={36}
              height={36}
              className="rounded-full"
            />
            NVIDIA Certified · Agentic AI (NCP-AAI)
          </a>
        </div>

      {/* About */}
      <section id="about" className="mt-16 scroll-mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { icon: "🏦", text: "Software Engineer @ Swedbank — anti-financial crime & AML" },
          { icon: "🤖", text: "Building agentic AI on Azure AI Foundry, A2A, and MCP" },
          { icon: "🧮", text: "Researching GPU & quantum compute — q1729, the quantum taxicab" },
        ].map((item) => (
          <div key={item.text} className="card rounded-2xl p-5 text-sm text-muted">
            <span className="mr-2 text-lg">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </section>

      {/* Selected Work */}
      <section id="work" className="mt-16 scroll-mt-8 lg:mt-24">
        <p className="section-label">Selected Work</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">What I&rsquo;ve built</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.key} className="card glow-border relative flex flex-col gap-4 rounded-2xl p-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{p.emoji}</span>
                  <a href={p.href} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-accent-2">
                    {p.name}
                  </a>
                </div>
                <p className="mt-1 text-sm text-muted">{p.tagline}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {p.context &&
                  (p.contextHref ? (
                    <a href={p.contextHref} target="_blank" rel="noreferrer" className="chip whitespace-normal text-left transition hover:border-accent/50 hover:text-accent-2">
                      {p.context}
                      <span aria-hidden="true" className="opacity-70">↗</span>
                    </a>
                  ) : (
                    <span className="chip whitespace-normal text-left">{p.context}</span>
                  ))}
                {p.statusBadges.map((b) => (
                  <StatusBadge key={b.label} badge={b} />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted">{p.description}</p>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Stack</p>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {p.stack.flat().map((s) => (
                    <TechChip key={s} label={s} />
                  ))}
                </div>
              </div>

              {p.credentials && (
                <div className="rounded-xl border border-gold/25 bg-gold/[0.06] p-3">
                  <p className="text-[11px] font-medium text-muted">
                    Studied Foundry IQ before building ARGUS, then competed in the Agents League Reasoning Agents track — and won Hack for Good (1 of 3).
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {p.credentials.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        title={c.label}
                        className="flex items-center gap-2 rounded-lg border border-border bg-surface px-2 py-1.5 transition hover:border-accent/50"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={c.img} alt={c.label} width={32} height={32} className="rounded-full" />
                        <span className="leading-tight">
                          <span className="block text-[11px] font-semibold">{c.label}</span>
                          <span className="block text-[10px] text-muted">{c.sub}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
                <a href={p.href} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                  Repository ↗
                </a>
                {p.demoHref && (
                  <a href={p.demoHref} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                    Watch demo ↗
                  </a>
                )}
                {p.liveLinks?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I work on */}
      <section id="focus" className="mt-16 scroll-mt-8 lg:mt-24">
        <p className="section-label">Focus Areas</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">What I work on</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "🧩 Agentic AI & Enterprise Intelligence",
              body: "I design AI systems with Azure AI Foundry, Foundry IQ, multi-agent orchestration, Agent-to-Agent (A2A) communication, and RAG with hybrid search — built to be explainable, grounded, and production-ready.",
            },
            {
              title: "🏗️ Distributed Systems & Backend Architecture",
              body: "13+ years building scalable platforms with Java (Spring Boot, Quarkus) and Python (FastAPI) — microservices, NoSQL, event-driven systems, and hybrid cloud across AWS, Azure, and OpenShift.",
            },
            {
              title: "⚙️ AI Infrastructure, Performance & Compute",
              body: "I work at the infrastructure layer behind modern AI — GPU computing, NVIDIA CUDA, model serving, vector search, and performance engineering.",
            },
            {
              title: "📡 Reliability, Observability & Platform Engineering",
              body: "I build resilient systems with Azure Functions, Service Bus, OpenTelemetry, Application Insights, and KQL — telemetry pipelines that hold up to enterprise-grade reliability and governance.",
            },
          ].map((f) => (
            <div key={f.title} className="card rounded-2xl p-6">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="mt-16 scroll-mt-8 lg:mt-24">
        <p className="section-label">Tech Stack</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Tools I reach for</h2>

        <div className="mt-8 space-y-8">
          {techGroups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-semibold text-muted">{g.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <TechChip key={i} label={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Journey */}
      <section id="career" className="mt-16 scroll-mt-8 lg:mt-24">
        <p className="section-label">Career Journey</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Where I&rsquo;ve worked</h2>

        <div className="mt-8">
          {career.map((c, i) => (
            <div key={c.company} className="relative flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                {i !== career.length - 1 && <span className="w-px flex-1 bg-border" />}
              </div>
              <div className="pb-2">
                <p className="text-xs font-medium text-muted">{c.period}</p>
                <p className="mt-1 font-semibold">
                  {c.role} · {c.company}
                </p>
                <p className="text-xs text-muted">{c.location}</p>
                {c.note && <p className="mt-1 text-sm text-muted">{c.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiments & learning */}
      <section className="mt-16 lg:mt-24">
        <p className="section-label">Also on GitHub</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Experiments &amp; learning</h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
          {experiments.map((e) => (
            <a
              key={e.name}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="card rounded-xl p-4 text-sm transition hover:border-accent/40"
            >
              <span className="font-semibold">{e.name}</span>
              <span className="mt-1 block text-xs text-muted">{e.desc}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Recognition */}
      <section id="certs" className="mt-16 scroll-mt-8 lg:mt-24">
        <p className="section-label">Certifications</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Credentials &amp; training</h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-3">
          {certifications.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between gap-4 rounded-xl p-4 text-sm transition hover:border-accent/40"
            >
              <span>{c.name}</span>
              <span className="shrink-0 text-xs text-muted">{c.issuer}</span>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          <a href="https://linkedin.com/in/iarjunganesh" target="_blank" rel="noreferrer" className="text-accent-2 hover:underline">
            Full certification list on LinkedIn ↗
          </a>
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 flex flex-col items-center gap-6 text-center lg:mt-24">
        <p className="section-label">Let&rsquo;s Connect</p>
        <p className="max-w-2xl text-balance text-lg">
          Building trustworthy AI systems that explain their reasoning, leave an audit trail, and
          actually work in production. If that&rsquo;s the kind of problem you&rsquo;re working on
          — I&rsquo;d love to talk.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {["Agentic AI", "AI Governance", "Azure AI Foundry", "Banking Technology", "Distributed Systems", "Generative Media"].map((t) => (
            <span key={t} className="chip">
              {t} · open to discuss
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-border pt-8 text-center text-xs text-muted lg:mt-24">
        <Link href="https://github.com/iarjunganesh" target="_blank" className="hover:text-accent-2">
          github.com/iarjunganesh
        </Link>
      </footer>
      </main>
    </div>
  );
}
