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
              <dt>Stage</dt>
              <dd>Lo-fi to hi-fi</dd>
            </div>
            <div>
              <dt>Part of</dt>
              <dd>One connected journey</dd>
            </div>
          </dl>
        </header>

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
              Decisions to be written up — one entry per change that a reader
              could disagree with.
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
