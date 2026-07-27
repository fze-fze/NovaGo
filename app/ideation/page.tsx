import Link from "next/link";
import styles from "./ideation.module.css";

const concepts = [
  {
    name: "Settly",
    focus: "Arrival",
    keeper: "First-week action path",
    color: "blue",
  },
  {
    name: "EZPAY",
    focus: "Payment",
    keeper: "Wallet, exchange, and budget handoff",
    color: "violet",
  },
  {
    name: "BorrowNest",
    focus: "Access",
    keeper: "Safe buy, rent, pickup, and return",
    color: "mint",
  },
  {
    name: "NUS Nexus",
    focus: "Community",
    keeper: "Low-pressure help with visible sources",
    color: "orange",
  },
  {
    name: "UniFlow",
    focus: "Study",
    keeper: "Academic tasks and deadlines",
    color: "pink",
  },
] as const;

const principles = [
  {
    number: "01",
    title: "Synergy over quantity",
    copy: "Every service should hand off to a meaningful next step instead of becoming an isolated feature bucket.",
  },
  {
    number: "02",
    title: "Task-first navigation",
    copy: "Organise around what students need to complete, not around internal service categories.",
  },
  {
    number: "03",
    title: "Trust made visible",
    copy: "Distinguish official information, peer advice, AI guidance, cost, and status at a glance.",
  },
];

const flows = [
  ["Find", "Student starts with a real campus task, not a menu category."],
  ["Guide", "Albot and the dashboard explain the next action in plain language."],
  ["Act", "The relevant service opens with context already carried forward."],
  ["Handoff", "Completed actions update the next service, such as Budget Planner after payment."],
];

const conceptClassNames = {
  blue: styles.blue,
  violet: styles.violet,
  mint: styles.mint,
  orange: styles.orange,
  pink: styles.pink,
};

export default function IdeationPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">
          Nova<span>Go</span>
        </Link>
        <nav className={styles.nav} aria-label="Ideation page navigation">
          <Link href="/">Home</Link>
          <Link href="/define">Define</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>04 / Ideation</p>
        <div className={styles.heroGrid}>
          <h1>
            Five starting points.
            <br />
            <em>One newcomer journey.</em>
          </h1>
          <p>
            Each team member brought a different view of early campus life. The
            ideation phase kept the strongest task from each proposal, then
            connected them around one first-week student journey.
          </p>
        </div>
      </section>

      <section className={styles.hmw}>
        <span>HOW MIGHT WE</span>
        <p>
          Help a student who is new to NUS understand and complete essential
          campus tasks without repeatedly searching across disconnected sources?
        </p>
      </section>

      <section className={styles.conceptSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Concept convergence</p>
          <h2>What we kept from each original idea.</h2>
        </div>
        <div className={styles.conceptGrid}>
          {concepts.map((concept) => (
            <article
              key={concept.name}
              className={conceptClassNames[concept.color]}
            >
              <span>{concept.focus}</span>
              <h3>{concept.name}</h3>
              <p>{concept.keeper}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.darkPanel}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Synthesis move</p>
          <h2>From separate concepts to one connected system.</h2>
        </div>
        <div className={styles.systemDiagram}>
          <div className={styles.node}>Academic Hub</div>
          <div className={styles.node}>Payment</div>
          <div className={styles.centerNode}>
            Nova<span>Go</span>
            <small>Task-first campus companion</small>
          </div>
          <div className={styles.node}>Market</div>
          <div className={styles.node}>Forum</div>
          <div className={styles.node}>Commute</div>
        </div>
      </section>

      <section className={styles.principleSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Design principles</p>
          <h2>Rules for deciding what belongs in the product.</h2>
        </div>
        <div className={styles.principles}>
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.flowSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Prototype direction</p>
          <h2>The prototype should design the handoffs, not just the home screen.</h2>
        </div>
        <div className={styles.flowRow}>
          {flows.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nextStep}>
        <div>
          <p className={styles.kicker}>Ideation outcome</p>
          <h2>
            NovaGo became a connected service map organised around a newcomer’s
            first-week tasks.
          </h2>
        </div>
        <Link className={styles.button} href="/">
          Back to case study <span aria-hidden="true">↑</span>
        </Link>
      </section>
    </main>
  );
}
