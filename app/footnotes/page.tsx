import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Footnotes — Dora Ai",
  description: "A small, quiet archive of moments worth remembering.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Footnotes() {
  return (
    <main className="footnotes-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Back to Dora's home page">
          <span className="brand-glyph">D</span>
          <span>
            DORA<span className="brand-slash">/</span>AI
          </span>
        </Link>

        <p className="footnotes-header-note">OFF THE MAIN PATH / 01</p>

        <Link className="footnotes-back" href="/">
          Back home <span aria-hidden="true">↙</span>
        </Link>
      </header>

      <section className="recognition-section" aria-labelledby="recognition-title">
        <div className="recognition-heading">
          <p className="section-kicker">A few nice moments</p>
          <h1 id="recognition-title">Things I&apos;m quietly proud of.</h1>
          <p>
            They&apos;re little markers along the way—not the reason I keep going,
            but still lovely to look back on.
          </p>
        </div>

        <div className="recognition-list">
          <article>
            <time>GOLD</time>
            <div><h2>USACO</h2><p>Division Gold</p></div>
            <span>ALGORITHMS</span>
          </article>
          <article>
            <time>2026</time>
            <div><h2>Physics Bowl</h2><p>National Gold</p></div>
            <span>PHYSICS</span>
          </article>
          <article>
            <time>2025</time>
            <div><h2>HiMCM</h2><p>Meritorious Award · two-person modeling team</p></div>
            <span>MODELING</span>
          </article>
          <article>
            <time>TEAM</time>
            <div><h2>National Careers Challenge</h2><p>School team recognition</p></div>
            <span>COLLABORATION</span>
          </article>
        </div>

        <Link className="footnotes-return" href="/">
          Return to the main path <span aria-hidden="true">↖</span>
        </Link>
      </section>
    </main>
  );
}
