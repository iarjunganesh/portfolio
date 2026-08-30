/* ────────────────────────────────────────────────────────────────────────
   Content. Every claim, link and date here must be sourceable: metrics come
   from a run or an artifact, credentials from the issuing body, and links are
   re-checked before publishing (`npm run check:links`). Narrative copy —
   taglines, case-study prose — is written for the site, but it may not add a
   fact that is not backed somewhere below.
   ──────────────────────────────────────────────────────────────────────── */

export const ARGUS_WINNERS_URL =
  "https://techcommunity.microsoft.com/blog/educatordeveloperblog/%F0%9F%8F%86-agents-league-celebrating-the-builders-who-made-agents-battle-for-glory/4538007";

export const ARGUS_BLOG_URL =
  "https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074";

export const BASTION_CONSOLE_URL = "https://bastion.arjunganesh.dev/";

export const BASTION_WRITEUP_URL =
  "https://dev.to/arjunganesh/what-100-test-coverage-missed-state-across-google-adk-a2a-boundaries-29i1";

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

/**
 * A claim a reader can go and check. `href` points at the artifact that shows
 * it — a repo, a recording, a published post. Omit `href` rather than pointing
 * at something that only *mentions* the claim; an unlinked line renders as
 * plain text and reads as the weaker evidence it is.
 */
export type Evidence = { claim: string; href?: string };

/**
 * Status answers one question only — can a reader reach it right now?
 *
 *   live      → a public URL serves it today (the `Live app` link proves it)
 *   active    → maintained, but the public surface is code, recordings and
 *               publications rather than a hosted app
 *   archived  → hosting retired; source, recordings and submission remain
 *
 * Deliberately not a maturity scale: "in development" told a reader nothing
 * about whether they could go and look. Anything a status cannot express —
 * BASTION's fleet being private behind the public evidence console — belongs
 * in the case study's `limitation`, in words.
 */
export type ProjectStatus = "live" | "active" | "archived";

export const PROJECT_STATUS = {
  live: { label: "Live", tone: "live" },
  active: { label: "Active", tone: "active" },
  archived: { label: "Archived", tone: "muted" },
} as const satisfies Record<ProjectStatus, { label: string; tone: string }>;

export type Project = {
  key: string;
  name: string;
  href: string;
  tagline: string;
  featured?: boolean;
  problem: string;
  solution: string;
  status: ProjectStatus;
  flag?: string;
  impact?: string;
  guarantees?: string[];
  evidence?: Evidence[];
  context?: string;
  contextHref?: string;
  stack: string[];
  links?: { label: ResourceLabel; href: string }[];
  preview?: { url: string; embedUrl?: string; label: string };
  caseStudy?: {
    scope: string;
    premise: string;
    constraints: string[];
    decisions: { title: string; description: string }[];
    finding: { label: string; title: string; description: string; href?: string };
    outcome: string;
    limitation: string;
  };
};

export const projects: Project[] = [
  {
    key: "argus",
    name: "ARGUS",
    href: "https://github.com/iarjunganesh/argus",
    tagline: "Multi-agent compliance intelligence",
    featured: true,
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
      { claim: "Hack for Good winner — 1 of 3", href: ARGUS_WINNERS_URL },
      { claim: "Microsoft Tech Community post", href: ARGUS_BLOG_URL },
    ],
    context: "Microsoft Agents League — AI Skills Fest 2026 · Reasoning Agents track",
    contextHref: "https://info.microsoft.com/Agents-League-Hackathon-Registration.html",
    stack: [
      "Python 3.11",
      "Azure AI Foundry",
      "Foundry IQ",
      "Azure OpenAI GPT-4o",
      "Semantic Kernel",
      "A2A",
      "Azure AI Search",
      "Azure Document Intelligence",
      "Cosmos DB",
      "Gradio",
    ],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/argus" },
      { label: "Demo video", href: "https://youtu.be/yaTNCgCwX4s" },
      { label: "Write-up", href: ARGUS_BLOG_URL },
    ],
    caseStudy: {
      scope: "Independent system · architecture, implementation, evidence, and delivery",
      premise:
        "A compliance system should be able to explain every material finding, show its regulatory source, and preserve a reviewable trail instead of asking a human to trust an opaque score.",
      constraints: [
        "Every regulatory finding needs a traceable source",
        "Specialist responsibilities must remain explicit across the agent graph",
        "Risk decisions need plain-language reasoning and a reconstructable audit trail",
        "Demonstration data must remain synthetic and clearly labelled",
      ],
      decisions: [
        {
          title: "Fan out, then fan in through compliance",
          description:
            "An orchestrator dispatches identity, screening, corporate intelligence and transaction intelligence over A2A in parallel; their four results fan in to a single compliance and risk agent that scores them. Five specialists, each with its own tools, rather than one general prompt asked to be all of them.",
        },
        {
          title: "Ground before explaining",
          description:
            "Foundry IQ is wired to exactly two of the five agents: screening queries the sanctions and adverse-media knowledge bases, compliance queries the regulations base. The agents that need no cited knowledge do not get a retrieval path they could misuse.",
        },
        {
          title: "Preserve the full decision path",
          description:
            "The result exposes agent participation, tool activity, confidence, drivers, citations, and recommended actions so a reviewer can inspect how the report was assembled.",
        },
      ],
      finding: {
        label: "External validation",
        title: "The social-impact constraint strengthened the architecture",
        description:
          "Designing for people most likely to be failed by KYC made accessibility, plain-language explanation, cited findings, and human review part of the system boundary rather than presentation polish.",
        href: ARGUS_BLOG_URL,
      },
      outcome:
        "ARGUS was selected as one of three Microsoft Agents League 2026 Hack for Good winners, and its architecture was published as a guest post on Microsoft Tech Community.",
      limitation:
        "ARGUS is a technology demonstration using synthetic data. It is not a licensed compliance product and must not make real KYC/AML decisions.",
    },
  },
  {
    key: "bastion",
    name: "BASTION",
    href: "https://github.com/iarjunganesh/bastion",
    tagline: "A governed institutional-agent fleet for continuous access review",
    featured: true,
    problem:
      "Access review is quarterly work performed on continuously changing permissions. Automating the scan isn't enough — an institutional agent must audit the real policy rather than fixture rows, survive asynchronous retries, prove why it acted, and remain unable to turn suspicious input into a privileged write.",
    solution:
      "Read-only IAM review against the GCP project that runs it, including its own service identities. Deterministic code detects and scores findings; Gemini explains and routes already-minimized risk. Three institutional agents, one durable investigation identity — no raw IAM binding crosses the model or human-notification boundary.",
    status: "live",
    impact:
      "Human review receives minimized risk categories rather than raw IAM bindings.",
    guarantees: [
      "Read-only IAM boundary with no privileged write path",
      "Raw IAM bindings never cross the model or notification boundary",
      "Three of the five orchestrator steps hold no model at all",
      "An unscored investigation fails closed rather than escalating",
    ],
    evidence: [
      { claim: "Public evidence console", href: BASTION_CONSOLE_URL },
      { claim: "100% configured core coverage", href: BASTION_WRITEUP_URL },
    ],
    context: "All Things Agentic Hackathon 2026 · Fortified Enterprise Fleet track",
    contextHref: "https://allthingsagentichackathon.devpost.com/",
    stack: [
      "Python 3.12",
      "Google ADK 2.8",
      "Gemini 3.5 Flash",
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
    // The Cloud Run fleet itself is IAM-private (an unauthenticated findings
    // request is denied 403). The live URL below is the static, sanitized
    // evidence console — deliberately not a public route into the fleet.
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/bastion" },
      { label: "Live app", href: BASTION_CONSOLE_URL },
      { label: "Demo video", href: "https://youtu.be/Xpj8YmzFfpk" },
      { label: "Devpost", href: "https://devpost.com/software/bastion-pfuy71" },
      { label: "Write-up", href: BASTION_WRITEUP_URL },
    ],
    caseStudy: {
      scope: "Independent system · architecture, implementation, deployment, and evidence",
      premise:
        "Continuous access review needs more than an automated scan: it needs durable identity, minimized data, deterministic policy gates, and an agent fleet that remains unable to grant privilege.",
      constraints: [
        "The fleet must remain read-only against IAM",
        "Raw IAM bindings must not cross model or notification boundaries",
        "One investigation must remain reconstructable across retries and A2A hops",
        "Model and notification failures must fail closed rather than clear a finding",
      ],
      decisions: [
        {
          title: "Detect and score outside the model",
          description:
            "Deterministic Python reads the live project policy, classifies broad roles, derives an HMAC-backed opaque finding ID and computes a bounded risk score. A compliance product cannot answer “why was this flagged?” with “the model thought so”, so Gemini explains already-minimized categories and decides nothing.",
        },
        {
          title: "Answer in a schema, not in prose",
          description:
            "The auditor declares an output schema, so findings cross the A2A boundary as validated structured data: the finding ID must match a 24-hex pattern and the reason must be one of three deterministic codes. The scoring step downstream holds no model, so nothing retypes a finding on the way past.",
        },
        {
          title: "Put the gates in the caller",
          description:
            "A policy gate refuses to continue unless scoring left its own result behind, and an escalation gate refuses to report completion unless every routed department confirmed delivery. Both live in the orchestrator, not in the remote workers they check — a guard that travels over A2A is one the caller has to trust the callee to run.",
        },
      ],
      finding: {
        label: "Surprising finding",
        title: "The failure looked like success",
        description:
          "An ADK output key writes to the session owned by the agent that declares it. In one process, parent and child share that session and the state looks shared; across a remote A2A worker it is not. Nothing crashed — plausible older content stayed in the caller and the workflow read as complete while the new state never crossed. Every local and CI path exercised the in-process topology, which is exactly why full coverage could not see it.",
        href: BASTION_WRITEUP_URL,
      },
      outcome:
        "The deployed evidence set demonstrates private, read-only access review across managed agents, durable state, event delivery, policy enforcement, redacted escalation, and payload-free audit records.",
      limitation:
        "The operational fleet is private by design. What is public is a sanitized evidence console, the architecture, the code and the recorded demonstration — deliberately not a route into a live IAM endpoint.",
    },
  },
  {
    key: "continuum",
    name: "CONTINUUM",
    href: "https://github.com/iarjunganesh/continuum",
    tagline: "Durable incident memory for cold-started agents",
    featured: true,
    problem:
      "The conditions that cause production incidents — resource exhaustion, node failure, rollbacks, autoscaling churn — are the same conditions that kill the agent responding to them. An agent holding its working state in process memory does not degrade when that happens: it stops, and a human restarts the incident from zero without knowing which remediation actions already ran.",
    solution:
      "Every state transition is committed to CockroachDB before and after it happens. Kill the process mid-step — no graceful shutdown, no checkpoint call — and the next cold invocation reads the durable state, sees a step frozen in `executing`, and resumes that exact step.",
    status: "live",
    impact: "Resumes an interrupted incident from the exact step it was killed on.",
    guarantees: [
      "A forward step is claimed exactly once, even across a hard kill",
      "One module, and only one, may write state",
      "Recovery is read before any reasoning, on every invocation",
    ],
    evidence: [
      {
        claim: "Live incident console",
        href: "https://huggingface.co/spaces/iarjunganesh/continuum",
      },
      { claim: "Recorded kill and resume, one unbroken take", href: "https://youtu.be/LwD8__sKqa0" },
    ],
    context: "CockroachDB × AWS Hackathon 2026 — Build with Agentic Memory",
    contextHref: "https://cockroachdb-ai.devpost.com/",
    stack: ["Python 3.14", "FastAPI", "CockroachDB", "AWS Lambda", "Amazon Bedrock", "MCP"],
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
    caseStudy: {
      scope: "Independent system · architecture, implementation, deployment, and evidence",
      premise:
        "Most agent memory stores chat history. The thing worth storing under pressure is which remediation step is executing right now — because re-running a remediation action can be worse than never running it at all.",
      constraints: [
        "The execution environment may die mid-incident; its memory may not",
        "A forward step must be claimed exactly once across a hard kill",
        "Recovery must be the only path, not an error handler beside a happy path",
        "Incident data stays synthetic — no real infrastructure, credentials, or customers",
      ],
      decisions: [
        {
          title: "Read recovery state before reasoning",
          description:
            "The orchestrator's first action on every invocation — new environment or reused — is a CockroachDB read for open incident state matching the alert. Provisioned concurrency is deliberately absent, so the guarantee never rests on a warm container.",
        },
        {
          title: "Keep transactional state and vectors in one store",
          description:
            "Incident state and a VECTOR(1024) C-SPANN index live in the same CockroachDB cluster, so correlation filters on structured columns and ranks by distance in a single round trip. There is no second database to drift out of sync.",
        },
        {
          title: "Give state exactly one write path",
          description:
            "Only the memory agent writes. Each step commits in two explicit SERIALIZABLE transactions — `executing` before the execution window, `executed` after — with the forward step claimed once. A kill lands with `executing` durable, which is the fingerprint the next invocation resumes from.",
        },
      ],
      finding: {
        label: "Surprising finding",
        title: "The execution window had to be between two commits, not inside one",
        description:
          "Wrapping a step in a single transaction makes an interrupted step indistinguishable from one that never started. Splitting it — claim and commit `executing`, run, then commit `executed` — is what makes a hard kill leave behind a state a cold process can read and act on correctly.",
        href: "https://github.com/iarjunganesh/continuum/blob/main/docs/adr/009-step-execution-semantics.md",
      },
      outcome:
        "Continuum runs as a public incident console on Hugging Face Spaces over an AWS Lambda orchestrator and CockroachDB Cloud, deployed from CI on a version tag. The kill-and-resume sequence is reproducible locally and recorded as one unbroken take.",
      limitation:
        "All incident and alert data is synthetic — this demonstrates a recovery guarantee, not a production incident-response tool. Bedrock correlation and reasoning are best-effort and sit off the recovery critical path, so the flow degrades to deterministic fallbacks rather than failing.",
    },
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
    status: "archived",
    impact: "Converts raw, noisy changelogs into actionable release intelligence.",
    guarantees: [
      "Summaries are bounded to technical release content",
      "Semantic deduplication limits repeated release signals",
    ],
    evidence: [
      { claim: "Public source repository", href: "https://github.com/iarjunganesh/drift" },
      { claim: "Recorded demo", href: "https://youtu.be/6sbIz0ZR8Hw" },
    ],
    context: "OpenAI Build Week · Devpost",
    contextHref: "https://openai.devpost.com/",
    stack: [
      "Python 3.14",
      "FastAPI",
      "PostgreSQL 17",
      "pgvector",
      "MCP",
      "Railway",
      "Vercel Edge Networks",
    ],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/drift" },
      { label: "Demo video", href: "https://youtu.be/6sbIz0ZR8Hw" },
      {
        label: "Devpost",
        href: "https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams",
      },
    ],
    caseStudy: {
      scope: "Independent system · product, data contracts, deployment, and evidence",
      premise:
        "Release intelligence is useful only when direct facts remain distinguishable from interpretation and no unreviewed machine output can quietly become a published engineering recommendation.",
      constraints: [
        "Every direct claim must retain an exact source span",
        "Drafts must remain quarantined until separate verification and human review",
        "Fixture mode must provide a complete, no-key path without pretending to be live data",
        "The public UI must make confidence, provenance, and review state visible",
      ],
      decisions: [
        {
          title: "Keep the evidence middle layer visible",
          description:
            "Each insight preserves the source span, direct facts, interpretation, workload relevance, confidence, severity, and one bounded check instead of flattening everything into a summary.",
        },
        {
          title: "Separate drafting from verification",
          description:
            "Typed stages extract candidate claims, a separate verifier rejects unsupported work, and drafts stay outside the trusted briefing until a human records the publication decision.",
        },
        {
          title: "Make the honest path the easiest path",
          description:
            "A deterministic fixture stack runs locally without an API key, while provider-backed capture is explicitly enabled, budgeted, audited, and labelled as a bounded live path.",
        },
      ],
      finding: {
        label: "Product decision",
        title: "The review gate became the trust boundary",
        description:
          "A model-assisted verifier improves screening but is not proof. Treating human publication as the only bridge into the trusted briefing made the UI state, database contracts, API filtering, and audit records converge on the same rule.",
        href: "https://github.com/iarjunganesh/drift/blob/main/docs/adr/010-claim-evidence-and-review-gate.md",
      },
      outcome:
        "DRIFT shipped a public Next.js interface and FastAPI contract over five human-reviewed insights — the whole live store, deliberately small — with grounded search and chat constrained to those inspectable records.",
      limitation:
        "The hosted Vercel and Railway services were intentionally retired after the hackathon to avoid ongoing costs. The source, architecture, recorded demo, and submission remain available as evidence.",
    },
  },
  {
    key: "bankers-wrapped",
    name: "BANKERS' WRAPPED",
    href: "https://github.com/iarjunganesh/bankers-wrapped",
    tagline: "A narrated financial recap video, generated end to end",
    problem:
      "Banks hold a year of a customer's transactions and hand it back as a table nobody opens. There is no moment that makes the money mean anything, so the app goes unused and the relationship goes with it.",
    solution:
      "An agentic pipeline turns a CSV export — or a Plaid sandbox connection — into a 60-second narrated MP4. Typed async agents parse and analyse the transactions, assign a financial personality, write a five-scene script, generate the scene images and the voice narration, and FFmpeg composes the result.",
    status: "archived",
    impact: "Turns a year of transactions into a narrated 60-second recap in two to four minutes.",
    guarantees: [
      "Every AI media call routes through one client — no direct provider calls",
      "Backblaze B2 holds the session state, so it survives a redeploy",
      "Every artifact carries a SHA-256, and every step logs model, latency and retries",
    ],
    evidence: [
      {
        claim: "Public source repository",
        href: "https://github.com/iarjunganesh/bankers-wrapped",
      },
      { claim: "Recorded demo", href: "https://youtu.be/eTw1TCcYFk4" },
    ],
    context: "Backblaze Generative Media Hackathon 2026 · Devpost",
    contextHref: "https://backblaze-generative-media.devpost.com/",
    stack: [
      "Python 3.14",
      "FastAPI",
      "Genblaze SDK",
      "GMI Cloud Seedream",
      "NVIDIA NIM",
      "OpenAI TTS",
      "FFmpeg",
      "Plaid",
      "Backblaze B2",
      "SQLite",
      "Next.js",
      "TypeScript",
    ],
    links: [
      { label: "Code", href: "https://github.com/iarjunganesh/bankers-wrapped" },
      { label: "Demo video", href: "https://youtu.be/eTw1TCcYFk4" },
      { label: "Devpost", href: "https://devpost.com/software/banker-s-wrapped" },
    ],
    caseStudy: {
      scope: "Independent system · pipeline, media generation, storage, and delivery",
      premise:
        "A generated video is only worth shipping if you can say afterwards which model produced each frame of it, and prove the file has not changed since. Generative media is the easy half; provenance is the half that decides whether the output can be trusted.",
      constraints: [
        "Every AI media call goes through one client, so no provider call is unaccounted for",
        "A session must survive a redeploy — the database cannot be the source of truth",
        "Composition must be memory-bounded enough to run on a hobby-tier host",
        "The no-credentials path must be real, not a screenshot",
      ],
      decisions: [
        {
          title: "Route every generation through one seam",
          description:
            "Scene images, narration audio and the narrative script all leave through a single client wrapper, with a fallback provider behind the same interface. Zero direct provider calls exist outside that file, which is what makes a per-artifact provenance record possible at all.",
        },
        {
          title: "Make object storage the source of truth",
          description:
            "Fourteen files across ten artifact types — video, thumbnail, script, analytics, prompts, generation provenance, five scenes, narration, the source CSV and metadata — are written to Backblaze B2. SQLite is a read cache, so a redeploy loses nothing, and a 45-day lifecycle rule plus a per-artifact SHA-256 makes retention and integrity checkable.",
        },
        {
          title: "Compose in segments rather than one pass",
          description:
            "Each scene renders to its own segment and the segments are concat-joined with the narration, dipping to black between them. Rendering the whole timeline in one pass is simpler and needs more memory than a hobby-tier host has, so the compositor was rebuilt to stay bounded and off the event loop.",
        },
      ],
      finding: {
        label: "Design decision",
        title: "The interesting constraint was the receipt, not the render",
        description:
          "Generating a watchable video is a solved problem given the right APIs. What is not solved is being able to say, months later, which model produced which scene, what it was asked, and whether the file has changed since. Forcing every call through one client and every artifact into addressable storage with a hash made that answerable, and it decided the rest of the architecture.",
        href: "https://github.com/iarjunganesh/bankers-wrapped/blob/main/docs/adr/008-b2-source-of-truth.md",
      },
      outcome:
        "The pipeline ran end to end in roughly two to four minutes, dominated by generating five scene images in parallel, and shipped with a Plaid sandbox connector as a genuine no-credentials path.",
      limitation:
        "The hosted frontend and API were taken down after the hackathon; both URLs now return 404, and the project did not place. The source, the architecture records and the recorded demo remain as the evidence.",
    },
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
      "On the same GPU, what wall-time cost is required to reach a given numerical error with Ramanujan CUDA versus simulated Quantum Amplitude Estimation?",
    method:
      "Compare Ramanujan's 1914 pi series in a CUDA C++ kernel with Quantum Amplitude Estimation in CUDA-Q/cuQuantum, validated against exact SymPy ground truth.",
    result:
      "On an RTX 5070 Laptop GPU, the CUDA implementation reached double-precision saturation (~16 digits) in ~2.6 ms, while simulated QAE reached ~5 digits in ~0.44 s. No crossover was observed on this hardware.",
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
      "In the published sweep, radix sort is the strongest GPU result, while BFS and reductions remain slower than their CPU baselines at the tested sizes.",
    next:
      "Extend the documented benchmark protocol to additional algorithms, input shapes, and verified GPU runs.",
    status: "active",
    stack: ["Python", "CuPy", "Numba CUDA", "Dash"],
    href: "https://github.com/iarjunganesh/pythonic-algorithms-lab",
    artifacts: [
      {
        label: "Published speedup plot",
        href: "https://github.com/iarjunganesh/pythonic-algorithms-lab/blob/main/assets/plots/speedup_all.png",
      },
    ],
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
  { href: "/stack", label: "Capabilities" },
  { href: "/career", label: "Career" },
  { href: "/certs", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

type WithCaseStudy = Project & { caseStudy: NonNullable<Project["caseStudy"]> };

const hasCaseStudy = (project: Project): project is WithCaseStudy => Boolean(project.caseStudy);

/**
 * Every project whose case study is worth a route. Deliberately wider than
 * `featuredProjects`: DRIFT is archived and off the front grid, but its
 * write-up is still the best evidence about it, so /work/drift stays reachable
 * from its row in "Additional builds".
 */
export const caseStudyProjects = projects.filter(hasCaseStudy);

/** The three systems on the home page and at the top of /work. */
export const featuredProjects = caseStudyProjects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);
