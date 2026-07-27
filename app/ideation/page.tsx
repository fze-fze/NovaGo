import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../site-chrome";
import styles from "./ideation.module.css";

export const metadata: Metadata = {
  title: "Ideation — NovaGo case study",
  description:
    "How five separate team concepts converged into one connected campus companion organised around a newcomer's first-week tasks.",
};

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

const services = ["Academic Hub", "Payment", "Market", "Forum", "Commute"];

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
    <main>
      <SiteHeader />

      <section className={`section ${styles.opening}`}>
        <div className="section-label">
          <span>04</span>
          <p>Ideation</p>
        </div>
        <div className={styles.headingGrid}>
          <h1>
            Five starting points.
            <br />
            <em>One newcomer journey.</em>
          </h1>
          <p className="lead">
            Each team member brought a different view of early campus life. The
            ideation phase kept the strongest task from each proposal, then
            connected them around one first-week student journey.
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

        <p className="subsection-label">Concept convergence</p>
        <h2>What we kept from each original idea.</h2>
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

      <section className="section section-dark">
        <p className="subsection-label light">Synthesis move</p>
        <h2>From separate concepts to one connected system.</h2>
        {/* The hub sits above the row it feeds, so NovaGo reads as the thing
            the five services hang off rather than a sixth service. */}
        <div className={styles.systemMap}>
          <div className={styles.hub}>
            <p className={`wordmark ${styles.hubMark}`}>
              Nova<span>Go</span>
            </p>
            <small>Task-first campus companion</small>
          </div>
          <span className={styles.connector} aria-hidden="true" />
          <div className={styles.nodes}>
            {services.map((service) => (
              <div key={service}>{service}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <p className="subsection-label">Design principles</p>
        <h2>Rules for deciding what belongs in the product.</h2>
        <div className={`principles ${styles.principleGrid}`}>
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>

        <p className={`subsection-label ${styles.flowLabel}`}>
          Prototype direction
        </p>
        <h2>
          The prototype should design the handoffs, not just the home screen.
        </h2>
        <div className="flow-row">
          {flows.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className={styles.outcome}>
          <div>
            <p className="subsection-label">Ideation outcome</p>
            <h2>
              NovaGo became a connected service map organised around a
              newcomer’s first-week tasks.
            </h2>
          </div>
          <Link
            className={`button button-primary ${styles.outcomeCta}`}
            href="/#ideation"
          >
            Back to case study <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
