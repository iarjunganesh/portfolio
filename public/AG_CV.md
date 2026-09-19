# Arjun Ganesh

Stockholm, Sweden | +46-709668310 | [iarjunganesh@gmail.com](mailto:iarjunganesh@gmail.com) | [arjunganesh.dev](https://arjunganesh.dev) | [github.com/iarjunganesh](https://github.com/iarjunganesh) | [linkedin.com/in/iarjunganesh](https://linkedin.com/in/iarjunganesh)

## Senior Software & AI Engineer | Applied AI, Distributed Systems, Cloud | NVIDIA NCP-AAI

### Summary

Senior software and AI engineer with 14+ years delivering production systems across regulated banking, media and cloud platforms. Designs and builds systems from discovery and architecture through implementation, deployment and operational support. Current work includes a production AI application used daily by financial-crime analysts, alongside a Java/Spring Boot integration platform, internal developer tooling and cross-team enablement. Hands-on across Python, Java, TypeScript, APIs, distributed systems, Kubernetes, Azure, AWS and Google Cloud, with applied depth in retrieval, agentic orchestration, evaluation and responsible AI. Won Hack for Good, one of three winners, at the Microsoft Agents League - AI Skills Fest 2026 with ARGUS, and authored a Microsoft Tech Community guest article explaining its architecture.

### Skills

- **Solution architecture and technical leadership:** Technical discovery, requirements translation, architecture design, rapid prototyping, stakeholder alignment, mentoring and cross-team enablement
- **Software and distributed systems:** Python, FastAPI, Java, Spring Boot, Quarkus, TypeScript, React, REST APIs, OAuth 2.0/OIDC, JWT, microservices, asynchronous workflows, event-driven processing and system integration
- **Applied AI and retrieval:** RAG, hybrid and vector search, embeddings, LLM orchestration, multi-agent systems, A2A, MCP, evaluation and human review
- **Cloud and platform engineering:** Azure, AWS, Google Cloud, Kubernetes, Docker, Helm, OpenShift, reusable libraries and deployment automation
- **Engineering productivity and operations:** GitHub Actions, CI/CD, observability, structured telemetry, automated testing, performance optimisation and production support
- **Responsible AI and regulated delivery:** Deterministic controls, citation verification, data minimisation, security, privacy, auditability and compliance

### Professional Experience

**Software Engineer - Swedbank, Stockholm** | 06/2025 - Present

- Architected and built a production AI application used daily by financial-crime analysts, translating a regulated investigation workflow into ingestion, retrieval, orchestration and an analyst-facing experience.
- Built Python APIs and LLM workflows combining search with deterministic compliance logic, with GDPR-aware evidence trails analysts can inspect and review.
- Designed and built a Java/Spring Boot API gateway giving enterprise applications one integration layer, with OpenAPI contracts and reusable libraries for data transformation, environment routing and OAuth 2.0 machine-to-machine authentication.
- Implemented certificate-based access control, request validation and correlated logging, and Kubernetes/Helm deployment profiles with health probes, metrics and dashboards.
- Verified 635 passing tests at 98.10% line and 95.64% branch coverage with JaCoCo across the gateway and four supporting libraries, excluding generated API contract models.
- Documented current and target architecture and migration trade-offs to guide incremental modernisation; built internal developer tooling and ran enablement sessions for engineers across teams.

**Senior Java Developer - Viaplay Group, Stockholm** | 09/2021 - 06/2025

- Delivered Java and Quarkus microservices for a streaming-media platform across AWS and on-premises Kubernetes, owning architecture, implementation, deployment and production operations.
- Architected event-driven rendition pipelines with Camunda and AWS services, creating reusable patterns for asynchronous media processing and platform integration.
- Built Python automation for media metadata extraction and validation; delivered approximately 30% improvement in media-processing throughput and 40% reduction in release lead time through optimisation, caching and CI/CD automation.

**Software Developer - Expleo Technology Nordic, Gothenburg** | 03/2021 - 09/2021

- Delivered domain-driven microservices with strong unit testing and produced technical documentation and workflow diagrams that reduced onboarding time by approximately 50%.

**Technical Lead - IBM, Sydney and Pune** | 08/2012 - 01/2021

Progressed from Associate System Engineer across banking and digital platform programs.

- Built backend applications and REST APIs for regulated banking programs across distributed teams, covering profile management, validation, enrichment and identity verification integrations.
- Delivered across privacy, AML, customer establishment, customer service and online lending in complex enterprise stakeholder environments.
- Led architecture and code reviews, mentoring and engineering standards across distributed delivery teams.
- Improved response times by approximately 25% through indexing, query tuning and caching; modernised delivery pipelines with Jenkins, Bamboo and Artifactory.

### Projects

**ARGUS - Agentic KYC Risk Platform** | [github.com/iarjunganesh/argus](https://github.com/iarjunganesh/argus)

Hack for Good winner, 1 of 3, Microsoft Agents League - AI Skills Fest 2026

- Six-service multi-agent KYC system in Python: five specialist agents fan out in parallel over a versioned A2A envelope, with compliance fan-in and a task ID traced through every report.
- Grounded retrieval in Azure AI Search indexes defined as code, with Azure OpenAI explanations over Cosmos DB, deterministic weighted scoring and fixed tier thresholds.

**BASTION - Governed Agentic Access Review** | [github.com/iarjunganesh/bastion](https://github.com/iarjunganesh/bastion) | All Things Agentic Hackathon 2026

- Read-only IAM review system on Google Cloud with three Google ADK agents, screening and scoring every binding deterministically before the model sees it. 321 tests at 100% statement and branch coverage.

**Continuum - Durable Agentic Memory** | [github.com/iarjunganesh/continuum](https://github.com/iarjunganesh/continuum) | CockroachDB × AWS Hackathon - Build with Agentic Memory, 2026

- Incident-response agent on AWS Lambda and CockroachDB fusing structured filtering with semantic ranking in a single C-SPANN vector query over Bedrock Titan embeddings; durable checkpoints resumed 10 of 10 SIGKILLs and 15 of 15 AWS-terminated invocations without duplicating actions.

**DRIFT - Grounded Release Intelligence** | [github.com/iarjunganesh/drift](https://github.com/iarjunganesh/drift) | OpenAI Build Week 2026

- Six-stage FastAPI and Next.js pipeline turning noisy release feeds into cited briefings, pinning every claim to a verbatim excerpt with character offsets and a SHA-256 hash, with a human gate before publication. 189 tests at 100% backend coverage.

### Publications

**[ARGUS: Compliance Infrastructure That Believes Financial Access Is a Human Right](https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074)** | Microsoft Tech Community, July 2026

- Authored a guest article explaining ARGUS's problem framing, multi-agent architecture, grounding strategy, auditability and human-centred roadmap.

**[What 100% Test Coverage Missed: State Across Google ADK A2A Boundaries](https://dev.to/arjunganesh/what-100-test-coverage-missed-state-across-google-adk-a2a-boundaries-29i1)** | dev.to, August 2026

- Analysed why 100% local test coverage still missed session state crossing distributed A2A service boundaries in production.

### Certifications

- **NVIDIA Certified Professional: Agentic AI (NCP-AAI) - NVIDIA**
- **Microsoft AI-102: Designing and Implementing a Microsoft Azure AI Solution - instructor-led training completed, March 2026**
- Kubernetes Administration (LFS458) - The Linux Foundation
- Machine Learning and AI Foundations: Prediction, Causation, and Statistical Inference - LinkedIn Learning

### Education

- **Master of Computer Applications - PES Institute of Technology, Bengaluru (2012)**
- Bachelor of Science (Computer Science) - NIE College of Science, Mysuru (2009)
