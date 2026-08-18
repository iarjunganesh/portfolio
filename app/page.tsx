import Link from "next/link";
import GitaVerse from "./gita-verse";

// Server component: the per-character reveal is driven entirely by a CSS
// custom property (--i) on each span, so the name animates with zero JS.
function SplitLine({ text, start }: { text: string; start: number }) {
  return (
    <span className="line">
      {text.split("").map((ch, i) => (
        <span key={`${ch}-${i}`} className="char" style={{ "--i": start + i } as React.CSSProperties}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main className="hero shell" id="main">
      <h1 className="display">
        <SplitLine text="ARJUN" start={0} />
        <SplitLine text="GANESH" start={5} />
      </h1>

      <GitaVerse />

      <Link href="/work" className="scroll-cue">
        <span className="bar" aria-hidden="true" />
        Selected work →
      </Link>
    </main>
  );
}
