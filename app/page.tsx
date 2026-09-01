import type { CSSProperties } from "react";
import Link from "next/link";
import { InteractiveEffects } from "./interactive-effects";

const GithubMark = () => (
  <span aria-hidden="true" className="github-mark">
    GH
  </span>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

function AnimatedText({ text }: { text: string }) {
  return (
    <span className="animated-text" aria-label={text}>
      {Array.from(text).map((letter, index) => (
        <span
          className="letter-shell"
          style={{ "--letter-index": index } as CSSProperties}
          aria-hidden="true"
          key={`${letter}-${index}`}
        >
          <span className="letter-glyph">
            {letter === " " ? "\u00a0" : letter}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <InteractiveEffects />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dora home">
          <span className="brand-glyph">D</span>
          <span>
            DORA<span className="brand-slash">/</span>AI
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#path">Path</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/DoraAiOvO"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Dora's GitHub profile"
        >
          <GithubMark />
          <span>GitHub</span>
          <Arrow />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Dora Ai / 艾雨阳 / currently collecting questions
          </p>
          <h1 id="hero-title">
            <span className="hero-line">
              <AnimatedText text="HI, I'M" />
            </span>
            <span className="hero-line hero-line-accent">
              <AnimatedText text="DORA." />
            </span>
          </h1>
          <p className="hero-handnote" aria-label="Still figuring things out">
            still figuring things out <span aria-hidden="true">♡</span>
          </p>
          <p className="hero-intro">
            I&apos;m Dora. I don&apos;t have one neat label for myself yet. I like making
            things with AI, fussing over how products feel, playing a truly
            unreasonable number of video games, and following whatever idea has
            my attention next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">
              A little about me <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href="#work">
              What I&apos;ve been making <span aria-hidden="true">↘</span>
            </a>
          </div>

          <dl className="signal-grid" aria-label="A snapshot of Dora">
            <div>
              <dt>Current rabbit hole</dt>
              <dd>AI products</dd>
            </div>
            <div>
              <dt>Can talk forever about</dt>
              <dd>Video games</dd>
            </div>
            <div>
              <dt>Usually refining</dt>
              <dd>One more version</dd>
            </div>
          </dl>
        </div>

        <div className="hero-console" aria-label="Dora's creative system">
          <span className="console-sticker sticker-hi" aria-hidden="true">hi!</span>
          <span className="console-sticker sticker-star" aria-hidden="true">✦</span>
          <span className="console-sticker sticker-smile" aria-hidden="true">˙ᵕ˙</span>
          <div className="console-topline">
            <span>DORA.OS / 01</span>
            <span className="live-label">
              <i aria-hidden="true" /> LIVE
            </span>
          </div>

          <div className="orbit-stage" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              <span className="core-letter">D</span>
              <span className="core-face">•ᴗ•</span>
              <small>BUILD / LEARN / LOOP</small>
            </div>
            <span className="satellite satellite-one">01</span>
            <span className="satellite satellite-two">AI</span>
            <span className="satellite satellite-three">∞</span>
          </div>

          <div className="console-readouts">
            <div>
              <span>INPUT</span>
              <strong>TOO MANY QUESTIONS</strong>
            </div>
            <div>
              <span>OUTPUT</span>
              <strong>ONE MORE PROTOTYPE</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>AI + IDEAS</span>
          <i>✦</i>
          <span>GAMES, HONESTLY</span>
          <i>✦</i>
          <span>PRODUCTS WITH A POINT</span>
          <i>✦</i>
          <span>LEARNING BY MAKING</span>
          <i>✦</i>
          <span>AI + IDEAS</span>
          <i>✦</i>
          <span>GAMES, HONESTLY</span>
          <i>✦</i>
          <span>PRODUCTS WITH A POINT</span>
          <i>✦</i>
          <span>LEARNING BY MAKING</span>
        </div>
      </div>

      <section className="about-section" id="about" aria-labelledby="about-title" data-reveal>
        <div className="about-index" aria-hidden="true">D</div>
        <div className="about-copy">
          <p className="section-kicker">A little more about me</p>
          <h2 id="about-title">
            One question leads to another.<br />Somewhere along the way, I start building.
          </h2>
          <div className="about-body">
            <p>
              I don&apos;t have a perfectly organized story about what I want to be,
              and I like it that way. I tend to notice an idea, wonder whether
              it could work, and start making a version before I know exactly
              where it will go.
            </p>
            <p>
              Most things I enjoy sit somewhere between technology and
              experience. I care about whether something works, but also whether
              it makes sense, feels inviting, or has a little personality. I
              usually learn what I need by making the next version.
            </p>
          </div>
          <dl className="interest-list" aria-label="Dora's current interests">
            <div><dt>Always playing</dt><dd>One more game</dd></div>
            <div><dt>Making</dt><dd>AI products + experiments</dd></div>
            <div><dt>Usually refining</dt><dd>The next version</dd></div>
          </dl>
        </div>

        <div className="principles" aria-label="A few things Dora believes">
          <div><span>01</span><strong>Stay with the question</strong><small>The interesting part is usually one why deeper.</small></div>
          <div><span>02</span><strong>Make room for clarity</strong><small>A good idea deserves a way in.</small></div>
          <div><span>03</span><strong>Keep some warmth</strong><small>Useful things can still feel human.</small></div>
        </div>
      </section>

      <section className="path-section" id="path" aria-labelledby="path-title">
        <div className="path-heading" data-reveal>
          <div>
            <p className="section-kicker">A few coordinates</p>
            <h2 id="path-title">A few ways I tend to spend my time.</h2>
          </div>
          <p>
            There isn&apos;t one tidy storyline here. These are simply the things
            that seem to keep reappearing when I&apos;m left to follow my own
            attention.
          </p>
        </div>

        <div className="chapter-grid">
          <article className="chapter-card chapter-school" data-reveal>
            <div className="chapter-meta">
              <span>MAKING / USUALLY</span>
              <span>01</span>
            </div>
            <h3>Starting before I feel ready</h3>
            <p>
              Most things I make begin with a question and a slightly messy
              first version. I learn fastest once there is something on the
              screen I can click, dislike, fix, and show to someone else.
            </p>
            <small>Curiosity · prototyping · iteration</small>
          </article>

          <article className="chapter-card chapter-gcet" data-reveal>
            <div className="chapter-meta">
              <span>GAMING / VERY OFTEN</span>
              <span>02</span>
            </div>
            <h3>Yes, I really love video games</h3>
            <p>
              I&apos;m not a game developer, and I&apos;m not pretending to be one. I&apos;m
              simply a very enthusiastic player—RPGs, competitive multiplayer,
              open worlds, simulations, social games, and probably whatever I
              discover next.
            </p>
            <small>RPGs · multiplayer · open worlds · simulation</small>
          </article>

          <article className="chapter-card chapter-community" data-reveal>
            <div className="chapter-meta">
              <span>OFF-SCREEN / ALSO ME</span>
              <span>03</span>
            </div>
            <h3>Making things I can almost hold</h3>
            <p>
              3D modeling in Onshape scratches a different part of my brain. I
              like shaping an object, adjusting the awkward details, and
              watching a rough idea slowly become something coherent.
            </p>
            <small>Onshape · 3D CAD · patient tweaking</small>
          </article>
        </div>
      </section>

      <section className="curiosity-section" aria-labelledby="curiosity-title">
        <div className="curiosity-heading" data-reveal>
          <p className="section-kicker">What keeps pulling me back</p>
          <h2 id="curiosity-title">A slightly messy map of things I care about.</h2>
        </div>

        <div className="curiosity-grid">
          <article className="curiosity-card curiosity-games" data-reveal>
            <span>01 / VERY MUCH A PLAYER</span>
            <h3>Games are the hobby I never have to force.</h3>
            <p>
              I play because I genuinely love it, not because it fits a
              professional story. Give me a world to get lost in, a system to
              understand, or friends to play with, and I&apos;ll happily disappear
              for a while.
            </p>
            <small>Stories · systems · competition · friends</small>
          </article>

          <article className="curiosity-card curiosity-ai" data-reveal>
            <span>02 / AI PRODUCTS</span>
            <h3>I like seeing what AI can become outside a chat box.</h3>
            <p>
              I enjoy turning an AI idea into a product with a purpose, an
              interface, edge cases, and real people on the other side. That is
              usually where the interesting questions begin.
            </p>
            <small>Ideas · usefulness · trust · iteration</small>
          </article>

          <article className="curiosity-card curiosity-ui" data-reveal>
            <span>03 / PRODUCT CRAFT</span>
            <h3>I notice when something feels good.</h3>
            <p>
              Motion, spacing, color, wording, and tiny moments of personality
              matter to me. I may not always know the design term for something,
              but I know when I want to keep looking at it.
            </p>
            <small>Motion · color · tone · personality</small>
          </article>

          <article className="curiosity-card curiosity-learning" data-reveal>
            <span>04 / THINGS I&apos;M LEARNING</span>
            <h3>I like having more than one rabbit hole.</h3>
            <p>
              My interests change as I learn. I&apos;d rather leave room for that
              than decide too early that I need one perfect title, one subject,
              or one kind of project forever.
            </p>
            <small>No final label required</small>
          </article>
        </div>
      </section>

      <section className="toolbox-section" aria-labelledby="toolbox-title">
        <div className="toolbox-heading" data-reveal>
          <p className="section-kicker">Things I reach for</p>
          <h2 id="toolbox-title">A toolbox that keeps changing.</h2>
          <p>
            These aren&apos;t scores or a claim to know everything. They&apos;re simply
            the languages and tools that have helped me make things so far.
          </p>
        </div>

        <div className="toolbox-grid">
          <article data-reveal>
            <span>01</span>
            <h3>Code</h3>
            <p>Java · Python · C++ · TypeScript</p>
          </article>
          <article data-reveal>
            <span>02</span>
            <h3>Build</h3>
            <p>React · FastAPI · PostgreSQL · Git &amp; GitHub · Vercel</p>
          </article>
          <article data-reveal>
            <span>03</span>
            <h3>Think</h3>
            <p>LLM applications · prompt design · product thinking · rapid prototyping</p>
          </article>
          <article data-reveal>
            <span>04</span>
            <h3>Shape</h3>
            <p>Onshape · 3D CAD · product modeling · technical presentation</p>
          </article>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">A few things I&apos;ve made</p>
            <h2 id="work-title">Some questions turned into projects.</h2>
          </div>
          <p>
            They&apos;re not the whole story—just a small record of the ideas I&apos;ve
            been curious enough to follow.
          </p>
        </div>

        <div className="project-grid">
          <article className="project project-finsight" data-reveal>
          <div className="project-copy">
            <div className="project-meta">
              <span>01 / FLAGSHIP</span>
              <span>FINTECH · AI · FULL STACK</span>
            </div>
            <div>
              <p className="project-label">A question about better research</p>
              <h3>FinSight</h3>
              <p className="project-description">
                FinSight began as an individual summer project and stayed with
                me after the program ended. It brings fundamentals, news, peer
                benchmarks, SEC filings, and risk signals into one research
                workspace, with evidence attached to the claims it makes.
              </p>
            </div>

            <ul className="tag-list" aria-label="FinSight technologies">
              <li>React</li>
              <li>FastAPI</li>
              <li>Python</li>
              <li>Explainable AI</li>
            </ul>

            <a
              className="project-link"
              href="https://github.com/DoraAiOvO/FinSight"
              target="_blank"
              rel="noreferrer"
            >
              View repository <Arrow />
            </a>
          </div>

          <div className="project-visual finsight-ui" aria-hidden="true">
            <div className="ui-window">
              <div className="window-bar">
                <div><i /><i /><i /></div>
                <span>FINSIGHT / RESEARCH DESK</span>
                <b>FS</b>
              </div>
              <div className="stock-header">
                <div>
                  <span>NASDAQ</span>
                  <strong>AAPL</strong>
                </div>
                <div className="stock-price">
                  <span>LAST CLOSE</span>
                  <strong>$226.34</strong>
                  <small>+1.82%</small>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-labels"><span>6M PERFORMANCE</span><span>+14.2%</span></div>
                <div className="chart-grid" />
                <div className="chart-line">
                  <i className="chart-segment segment-1" />
                  <i className="chart-segment segment-2" />
                  <i className="chart-segment segment-3" />
                  <i className="chart-segment segment-4" />
                  <i className="chart-segment segment-5" />
                  <i className="chart-segment segment-6" />
                  <i className="chart-segment segment-7" />
                  <i className="chart-segment segment-8" />
                </div>
              </div>
              <div className="evidence-row">
                <div>
                  <span>QUALITY SIGNAL</span>
                  <strong>Evidence complete</strong>
                  <small>12 / 12 claims cited</small>
                </div>
                <div>
                  <span>RISK VIEW</span>
                  <strong>Balanced</strong>
                  <small>4 risks · 5 opportunities</small>
                </div>
              </div>
            </div>
          </div>
          </article>

          <article className="project project-robolabs" data-reveal>
          <div className="project-copy">
            <div className="project-meta">
              <span>02 / LAB NOTE</span>
              <span>ROBOTICS · PROTOTYPING · SYSTEMS</span>
            </div>
            <div>
              <p className="project-label">A question with moving parts</p>
              <h3>RoboLabs</h3>
              <p className="project-description">
                RoboLabs was a five-person team AI project—not an individual
                robotics build. It gives two connected ideas one home:
                RoboPrompt turns plain-language intentions into testable robot
                workflows, while RoboLab FTC lets students try competition code
                in a virtual field.
              </p>
            </div>

            <ul className="tag-list" aria-label="RoboLabs themes">
              <li>Robotics</li>
              <li>Team of 5</li>
              <li>Simulation</li>
              <li>Product UX</li>
            </ul>

            <a
              className="project-link"
              href="https://robolab-hub.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit RoboLabs <Arrow />
            </a>
          </div>

          <div className="project-visual robolabs-ui" aria-hidden="true">
            <div className="lab-grid" />
            <div className="lab-corner top-left">ROBOLABS // UNIT 02</div>
            <div className="lab-corner top-right">SYSTEM ONLINE</div>
            <div className="bot-shell">
              <div className="bot-ring ring-outer" />
              <div className="bot-ring ring-inner" />
              <div className="bot-face">
                <i />
                <i />
              </div>
              <span className="bot-node node-a" />
              <span className="bot-node node-b" />
              <span className="bot-node node-c" />
            </div>
            <div className="lab-status">
              <span>PERCEPTION</span>
              <i />
              <span>CONTROL</span>
              <i />
              <span>INTERACTION</span>
            </div>
          </div>
          </article>
        </div>
      </section>

      <footer id="contact" data-reveal>
        <div className="footer-orbit" aria-hidden="true"><span>D</span></div>
        <p className="section-kicker">One last thing</p>
        <h2>If you&apos;d like to say hi,</h2>
        <p className="footer-copy">
          I&apos;m usually happy to talk about something I&apos;m learning, building,
          or still trying to understand.
        </p>
        <a
          className="footer-link"
          href="https://github.com/DoraAiOvO"
          target="_blank"
          rel="noreferrer"
        >
          Find me on GitHub <Arrow />
        </a>
        <div className="footer-bottom">
          <span>
            © 2026 Dora AI{" "}
            <Link
              className="archive-key"
              href="/footnotes/"
              rel="nofollow"
              aria-label="Open a small archive"
              title="A small archive"
            >
              ✦
            </Link>
          </span>
          <span>Made slowly / still evolving</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
