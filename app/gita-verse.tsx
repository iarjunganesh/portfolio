import { GITA } from "./data";

/**
 * The verse is set in Tiro Devanagari Sanskrit — a face cut specifically for
 * Sanskrit typesetting — so it speaks in its own voice rather than the
 * engineering mono used everywhere else on the site.
 */
export default function GitaVerse() {
  return (
    <section className="verse" aria-labelledby="verse-ref">
      <p className="label label-signal" id="verse-ref">
        {GITA.ref}
      </p>

      <div className="verse-body">
        <p className="verse-sa" lang="sa">
          <span className="verse-speaker">{GITA.speaker}</span>
          {GITA.lines.map((l) => (
            <span key={l} className="verse-line">
              {l}
            </span>
          ))}
        </p>

        <div className="verse-side">
          <p className="verse-translit" lang="sa-Latn">
            {GITA.translit.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>

          <blockquote className="verse-en" lang="en" cite={GITA.source}>
            {GITA.english}
          </blockquote>

          <div className="verse-source">
            <a href={GITA.source} target="_blank" rel="noreferrer" className="link link-out">
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
              {GITA.cite}
            </a>
            <p className="verse-credit">{GITA.attribution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
