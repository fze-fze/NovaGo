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

const payScreens = [
  {
    number: "01",
    flow: "Payment home",
    title: "Start from balance, actions, and recent money movement",
    screen: "Payment Home",
    lofi: "/images/prototype/pay/payment-home-lofi.png",
    hifi: "/images/prototype/pay/payment-home-hifi.webp",
    logic:
      "The home screen acts as the payment hub rather than a menu of isolated tools. Balance, Pay Now, Accessing Funds, Currency Exchange, Budget Planner, and recent transactions are visible together so a student can decide what to do next.",
  },
  {
    number: "02",
    flow: "Currency exchange",
    title: "Expose the exchange step before the student pays",
    screen: "Currency Exchange",
    lofi: "/images/prototype/pay/currency-exchange-lofi.png",
    hifi: "/images/prototype/pay/currency-exchange-hifi.webp",
    logic:
      "Currency Exchange is treated as an optional but important pre-payment step. The design makes available currencies, converted value, and completion status visible so international students are not guessing about fees or usable balance.",
  },
  {
    number: "03",
    flow: "Checkout",
    title: "Branch by method, balance, and next action",
    screen: "Payment Summary",
    lofi: "/images/prototype/pay/payment-summary-lofi.png",
    hifi: "/images/prototype/pay/payment-summary-hifi.webp",
    logic:
      "The summary screen makes the decision point explicit: enough balance leads to confirmation, while low balance leads to top up. Wallet and card sit as separate methods because card payment may require extra verification.",
  },
  {
    number: "04",
    flow: "Success",
    title: "Close the transaction and update the budget",
    screen: "Payment Successful",
    lofi: "/images/prototype/pay/payment-success-lofi.png",
    hifi: "/images/prototype/pay/payment-success-hifi.webp",
    logic:
      "The success state confirms the amount, payment method, transaction ID, and budget update. This reduces the post-payment uncertainty of whether money was deducted and what changed afterwards.",
  },
];

const academicHubScreens = [
  {
    number: "01",
    flow: "Hub entry",
    title: "Bring five recurring academic tasks into one place",
    screen: "Academic Hub",
    lofi: "/images/prototype/academic-hub/academic-hub-dark.png",
    hifi: "/images/prototype/academic-hub/academic-hub-light.png",
    logic:
      "The hub-and-spoke structure stays consistent across both directions. Leave requests, tuition fees, assignments, study resources, and course planning remain visible as distinct entry points, while the hi-fi direction gives each service stronger colour coding and more generous spacing.",
  },
  {
    number: "02",
    flow: "Leave request",
    title: "Turn an administrative request into one guided form",
    screen: "Leave Application",
    lofi: "/images/prototype/academic-hub/leave-application-dark.png",
    hifi: "/images/prototype/academic-hub/leave-application-light.png",
    logic:
      "Leave Application keeps the request in one sequence: leave type, start and end dates, reason, optional supporting documents, submission, and cancellation. The hi-fi direction separates each step more clearly while preserving the same task order.",
  },
  {
    number: "03",
    flow: "Assignment tracking",
    title: "Keep deadlines, status, and submission actions together",
    screen: "Assignment Hub",
    lofi: "/images/prototype/academic-hub/assignment-hub-dark.png",
    hifi: "/images/prototype/academic-hub/assignment-hub-light.png",
    logic:
      "Assignment Hub lets students filter work by All, Pending, or Submitted, compare due dates, and open submission directly from unfinished items. Completed work keeps a visible submitted state without presenting another submit action.",
  },
  {
    number: "04",
    flow: "Fee overview",
    title: "Separate what is due from what is already paid",
    screen: "Tuition & Fees",
    lofi: "/images/prototype/academic-hub/tuition-fees-dark.png",
    hifi: "/images/prototype/academic-hub/tuition-fees-light.png",
    logic:
      "Tuition & Fees separates pending payments from paid history. Each outstanding item keeps its amount, due date, and Pay Now action visible, while the total pending balance of $4,630 provides a clear summary of what remains.",
  },
];

const commuteScreens = [
  {
    number: "01",
    flow: "Commute home",
    title: "Show the ways to travel before the destination is known",
    screen: "Campus Commute",
    lofi: "/images/prototype/commute/commute-home-lofi.png",
    hifi: "/images/prototype/commute/commute-home-hifi.png",
    logic:
      "Home keeps the four campus travel modes — Shuttle, Bike/Scooter, Walk, and Golf Cart/Taxi — visible next to the search field. Nearby services carry their walking time, so a student who does not yet know the campus can read distance before choosing anything.",
  },
  {
    number: "02",
    flow: "Destination",
    title: "Make campus names recognisable, not typed from memory",
    screen: "Search Location",
    lofi: "/images/prototype/commute/search-location-lofi.png",
    hifi: "/images/prototype/commute/search-location-hifi.png",
    logic:
      "Newcomers rarely know the official building names. Popular destinations and recent locations are listed above the keyboard so the destination can be picked by recognition, with free search kept for students who already know where they are going.",
  },
  {
    number: "03",
    flow: "Route choice",
    title: "Compare modes by cost and effort, with one recommended",
    screen: "How do you want to go?",
    lofi: "/images/prototype/commute/choose-route-lofi.png",
    hifi: "/images/prototype/commute/choose-route-hifi.png",
    logic:
      "Each mode states what it involves and what it costs — shuttle free, bike $1.50, walk free, golf cart or taxi $3.00 — and one option carries a Recommended badge. The lo-fi list treated the options as equal; the hi-fi direction keeps the comparison but removes the burden of deciding without guidance.",
  },
  {
    number: "04",
    flow: "Navigation",
    title: "Keep the next instruction and the arrival time together",
    screen: "Turn by turn",
    lofi: "/images/prototype/commute/turn-by-turn-lofi.png",
    hifi: "/images/prototype/commute/turn-by-turn-hifi.png",
    logic:
      "The active step sits at the top as distance plus direction, while the card below holds remaining time and the arrival window. Exit and Re-center stay reachable so a student who drifts off the path can recover without restarting the trip.",
  },
];

const forumScreens = [
  {
    number: "01",
    flow: "Find answers",
    title: "Search and filter before posting",
    screen: "Find Existing Answers",
    lofi: "/images/prototype/forum/01-filter-low-fi.png",
    hifi: "/images/prototype/forum/12-screen-v2.png",
    logic:
      "This flow combines feed filtering and keyword search into one entry point. New students can narrow repeated campus questions by topic before deciding whether they need to open a post or create a new one.",
  },
  {
    number: "02",
    flow: "Evaluate and reply",
    title: "Judge answer quality inside the post",
    screen: "Post Detail and Comments",
    lofi: "/images/prototype/forum/03-post-detail-low-fi.png",
    hifi: "/images/prototype/forum/02-screen-v2.png",
    logic:
      "Post detail brings the question, tags, comments, freshness, and engagement into one reading space. This helps students compare answers and decide whether to reply without losing the original context.",
  },
  {
    number: "03",
    flow: "Ask a question",
    title: "Make new posts complete and discoverable",
    screen: "Publish a New Question",
    lofi: "/images/prototype/forum/05-create-post-low-fi.png",
    hifi: "/images/prototype/forum/04-screen-v2.png",
    logic:
      "The create-post flow asks for a clear title, details, tags, optional media, and privacy choice. The goal is to make questions easier for others to understand, answer, and find later.",
  },
  {
    number: "04",
    flow: "Follow up",
    title: "Return to replies and personal posts",
    screen: "Notifications and My Posts",
    lofi: "/images/prototype/forum/06-notifications-low-fi.png",
    hifi: "/images/prototype/forum/05-screen-v2.png",
    logic:
      "Follow-up combines notifications with profile history. It keeps replies, mentions, and personal discussions recoverable after the student leaves the forum page.",
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

function PayStory() {
  return (
    <>
      <section className="service-block market-origin">
        <h2>Why Pay needed a complete flow</h2>
        <p className="lead">
          Payment is not just a final button. For new students, it includes
          balance confidence, currency readiness, method choice, verification,
          failure recovery, and the budget impact after money leaves the wallet.
        </p>
        <div className="market-paths">
          <article>
            <p className="subsection-label">Before payment</p>
            <h3>Prepare the wallet before checkout.</h3>
            <p>
              Students can top up, exchange currency, and check budget context
              before they commit to a transaction.
            </p>
          </article>
          <article>
            <p className="subsection-label">During and after</p>
            <h3>Recover from risk and close the loop.</h3>
            <p>
              Balance checks, card verification, success confirmation, failure
              recovery, and Budget Planner updates keep the process complete.
            </p>
          </article>
        </div>
      </section>

      <section className="service-block market-evolution">
        <h2>Designing each payment page from lo-fi to hi-fi</h2>
        <p className="lead">
          The Pay prototype is shown as an end-to-end task flow. It starts at
          Payment Home, branches through top up, exchange, QR scan, method
          choice and OTP, then ends with success or a retry path.
        </p>
        <div className="market-evolution-list">
          {payScreens.map((screen) => (
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
                  <img
                    className="market-screen-image"
                    src={screen.lofi}
                    alt={`${screen.screen} lo-fi prototype`}
                    loading="lazy"
                  />
                  <figcaption>Lo-fi · {screen.screen}</figcaption>
                </figure>
                <span className="market-evolution-arrow" aria-hidden="true">
                  →
                </span>
                <figure>
                  <img
                    className="market-screen-image"
                    src={screen.hifi}
                    alt={`${screen.screen} hi-fi prototype`}
                    loading="lazy"
                  />
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

function AcademicHubStory() {
  return (
    <>
      <section className="service-block market-origin">
        <h2>Why Academic Hub needed one entry point</h2>
        <p className="lead">
          Academic Hub brings five recurring tasks into one service directory:
          leave requests, tuition payments, assignment submission, study
          resources, and course planning. Each task then opens into a focused
          screen instead of competing on one dashboard.
        </p>
        <div className="market-paths">
          <article>
            <p className="subsection-label">Academic work</p>
            <h3>See what needs attention, then act.</h3>
            <p>
              Assignment status, deadlines, resources, and course planning
              remain separate tasks, but share one recognisable starting point.
            </p>
          </article>
          <article>
            <p className="subsection-label">Administrative tasks</p>
            <h3>Keep official actions structured and traceable.</h3>
            <p>
              Leave requests and tuition fees use dedicated flows so dates,
              documents, amounts, status, and the next action stay visible.
            </p>
          </article>
        </div>
      </section>

      <section className="service-block market-evolution">
        <h2>Designing each Academic Hub page from lo-fi to hi-fi</h2>
        <p className="lead">
          The same information architecture appears in both directions. Four
          representative screens show how the compact lo-fi structure becomes
          a lighter campus interface with stronger hierarchy, service colour,
          and status cues.
        </p>
        <div className="market-evolution-list">
          {academicHubScreens.map((screen) => (
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
                  <div className="academic-hub-image-frame">
                    <img
                      className="market-screen-image"
                      src={screen.lofi}
                      alt={`${screen.screen} lo-fi prototype`}
                      loading="lazy"
                    />
                  </div>
                  <figcaption>Lo-fi · {screen.screen}</figcaption>
                </figure>
                <span className="market-evolution-arrow" aria-hidden="true">
                  →
                </span>
                <figure>
                  <div className="academic-hub-image-frame">
                    <img
                      className="market-screen-image"
                      src={screen.hifi}
                      alt={`${screen.screen} hi-fi prototype`}
                      loading="lazy"
                    />
                  </div>
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

function CommuteStory() {
  return (
    <>
      <section className="service-block market-origin">
        <h2>Why Commute needed more than a map</h2>
        <p className="lead">
          A new student does not fail to reach a building because the map is
          missing. They fail because they do not recognise the name, cannot
          judge how long the walk takes, and do not know which campus transport
          is theirs to use. Commute answers those three questions before it
          starts navigating.
        </p>
        <div className="market-paths">
          <article>
            <p className="subsection-label">Before moving</p>
            <h3>Decide where, then decide how.</h3>
            <p>
              Recognisable destinations, walking times, and four travel modes
              with visible cost let a student plan the trip instead of guessing
              at it.
            </p>
          </article>
          <article>
            <p className="subsection-label">While moving</p>
            <h3>Stay oriented until arrival.</h3>
            <p>
              One instruction at a time, remaining minutes, and a way back to
              the route keep an unfamiliar campus readable on the way.
            </p>
          </article>
        </div>
      </section>

      <section className="service-block market-evolution">
        <h2>Designing each Commute page from lo-fi to hi-fi</h2>
        <p className="lead">
          Four screens carry the journey end to end: opening the service,
          choosing a destination, picking a way to travel, and following the
          route until arrival.
        </p>
        <div className="market-evolution-list">
          {commuteScreens.map((screen) => (
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
                  <img
                    className="market-screen-image"
                    src={screen.lofi}
                    alt={`${screen.screen} lo-fi prototype`}
                    loading="lazy"
                  />
                  <figcaption>Lo-fi · {screen.screen}</figcaption>
                </figure>
                <span className="market-evolution-arrow" aria-hidden="true">
                  →
                </span>
                <figure>
                  <img
                    className="market-screen-image"
                    src={screen.hifi}
                    alt={`${screen.screen} hi-fi prototype`}
                    loading="lazy"
                  />
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

function ForumStory() {
  return (
    <>
      <section className="service-block market-origin">
        <h2>Why Forum needed a trusted support pathway</h2>
        <p className="lead">
          Forum is not just a message board. For newcomers, the useful pathway
          is finding an existing answer, judging whether it is reliable, asking
          a complete question when needed, and returning when replies arrive.
        </p>
        <div className="market-paths">
          <article>
            <p className="subsection-label">Before posting</p>
            <h3>Search, filter, and compare first.</h3>
            <p>
              Students can narrow the feed, search repeated questions, and read
              answer cues before adding another post.
            </p>
          </article>
          <article>
            <p className="subsection-label">After asking</p>
            <h3>Keep the conversation recoverable.</h3>
            <p>
              Comments, notifications, and profile history help a student
              return to active threads instead of losing answers in a fast feed.
            </p>
          </article>
        </div>
      </section>

      <section className="service-block market-evolution">
        <h2>Designing each forum page from lo-fi to hi-fi</h2>
        <p className="lead">
          The Forum prototype is shown as four representative flows. They cover
          finding existing answers, judging a discussion, asking a new question,
          and following up after replies arrive.
        </p>
        <div className="market-evolution-list">
          {forumScreens.map((screen) => (
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
                  <img
                    className="market-screen-image"
                    src={screen.lofi}
                    alt={`${screen.screen} lo-fi prototype`}
                    loading="lazy"
                  />
                  <figcaption>Lo-fi - {screen.screen}</figcaption>
                </figure>
                <span className="market-evolution-arrow" aria-hidden="true">
                  &rarr;
                </span>
                <figure>
                  <img
                    className="market-screen-image"
                    src={screen.hifi}
                    alt={`${screen.screen} hi-fi prototype`}
                    loading="lazy"
                  />
                  <figcaption>Hi-fi - {screen.screen}</figcaption>
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
          <span aria-hidden="true">&larr;</span> Back to the case study
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

        {service.slug === "pay" ? (
          <PayStory />
        ) : service.slug === "market" ? (
          <MarketStory />
        ) : service.slug === "academic-hub" ? (
          <AcademicHubStory />
        ) : service.slug === "commute" ? (
          <CommuteStory />
        ) : service.slug === "forum" ? (
          <ForumStory />
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
                  Decisions to be written up - one entry per change that a
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
                  "How this service passes the student on to the next step - to be written."}
              </p>
            </section>
          </>
        )}

        <nav className="service-nav" aria-label="Other services">
          <Link href={`/prototype/${previous.slug}`}>
            <span aria-hidden="true">&larr;</span>
            <span>{previous.name}</span>
          </Link>
          <Link href={`/prototype/${next.slug}`}>
            <span>{next.name}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>
      </article>

      <SiteFooter />
    </main>
  );
}
