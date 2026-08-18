import { PROJECT_STATUS, RESOURCE_ORDER, type Project } from "./data";
import DeviceFrame from "./device-frame";
import Reveal from "./reveal";

export default function WorkItem({ p, n }: { p: Project; n: number }) {
  const status = PROJECT_STATUS[p.status];
  const orderedLinks = RESOURCE_ORDER.flatMap((label) =>
    p.links?.filter((link) => link.label === label) ?? [],
  );

  return (
    <article id={p.key} className="work-item">
      <Reveal>
        <div className="work-head">
          <span className="index">{String(n).padStart(2, "0")}</span>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="work-link"
            aria-label={`${p.name} — ${p.tagline}`}
          >
            <h3 className="work-name">
              {p.name}
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </h3>
          </a>
        </div>

        <p className="lede muted work-lede">{p.tagline}</p>

        <div className="work-meta">
          <div>
            <span className="label">Status</span>
            <p className="project-status" data-tone={status.tone}>
              <span className="status-dot" aria-hidden="true" />
              {status.label}
            </p>
          </div>
          {p.flag && <span className="badge">★ {p.flag}</span>}
        </div>

        <div className="work-body">
          <div className="qa">
            {p.impact && (
              <div>
                <span className="label label-signal">Impact</span>
                <p className="work-impact">{p.impact}</p>
              </div>
            )}
            {p.guarantees && p.guarantees.length > 0 && (
              <div>
                <span className="label">Guarantees / constraints</span>
                <ul className="evidence-list">
                  {p.guarantees.map((guarantee) => (
                    <li key={guarantee}>{guarantee}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.evidence && p.evidence.length > 0 && (
              <div>
                <span className="label">Evidence</span>
                <ul className="evidence-list evidence-list-signal">
                  {p.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <span className="label">Problem</span>
              <p>{p.problem}</p>
            </div>
            <div>
              <span className="label">Solution</span>
              <p>{p.solution}</p>
            </div>
            {p.context && (
              <div>
                <span className="label">Context</span>
                <p>
                  {p.contextHref ? (
                    <a href={p.contextHref} target="_blank" rel="noreferrer" className="link">
                      {p.context}
                    </a>
                  ) : (
                    p.context
                  )}
                </p>
              </div>
            )}
          </div>

          <aside>
            <div className="work-aside-block">
              <span className="label">Stack</span>
              <div className="chips">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {orderedLinks.length > 0 && (
              <div className="work-aside-block">
                <span className="label">Resources</span>
                <div className="res-list">
                  {orderedLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link link-ghost link-out"
                    >
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {p.preview && (
          <div className="work-preview">
            <DeviceFrame
              url={p.preview.url}
              embedUrl={p.preview.embedUrl}
              label={p.preview.label}
              height={320}
            />
          </div>
        )}
      </Reveal>
    </article>
  );
}
