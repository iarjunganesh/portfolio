/* ────────────────────────────────────────────────────────────────────────
   Content. Every claim, link and date here is carried over verbatim —
   nothing is inferred, rounded, or embellished.
   ──────────────────────────────────────────────────────────────────────── */

export const ARGUS_BLOG_URL =
  "https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074";

export const CONTACT = {
  email: "iarjunganesh@gmail.com",
  emails: [
    { label: "Gmail", href: "mailto:iarjunganesh@gmail.com" },
    { label: "Outlook", href: "mailto:iarjunganesh@outlook.com" },
    { label: "iCloud", href: "mailto:iarjunganesh@icloud.com" },
  ],
  github: "https://github.com/iarjunganesh",
  linkedin: "https://linkedin.com/in/iarjunganesh",
  discord: "https://discord.com/users/1468742414851248301",
  cv: "/Arjun-Ganesh-CV.pdf",
  cvDocx: "/Arjun-Ganesh-CV.docx",
};

/**
 * Resource labels are a fixed vocabulary, listed in this order on every
 * project so the same thing is always called the same thing:
 *
 *   Code       → the GitHub repository
 *   Live app   → the deployed, publicly reachable app
 *   API docs   → the OpenAPI/Swagger endpoint
 *   Demo video → the YouTube walkthrough
 *   Devpost    → the hackathon submission entry
 *   Write-up   → third-party editorial coverage
 *
 * Omit a row rather than inventing one — not every project has every
 * resource. All links verified reachable 2026-08-16.
 */
export const RESOURCE_ORDER = [
  "Code",
  "Live app",
  "API docs",
  "Demo video",
  "Devpost",
  "Write-up",
] as const;

export type ResourceLabel = (typeof RESOURCE_ORDER)[number];

export type ProjectStatus = "active" | "development" | "deployed" | "archived";

export const PROJECT_STATUS = {
  active: { label: "Active", tone: "active" },
  development: { label: "In development", tone: "development" },
  deployed: { label: "Deployed", tone: "live" },
  archived: { label: "Archived", tone: "muted" },
} as const satisfies Record<ProjectStatus, { label: string; tone: string }>;

export type Project = {
  key: string;
  name: string;
  href: string;
  tagline: string;
  problem: string;
  solution: string;
  status: ProjectStatus;
  flag?: string;
  impact?: string;
  guarantees?: string[];
  evidence?: string[];
  context?: string;
  contextHref?: string;
  stack: string[];
  links?: { label: ResourceLabel; href: string }[];
  preview?: { url: string; embedUrl?: string; label: string };
};

export const projects: Project[] = [
  {
    key: "argus",
    name: "ARGUS",
    href: "https://github.com/iarjunganesh/argus",
    tagline: "Multi-agent compliance intelligence",
    problem:
      "Manual KYC/AML review doesn't scale, and unaudited AI decisions don't survive a regulator's audit.",
    solution:
      "Five specialist agents coordinated over A2A on Azure AI Foundry. Findings are cited via Foundry IQ, with an audit trail designed for regulatory scrutiny.",
    status: "active",
    flag: "Winner · Microsoft Agents League 2026 · Hack for Good (1 of 3)",
    impact: "Citation-grounded regulatory lookups with reproducible audit trails.",
    guarantees: [
      "Findings are grounded in cited regulatory sources",
      "Specialist agents remain separated by responsibility",
    ],
    evidence: [
      "Microsoft Agents League 2026 Hack for Good winner (1 of 3)",
      "Independent Microsoft editorial write-up",
    ],
    context: "Microsoft Agents League — AI Skills Fest 2026 · Reasoning Agents track",
    contextHref: "https://info.microsoft.com/Agents-League-Hackathon-Registration.html",
    stack: [
      "Python 3.11",
      "Azure AI Foundry",
      "Azure OpenAI GPT-4o",
      "Semantic Kernel",
      "A2A",
      "Azure AI Search",
      "Cosmos DB",
      "RAG hybrid search",
      "MCP",
      "Gradio",
    ],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/argus" },
      { label: "Demo video", href: "https://youtu.be/yaTNCgCwX4s" },
      { label: "Write-up", href: ARGUS_BLOG_URL },
    ],
  },
  {
    key: "bastion",
    name: "BASTION",
    href: "https://github.com/iarjunganesh/bastion",
    tagline: "A governed institutional-agent fleet for continuous access review",
    problem:
      "Access review is quarterly work performed on continuously changing permissions. Automating the scan isn't enough — an institutional agent must remember prior human decisions, survive asynchronous retries, prove why it acted, and remain unable to turn suspicious input into a privileged write.",
    solution:
      "Read-only IAM review against the GCP project that runs it, including its own service identities. Deterministic code detects and scores findings; Gemini explains and routes already-minimized risk. Three institutional agents, one durable investigation identity — no raw IAM binding crosses the model or human-notification boundary.",
    status: "development",
    impact:
      "Human review receives minimized risk categories rather than raw IAM bindings.",
    guarantees: [
      "Read-only IAM boundary with no privileged write path",
      "Raw IAM bindings never cross the model or notification boundary",
      "Durable investigation identity across asynchronous retries",
    ],
    evidence: ["161 tests", "100% statement coverage", "100% branch coverage"],
    context: "All Things Agentic Hackathon 2026 · Fortified Enterprise Fleet track",
    contextHref: "https://allthingsagentichackathon.devpost.com/",
    stack: [
      "Python 3.12",
      "Google ADK 2.7",
      "Gemini",
      "Vertex AI",
      "Cloud Run",
      "Agent Runtime",
      "Memory Bank",
      "A2A Gateway",
      "Firestore",
      "Pub/Sub",
      "Eventarc",
      "Model Armor",
    ],
    // Cloud Run services are auth-gated (an unauthenticated findings request is
    // denied 403), so there is no public live app; the Devpost entry does not
    // exist until submission closes 31 Aug 2026.
    links: [{ label: "Code", href: "https://github.com/iarjunganesh/bastion" }],
  },
  {
    key: "drift",
    name: "DRIFT",
    href: "https://github.com/iarjunganesh/drift",
    tagline: "GPU & AI infrastructure release intelligence",
    problem:
      "Raw changelogs are noisy, unstructured, and full of false positives. Teams miss critical AI infrastructure updates.",
    solution:
      "High-precision release aggregation. Raw data → dependency checks → bounded, technical summaries. Built with FastAPI + pgvector semantic deduplication.",
    status: "deployed",
    impact: "Converts raw, noisy changelogs into actionable release intelligence.",
    guarantees: [
      "Summaries are bounded to technical release content",
      "Semantic deduplication limits repeated release signals",
    ],
    evidence: ["Public web application", "Published API documentation", "Recorded demo"],
    context: "OpenAI Build Week · Devpost",
    contextHref: "https://openai.devpost.com/",
    stack: [
      "Python 3.14",
      "FastAPI",
      "PostgreSQL 17",
      "pgvector",
      "Railway",
      "Vercel Edge Networks",
    ],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/drift" },
      { label: "Live app", href: "https://dr1ftless.vercel.app" },
      // The API is served from Railway, not the Vercel front end — the
      // dr1ftless.vercel.app/docs path 404s.
      { label: "API docs", href: "https://drift-api-prod.up.railway.app/docs" },
      { label: "Demo video", href: "https://youtu.be/6sbIz0ZR8Hw" },
      {
        label: "Devpost",
        href: "https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams",
      },
    ],
    preview: { url: "https://dr1ftless.vercel.app", label: "DRIFT live app" },
  },
  {
    key: "continuum",
    name: "CONTINUUM",
    href: "https://github.com/iarjunganesh/continuum",
    tagline: "Durable incident memory for cold-started agents",
    problem:
      "Cold-started agents lose execution state. Multi-step workflows restart from zero, wasting compute and losing context.",
    solution:
      "Distributed checkpoint engine on CockroachDB. Restores persisted execution state without restarting the pipeline.",
    status: "deployed",
    impact: "Resumes distributed orchestration from durable checkpoints.",
    guarantees: ["Persisted execution checkpoints", "Resumable workflow state"],
    evidence: ["Public Hugging Face Space", "Recorded demo", "Public source repository"],
    context: "CockroachDB × AWS Hackathon 2026 — Build with Agentic Memory",
    contextHref: "https://cockroachdb-ai.devpost.com/",
    stack: ["Python", "FastAPI", "CockroachDB", "AWS Lambda", "Amazon Bedrock", "MCP"],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/continuum" },
      { label: "Live app", href: "https://huggingface.co/spaces/iarjunganesh/continuum" },
      { label: "Demo video", href: "https://youtu.be/LwD8__sKqa0" },
      // Slug confirmed from the Devpost profile — the bare /software/continuum
      // resolves to a different author's project.
      { label: "Devpost", href: "https://devpost.com/software/continuum-w4c3mr" },
    ],
    preview: {
      url: "https://huggingface.co/spaces/iarjunganesh/continuum",
      embedUrl: "https://iarjunganesh-continuum.hf.space",
      label: "Continuum HuggingFace Space",
    },
  },
  {
    key: "bankers-wrapped",
    name: "BANKERS' WRAPPED",
    href: "https://github.com/iarjunganesh/bankers-wrapped",
    tagline: "Year-in-review intelligence for financial workflows",
    problem:
      "Data-centric fintech teams want year-in-review insights. Existing tools are generic, not built for financial workflows.",
    solution:
      "Spotify Wrapped but for banking. Extracts transaction intelligence, generates insights, creates shareable year-end summaries.",
    status: "deployed",
    guarantees: ["Year-end analysis is scoped to financial transaction workflows"],
    evidence: ["Public web application", "Published API documentation", "Recorded demo"],
    context: "Backblaze Generative Media · Devpost",
    contextHref: "https://backblaze-generative-media.devpost.com/",
    stack: ["React", "Next.js", "TypeScript", "Framer", "Vercel"],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/bankers-wrapped" },
      { label: "Live app", href: "https://bankers-wrapped.arjunganesh.dev" },
      { label: "Demo video", href: "https://youtu.be/eTw1TCcYFk4" },
      { label: "Devpost", href: "https://devpost.com/software/banker-s-wrapped" },
    ],
    preview: { url: "https://bankers-wrapped.arjunganesh.dev", label: "Banker's Wrapped live app" },
  },
];

export type ResearchStatus = "active" | "complete" | "paused";

export type ResearchItem = {
  key: string;
  name: string;
  question: string;
  method: string;
  result: string;
  next: string;
  status: ResearchStatus;
  stack: string[];
  href: string;
  artifacts?: { label: string; href: string }[];
};

export const research = [
  {
    key: "q1729",
    name: "q1729",
    question:
      "At what problem size does quantum simulation stop being competitive with a hand-written CUDA kernel on the same silicon?",
    method:
      "Compare Ramanujan's 1914 pi series in a CUDA C++ kernel with Quantum Amplitude Estimation in CUDA-Q/cuQuantum, validated against exact SymPy ground truth.",
    result:
      "On an RTX 5070 Laptop GPU, the classical kernel reached 16 digits in 2.6 ms; simulated QAE reached 5 digits in 0.44 s. The measured run found no crossover on this hardware.",
    next:
      "Run the optional H100 axis, then open the hardware-agnostic benchmark format to community submissions.",
    status: "active",
    stack: ["CUDA C++", "CUDA-Q", "cuQuantum", "SymPy", "NIM / Nemotron"],
    href: "https://github.com/iarjunganesh/q1729",
    artifacts: [
      {
        label: "Measured run",
        href: "https://github.com/iarjunganesh/q1729/blob/main/benchmarks/runs/2026-08-05-rtx5070-turbo.json",
      },
      {
        label: "Crossover plot",
        href: "https://github.com/iarjunganesh/q1729/blob/main/benchmarks/plots/crossover-light.svg",
      },
    ],
  },
  {
    key: "llm-qlab",
    name: "llm-qlab",
    question:
      "How do GGUF quantization and CPU/GPU layer placement change inference throughput and memory use on consumer NVIDIA hardware?",
    method:
      "Separate prefill and decode with llama.cpp counters; discard warmups; report repeated-run variance; verify memory clock state; reject unstable or paged runs.",
    result:
      "Across three 7B model families, decode throughput fell monotonically as quantized weight size increased. Full Llama-2 offload measured 6.2x CPU-only decode throughput.",
    next:
      "Add batch-size and context-length sweeps, quality regression by quantization format, and a datacenter-GPU comparison.",
    status: "active",
    stack: ["Python", "llama.cpp", "CUDA", "GGUF"],
    href: "https://github.com/iarjunganesh/llm-qlab",
    artifacts: [
      {
        label: "Measurements",
        href: "https://github.com/iarjunganesh/llm-qlab/blob/main/results/benchmark_results.csv",
      },
    ],
  },
  {
    key: "pythonic-algorithms-lab",
    name: "pythonic-algorithms-lab",
    question:
      "Where do GPU implementations outperform CPU baselines across common algorithms and input sizes?",
    method:
      "Run configurable CPU/GPU benchmark sweeps, export the measurements to CSV, and inspect empirical complexity and speedup in an interactive dashboard.",
    result:
      "The published sweep reports a 16.6x radix-sort speedup at n = 100,000, while BFS and reductions remain slower than their CPU baselines at tested sizes.",
    next:
      "Extend the documented benchmark protocol to additional algorithms, input shapes, and verified GPU runs.",
    status: "active",
    stack: ["Python", "CuPy", "Numba CUDA", "Dash"],
    href: "https://github.com/iarjunganesh/pythonic-algorithms-lab",
  },
] satisfies ResearchItem[];

export const technicalNotebooks = [
  {
    name: "iq-series",
    desc: "Completed Microsoft IQ learning cookbooks with executed Foundry IQ notebook outputs.",
    href: "https://github.com/iarjunganesh/iq-series",
  },
];

export const engineeringPrinciples = [
  {
    name: "Deterministic core, probabilistic edge",
    description:
      "Use models to explain, classify, summarize, or route. Keep authorization, scoring, and state transitions explicit where risk demands it.",
  },
  {
    name: "Auditability by construction",
    description:
      "Treat evidence, citations, and decisions as first-class records rather than trying to reconstruct them from logs later.",
  },
  {
    name: "Durable state over ephemeral memory",
    description:
      "Design agents and workflows to survive retries, cold starts, and asynchronous boundaries without losing investigation identity.",
  },
  {
    name: "Minimize model exposure",
    description:
      "Send only the information required for a model task, preserving explicit boundaries around sensitive source data.",
  },
  {
    name: "Human authority remains explicit",
    description:
      "Automation may propose, route, summarize, or assist; privileged decisions retain clear ownership and review boundaries.",
  },
];

export const capabilities = [
  {
    label: "Distributed backends",
    evidence: "Swedbank anti-financial-crime platforms · Viaplay streaming systems · IBM banking APIs",
  },
  {
    label: "Agent orchestration",
    evidence: "ARGUS · BASTION",
  },
  {
    label: "Durable workflow state",
    evidence: "CONTINUUM · BASTION",
  },
  {
    label: "Retrieval and release intelligence",
    evidence: "ARGUS · DRIFT",
  },
  {
    label: "GPU compute and benchmarking",
    evidence: "q1729 · llm-qlab · pythonic-algorithms-lab",
  },
];

export const career = [
  {
    period: "2025 – Present",
    title: "Software Engineer",
    company: "Swedbank",
    location: "Stockholm, Sweden",
    note: "Anti-financial crime · AML platforms · 95%+ test coverage across unified multi-module architecture",
  },
  {
    period: "2021 – 2025",
    title: "Senior Java Developer",
    company: "Viaplay Group",
    location: "Stockholm, Sweden",
    note: "Media & streaming on AWS + Kubernetes · ~30% perf gains · ~40% delivery-speed acceleration",
  },
  {
    period: "Mar–Sep 2021",
    title: "Software Developer",
    company: "Expleo Technology Nordic",
    location: "Gothenburg, Sweden",
    note: "Domain-driven microservices · ~50% faster onboarding via docs & workflow diagrams",
  },
  {
    period: "2012 – 2021",
    title: "Senior Software Engineer",
    company: "IBM",
    location: "Sydney & Pune",
    note: "Regulated banking APIs for Westpac · ~25% response-time gains · Jenkins/Bamboo modernization",
  },
];

export const certifications = [
  {
    name: "NVIDIA Certified Professional: Agentic AI",
    issuer: "NVIDIA",
    href: "https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd",
  },
  {
    name: "Kubernetes Administration",
    issuer: "The Linux Foundation",
    href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9e8e7f08-3f88-45a0-b0be-694276f9d2c6-arjun-ganesh-ac140df6-e13a-4ab9-978e-a78345e96415-certificate.pdf",
  },
  {
    name: "IBM Machine Learning Essentials",
    issuer: "IBM",
    href: "https://www.credly.com/badges/fe045d02-8b3e-46b6-9d2b-c331627c6803",
  },
];

/**
 * Bhagavad-gītā 11.32.
 *
 * Transliteration and translation are taken verbatim from the self-hosted
 * edition — Bhagavad-gītā As It Is (A.C. Bhaktivedanta Swami Prabhupāda,
 * © The Bhaktivedanta Book Trust) — TEXT 32 on PDF page 686, translation on
 * page 687. That PDF stores its roman text in a legacy Balaram font encoding
 * (ä ç å ñ ù à ë ò), which is decoded to proper IAST here; likewise its
 * Devanagari is legacy-encoded, so the verse below uses Unicode Devanagari
 * with danda (।) and visarga (ः). Every ending is cross-checked against the
 * edition's own romanization.
 */
export const GITA = {
  ref: "Bhagavad-gītā · Chapter 11, Verse 32",
  cite: "Bhagavad-gītā As It Is 11.32",
  source: "/Bhagavad-Gita-As-It-Is.pdf#page=686",
  attribution:
    "Bhagavad-gītā As It Is, A.C. Bhaktivedanta Swami Prabhupāda — © The Bhaktivedanta Book Trust",
  speaker: "श्रीभगवानुवाच ।",
  lines: [
    "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो",
    "लोकान्समाहर्तुमिह प्रवृत्तः ।",
    "ऋतेऽपि त्वां न भविष्यन्ति सर्वे",
    "येऽवस्थिताः प्रत्यनीकेषु योधाः ॥",
  ],
  translit: [
    "śrī-bhagavān uvāca",
    "kālo 'smi loka-kṣaya-kṛt pravṛddho",
    "lokān samāhartum iha pravṛttaḥ",
    "ṛte 'pi tvāṁ na bhaviṣyanti sarve",
    "ye 'vasthitāḥ pratyanīkeṣu yodhāḥ",
  ],
  english:
    "The Supreme Personality of Godhead said: Time I am, the great destroyer of the worlds, and I have come here to destroy all people. With the exception of you [the Pāṇḍavas], all the soldiers here on both sides will be slain.",
};

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/press", label: "Press" },
  { href: "/research", label: "Research" },
  { href: "/focus", label: "Principles" },
  { href: "/stack", label: "Stack" },
  { href: "/career", label: "Career" },
  { href: "/certs", label: "Certs" },
  { href: "/contact", label: "Contact" },
];
