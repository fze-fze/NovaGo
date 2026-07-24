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

const processSteps = [
  ["01", "Frame", "Turn five product ideas into assumptions to test."],
  ["02", "Connect", "Map each service to one newcomer journey."],
  ["03", "Prototype", "Make the cross-service handoffs tangible."],
  ["04", "Evaluate", "Test clarity, confidence, trust, and continuity."],
];

// To add a photo, drop the file in `public/images/team/` and set `photo`,
// e.g. photo: "/images/team/settly.jpg". Empty keeps the colour placeholder.
const teamMembers = [
  { name: "Member name", concept: "Settly", focus: "Arrival", className: "blue", photo: "" },
  { name: "Member name", concept: "EZPAY", focus: "Payment", className: "violet", photo: "" },
  { name: "Member name", concept: "BorrowNest", focus: "Access", className: "mint", photo: "" },
  { name: "Member name", concept: "NUS Nexus", focus: "Community", className: "orange", photo: "" },
  { name: "Member name", concept: "UniFlow", focus: "Study", className: "pink", photo: "" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="NovaGo home">
          Nova<span>Go</span>
        </a>
        <nav aria-label="Case study sections">
          <a href="#research">Research</a>
          <a href="#ideation">Ideation</a>
          <a href="#prototype">Prototype</a>
          <a href="#team">Design Team</a>
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
              <dd>Connected service ecosystem</dd>
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
        <div className="intro-heading">
          <h2>
            Starting university in a new country is not{" "}
            <em>a single task.</em>
          </h2>
        </div>
        <div className="intro-grid">
          <div className="problem-card">
            <p className="subsection-label">THE FRAGMENTED EXPERIENCE</p>
            <p className="large-quote lead">
              “A deadline, an unfamiliar building, a payment question, a
              temporary item, and a ‘basic’ question can all happen on the same
              day.”
            </p>
            <div className="fragment-pills">
              <span>University pages</span>
              <span>Group chats</span>
              <span>Maps</span>
              <span>Payment tools</span>
              <span>Marketplaces</span>
            </div>
          </div>
          <div className="solution-copy">
            <p>
              Our team identified these moments as one connected onboarding
              journey, not five unrelated features. NovaGo is a focused
              super-app concept that helps newcomers move from arrival to
              greater independence.
            </p>
            <p>
              Its value is not simply placing services on one screen. It uses
              the student&apos;s current task, campus context, and stage of
              arrival to surface the right information—and the next action.
            </p>
            <div className="scope-note">
              <strong>Design boundary</strong>
              <p>
                NovaGo is a guidance and coordination layer. It connects to
                official systems instead of pretending to replace them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="section-label light">
          <span>02</span>
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
          <span>03</span>
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
        <div className="journey-line" aria-label="Five concepts integrated into NovaGo">
          <div>
            <span>Settly</span>
            <small>Arrival</small>
          </div>
          <b>+</b>
          <div>
            <span>EZPAY</span>
            <small>Payment</small>
          </div>
          <b>+</b>
          <div>
            <span>BorrowNest</span>
            <small>Access</small>
          </div>
          <b>+</b>
          <div>
            <span>NUS Nexus</span>
            <small>Community</small>
          </div>
          <b>+</b>
          <div>
            <span>UniFlow</span>
            <small>Study</small>
          </div>
          <b className="equals">→</b>
          <div className="nova-result">
            <span>NovaGo</span>
            <small>One journey</small>
          </div>
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
          <span>04</span>
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
          <span>05</span>
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
          <span>06</span>
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

      <section className="team section" id="team">
        <div className="section-label">
          <span>07</span>
          <p>Design Team</p>
        </div>
        <div className="team-heading">
          <h2>
            Five perspectives,
            <br />
            <em>one product.</em>
          </h2>
          <p className="lead">
            NovaGo began as five independent concepts. Each member owned one
            early campus need and carried it into the connected experience.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.concept}>
              <div className={`avatar ${member.className}`}>
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : null}
              </div>
              <h3>{member.name}</h3>
              <p>{member.focus}</p>
              <span>{member.concept}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">
          Nova<span>Go</span>
        </a>
        <p>NUS campus super-app · UX portfolio</p>
        <p>Designed for a softer start to campus life.</p>
      </footer>
    </main>
  );
}
