const services = [
  {
    icon: "▰",
    name: "Pay",
    subtitle: "Quick & secure",
    className: "blue",
    description:
      "Plain-language guidance for accepted payment methods, setup steps, and fallback options.",
  },
  {
    icon: "◈",
    name: "Market",
    subtitle: "Buy & rent",
    className: "violet",
    description:
      "A campus marketplace shaped around short stays, verified peers, and safer handovers.",
  },
  {
    icon: "▣",
    name: "Commute",
    subtitle: "Plan your ride",
    className: "mint",
    description:
      "Contextual routes, walking time, and timely departure guidance across campus.",
  },
  {
    icon: "◆",
    name: "Academic Hub",
    subtitle: "Resources & tools",
    className: "orange",
    description:
      "One place to understand tasks, terms, deadlines, and links to official systems.",
  },
  {
    icon: "▤",
    name: "Forum",
    subtitle: "Connect & discuss",
    className: "pink",
    description:
      "Low-pressure, task-based help with visible source and freshness cues.",
  },
];

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
    "Context, not co-location",
    "Current task, campus location, and stage of arrival decide what surfaces first.",
  ],
  [
    "02",
    "Task-first, not feature-first",
    "Organised around what a student needs to finish—not a cabinet of five apps.",
  ],
  [
    "03",
    "A layer, not a replacement",
    "Guidance and coordination on top of official systems, with the handoff made visible.",
  ],
];

const processSteps = [
  ["01", "Frame", "Turn five product ideas into assumptions to test."],
  ["02", "Connect", "Map each service to one newcomer journey."],
  ["03", "Prototype", "Make the cross-service handoffs tangible."],
  ["04", "Evaluate", "Test clarity, confidence, trust, and continuity."],
];

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
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="NovaGo home">
          Nova<span>Go</span>
        </a>
        <nav aria-label="Case study sections">
          <a href="#team">Team</a>
          <a href="#research">Research</a>
          <a href="#ideation">Ideation</a>
          <a className="nav-cta" href="#final">
            Final prototype
          </a>
        </nav>
      </header>

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
            NovaGo connects the essential moments of a newcomer&apos;s first
            weeks—from finding the next step to navigating campus, paying with
            confidence, getting everyday items, and asking for help.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#final">
              View final prototype <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#introduction">
              Explore the process <span aria-hidden="true">↓</span>
            </a>
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
                "M150 85 Q500 180 817 415",
                "M310 203 Q570 280 817 415",
                "M110 383 Q480 430 817 415",
                "M450 103 Q650 225 817 415",
                "M350 517 Q600 530 817 415",
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

        <div className="intro-claims">
          {introClaims.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="scope-note">
          <strong>Design boundary</strong>
          <p>
            NovaGo is a guidance and coordination layer. It connects to official
            systems instead of pretending to replace them.
          </p>
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
            NovaGo began as five independent concepts. Each member owned one
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
            From feature ideas to
            <br />
            questions worth testing.
          </h2>
          <p className="lead">
            We began with five team proposals. Instead of presenting product
            assumptions as user findings, we reframed them into three initial
            research themes and a traceable evidence plan.
          </p>
        </div>
        <div className="theme-grid">
          <article>
            <span className="theme-number">01</span>
            <div className="theme-icon blue">↗</div>
            <h3>Arrival & orientation</h3>
            <p>
              Can newcomers turn unfamiliar places, terms, and deadlines into
              a clear first-week action path?
            </p>
          </article>
          <article>
            <span className="theme-number">02</span>
            <div className="theme-icon violet">◎</div>
            <h3>Information & learning</h3>
            <p>
              How do students decide which information is current, credible,
              and relevant to the task at hand?
            </p>
          </article>
          <article>
            <span className="theme-number">03</span>
            <div className="theme-icon mint">◇</div>
            <h3>Trust & independence</h3>
            <p>
              What helps students ask for help and interact with peers without
              unnecessary uncertainty or social pressure?
            </p>
          </article>
        </div>
        <div className="research-chain">
          <p>Our evidence standard</p>
          <div className="chain">
            <span>Verbatim note</span><b>→</b><span>Theme</span><b>→</b>
            <span>User need</span><b>→</b><span>Design implication</span>
          </div>
          <small>
            Current status: hypotheses defined; primary participant research is
            the next evidence milestone.
          </small>
        </div>
      </section>

      <section className="ideation section" id="ideation">
        <div className="section-label">
          <span>04</span>
          <p>Ideation</p>
        </div>
        <div className="ideation-heading">
          <h2>
            Five starting points.
            <br />
            <em>One newcomer journey.</em>
          </h2>
          <p className="lead">
            Each team member brought a different view of early campus life. We
            kept the strongest contribution from each, then used the
            newcomer&apos;s journey as the organising logic.
          </p>
        </div>
        <div className="hmw">
          <span className="subsection-label">HOW MIGHT WE</span>
          <p className="lead">
            Help a student who is new to NUS understand and complete essential
            campus tasks without repeatedly searching across disconnected
            sources?
          </p>
        </div>
        <div className="principles">
          <article><span>01</span><h3>Synergy over quantity</h3><p>Every service should hand off to a meaningful next step.</p></article>
          <article><span>02</span><h3>Task-first navigation</h3><p>Organise around what students need to complete—not a folder of features.</p></article>
          <article><span>03</span><h3>Trust made visible</h3><p>Distinguish official information, guidance, and peer advice at a glance.</p></article>
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
              not just the home screen.
            </h2>
          </div>
          <p className="lead">
            The core prototype flow connects arrival context to a personalised
            dashboard, a relevant service, and a clear next step. That
            continuity is the product&apos;s central interaction idea.
          </p>
        </div>
        <div className="flow-row">
          {processSteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="prototype-stage">
          <div className="screen-pair">
            <div className="mini-phone back">
              <img src="/images/novago-login.png" alt="NovaGo entry screen" />
            </div>
            <div className="mini-phone front">
              <img src="/images/novago-home.png" alt="NovaGo dashboard screen" />
            </div>
          </div>
          <div className="visual-system">
            <p className="subsection-label">VISUAL SYSTEM</p>
            <h3>Calm enough to reassure. Bright enough to invite.</h3>
            <p>
              Deep navy creates clarity; luminous blue signals action; soft
              colour washes differentiate services without making the system
              feel administrative.
            </p>
            <div className="swatches" aria-label="NovaGo color palette">
              <span style={{ background: "#112c67" }} />
              <span style={{ background: "#2f8cff" }} />
              <span style={{ background: "#69d9ce" }} />
              <span style={{ background: "#a67cff" }} />
              <span style={{ background: "#f3a739" }} />
              <span style={{ background: "#f39acb" }} />
            </div>
            <ul>
              <li>Rounded, translucent service cards</li>
              <li>Supportive, plain-language prompts</li>
              <li>Friendly robot guide as a recurring companion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="evaluation section" id="evaluation">
        <div className="section-label light">
          <span>06</span>
          <p>Evaluation</p>
        </div>
        <div className="evaluation-grid">
          <div>
            <h2>Test whether “connected” actually feels simpler.</h2>
            <p className="lead">
              The next study should test task-first comprehension,
              cross-service continuity, and trust—not visual preference alone.
              This framework records the plan without inventing outcomes.
            </p>
          </div>
          <div className="evaluation-list">
            <article>
              <span>01</span>
              <div><h3>Find the next action</h3><p>Can a newcomer identify what matters now and recognise its official source?</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Move between services</h3><p>Does a route, payment scenario, or campus task lead naturally to the right next tool?</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Decide what to trust</h3><p>Are source, freshness, identity, and safety cues clear in Market and Forum moments?</p></div>
            </article>
          </div>
        </div>
        <div className="measure-strip">
          <span>Task completion</span>
          <span>Critical errors</span>
          <span>Wrong turns</span>
          <span>Time to next action</span>
          <span>Confidence</span>
          <span>Perceived trust</span>
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
          <div className="final-copy">
            <p className="subsection-label">THE CONNECTING LAYER</p>
            <h3>One profile. One campus context. One clear next step.</h3>
            <p>
              Academic Hub clarifies what to do; Commute gets students there;
              Pay reduces uncertainty at the point of action; Market supports
              short-term access; and Forum makes relevant help easier to find.
            </p>
            <div className="service-mini-grid">
              {services.map((service) => (
                <article key={service.name} className={service.className}>
                  <div>{service.icon}</div>
                  <span>{service.name}</span>
                  <small>{service.subtitle}</small>
                </article>
              ))}
            </div>
          </div>
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
              NovaGo brings the first week together—safely, simply, and gently.
            </p>
            <a className="button button-primary" href="#top">
              Back to the beginning <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          Nova<span>Go</span>
        </a>
        <p>Portfolio of NovaGo</p>
        <p>A well-designed super app</p>
      </footer>
    </main>
  );
}
