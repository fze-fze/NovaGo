import Link from "next/link";
import styles from "./define.module.css";

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

const needs = [
  ["Clarity", "Show the next action clearly instead of presenting a folder of features."],
  ["Confidence", "Make cost, source, status, and consequence visible before the student acts."],
  ["Continuity", "Carry context across services so students do not restart the same task repeatedly."],
];

const scope = [
  ["Academic Hub", "Course planner", "Leave application", "Deadline tracking"],
  ["Payment", "Wallet & top up", "Currency exchange", "QR pay & budget update"],
  ["Market", "Browse or rent", "Safe checkout", "Pickup & return"],
  ["Forum", "Search answers", "Ask anonymously", "Source labels"],
  ["Commute", "Compare routes", "Shuttle schedule", "Leave-by alert"],
];

export default function DefinePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">
          Nova<span>Go</span>
        </Link>
        <nav className={styles.nav} aria-label="Define page navigation">
          <Link href="/">Home</Link>
          <Link href="/ideation">Ideation</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>03 / Define</p>
        <div className={styles.heroGrid}>
          <h1>Define the real problem before adding more features.</h1>
          <p>
            NovaGo is not solving a lack of apps. It is solving the gap between
            disconnected campus services and the real tasks new students need
            to finish during their first weeks.
          </p>
        </div>
      </section>

      <section className={styles.darkPanel}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Research synthesis</p>
          <h2>Three signals shaped the product definition.</h2>
        </div>
        <div className={styles.signalGrid}>
          {researchSignals.map((signal) => (
            <article key={signal.number}>
              <span>{signal.number}</span>
              <h3>{signal.title}</h3>
              <p>{signal.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.problemSection}>
        <div>
          <p className={styles.kicker}>Problem statement</p>
          <h2>
            New students need a connected way to understand and complete
            essential campus tasks without repeatedly searching across
            disconnected sources.
          </h2>
        </div>
        <aside className={styles.problemCard}>
          <p>Design challenge</p>
          <h3>
            How might we help a student new to NUS move from uncertainty to a
            clear next action?
          </h3>
        </aside>
      </section>

      <section className={styles.needsSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>User needs</p>
          <h2>What the interface has to make visible.</h2>
        </div>
        <div className={styles.needGrid}>
          {needs.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.scopeSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Product scope</p>
          <h2>Five services, reduced to first-week core tasks.</h2>
        </div>
        <div className={styles.scopeTable}>
          {scope.map(([service, taskOne, taskTwo, taskThree]) => (
            <article key={service}>
              <h3>{service}</h3>
              <ul>
                <li>{taskOne}</li>
                <li>{taskTwo}</li>
                <li>{taskThree}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nextStep}>
        <div>
          <p className={styles.kicker}>Definition outcome</p>
          <h2>
            NovaGo should be a task-first campus companion, not a feature
            directory.
          </h2>
        </div>
        <Link className={styles.button} href="/ideation">
          Continue to ideation <span aria-hidden="true">↘</span>
        </Link>
      </section>
    </main>
  );
}
