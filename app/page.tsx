import Link from "next/link";

import { ecosystemMap, services as serviceProgress } from "./services";
import { ResearchCarousel } from "./research-carousel";
import { NovaGo, SiteFooter, SiteHeader } from "./site-chrome";
import { SmoothLink } from "./smooth-link";

// Drop the generated convergence illustration in `public/images/` and set this
// path to replace the built-in fragment cards, e.g. "/images/intro-scatter.png".
// Empty keeps the CSS + SVG version.
const introIllustration = "";

const fragmentSources = [
  {
    label: "University pages",
    className: "orange",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <rect x="7" y="13" width="4" height="4" rx="1" className="solid" />
      </svg>
    ),
  },
  {
    label: "Group chats",
    className: "pink",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H8l-5 3z" />
        <path d="M10 16a3 3 0 0 0 3 3h3l4 3v-3a3 3 0 0 0 2-3v-2a3 3 0 0 0-3-3" />
      </svg>
    ),
  },
  {
    label: "Maps",
    className: "mint",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.4" className="solid" />
      </svg>
    ),
  },
  {
    label: "Payment tools",
    className: "blue",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" />
        <rect x="5" y="13" width="5" height="3" rx="1" className="solid" />
      </svg>
    ),
  },
  {
    label: "Marketplaces",
    className: "violet",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11.5V5a2 2 0 0 1 2-2h6.5L21 12.5 12.5 21z" />
        <circle cx="7.5" cy="7.5" r="1.6" className="solid" />
      </svg>
    ),
  },
];

const introClaims = [
  [
    "01",
    "Beautiful and simple",
    "A soft, characterful visual language, paired with flows a newcomer can complete on the first try.",
  ],
  [
    "02",
    "Timely and trustworthy",
    "Information stays current and traceable to its source, so a student can act on it without second-guessing.",
  ],
  [
    "03",
    "Always someone to ask",
    "Albot takes the questions that feel too basic to ask a person—so nobody stays stuck out of embarrassment.",
  ],
];

// --- 04 Define & Ideation ------------------------------------------------
// Three movements only: the themes the evidence produced, the How-might-we
// they turn into, and the system that answers it.

const researchSignals = [
  {
    number: "01",
    title: "Fragmented campus systems",
    copy: "New students move between official pages, email, maps, payment tools, group chats, and marketplaces before they can complete one simple task.",
  },
  {
    number: "02",
    title: "Unclear trust signals",
    copy: "Students can find answers quickly, but they often cannot tell whether the information is official, current, peer-based, or only a guess.",
  },
  {
    number: "03",
    title: "High-pressure first-week decisions",
    copy: "Payment, currency exchange, directions, deadlines, and buying essentials all happen while the student is still learning campus language.",
  },
];

// The five services the concepts became. They are named per member in the
// Design Team chapter, which is where the convergence story starts.
const systemNodes = ["Academic Hub", "Payment", "Market", "Forum", "Commute"];

// Photos live in `public/images/team/`. Clearing `photo` falls back to the
// colour placeholder.
const teamMembers = [
  { name: "Huang Molin", concept: "Settly", focus: "Arrival", className: "blue", photo: "/images/team/huang-molin.jpg" },
  { name: "Cao Yuchen", concept: "EZPAY", focus: "Payment", className: "violet", photo: "/images/team/cao-yuchen.jpg" },
  { name: "Fan Zeen", concept: "BorrowNest", focus: "Access", className: "mint", photo: "/images/team/fan-zeen.jpg" },
  { name: "Wang Huaiyin", concept: "NUS Nexus", focus: "Community", className: "orange", photo: "/images/team/wang-huaiyin.jpg" },
  { name: "Duan Xurui", concept: "UniFlow", focus: "Study", className: "pink", photo: "/images/team/duan-xurui.jpg" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-copy">
          <h1>
            A super app for
            <br />
            <span>your new campus life.</span>
          </h1>
          <p className="hero-lede lead">
            <NovaGo /> connects the essential moments of a newcomer’s first
            weeks—from finding the next step to navigating campus, paying with
            confidence, getting everyday items, and asking for help.
          </p>
          <div className="hero-actions">
            <SmoothLink className="button button-primary" href="#final">
              View final prototype <span aria-hidden="true">↘</span>
            </SmoothLink>
            <SmoothLink className="text-link" href="#research">
              Explore the process <span aria-hidden="true">↓</span>
            </SmoothLink>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Target User</dt>
              <dd>New to NUS</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>A short stay</dd>
            </div>
            <div>
              <dt>Advantage</dt>
              <dd>Connected ecosystem</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="NovaGo high fidelity screens">
          <div className="phone phone-login">
            <img
              src="/images/novago-login.png"
              alt="NovaGo login screen with the NovaGo robot waving on campus"
            />
          </div>
          <div className="phone phone-home">
            <img
              src="/images/novago-home.png"
              alt="NovaGo home dashboard with five campus services, schedule and AI assistant"
            />
          </div>
          <div className="floating-note">
            <span>✦</span>
            <p>
              <strong>Less guessing.</strong>
              <br />
              More belonging.
            </p>
          </div>
        </div>
      </section>

      <section className="intro section" id="introduction">
        <div className="section-label">
          <span>01</span>
          <p>Introduction</p>
        </div>
        <h2>
          Starting university in a new country
          <br />
          is not <em>a single task.</em>
        </h2>

        <div className="intro-band">
          <div className="intro-stage">
            <div className="intro-fragments">
              {introIllustration ? (
                <img
                  className="intro-illustration"
                  src={introIllustration}
                  alt="Five disconnected campus tools drifting apart"
                />
              ) : (
                fragmentSources.map((fragment, index) => (
                  <div
                    key={fragment.label}
                    className={`fragment-card f${index + 1} ${fragment.className}`}
                  >
                    <span className="fragment-icon">{fragment.icon}</span>
                    <p>{fragment.label}</p>
                  </div>
                ))
              )}
            </div>

            {/* Same 1000x660 coordinate space as the % card positions in CSS.
                Each arc starts inside its own card and ends on the student's
                torso, so the lines are absorbed by the figure rather than
                meeting at a visible point in mid-air. */}
            <svg
              className="intro-arcs"
              viewBox="0 0 1000 660"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcFade" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#8db4ff" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#185fa5" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              {[
                "M150 85 Q500 180 833 404",
                "M310 203 Q570 280 833 404",
                "M110 383 Q480 430 833 404",
                "M450 103 Q650 225 833 404",
                "M350 517 Q600 530 833 404",
              ].map((d) => (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#arcFade)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            {/* The student's inner monologue — a thought bubble trailing down
                to the figure below. */}
            <blockquote className="intro-thought">
              <p>
                A deadline, an unfamiliar building, a payment question, a
                temporary item, and a ‘basic’ question can all happen on the
                same day.
              </p>
            </blockquote>

            <div className="intro-converge">
              <img
                className="intro-focal"
                src="/images/novago-arrival.png"
                alt="A newly arrived student standing alone with a suitcase, head down over their phone"
              />
            </div>

            <p className="subsection-label stage-label stage-label-left">
              The fragmented experience
            </p>
            <p className="subsection-label stage-label stage-label-right">
              All on the same day
            </p>
          </div>
        </div>

        <h2 className="intro-claims-heading">
          Our build target:
          <br />
          <em>User-centred design</em>
        </h2>

        <p className="intro-claims-lede lead">
          <NovaGo /> sets out to improve how newcomers move through these
          moments, and to give that a warm, carefully crafted interface. Both
          serve the same end: a better short stay on campus.
        </p>

        <div className="intro-claims">
          <img
            className="intro-robot"
            src="/images/novago-robot-lying.png"
            alt=""
            aria-hidden="true"
          />
          {introClaims.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team section" id="team">
        <div className="section-label">
          <span>02</span>
          <p>Design Team</p>
        </div>
        <div className="team-heading">
          <h2>
            Five ideas,
            <br />
            <em>one super app.</em>
          </h2>
          <p className="lead">
            <NovaGo /> began as five independent concepts. Each member owned one
            early campus need and carried it into the connected experience.
          </p>
        </div>
        <div
          className="team-grid"
          aria-label="Five concepts integrated into NovaGo"
        >
          {teamMembers.map((member) => (
            <article key={member.concept}>
              <div className={`avatar ${member.className}`}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name}, who created ${member.concept}`}
                  />
                ) : null}
              </div>
              <h3>{member.name}</h3>
              <div className="team-concept">
                <span>{member.concept}</span>
                <small>{member.focus}</small>
              </div>
            </article>
          ))}
        </div>
        <div className="team-result">
          <span className="team-arrow" aria-hidden="true">
            ↓
          </span>
          <p className="wordmark team-logo">
            Nova<span>Go</span>
          </p>
          <small>One journey</small>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="section-label light">
          <span>03</span>
          <p>User Research</p>
        </div>
        <div className="research-heading">
          <h2>
            From feature ideas
            <br />
            <em>to questions worth testing.</em>
          </h2>
          <p className="lead">
            We began with five team proposals. Rather than present product
            assumptions as user findings, we ran a first round of interviews to
            establish what newcomers actually struggle with, then reframed the
            proposals into service-level questions worth testing.
          </p>
        </div>

        <p className="subsection-label light research-next-label">
          Persona / User journey / Journey map
        </p>
        <ResearchCarousel />
      </section>

      <section className="ideation section" id="define-ideation">
        <div className="section-label">
          <span>04</span>
          <p>Define &amp; Ideation</p>
        </div>
        <div className="ideation-heading">
          <h2>
            Define the real problem
            <br />
            <em>before designing the answer.</em>
          </h2>
          <p className="lead">
            Our user research tasks turned round one into five artefacts. This
            chapter asks what they justify building — first the problem they
            add up to, then the system that answers it.
          </p>
        </div>

        {/* --- Define: what the artefacts justify --------------------------- */}

        <p className="subsection-label needs-label">Research synthesis</p>
        <h2>Three signals shaped the product definition.</h2>
        <p className="lead chapter-note">
          The themes that survived clustering, each one traceable back to a
          note from round one. Three students is enough to see a pattern, not
          enough to size it — nothing here is counted.
        </p>
        <div className="signal-grid">
          {researchSignals.map((signal) => (
            <article key={signal.number}>
              <span>{signal.number}</span>
              <h3>{signal.title}</h3>
              <p>{signal.copy}</p>
            </article>
          ))}
        </div>
        {/* What the three signals add up to — the problem, stated in prose
            rather than as its own heading. */}
        <p className="signal-conclusion">
          Together they define the problem: new students need a connected way
          to understand and complete essential campus tasks without repeatedly
          searching across disconnected sources.
        </p>

        {/* --- The hinge: Define turns into the question Ideation answers --- */}

        <div className="chapter-hinge">
          <p className="subsection-label">How might we</p>
          <h2>
            Help a student new to NUS
            <br />
            <span
              className="chapter-hinge-line"
              style={{
                color: "var(--color-heading)",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              move from uncertainty to a clear next action?
            </span>
          </h2>
        </div>

        {/* --- Ideation: the five concepts from chapter 02, converged ------- */}

        {/* Opens the Ideation half in the same shape as the chapter opener. */}
        <div className="ideation-heading">
          <h2>
            From separate concepts
            <br />
            <em>to one connected system.</em>
          </h2>
          <p className="lead">
            NovaGo became a connected service map organised around a
            newcomer’s first-week tasks — with Albot woven through all five
            rather than parked beside them, so help arrives inside whichever
            service the student is already in.
          </p>
        </div>
        <div className="system-hub">
          <p className="wordmark hub-mark">
            Nova<span>Go</span>
          </p>
          <small>Task-first campus companion</small>
          <span className="hub-connector" aria-hidden="true">
            <img
              className="hub-robot"
              src="/images/novago-robot-sitting.png"
              alt=""
            />
          </span>
          <div className="hub-nodes">
            {systemNodes.map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>
        </div>

        <div className="ideation-support">
          {/* The principles that shaped the map, kept as concise prose. */}
          <div className="principle-notes">
            <p>
              <strong>Synergy over quantity.</strong> Every service should hand
              off to a meaningful next step.
            </p>
            <p>
              <strong>Task-first navigation.</strong> Organise around what
              students need to complete—not a folder of features.
            </p>
            <p>
              <strong>Trust made visible.</strong> Distinguish official
              information, guidance, and peer advice at a glance.
            </p>

            <div className="convergence-rationale">
              <p className="subsection-label">How we converged</p>
              <h3>We did not choose one proposal as the winner.</h3>
              <p>
                The five proposals gave us a deliberately broad idea pool.
                Rather than voting for a single concept, we clustered the
                recurring newcomer tasks and compared each direction against
                research relevance, user value, feasibility, and its ability to
                support an integrated journey.
              </p>
              <div className="convergence-steps">
                <p>
                  <strong>Keep</strong>
                  Preserve the distinct user need behind each concept.
                </p>
                <p>
                  <strong>Combine</strong>
                  Join ideas that can share identity, task, and context.
                </p>
                <p>
                  <strong>Defer</strong>
                  Move lower-value breadth outside the first prototype scope.
                </p>
              </div>
            </div>
          </div>

          <aside className="albot-callout" aria-labelledby="albot-callout-title">
            <p className="subsection-label">Why Albot</p>
            <h3 id="albot-callout-title">AI support, built into NovaGo.</h3>
            <ol>
              <li>
                <strong>Trusted information</strong>
                <span>Official sources help keep hallucination risk low.</span>
              </li>
              <li>
                <strong>Fast help, anywhere</strong>
                <span>Clear answers are available whenever students need them.</span>
              </li>
              <li>
                <strong>One tap to take action</strong>
                <span>Each answer can open the relevant NovaGo service screen.</span>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="prototype section" id="prototype">
        <div className="section-label">
          <span>05</span>
          <p>Prototyping</p>
        </div>
        <div className="prototype-top">
          <div>
            <h2>
              Design the handoffs,
              <br />
              <span className="prototype-heading-accent">
                not just the home screen.
              </span>
            </h2>
          </div>
          <p className="lead">
            The core prototype flow connects arrival context to a personalised
            dashboard, a relevant service, and a clear next step. That
            continuity is the product’s central interaction idea.
          </p>
        </div>
        {/* Lead item sticks while the service rail scrolls past it. */}
        <div className="proto-grid">
          <Link className="proto-feature" href="/prototype/system">
            <span className="proto-feature-media">
              {ecosystemMap ? (
                <img
                  src={ecosystemMap}
                  alt="Ecosystem map showing how the five NovaGo services hand off to each other"
                />
              ) : (
                <span className="proto-slot">
                  <span>Ecosystem map</span>
                </span>
              )}
            </span>
            <span className="subsection-label">Visual system &amp; ecosystem map</span>
            <span className="proto-feature-title">
              Calm enough to reassure. Bright enough to invite.
              <span className="proto-card-arrow" aria-hidden="true">
                ↗
              </span>
            </span>
          </Link>

          <div className="proto-rail">
            {serviceProgress.map((service) => (
              <Link
                className={`proto-card ${service.className}`}
                href={`/prototype/${service.slug}`}
                key={service.slug}
              >
                <span className="proto-card-media">
                  {service.hifi[0] ? (
                    <img
                      src={service.hifi[0].src}
                      alt={service.hifi[0].caption}
                    />
                  ) : (
                    <span className="proto-card-glyph">
                      <img src={service.icon} alt="" />
                    </span>
                  )}
                </span>
                <span className="proto-card-text">
                  <span className="proto-card-name">{service.name}</span>
                  <span className="proto-card-hint">
                    Read
                    <span className="proto-card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="evaluation section" id="evaluation">
        <div className="section-label light">
          <span>06</span>
          <p>Evaluation</p>
        </div>
        <div className="evaluation-heading">
          <h2>
            Evaluate the journey,
            <br />
            <span className="evaluation-heading-accent">
              not only each screen.
            </span>
          </h2>
          <p className="lead evaluation-intro">
            We walked through the shared Figma prototype from Home to Payment
            Summary, then used the same journey to define a target-user study.
            Expert findings and planned participant evidence are kept separate.
          </p>
        </div>

        <div className="evaluation-methods">
          <article className="evaluation-method-card">
            <p className="subsection-label light">Expert inspection</p>
            <h3>Heuristic Review</h3>
            <p className="evaluation-method-lede">
              A bounded walkthrough covered Home, Market, Search, Product
              Detail, Buy/Rent, Cart, and Payment Summary. Three issues were
              prioritised using Nielsen&apos;s heuristics and the course&apos;s
              0–4 severity scale.
            </p>
            <ol className="evaluation-detail-list">
              <li>
                <span>S3</span>
                <div>
                  <h4>Search behaves inconsistently.</h4>
                  <p>
                    The visible textbook result and recent-search chip did not
                    continue the flow, while a similar Market home card did.
                    Every equivalent entry point should lead somewhere
                    predictable.
                  </p>
                </div>
              </li>
              <li>
                <span>S3</span>
                <div>
                  <h4>Buy is selected by default.</h4>
                  <p>
                    A short-stay renter can continue with the wrong commitment
                    in one tap. Start with neither option selected and require
                    an explicit Buy or Rent choice.
                  </p>
                </div>
              </li>
              <li>
                <span>S2</span>
                <div>
                  <h4>The payment total hides the refundable hold.</h4>
                  <p>
                    Separate non-refundable cost, refundable deposit, and the
                    amount charged today so the real rental cost is clear.
                  </p>
                </div>
              </li>
            </ol>
          </article>

          <article className="evaluation-method-card">
            <p className="subsection-label light">Target-user validation</p>
            <h3>Usability Testing</h3>
            <p className="evaluation-method-lede">
              A pilot walkthrough confirmed the test endpoints and exposed one
              broken route. Formal moderated sessions will involve 5–10
              students who are new to NUS or staying for a short period.
            </p>
            <ol className="evaluation-detail-list">
              <li>
                <span>01</span>
                <div>
                  <h4>Find the right service.</h4>
                  <p>
                    From Home, find where to obtain a textbook from another
                    student. <em>Pilot: completable.</em>
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h4>Choose temporary access.</h4>
                  <p>
                    Find the Calculus II textbook, select a one-week rental, and
                    stop before payment. <em>Pilot: workaround required.</em>
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h4>Respond to a return reminder.</h4>
                  <p>
                    Find the approaching textbook return and choose the next
                    action. <em>Pilot: not yet measurable.</em>
                  </p>
                </div>
              </li>
            </ol>
            <p className="evaluation-note">
              We will record unassisted, assisted, or failed completion;
              critical errors, wrong turns, time, price/deposit comprehension,
              and 1–5 confidence. Participant results will be added only after
              the sessions are completed.
            </p>
          </article>
        </div>
      </section>

      <section className="final section" id="final">
        <div className="section-label">
          <span>07</span>
          <p>Final Prototype</p>
        </div>
        <div className="final-heading">
          <h2>
            Your campus,
            <br />
            <em>connected.</em>
          </h2>
          <p className="lead">
            The current high-fidelity direction pairs a low-friction entry
            experience with a single dashboard for five connected services,
            daily context, and an approachable AI companion.
          </p>
        </div>
        <div className="final-showcase">
          <div className="final-phone login-shot">
            <img src="/images/novago-login.png" alt="Final NovaGo login prototype" />
          </div>
          <a
            className="final-poster"
            href="https://www.figma.com/proto/3TRs3ZdFmmtym1RywfpS1R/NovaGo?node-id=7-462&p=f&t=KE70MKvdrNx5Zf2V-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A462"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/novago-poster.jpg"
              alt="NovaGo — help your campus life. Pay, Market, Commute, Academic Hub and Forum rising from a student's phone on campus, with Albot alongside."
            />
            <span className="final-poster-cta">
              Try the Figma prototype
              <span aria-hidden="true">↗</span>
            </span>
          </a>
          <div className="final-phone home-shot">
            <img src="/images/novago-home.png" alt="Final NovaGo home prototype" />
          </div>
        </div>
        <div className="final-details">
          <div>
            <h2>Arrive curious.<br />Leave confident.</h2>
          </div>
          <div>
            <p className="lead">
              <NovaGo /> brings the first week together—safely, simply, and
              gently.
            </p>
            <a className="button button-primary" href="#top">
              Back to the beginning <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
