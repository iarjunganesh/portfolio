import Link from "next/link";

type Badge = { label: string; tone?: "accent" | "gold" | "green" | "muted" };

type Project = {
  key: string;
  emoji: string;
  name: string;
  href: string;
  tagline: string;
  hackathon?: string;
  statusBadges: Badge[];
  description: string;
  liveLinks?: { label: string; href: string }[];
  stack: string[][];
  demoHref?: string;
};

const projects: Project[] = [
  {
    key: "drift",
    emoji: "🔎",
    name: "DRIFT",
    href: "https://github.com/iarjunganesh/drift",
    tagline: "Release intelligence for GPU & AI infrastructure",
    hackathon: "OpenAI Build Week · Devpost",
    statusBadges: [
      { label: "Solo entry", tone: "accent" },
      { label: "Shipped", tone: "green" },
      { label: "Submission Completed", tone: "green" },
    ],
    description:
      "Cited, bounded, and inspectable release briefings for GPU and AI-infrastructure teams — an agentic pipeline that turns noisy changelogs into grounded, source-linked summaries.",
    liveLinks: [
      { label: "Live app", href: "https://dr1ftless.vercel.app" },
      { label: "API docs", href: "https://drift-api-prod.up.railway.app/docs" },
      { label: "Devpost", href: "https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams" },
    ],
    demoHref: "https://youtu.be/6sbIz0ZR8Hw",
    stack: [
      ["Python 3.14", "FastAPI", "asyncio agents", "Pydantic 2.13", "structlog"],
      ["GPT-5.6 Luna/Terra/Sol", "Next.js 16", "React 19", "TypeScript"],
      ["PostgreSQL 17", "pgvector", "Vercel", "Railway"],
    ],
  },
  {
    key: "bankers-wrapped",
    emoji: "🎬",
    name: "Banker's Wrapped",
    href: "https://github.com/iarjunganesh/bankers-wrapped",
    tagline: "AI-powered financial storytelling",
    hackathon: "Backblaze Generative Media · Devpost",
    statusBadges: [
      { label: "Solo entry", tone: "accent" },
      { label: "Hackathon WIP", tone: "gold" },
      { label: "Submission Pending", tone: "muted" },
    ],
    description:
      "Spotify Wrapped — but for your bank account. An agentic pipeline that turns a transaction CSV into a personalized 60-second narrated recap video.",
    liveLinks: [{ label: "Live app", href: "https://bankers-wrapped.vercel.app" }],
    stack: [
      ["Backblaze B2", "Genblaze SDK", "GMI Cloud Seedream", "NVIDIA NIM", "OpenAI TTS-1", "FFmpeg"],
      ["Next.js", "React 19", "TypeScript"],
      ["Python", "FastAPI", "Plaid Sandbox", "Railway"],
    ],
  },
  {
    key: "continuum",
    emoji: "🧠",
    name: "Continuum",
    href: "https://github.com/iarjunganesh/continuum",
    tagline: "Durable incident memory for cold-started agents",
    hackathon: "CockroachDB AI · Devpost",
    statusBadges: [
      { label: "Solo entry", tone: "accent" },
      { label: "Hackathon WIP", tone: "gold" },
      { label: "Submission Pending", tone: "muted" },
    ],
    description:
      "Agentic incident-response memory that survives the agent being killed mid-incident — execution state persists in CockroachDB, not process memory, so a cold-started agent resumes from the exact interrupted step.",
    liveLinks: [{ label: "HuggingFace Space", href: "https://huggingface.co/spaces/iarjunganesh/continuum" }],
    stack: [
      ["CockroachDB", "CockroachDB MCP", "Amazon Bedrock", "AWS Lambda"],
      ["Python", "FastAPI", "Gradio", "pytest"],
    ],
  },
  {
    key: "argus",
    emoji: "🛡️",
    name: "ARGUS",
    href: "https://github.com/iarjunganesh/argus",
    tagline: "Multi-agent compliance intelligence on Azure AI Foundry",
    hackathon: "Microsoft Agents League Hackathon",
    statusBadges: [
      { label: "Solo entry", tone: "accent" },
      { label: "Shipped", tone: "green" },
      { label: "🏆 Winner · Hack for Good (1 of 3)", tone: "gold" },
    ],
    description:
      "Multi-agent compliance intelligence platform — KYC, AML, and risk investigation through transparent, evidence-backed, auditable decisions.",
    demoHref: "https://youtu.be/yaTNCgCwX4s",
    stack: [
      ["Azure AI Foundry", "Azure OpenAI GPT-4o", "Foundry IQ", "Semantic Kernel", "A2A"],
      ["Azure AI Search", "Cosmos DB", "RAG hybrid search", "MCP", "Gradio"],
      ["Python 3.11"],
    ],
  },
];

const allProjects = [
  { name: "DRIFT", href: "https://github.com/iarjunganesh/drift", desc: "Release intelligence for GPU & AI infrastructure — cited, bounded, inspectable briefing for engineers", status: "✅ Submitted" },
  { name: "Banker's Wrapped", href: "https://github.com/iarjunganesh/bankers-wrapped", desc: "AI-powered financial storytelling — agentic pipeline that turns transaction CSVs into personalized 60s recap videos", status: "🚧 Hackathon WIP" },
  { name: "Continuum", href: "https://github.com/iarjunganesh/continuum", desc: "Agentic incident-response memory that survives the agent being killed mid-incident", status: "🚧 Hackathon WIP" },
  { name: "ARGUS", href: "https://github.com/iarjunganesh/argus", desc: "Agentic Risk & Governance Unified Screening — multi-agent compliance intelligence platform", status: "🏆 Hack for Good Winner" },
  { name: "pythonic-algorithms-lab", href: "https://github.com/iarjunganesh/pythonic-algorithms-lab", desc: "CPU/GPU algorithm implementations with benchmarking infrastructure & Dash dashboard", status: "✅ Active" },
];

const techGroups: { label: string; items: string[] }[] = [
  { label: "Languages & Frameworks", items: ["Java", "Python", "Spring Boot", "Quarkus", "FastAPI", "React", "TypeScript", "Next.js", "Gradio"] },
  { label: "Agentic AI & LLM", items: ["Azure AI Foundry", "Semantic Kernel", "RAG Hybrid Search", "A2A", "MCP", "NVIDIA NIM", "Genblaze SDK", "Amazon Bedrock"] },
  { label: "Cloud & Infrastructure", items: ["Microsoft Azure", "Amazon AWS", "AWS Lambda", "OpenShift", "Azure Functions", "Service Bus", "Backblaze B2", "CockroachDB", "Railway", "Vercel"] },
  { label: "Observability, AI Infra & Data", items: ["OpenTelemetry", "Application Insights", "KQL", "NVIDIA CUDA", "PostgreSQL", "pgvector", "Vector Search", "NoSQL", "Event-Driven Systems"] },
];

const career = [
  { period: "2025 – Present", company: "Swedbank", location: "Stockholm, Sweden", role: "Software Engineer", note: "Anti-financial crime · Secure banking systems · AML platforms" },
  { period: "2021 – 2025", company: "Viaplay Group", location: "Stockholm, Sweden", role: "Senior Java Developer", note: "Media & metadata systems · Content Engineering · Streaming platforms" },
  { period: "Mar–Sep 2021", company: "Expleo Group", location: "Gothenburg, Sweden", role: "Software Developer" },
  { period: "2012 – 2021", company: "IBM", location: "India & Australia", role: "Multiple Roles · 8 yrs 6 mos", note: "Associate System Engineer → Staff App Dev Analyst → Senior Software Engineer → Application Developer → Senior Software Engineer" },
];

const certifications = [
  { name: "NVIDIA Certified Professional: Agentic AI (NCP-AAI)", issuer: "NVIDIA", href: "https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd" },
  { name: "The Microsoft IQ Series: Foundry IQ", issuer: "Global AI Community", href: "https://globalai.community/badges/b35714f6-9372-4716-985f-ad2058722e76/" },
  { name: "Machine Learning and AI Foundations: Prediction, Causation, and Statistical Inference", issuer: "LinkedIn Learning Community", href: "https://www.linkedin.com/learning/certificates/762902fe70c1d3b8f90eea011889a6d505aaf3aeff11cc72c0fe3f69cb96830a" },
  { name: "Kubernetes Administration (LFS458)", issuer: "The Linux Foundation", href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9e8e7f08-3f88-45a0-b0be-694276f9d2c6-arjun-ganesh-ac140df6-e13a-4ab9-978e-a78345e96415-certificate.pdf" },
  { name: "IBM Machine Learning Essentials", issuer: "IBM", href: "https://www.credly.com/badges/fe045d02-8b3e-46b6-9d2b-c331627c6803?source=linked_in_profile" },
  { name: "Python for Data Science", issuer: "IBM", href: "https://www.credly.com/badges/fbef61ad-8c64-4c1a-a556-2da36664da8e" },
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
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${toneClasses(badge.tone)}`}>
      {badge.label}
    </span>
  );
}

const STACK_LINKS: Record<string, string> = {
  "Python 3.14": "https://www.python.org/",
  "Python 3.11": "https://www.python.org/",
  Python: "https://www.python.org/",
  FastAPI: "https://fastapi.tiangolo.com/",
  "asyncio agents": "https://docs.python.org/3/library/asyncio.html",
  "Pydantic 2.13": "https://docs.pydantic.dev/",
  structlog: "https://www.structlog.org/",
  "GPT-5.6 Luna/Terra/Sol": "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
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
  "Azure Functions": "https://azure.microsoft.com/en-us/products/functions",
  "Service Bus": "https://azure.microsoft.com/en-us/products/service-bus",
  OpenTelemetry: "https://opentelemetry.io/",
  "Application Insights": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
  KQL: "https://learn.microsoft.com/en-us/kusto/query/",
  "NVIDIA CUDA": "https://developer.nvidia.com/cuda-toolkit",
  PostgreSQL: "https://www.postgresql.org/",
  "Vector Search": "https://www.elastic.co/what-is/vector-search",
  NoSQL: "https://www.mongodb.com/resources/basics/databases/nosql-explained",
  "Event-Driven Systems": "https://kafka.apache.org/",
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
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6">
        <p className="section-label">Senior Engineer · Agentic AI Systems</p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hi, I&rsquo;m{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Arjun Ganesh
          </span>
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted">
          13+ years building distributed systems, cloud-native platforms, and enterprise software.
          Today I build agentic AI on <span className="text-foreground">Azure AI Foundry</span>,{" "}
          <span className="text-foreground">A2A</span>, <span className="text-foreground">RAG</span>, and{" "}
          <span className="text-foreground">MCP</span> — where explainability, auditability, and
          operational reliability matter.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://linkedin.com/in/iarjunganesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0077B5] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/iarjunganesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent-2"
          >
            GitHub
          </a>
          <a
            href="mailto:iarjunganesh@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent-2"
          >
            Email
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href="https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd" target="_blank" rel="noreferrer" className="opacity-90 transition hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.credly.com/size/220x220/images/9c5ac530-3a82-4970-ad25-d50fbe755ccb/blob"
              alt="NVIDIA Certified Professional: Agentic AI (NCP-AAI)"
              width={72}
              height={72}
              className="rounded-full"
            />
          </a>
          <a href="https://globalai.community/badges/b35714f6-9372-4716-985f-ad2058722e76/" target="_blank" rel="noreferrer" className="opacity-90 transition hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://globalai.community/img/badge/shared/f1de85c1359e1380dcabb9901d210a3d00645ec975a640338021f91792d26ffd.png"
              alt="The Microsoft IQ Series: Foundry IQ"
              width={72}
              height={72}
              className="rounded-full"
            />
          </a>
          <a
            href="https://github.com/iarjunganesh/argus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold"
          >
            🏆 Microsoft Agents League 2026 — Hack for Good Winner (1 of 3)
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mt-24 grid gap-6 sm:grid-cols-3">
        {[
          { icon: "🏦", text: "Software Engineer @ Swedbank" },
          { icon: "🤖", text: "Exploring Agentic AI, Azure AI Foundry, Foundry IQ, A2A and MCP" },
          { icon: "🏗️", text: "Passionate about Distributed Systems, Platform Engineering and AI Governance" },
        ].map((item) => (
          <div key={item.text} className="card rounded-2xl p-5 text-sm text-muted">
            <span className="mr-2 text-lg">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </section>

      {/* Featured Builds */}
      <section className="mt-24">
        <p className="section-label">Featured Builds</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Things I&rsquo;ve shipped</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

              {p.hackathon && <span className="chip w-fit">🏁 {p.hackathon}</span>}

              <div className="flex flex-wrap gap-2">
                {p.statusBadges.map((b) => (
                  <StatusBadge key={b.label} badge={b} />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted">{p.description}</p>

              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {p.stack.flat().map((s) => (
                  <TechChip key={s} label={s} />
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
                <a href={p.href} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                  Repository →
                </a>
                {p.demoHref && (
                  <a href={p.demoHref} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                    Watch demo →
                  </a>
                )}
                {p.liveLinks?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-medium text-accent-2 hover:underline">
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="mt-24">
        <p className="section-label">All Projects</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Full portfolio</h2>

        <div className="card mt-8 overflow-x-auto rounded-2xl">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2 text-muted">
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Description</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((p) => (
                <tr key={p.name} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4 align-top">
                    <a href={p.href} target="_blank" rel="noreferrer" className="font-semibold hover:text-accent-2">
                      {p.name}
                    </a>
                  </td>
                  <td className="hidden px-5 py-4 align-top text-muted sm:table-cell">{p.desc}</td>
                  <td className="whitespace-nowrap px-5 py-4 align-top">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What I work on */}
      <section className="mt-24">
        <p className="section-label">Focus Areas</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">What I work on</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "🧩 Agentic AI & Enterprise Intelligence",
              body: "Designing AI systems using Azure AI Foundry, Foundry IQ, multi-agent orchestration, Agent-to-Agent (A2A) communication, RAG with hybrid search, document intelligence, and reasoning-driven workflows — focused on building AI that is explainable, grounded, and production-ready.",
            },
            {
              title: "🏗️ Distributed Systems & Backend Architecture",
              body: "13+ years building scalable platforms with Java (Spring Boot, Quarkus) and Python (FastAPI), cloud-native architectures, microservices, NoSQL databases, event-driven systems, and hybrid cloud across AWS, Azure, and OpenShift.",
            },
            {
              title: "⚙️ AI Infrastructure, Performance & Compute",
              body: "Exploring the infrastructure layer behind modern AI — GPU computing, NVIDIA CUDA, model serving, vector search, observability, and performance engineering.",
            },
            {
              title: "📡 Reliability, Observability & Platform Engineering",
              body: "Designing resilient systems with Azure Functions, Service Bus, OpenTelemetry, Application Insights, KQL, and operational telemetry pipelines that support enterprise-grade reliability and governance.",
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
      <section className="mt-24">
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
      <section className="mt-24">
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

      {/* Certifications */}
      <section className="mt-24">
        <p className="section-label">Certifications</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">10+ professional certifications</h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
      </section>

      {/* Contact */}
      <section className="mt-24 flex flex-col items-center gap-6 text-center">
        <p className="section-label">Let&rsquo;s Connect</p>
        <p className="max-w-2xl text-balance text-lg">
          Building trustworthy AI systems that explain their reasoning, leave an audit trail, and
          actually work in production. If that&rsquo;s the kind of problem you&rsquo;re working on
          — I&rsquo;d love to talk.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://linkedin.com/in/iarjunganesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0077B5] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            iarjunganesh
          </a>
          <a
            href="mailto:iarjunganesh@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent-2"
          >
            iarjunganesh@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {["Agentic AI", "AI Governance", "Azure AI Foundry", "Banking Technology", "Distributed Systems", "Generative Media"].map((t) => (
            <span key={t} className="chip">
              {t} · open to discuss
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-border pt-8 text-center text-xs text-muted">
        <Link href="https://github.com/iarjunganesh" target="_blank" className="hover:text-accent-2">
          github.com/iarjunganesh
        </Link>
      </footer>
    </div>
  );
}
