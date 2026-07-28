import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNeighbours, getService, services, type Shot } from "../../services";
import { SiteFooter, SiteHeader } from "../../site-chrome";

type Params = { service: string };

export function generateStaticParams(): Params[] {
  return services.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const service = getService((await params).service);
  if (!service) return {};

  return {
    title: `${service.name} — NovaGo prototyping`,
    description: service.role,
  };
}

/** Renders the shots, or a labelled slot per expected screen while empty. */
function ShotGrid({ shots, kind }: { shots: Shot[]; kind: "Lo-fi" | "Hi-fi" }) {
  if (shots.length === 0) {
    return (
      <div className="shot-grid">
        {[0, 1, 2].map((index) => (
          <figure key={index}>
            <div className="proto-slot small">
              <span>{kind}</span>
            </div>
            <figcaption>Screen {index + 1}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="shot-grid">
      {shots.map((shot) => (
        <figure key={shot.src}>
          <img src={shot.src} alt={shot.caption} />
          <figcaption>{shot.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

const marketScreens = [
  {
    number: "01",
    flow: "Market home",
    title: "Browse what is available at a glance",
    screen: "Market home",
    lofi: "/images/prototype/market/market-home-lofi-simple.png",
    hifi: "/images/prototype/market/market-home-hifi.webp",
    logic:
      "The home page supports a quick first scan. Search, broad item groups, and current listings remain easy to spot so students can understand what is available before committing to a path.",
  },
  {
    number: "02",
    flow: "Search",
    title: "Reach a specific item quickly",
    screen: "Search results",
    lofi: "/images/prototype/market/search-lofi-simple.png",
    hifi: "/images/prototype/market/search-hifi.webp",
    logic:
      "When a student already knows what they need, search shortens the journey. Results keep the item, availability, and service type visible so the target can be recognised without opening every listing.",
  },
  {
    number: "03",
    flow: "Service choice",
    title: "Make Buy and Rent visibly different",
    screen: "Buy or Rent",
    lofi: "/images/prototype/market/buy-rent-lofi-simple.png",
    hifi: "/images/prototype/market/buy-rent-hifi.webp",
    logic:
      "Buy and Rent are presented as two clear actions rather than a small toggle. Buy leads to ownership and a one-time handover; Rent foregrounds duration and return expectations before the student proceeds.",
  },
  {
    number: "04",
    flow: "Rent closure",
    title: "Return through Message Centre",
    screen: "Message Centre",
    lofi: "/images/prototype/market/message-centre-lofi-simple.png",
    hifi: "/images/prototype/market/message-centre-hifi.webp",
    logic:
      "Rent remains active after pickup. A return reminder in Message Centre takes the student back to the rental and its final confirmation, completing the event instead of leaving it unresolved.",
  },
];

function MarketStory() {
  return (
    <>
      <section className="service-block market-origin">
        <h2>Why Market needed two paths</h2>
        <p className="lead">
          Students staying at NUS for a short period often need an item briefly,
          or only once. Buying everything would be unnecessary, so Rent emerged
          alongside Buy—not as a filter, but as a second task with its own
          operating logic.
        </p>
        <div className="market-paths">
          <article>
            <p className="subsection-label">Buy</p>
            <h3>A transaction that ends with ownership.</h3>
            <p>
              The student compares an item, checks the seller and handover
              details, then completes a one-time purchase.
            </p>
          </article>
          <article>
            <p className="subsection-label">Rent</p>
            <h3>A relationship that stays open until return.</h3>
            <p>
              The student must understand availability, duration, pickup, due
              date, and return status across a longer event.
            </p>
          </article>
        </div>
      </section>

      <section className="service-block market-evolution">
        <h2>Designing each page from lo-fi to hi-fi</h2>
        <p className="lead">
          We focused the visual evolution on four pages that explain the core
          journey: quick browsing, targeted search, the Buy or Rent decision,
          and the message that closes an active rental.
        </p>
        <div className="market-evolution-list">
          {marketScreens.map((screen) => (
            <article className="market-screen-step" key={screen.number}>
              <header className="market-screen-heading">
                <span>{screen.number}</span>
                <div>
                  <p className="subsection-label">{screen.flow} flow</p>
                  <h3>{screen.title}</h3>
                </div>
              </header>
              <div className="market-screen-pair">
                <figure>
                  {screen.lofi ? (
                    <img
                      className="market-screen-image"
                      src={screen.lofi}
                      alt={`${screen.screen} lo-fi prototype`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="proto-slot market-screen-slot">
                      <span>Lo-fi</span>
                    </div>
                  )}
                  <figcaption>Lo-fi · {screen.screen}</figcaption>
                </figure>
                <span className="market-evolution-arrow" aria-hidden="true">
                  →
                </span>
                <figure>
                  {screen.hifi ? (
                    <img
                      className="market-screen-image"
                      src={screen.hifi}
                      alt={`${screen.screen} hi-fi prototype`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="proto-slot market-screen-slot">
                      <span>Hi-fi</span>
                    </div>
                  )}
                  <figcaption>Hi-fi · {screen.screen}</figcaption>
                </figure>
              </div>
              <div className="market-screen-logic">
                <p className="subsection-label">Design logic</p>
                <p>{screen.logic}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const service = getService((await params).service);
  if (!service) notFound();

  const { previous, next } = getNeighbours(service.slug);

  return (
    <main className="service-page">
      <SiteHeader />

      <article className="service-body">
        <Link className="back-link" href="/#prototype">
          <span aria-hidden="true">←</span> Back to the case study
        </Link>

        <header className="service-head">
          <div className="service-title">
            <div className={`service-mark ${service.className}`}>
              <img src={service.icon} alt="" />
            </div>
            <h1>{service.name}</h1>
          </div>
          <p className="lead">{service.role}</p>
          <dl className="service-meta">
            <div>
              <dt>Grew out of</dt>
              <dd>{service.origin}</dd>
            </div>
            <div>
              <dt>Author</dt>
              <dd>{service.author}</dd>
            </div>
            <div>
              <dt>Part of</dt>
              <dd>One connected journey</dd>
            </div>
          </dl>
        </header>

        {service.slug === "market" ? (
          <MarketStory />
        ) : (
          <>
            <section className="service-block">
              <h2>Where it started</h2>
              <p className="lead">
                The wireframes that set the structure, before any visual design.
              </p>
              <ShotGrid shots={service.lofi} kind="Lo-fi" />
            </section>

            <section className="service-block">
              <h2>What changed, and why</h2>
              {service.decisions.length === 0 ? (
                <p className="service-todo">
                  Decisions to be written up — one entry per change that a
                  reader could disagree with.
                </p>
              ) : (
                <ol className="decision-list">
                  {service.decisions.map((decision, index) => (
                    <li key={decision.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>

            <section className="service-block">
              <h2>Where it landed</h2>
              <p className="lead">
                The high-fidelity screens as they appear in the final prototype.
              </p>
              <ShotGrid shots={service.hifi} kind="Hi-fi" />
            </section>

            <section className="service-block">
              <h2>The handoff</h2>
              <p className="lead">
                {service.handoff ||
                  "How this service passes the student on to the next step — to be written."}
              </p>
            </section>
          </>
        )}

        <nav className="service-nav" aria-label="Other services">
          <Link href={`/prototype/${previous.slug}`}>
            <span aria-hidden="true">←</span>
            <span>{previous.name}</span>
          </Link>
          <Link href={`/prototype/${next.slug}`}>
            <span>{next.name}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </article>

      <SiteFooter />
    </main>
  );
}
